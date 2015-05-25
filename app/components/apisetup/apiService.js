(function () {
'use strict';

var apiService = function ($q) {
  var api = {};
  var self = this;

  return {
    setApi: setApi,
    getApi: getApi
  };

  //////////////////

  function setApi(apiConf) {
    self.api = apiConf;
  }

  function getApi() {
    return self.api;
  }

};

apiService.$inject = ['$q'];

angular
  .module('appoggioApp')
  .factory('apiService', apiService);

}());
