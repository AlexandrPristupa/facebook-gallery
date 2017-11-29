export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('upload', {
        parent: 'main',
        url: '/upload',
        component: 'upload'
      });
}
