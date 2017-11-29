export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('home', {
        parent: 'main',
        url: '/',
        component: 'home'
      });
}
