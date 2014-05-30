'use strict';

angular
  .module('cards4GearApp', [
    'ngRoute',
    'controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/card1', {
        templateUrl: 'views/card1.html',
        controller: 'Card1Ctrl'
      })
      .when('/card2', {
        templateUrl: 'views/card2.html',
        controller: 'Card2Ctrl'
      })
      .otherwise({
        redirectTo: '/card1'
      });
  });

