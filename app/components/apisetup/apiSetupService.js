(function () {
'use strict';

var apiSetupService = function ($q, $soap, $log) {
  var api = {
    url: 'http://www.webservicex.net/WeatherForecast.asmx'
  };
  var self = this;

  return {
    setApi: setApi,
    getApi: getApi,
    testSoap: testSoap
  };

  //////////////////

  function setApi(apiConf) {
    self.api = apiConf;
  }

  function getApi() {
    return self.api;
  }

  function testSoap() {
    $soap.post(api.url, 'GetWeatherByZipCode', { ZipCode: 60188 })
      .then(function (data) {
        $log.debug(data);
      })
      .catch(function (err) {
        $log.log(err);
      });
  }

};

apiSetupService.$inject = ['$q', '$soap', '$log'];

angular
  .module('appoggioApp')
  .factory('apiSetupService', apiSetupService);

}());
