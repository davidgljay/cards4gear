'use strict';

describe('Controller: Card2Ctrl', function () {

  // load the controller's module
  beforeEach(module('cards4GearApp'));

  var Card2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Card2Ctrl = $controller('Card2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
