'use strict';
const angular = require('angular');
import LoginController from './login.controller';

export default angular.module('mechanica2017App.login', [])
  .controller('LoginController', LoginController)
  .name;
