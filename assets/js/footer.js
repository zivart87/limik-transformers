(function () {
  fetch('/footer.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      var el = document.getElementById('site-footer');
      if (el) el.outerHTML = html;

      // Запускаем видео при попадании в viewport, замораживаем на последнем кадре
      var video = document.getElementById('footer-video');
      if (!video) return;

      var played = false;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !played) {
            played = true;
            video.play();
            observer.disconnect();
          }
        });
      }, { threshold: 0.25 });

      observer.observe(video);
    });
})();
