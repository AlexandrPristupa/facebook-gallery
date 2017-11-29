export function httpConfig($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push(Interceptor);
}

function Interceptor($q, $cookies, $state) {
  'ngInject';

  return {
    request: function (config) {
      if (config.url.search(/graph.facebook.com/) + 1) {
        config.params = config.params || {};
        config.params['access-token'] = $cookies.get('_auth');
      }
      return config;
    },
    requestError: function (rejection) {
      return $q.reject(rejection);
    },
    response: function (response) {
      return response;
    },
    responseError: function (rejection) {
      if (!(rejection.config.url.search(/graph.facebook.com/) + 1)) {
        return false;
      }

      if (rejection.data && 190 === rejection.data.error.code) {
        $cookies.put('_auth', '');
        $state.go('home');
      }

      return $q.reject(rejection);
    }
  };
}