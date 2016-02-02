/**
 * Created by rahulverma on 2/2/16.
 */

'use strict'

function ishopRoute($urlRouterProvider, $locationProvider) {
  $urlRouterProvider
    .otherwise('/');

  $locationProvider.html5Mode(true);
};

app.config(['$urlRouterProvider', '$locationProvider', ishopRoute]);

