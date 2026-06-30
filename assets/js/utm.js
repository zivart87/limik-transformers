(function () {
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  var params = new URLSearchParams(window.location.search);

  KEYS.forEach(function (k) {
    if (params.get(k)) sessionStorage.setItem('limik_' + k, params.get(k));
  });

  window.getUtmPayload = function () {
    var result = { pageUrl: window.location.href };
    KEYS.forEach(function (k) {
      var val = params.get(k) || sessionStorage.getItem('limik_' + k) || '';
      if (val) result[k] = val;
    });
    return result;
  };
})();
