# TECI II · IES Jiménez de Quesada

Material didáctico de **Tecnología e Ingeniería II** (2.º Bachillerato) para la **PEvAU Andalucía 2025-26**.

> **Online**: https://teci2-iesjdq.netlify.app/

## 📂 Estructura del proyecto

```
teci2-ies-jdq/
├── index.html              ← Página principal
├── favicon.svg             ← Favicon institucional
├── robots.txt
├── sitemap.xml
│
├── teoria/                 ← Apuntes por bloques (12 archivos)
│   ├── bloque_A.html       ← Proyectos I+D+i
│   ├── bloque_B.html       ← Materiales y fabricación
│   ├── bloque_C1.html      ← Estructuras
│   ├── bloque_C2.html      ← Máquinas térmicas
│   ├── bloque_C31.html     ← Neumática
│   ├── bloque_C32.html     ← Hidráulica
│   ├── bloque_D1.html      ← Corriente alterna
│   ├── bloque_D2.html      ← Electrónica digital
│   ├── bloque_E.html       ← Sistemas informáticos emergentes
│   ├── bloque_F.html       ← Sistemas automáticos
│   ├── bloque_G.html       ← Tecnología sostenible
│   └── repaso_cc.html      ← Repaso de corriente continua
│
├── ejercicios/             ← Ejercicios resueltos (7 archivos)
│   ├── ej_B.html · ej_C1.html · ej_C2.html · ej_C3.html
│   ├── ej_D1.html · ej_D2.html · ej_F.html
│
├── examenes/
│   ├── 2024/               ← PAU oficial 2024 (titular, reserva, suplente)
│   ├── 2025/               ← PAU oficial 2025 (titular, suplente1, suplente2)
│   ├── banco_modelos/      ← Banco de 8 modelos (A–H) en PDF
│   └── tipo_2025_26/       ← Modelos elaborados (oficiales + ponencia)
│
├── ponencia_resuelta/      ← Ponencia 2025-26 resuelta por bloques
│
├── apoyo/                  ← Material de apoyo
│   ├── formulario.html     ← Formulario completo
│   ├── glosario.html       ← Glosario de fórmulas (con buscador)
│   ├── calculadoras.html   ← Calculadoras interactivas
│   ├── fasores_ca.html     ← Simulador de fasores y ondas CA
│   ├── factores_conversion.html
│   ├── letras_griegas.html
│   ├── unidades_conversiones.html
│   └── bloque_F/           ← Recursos profundos de Bloque F
│       ├── reguladores_pid.html
│       ├── estabilidad_error.html
│       ├── presentacion_sensores.html
│       ├── apartados_2y3_introduccion_SCLC.html
│       ├── mini_examen.html
│       ├── guion_clase_reguladores.html
│       └── Animacion_Reg_*.html (P, I, D, PI, PD, PID)
│
├── trabajos/               ← Trabajos integradores y retos
│   ├── marina_bay_sands.html
│   ├── tres_gargantas.html
│   ├── kuka_robot.html
│   ├── latido_al_gigante.html
│   └── lamborghini_huracan.html
│
├── img/                    ← Imágenes generales
│   └── extracted/          ← Imágenes extraídas de HTMLs (auto-generadas)
│
├── assets/
│   ├── css/teci-common.css ← CSS común
│   └── js/teci-common.js   ← JS común (mini-tests, soluciones, etc.)
│
├── documentacion/          ← Documentación interna
└── _soluciones/            ← Material privado (no publicado)
```

## 🏗️ Estructura de cada bloque de teoría

Cada `bloque_X.html` sigue una plantilla común:

1. **Cabecera IES Jiménez de Quesada** + nav transversal
2. **Sidebar** con apartados del bloque
3. **Hub de recursos** (en bloques con recursos interactivos)
4. **Apartados numerados** (1, 2, 3…)
5. **Mini-test de autoevaluación** (5 preguntas tipo PAU)
6. **Decálogo PAU** (10 puntos clave)

## 🎨 Convenciones de estilo

- **Fuentes**: Barlow + Barlow Condensed + JetBrains Mono (para ecuaciones)
- **Paleta**: Azul institucional `#1B4F8A` + naranja `#D4700A` + verde `#2E7D32` + rojo `#C0321E`
- **Variables CSS**: `--az`, `--az2`, `--bg`, `--tx`, `--bd`, `--green`, `--orange`, `--red` (ver `assets/css/teci-common.css`)

## 🧪 Mini-tests

Todos los bloques de teoría incluyen un mini-test al final:

- 5 preguntas tipo PAU
- Una respuesta correcta marcada en verde, las demás en rojo al pulsar
- Feedback inmediato debajo de cada pregunta

## 📋 Banco de exámenes

- **PAU oficiales** 2024 y 2025 (titular, reserva, suplente)
- **8 modelos elaborados** (A–H) siguiendo la estructura de la Ponencia 2025-26
- **2 simulacros completos** (`tipo_1A`, `tipo_1B`) con cobertura complementaria

## 🔧 Desarrollo

Sitio estático: solo HTML, CSS y JS vanilla. Se publica vía Netlify.

### Cambiar/mantener contenido

- **Editar un bloque**: abrir `teoria/bloque_X.html`
- **Añadir un ejercicio**: abrir `ejercicios/ej_X.html` y añadir nueva `<section class="seccion">`
- **Añadir un examen**: meter PDF en `examenes/banco_modelos/` y enlazar desde `index.html`

### CSS común

Se ha extraído a `assets/css/teci-common.css` para próximas iteraciones — los archivos individuales mantienen aún su CSS inline por compatibilidad histórica, pero las nuevas páginas pueden referenciarlo:

```html
<link rel="stylesheet" href="../assets/css/teci-common.css">
```

## 📅 Curso 2025-26

Última auditoría: **mayo 2026**.
Material alineado con las **Orientaciones de la Ponencia de Tecnología e Ingeniería II 2025-26** (Comisión Estatal y Distrito Único Andaluz).

## 👤 Autor

**Manuel Alonso Herrera**
IES Jiménez de Quesada · Santa Fe (Granada)

## 📜 Licencia

Material didáctico de uso educativo. Las imágenes y referencias se utilizan con fines pedagógicos.
