import template from './upload.html';
import controller from './upload.controller';
import './upload.scss';

let uploadComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default uploadComponent;
