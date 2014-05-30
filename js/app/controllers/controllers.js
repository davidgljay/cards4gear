'use strict';


var app = angular.module('controllers', []);
app.controller('deckCtrl', function ($scope) {

	$scope.deck = [
    'card1',
    'card2'
    ];

    $scope.index = 0;

    function switchCard(args) {
    	window.location= 'index.html#/' + args.switchTo;
    	$scope.$broadcast('loadCard', args);
    	$scope.index = $scope.deck.indexOf[args.switchTo];
    };

    $scope.$on('switchCard', function(event, args) {
    	switchCard(args);
    });

    $scope.prev = function () {
    	console.log('loading previous')
    	var prevCard = $scope.index == 0 ? $scope.deck[-1] : $scope.deck[$scope.index - 1];
    	switchCard({ switchTo : prevcard });
    };

    $scope.next = function() {
    	console.log('loading next')
    	var nextCard = $scope.index == $scope.deck.length-1 ? $scope.deck[0] : $scope.deck[$scope.index + 1];
    	switchCard ({ switchTo : nextCard });
    };





  });

app.controller('Card1Ctrl', function ($scope) {
    $scope.name='card1';

    $scope.next = function() {
    	console.log('Got click');
    	$scope.$emit('switchCard', {switchTo: 'card2'});
    }
  });

app.controller('Card2Ctrl', function ($scope) {
    $scope.name='card2';
    $scope.next = function() {
    	$scope.$emit('switchCard', {switchTo: 'card1'});
    }
  });
