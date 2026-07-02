(function () {
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  var params = new URLSearchParams(window.location.search);

  KEYS.forEach(function (k) {
    if (params.get(k)) sessionStorage.setItem('limik_' + k, params.get(k));
  });

  function getGaClientIdFromDataLayer() {
    var dl = window.dataLayer || [];
    for (var i = dl.length - 1; i >= 0; i--) {
      var entry = dl[i];
      if (entry && entry.gtagApiResult && entry.gtagApiResult.client_id) {
        return entry.gtagApiResult.client_id;
      }
    }
    return '';
  }

  function getGaClientIdFromCookie() {
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
    var gaClientId = getGaClientIdFromDataLayer() || getGaClientIdFromCookie();
    if (gaClientId) result.ga_client_id = gaClientId;
    return result;
  };
})();
