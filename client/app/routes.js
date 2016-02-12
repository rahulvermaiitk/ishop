/**
 * Created by rahulverma on 2/2/16.
 */

'use strict'

function ishopRoute($stateProvider,$urlRouterProvider, $locationProvider) {
 /* $urlRouterProvider
    .otherwise('/');*/
  $urlRouterProvider.otherwise('/home');

 /* $locationProvider.html5Mode(true);*/

  $stateProvider.state('home',{
    'url': '/home',
    'templateUrl': 'app/pages/home/home.html',
    'controller': 'homeCtrl as hc'
  });


};

app.config(['$stateProvider','$urlRouterProvider', '$locationProvider', ishopRoute]);

