(function () {
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  var params = new URLSearchParams(window.location.search);

  KEYS.forEach(function (k) {
    if (params.get(k)) sessionStorage.setItem('limik_' + k, params.get(k));
  });

  function getGaClientId() {
    var match = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
    if (!match) return '';
    var parts = match[1].split('.');
    if (parts.length < 4) return '';
    return parts.slice(-2).join('.');
  }

  window.getUtmPayload = function () {
    var result = { pageUrl: window.location.href };
    KEYS.forEach(function (k) {
      var val = params.get(k) || sessionStorage.getItem('limik_' + k) || '';
      if (val) result[k] = val;
    });
    var gaClientId = getGaClientId();
    if (gaClientId) result.ga_client_id = gaClientId;
    return result;
  };
})();
