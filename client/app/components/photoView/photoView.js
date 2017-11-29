import angular from 'angular';
import uiRouter from 'angular-ui-router';
import photoViewComponent from './photoView.component';
import { routerConfig } from './photoView.router';

let photoViewModule = angular
    .module('photoView', [
  uiRouter
])

    .component('photoView', photoViewComponent)

    .config(routerConfig)

    .name;

export default photoViewModule;
