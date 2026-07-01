(function () {
  fetch('/footer.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      var el = document.getElementById('site-footer');
      if (el) el.outerHTML = html;

      // Даём браузеру время вставить DOM перед поиском элемента
      requestAnimationFrame(function () {
        var video = document.getElementById('footer-video');
        if (!video) return;

        var played = false;

        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !played) {
              played = true;
              observer.disconnect();
              video.addEventListener('timeupdate', function () {
                if (video.currentTime >= 7) {
                  video.pause();
                }
              });
              video.play().catch(function () {});
            }
          });
        }, { threshold: 0.1 });

        observer.observe(video);
      });
    });
})();
