import template from './albumView.html';
import controller from './albumView.controller';
import './albumView.scss';

let albumViewComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default albumViewComponent;
