export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('albumView', {
        parent: 'main',
        url: '/album/:id',
        component: 'albumView'
      });
}
