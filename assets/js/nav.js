(function () {
  function run() {
    var placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;

    var heroSelector = placeholder.getAttribute('data-hero') || null;

    fetch('/nav.html')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        placeholder.outerHTML = html;
        initNav(heroSelector);
      });

    function initNav(heroSelector) {
      var nav    = document.getElementById('nav');
      var burger = document.getElementById('nav-burger');
      var mobile = document.getElementById('nav-mobile');

      if (burger && mobile) {
        burger.addEventListener('click', function () {
          mobile.classList.toggle('open');
        });
      }

      if (nav && heroSelector && document.querySelector(heroSelector)) {
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

      if (nav) nav.classList.remove('nav--hidden');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
