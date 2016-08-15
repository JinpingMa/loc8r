(function () {

	angular
    .module('wifidotApp')
    .service('wifidotData', wifidotData);

  wifidotData.$inject = ['$http'];
  function wifidotData ($http) {
    var locationByCoords = function(lat, lng){
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20000000000');
    };

    var locationById = function (locationid) {
      return $http.get('/api/locations/' + locationid);
    };
    return {
      locationByCoords : locationByCoords,
      locationById : locationById
    };
  }
  
})();
