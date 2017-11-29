import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import { routerConfig } from './home.router';

let homeModule = angular
    .module('home', [
      uiRouter
    ])

    .config(routerConfig)

    .component('home', homeComponent)

    .name;

export default homeModule;
