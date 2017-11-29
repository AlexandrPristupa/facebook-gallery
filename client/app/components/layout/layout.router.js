import template2 from './layout-home.html';
import template1 from './layout.html';

export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('layout', {
        views: {
          '': {
            template: template1
          },
          'home': {
            template: template2
          }
        }
      });
}
