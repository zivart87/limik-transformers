(function () {
  function loadWhyBlock() {
    var placeholder = document.getElementById('why-block-placeholder');
    if (!placeholder) return;
    fetch('/why-block.html')
      .then(function (res) { return res.text(); })
      .then(function (html) {
        html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var block = doc.body.firstElementChild;
        if (!block) return;
        placeholder.replaceWith(block);
      })
      .catch(function () {});
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWhyBlock);
  } else {
    loadWhyBlock();
  }
})();
