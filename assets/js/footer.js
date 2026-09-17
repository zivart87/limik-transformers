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

  // Динамический подъем чата над мобильной плашкой (.pt-mobile-cta / #mdcMobileCta)
  function adjustChatWidget() {
    var cw = document.querySelector('chat-widget');
    if (!cw || !cw.shadowRoot) return;

    var bar = document.querySelector('.pt-mobile-cta.is-visible, #mdcMobileCta.is-visible');
    var isMobile = window.innerWidth <= 768;
    var styleEl = cw.shadowRoot.getElementById('limik-chat-pos');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'limik-chat-pos';
      cw.shadowRoot.appendChild(styleEl);
    }

    if (isMobile && bar) {
      var h = bar.getBoundingClientRect().height || 74;
      styleEl.textContent =
        '.chat-widget-button, .chip-container, .chat-widget-wrapper, button[aria-label*="chat" i], div[class*="button"] {' +
        '  bottom: ' + (h + 16) + 'px !important;' +
        '  transition: bottom 0.35s ease !important;' +
        '}';
    } else {
      styleEl.textContent =
        '.chat-widget-button, .chip-container, .chat-widget-wrapper, button[aria-label*="chat" i], div[class*="button"] {' +
        '  bottom: 20px !important;' +
        '  transition: bottom 0.35s ease !important;' +
        '}';
    }
  }

  window.addEventListener('scroll', adjustChatWidget, { passive: true });
  window.addEventListener('resize', adjustChatWidget);
  setInterval(adjustChatWidget, 500);
})();
