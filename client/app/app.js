import angular from 'angular';
import ngCookies from 'angular-cookies';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
import satellizer from 'satellizer';

import { config } from './app.config';
import { httpConfig } from './http.config';
import { runBlock } from './app.run';
import { UserModelService } from './services/userModel.service';
import UserModel from '../app/models/user.model';
import _ from 'lodash';
import angularMoment from 'angular-moment';
import ngFileUpload from 'ng-file-upload';

// Styles
import 'angular-material/angular-material.css';
import 'material-icons/css/material-icons.css';

// SERVICES //

angular.module('app', [
  uiRouter,
  ngMaterial,
  ngResource,
  satellizer,
  ngCookies,
  ngFileUpload,
  angularMoment,

  Components,
])
       .config(config)
       .config(httpConfig)

       .run(runBlock)

       .service('UserModelService', UserModelService)

       .factory('UserModel', UserModel)

       .component('app', AppComponent);
