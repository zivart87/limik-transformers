(function () {
  function init() {
    var btn = document.getElementById('backToTop');
    var trigger = document.querySelector('[data-btt-trigger]');
    if (!btn || !trigger) return;

    var check = function () {
      var passed = trigger.getBoundingClientRect().top < 0;
      btn.classList.toggle('is-visible', passed);
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();

    btn.addEventListener('click', function () {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
