# Migración de Netlify a Cloudflare Pages

Guía paso a paso para migrar el sitio TECI II al hosting de Cloudflare Pages, con ancho de banda ilimitado en el plan gratuito.

## Por qué migramos

Netlify ha pausado el sitio por superar el límite de 100 GB/mes de tráfico (plan gratuito). Cloudflare Pages no tiene ese límite en su plan gratuito y sirve el sitio igual de bien (incluso mejor, su CDN está más extendida).

## Antes de empezar · qué hay que tener listo

- Cuenta de Cloudflare (gratuita). Si no la tienes: https://dash.cloudflare.com/sign-up
- El repo del sitio en GitHub al que ya conectabas Netlify (debería estar en tu cuenta `malonso72`).
- Los cambios locales que hayamos hecho en esta sesión empujados al repo (`git push`). Importante: incluir los nuevos `_redirects`, `_headers` y la versión optimizada de `fachadaiesjdq.jpg`.

## Pasos

### 1 · Empujar los cambios locales al repo de GitHub

Antes de tocar Cloudflare, asegúrate de que GitHub tiene la última versión:

```bash
git add _redirects _headers img/fachadaiesjdq.jpg index.html
git rm img/fachadaiesjdq.png
git rm -r examenes/tipo_2025_26/
git rm "apoyo/bloque_F/img/ChatGPT Image 22 abr 2026, "*.png
git add -u  # captura otras modificaciones (sitemap, README, banco_modelos)
git commit -m "Preparar migración a Cloudflare Pages: _redirects, _headers, optimización de imágenes y limpieza de simulacros"
git push
```

### 2 · Conectar el repo a Cloudflare Pages

Entra en https://dash.cloudflare.com → menú lateral **Workers & Pages** → pestaña **Pages** → botón **Create application** → pestaña **Connect to Git**.

La primera vez te pedirá autorizar acceso a tu GitHub. Concédele permiso al repo `teci2-iesjdq` (puedes elegir “sólo este repo”).

Selecciona el repo `teci2-iesjdq` y pulsa **Begin setup**.

### 3 · Configurar el build

En la pantalla de configuración:

| Campo | Valor |
|---|---|
| **Project name** | `teci2-iesjdq` (o el que prefieras; aparecerá en `<nombre>.pages.dev`) |
| **Production branch** | `main` (o la rama que uses; déjalo como esté) |
| **Framework preset** | `None` |
| **Build command** | (déjalo vacío) |
| **Build output directory** | `/` |
| **Root directory** | (déjalo vacío) |

Pulsa **Save and Deploy**. El primer deploy tarda ~30 segundos.

### 4 · Verificar el despliegue

Cuando termine, Cloudflare te dará una URL `https://teci2-iesjdq.pages.dev`. Ábrela y comprueba:

- La portada carga con la fachada del IES.
- Los enlaces de teoría, ejercicios y exámenes funcionan.
- Las páginas de apoyo y trabajos cargan.
- Los PDFs se abren.

Si algo falla, revísalo en los logs de Cloudflare → tu proyecto → pestaña **Deployments** → clic en el último deploy.

### 5 · Apuntar el dominio (sólo si tienes dominio propio)

Si usabas el dominio gratuito `teci2-iesjdq.netlify.app`, **ahora cambias a `teci2-iesjdq.pages.dev`** (gratis, sin más). Avisa a tus alumnos y actualiza el README.

Si tienes dominio propio (tipo `teci2.tudominio.es`):

1. En Cloudflare Pages → tu proyecto → pestaña **Custom domains** → **Set up a custom domain**.
2. Introduce el dominio.
3. Cloudflare te pedirá apuntar un registro CNAME desde tu proveedor de DNS hacia `teci2-iesjdq.pages.dev`.
4. Tarda unos minutos en propagarse y se activa SSL automáticamente (gratis).

### 6 · Pausar Netlify (opcional)

Una vez Cloudflare esté funcionando, puedes dejar Netlify pausado o eliminar el proyecto desde su panel. No tiene coste mantenerlo si está pausado.

## Ventajas inmediatas tras la migración

- **Ancho de banda ilimitado** en plan gratis (Netlify daba 100 GB/mes).
- **CDN global más rápida** (Cloudflare tiene 300+ PoPs frente a los ~20 de Netlify).
- **Caché agresiva ya configurada** en el `_headers` que añadimos: imágenes y assets durante 1 año, HTML 1 hora con revalidación. Eso reduce el tráfico de los alumnos que vuelven varias veces.
- **Pretty URLs** funcionando (`teoria/bloque_a` sin `.html`) gracias al `_redirects`.

## Cómo seguir trabajando

Igual que con Netlify: cada `git push` a `main` dispara un deploy automático en Cloudflare Pages. El flujo no cambia, sólo el host.

## Backup de seguridad

- `/tmp/backup_simulacros/` contiene la copia de la carpeta `tipo_2025_26` eliminada.
- `/tmp/backup_imagenes_originales/` contiene las imágenes originales (fachada PNG y las 5 ChatGPT del bloque F) por si hay que revertir.
