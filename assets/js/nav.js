(function () {
  function run() {
    var nav    = document.getElementById('nav');
    var burger = document.getElementById('nav-burger');
    var mobile = document.getElementById('nav-mobile');

    if (!nav) return;

    // Бургер-меню
    if (burger && mobile) {
      burger.addEventListener('click', function () {
        mobile.classList.toggle('open');
      });
    }

    // Прозрачность над hero
    var heroSelector = nav.getAttribute('data-hero');
    if (heroSelector && document.querySelector(heroSelector)) {
      var THRESHOLD = 80;
      var lastY = window.scrollY;

      function updateNav() {
        var y = window.scrollY;
        if (y < THRESHOLD) {
          nav.classList.add('nav--transparent');
          nav.classList.remove('nav--strip-hidden');
        } else {
          nav.classList.remove('nav--transparent');
          if (y > lastY && y > 60) {
            nav.classList.add('nav--strip-hidden');
          } else {
            nav.classList.remove('nav--strip-hidden');
          }
        }
        lastY = y;
      }

      updateNav();
      window.addEventListener('scroll', updateNav, { passive: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
