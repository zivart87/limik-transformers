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

  // LeadConnector Chat Widget (GoHighLevel)
  if (!document.querySelector('script[data-widget-id="6a6a5260d8d3c072c3757110"]')) {
    var chatScript = document.createElement('script');
    chatScript.src = "https://widgets.leadconnectorhq.com/loader.js";
    chatScript.setAttribute('data-resources-url', "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    chatScript.setAttribute('data-widget-id', "6a6a5260d8d3c072c3757110");
    chatScript.setAttribute('data-source', "WEB_USER");
    document.body.appendChild(chatScript);
  }
})();
