export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('dashboard', {
        parent: 'main',
        url: '/dashboard',
        component: 'dashboard'
      });
}
