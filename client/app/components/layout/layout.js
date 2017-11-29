import angular from 'angular';
import uiRouter from 'angular-ui-router';
import layoutComponent from './layout.component';
import { routerConfig } from './layout.router';

let layoutModule = angular
    .module('layout', [
  uiRouter
])

    .component('layout', layoutComponent)

    .config(routerConfig)

    .name;

export default layoutModule;
