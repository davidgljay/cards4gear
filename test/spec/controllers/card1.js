'use strict';

describe('Controller: Card1Ctrl', function () {

  // load the controller's module
  beforeEach(module('cards4GearApp'));

  var Card1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Card1Ctrl = $controller('Card1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
