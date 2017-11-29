import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';
import { routerConfig } from './main.router';

let mainModule = angular
    .module('main', [
  uiRouter
])

    .config(routerConfig)

    .component('main', mainComponent)

    .name;

export default mainModule;
