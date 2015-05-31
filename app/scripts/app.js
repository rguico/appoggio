'use strict';

/**
 * @ngdoc overview
 * @name appoggioApp
 * @description
 * # appoggioApp
 *
 * Main module of the application.
 */
angular
  .module('appoggioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'angularSoap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/testSoap', {
        templateUrl: 'views/apiSetupBar.html',
        controller: 'ApiBarController',
        controllerAs: 'apiBarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
