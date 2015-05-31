(function() {
  'use strict';

  function ApiBarController(apiSetupService) {
    var vm = this;
    activate();

    function activate() {

    }

    vm.testSoap = function testSoap() {
      apiSetupService.testSoap();
    }
  }

  ApiBarController.$inject = ['apiSetupService']

  angular
    .module('appoggioApp')
    .controller('ApiBarController', ApiBarController);
}());
