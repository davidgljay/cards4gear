'use strict';

angular
  .module('cards4GearApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/card1', {
        templateUrl: 'views/card1.html',
        controller: 'Card1Ctrl'
      })
      .when('/card2', {
        templateUrl: 'views/card2.html',
        controller: 'Card2Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
