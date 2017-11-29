import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uploadComponent from './upload.component';
import { routerConfig } from './upload.router';

let uploadModule = angular
    .module('upload', [
  uiRouter
])

    .config(routerConfig)

    .component('upload', uploadComponent)

    .name;

export default uploadModule;
