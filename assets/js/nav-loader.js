(function () {

  function initNav() {
    var nav    = document.getElementById('nav');
    var burger = document.getElementById('nav-burger');
    var mobile = document.getElementById('nav-mobile');

    if (!nav) return;

    // Подсветка активного пункта верхней полосы
    var path = window.location.pathname;
    document.querySelectorAll('.nav-top-inner a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && href !== '/' && path.startsWith(href)) a.classList.add('active');
    });

    // Dropdown-триггеры — только hover, не клик
    document.querySelectorAll('.nav-dropdown-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function (e) { e.preventDefault(); });
    });

    // Мобильное меню
    if (burger && mobile) {
      var overlay  = document.getElementById('nav-mobile-overlay');
      var closeBtn = document.getElementById('nav-mobile-close');

      function blockTouch(e) {
        // Дозволяємо скрол всередині панелі меню, блокуємо на сторінці
        if (!mobile.contains(e.target)) e.preventDefault();
      }

      function openMenu() {
        mobile.classList.add('open');
        burger.classList.add('is-open');
        nav.classList.add('menu-open');
        if (overlay) overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.addEventListener('touchmove', blockTouch, { passive: false });
      }
      function closeMenu() {
        mobile.classList.remove('open');
        burger.classList.remove('is-open');
        nav.classList.remove('menu-open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.removeEventListener('touchmove', blockTouch);
      }

      burger.addEventListener('click', function () {
        mobile.classList.contains('open') ? closeMenu() : openMenu();
      });
      if (closeBtn) closeBtn.addEventListener('click', closeMenu);
      if (overlay)  overlay.addEventListener('click', closeMenu);

      // Аккордеон — раскрытие подпунктов по тапу
      mobile.querySelectorAll('.nav-mobile-group .nav-mobile-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          var group = link.closest('.nav-mobile-group');
          group.classList.toggle('is-open');
        });
      });
    }

    // Прозрачность / скролл
    var heroSelector = document.body.getAttribute('data-hero');
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
          if (y > lastY && y > 60) nav.classList.add('nav--strip-hidden');
          else nav.classList.remove('nav--strip-hidden');
        }
        lastY = y;
      }
      updateNav();
      window.addEventListener('scroll', updateNav, { passive: true });
    } else {
      nav.classList.remove('nav--transparent');
      var lastY2 = window.scrollY;
      window.addEventListener('scroll', function () {
        var y = window.scrollY;
        if (y > lastY2 && y > 60) nav.classList.add('nav--strip-hidden');
        else nav.classList.remove('nav--strip-hidden');
        lastY2 = y;
      }, { passive: true });
    }
  }

  function loadNav() {
    var placeholder = document.getElementById('nav-placeholder');

    if (!placeholder) {
      // Nav уже в DOM (inline) — просто инициализируем
      initNav();
      return;
    }

    fetch('/nav.html')
      .then(function (res) { return res.text(); })
      .then(function (html) {
        // Strip live-server injected scripts (they break SVG parsing)
        html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var navEl = doc.getElementById('nav');
        if (!navEl) return;
        placeholder.replaceWith(navEl);
        initNav();
      })
      .catch(function () {
        if (placeholder) placeholder.remove();
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNav);
  } else {
    loadNav();
  }

})();
