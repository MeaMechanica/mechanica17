'use strict';
const angular = require('angular');
import SettingsController from './settings.controller';

export default angular.module('mechanica2017App.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
