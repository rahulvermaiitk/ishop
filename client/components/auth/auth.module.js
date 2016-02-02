'use strict';

angular.module('ishopApp.auth', [
  'ishopApp.constants',
  'ishopApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
