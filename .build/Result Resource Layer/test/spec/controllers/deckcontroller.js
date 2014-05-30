'use strict';

describe('Controller: DeckcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('cards4GearApp'));

  var DeckcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeckcontrollerCtrl = $controller('DeckcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
