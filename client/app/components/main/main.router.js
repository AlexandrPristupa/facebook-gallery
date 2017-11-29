export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('main', {
        parent: 'layout',
        component: 'main',
      });
}
