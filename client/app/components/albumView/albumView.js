import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumViewComponent from './albumView.component';
import { routerConfig } from './albumView.router';

let albumViewModule = angular
    .module('albumView', [
  uiRouter
])

    .config(routerConfig)

    .component('albumView', albumViewComponent)

    .name;

export default albumViewModule;
