import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tabsMenuComponent from './tabsMenu.component';

let tabsMenuModule = angular
    .module('tabsMenu', [
  uiRouter
])

    .component('tabsMenu', tabsMenuComponent)

    .name;

export default tabsMenuModule;
