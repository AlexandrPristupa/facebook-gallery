import template from './tabsMenu.html';
import controller from './tabsMenu.controller';
import './tabsMenu.scss';

let tabsMenuComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default tabsMenuComponent;
