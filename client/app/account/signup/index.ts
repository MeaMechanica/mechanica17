'use strict';
const angular = require('angular');
import SignupController from './signup.controller';

export default angular.module('mechanica2017App.signup', [])
    .controller('SignupController', SignupController)
    .name;
