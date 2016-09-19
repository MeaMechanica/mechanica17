'use strict';
const angular = require('angular');

export default angular.module('mechanica2017App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
