/* ═══════════════════════════════════════════════════════════════
   TECI II · IES Jiménez de Quesada · JS común
   ═══════════════════════════════════════════════════════════════ */

(function(){
  'use strict';

  // 1. Mini-test interactivo
  function initMiniTest(){
    document.querySelectorAll('.test-q').forEach(function(q){
      var correct = q.dataset.answer;
      q.querySelectorAll('.test-opt').forEach(function(btn){
        btn.addEventListener('click', function(){
          if(q.classList.contains('answered')) return;
          q.classList.add('answered');
          q.querySelectorAll('.test-opt').forEach(function(b){
            if(b.dataset.opt === correct) b.classList.add('correct');
            else if(b === btn) b.classList.add('wrong');
            b.disabled = true;
          });
        });
      });
    });
  }

  // 2. Soluciones colapsables
  function initSolutionsCollapse(){
    document.addEventListener('click', function(e){
      if(e.target.classList && e.target.classList.contains('sol-btn')){
        e.target.classList.toggle('open');
        if(e.target.nextElementSibling){
          e.target.nextElementSibling.classList.toggle('show');
        }
      }
    });
  }

  // 3. MathJax (si está disponible)
  function initMathJax(){
    if(typeof MathJax !== 'undefined' && MathJax.typeset){
      MathJax.typeset();
    }
  }

  // 4. Scroll suave a anclas con offset por sticky header
  function initSmoothScroll(){
    var container = document.getElementById('ct') || document;
    document.querySelectorAll('a[href^="#"]').forEach(function(link){
      link.addEventListener('click', function(ev){
        var href = this.getAttribute('href');
        if(!href || href === '#') return;
        var id = href.slice(1);
        var target = document.getElementById(id);
        if(!target) return;
      });
    });
  }

  // Inicialización
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      initMiniTest();
      initSolutionsCollapse();
      initMathJax();
      initSmoothScroll();
    });
  } else {
    initMiniTest();
    initSolutionsCollapse();
    initMathJax();
    initSmoothScroll();
  }
})();
