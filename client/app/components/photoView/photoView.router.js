export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('photoView', {
        parent: 'main',
        url: '/photo/:id',
        component: 'photoView'
      });
}
