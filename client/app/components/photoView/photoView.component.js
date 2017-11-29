import template from './photoView.html';
import controller from './photoView.controller';
import './photoView.scss';

let photoViewComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default photoViewComponent;
