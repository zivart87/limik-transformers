(function () {
  fetch('/footer.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      var el = document.getElementById('site-footer');
      if (el) el.outerHTML = html;
    });
})();
