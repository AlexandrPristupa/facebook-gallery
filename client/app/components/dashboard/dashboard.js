import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import { routerConfig } from './dashboard.router';

let dashboardModule = angular
    .module('dashboard', [
      uiRouter
    ])

    .config(routerConfig)

    .component('dashboard', dashboardComponent)

    .name;

export default dashboardModule;
