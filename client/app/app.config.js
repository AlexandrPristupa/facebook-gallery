export function config($urlRouterProvider, $locationProvider, $authProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true).hashPrefix('!');

  // Satellizer config
  let configFacebook = {
    clientId: '347683279037267',
    responseType: 'token',
    scope: 'email, publish_actions',
    scopeDelimiter: ',',
    display: 'popup'
  };

  $authProvider.facebook(configFacebook);
}
