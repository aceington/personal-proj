app.service('vehicleService', function($http) {

  this.getAllVehicles = function() {
    console.log("at srvc");
    var promise = $http({
      method: 'GET',
      url: "/vehicles/all"
    })
    return promise.then(function(response) {
      return response.data;
    })
  }

  this.imprezaSpin = [
    "pictures/vehicleView/impreza/spin/D4S_000.jpg",
    "pictures/vehicleView/impreza/spin/D4S_001.jpg",
    "pictures/vehicleView/impreza/spin/D4S_002.jpg",
    "pictures/vehicleView/impreza/spin/D4S_003.jpg",
    "pictures/vehicleView/impreza/spin/D4S_004.jpg",
    "pictures/vehicleView/impreza/spin/D4S_005.jpg",
    "pictures/vehicleView/impreza/spin/D4S_006.jpg",
    "pictures/vehicleView/impreza/spin/D4S_007.jpg",
    "pictures/vehicleView/impreza/spin/D4S_008.jpg",
    "pictures/vehicleView/impreza/spin/D4S_009.jpg",
    "pictures/vehicleView/impreza/spin/D4S_010.jpg",
    "pictures/vehicleView/impreza/spin/D4S_011.jpg",
    "pictures/vehicleView/impreza/spin/D4S_012.jpg",
    "pictures/vehicleView/impreza/spin/D4S_013.jpg",
    "pictures/vehicleView/impreza/spin/D4S_014.jpg",
    "pictures/vehicleView/impreza/spin/D4S_015.jpg",
    "pictures/vehicleView/impreza/spin/D4S_016.jpg",
    "pictures/vehicleView/impreza/spin/D4S_017.jpg",
    "pictures/vehicleView/impreza/spin/D4S_018.jpg",
    "pictures/vehicleView/impreza/spin/D4S_019.jpg",
    "pictures/vehicleView/impreza/spin/D4S_020.jpg",
    "pictures/vehicleView/impreza/spin/D4S_021.jpg",
    "pictures/vehicleView/impreza/spin/D4S_022.jpg",
    "pictures/vehicleView/impreza/spin/D4S_023.jpg",
    "pictures/vehicleView/impreza/spin/D4S_024.jpg",
    "pictures/vehicleView/impreza/spin/D4S_025.jpg",
    "pictures/vehicleView/impreza/spin/D4S_026.jpg",
    "pictures/vehicleView/impreza/spin/D4S_027.jpg",
    "pictures/vehicleView/impreza/spin/D4S_028.jpg",
    "pictures/vehicleView/impreza/spin/D4S_029.jpg",
    "pictures/vehicleView/impreza/spin/D4S_030.jpg",
    "pictures/vehicleView/impreza/spin/D4S_031.jpg",
    "pictures/vehicleView/impreza/spin/D4S_032.jpg",
    "pictures/vehicleView/impreza/spin/D4S_033.jpg",
    "pictures/vehicleView/impreza/spin/D4S_034.jpg",
    "pictures/vehicleView/impreza/spin/D4S_035.jpg"
  ];

  this.wrxSpin = [
    "pictures/vehicleView/wrx/spin/K1X_000.jpg",
    "pictures/vehicleView/wrx/spin/K1X_001.jpg",
    "pictures/vehicleView/wrx/spin/K1X_002.jpg",
    "pictures/vehicleView/wrx/spin/K1X_003.jpg",
    "pictures/vehicleView/wrx/spin/K1X_004.jpg",
    "pictures/vehicleView/wrx/spin/K1X_005.jpg",
    "pictures/vehicleView/wrx/spin/K1X_006.jpg",
    "pictures/vehicleView/wrx/spin/K1X_007.jpg",
    "pictures/vehicleView/wrx/spin/K1X_008.jpg",
    "pictures/vehicleView/wrx/spin/K1X_009.jpg",
    "pictures/vehicleView/wrx/spin/K1X_010.jpg",
    "pictures/vehicleView/wrx/spin/K1X_011.jpg",
    "pictures/vehicleView/wrx/spin/K1X_012.jpg",
    "pictures/vehicleView/wrx/spin/K1X_013.jpg",
    "pictures/vehicleView/wrx/spin/K1X_014.jpg",
    "pictures/vehicleView/wrx/spin/K1X_015.jpg",
    "pictures/vehicleView/wrx/spin/K1X_016.jpg",
    "pictures/vehicleView/wrx/spin/K1X_017.jpg",
    "pictures/vehicleView/wrx/spin/K1X_018.jpg",
    "pictures/vehicleView/wrx/spin/K1X_019.jpg",
    "pictures/vehicleView/wrx/spin/K1X_020.jpg",
    "pictures/vehicleView/wrx/spin/K1X_021.jpg",
    "pictures/vehicleView/wrx/spin/K1X_022.jpg",
    "pictures/vehicleView/wrx/spin/K1X_023.jpg",
    "pictures/vehicleView/wrx/spin/K1X_024.jpg",
    "pictures/vehicleView/wrx/spin/K1X_025.jpg",
    "pictures/vehicleView/wrx/spin/K1X_026.jpg",
    "pictures/vehicleView/wrx/spin/K1X_027.jpg",
    "pictures/vehicleView/wrx/spin/K1X_028.jpg",
    "pictures/vehicleView/wrx/spin/K1X_029.jpg",
    "pictures/vehicleView/wrx/spin/K1X_030.jpg",
    "pictures/vehicleView/wrx/spin/K1X_031.jpg",
    "pictures/vehicleView/wrx/spin/K1X_032.jpg",
    "pictures/vehicleView/wrx/spin/K1X_033.jpg",
    "pictures/vehicleView/wrx/spin/K1X_034.jpg",
    "pictures/vehicleView/wrx/spin/K1X_035.jpg"
  ];

  this.legacySpin = [
    "pictures/vehicleView/legacy/spin/K3X_000.jpg",
    "pictures/vehicleView/legacy/spin/K3X_001.jpg",
    "pictures/vehicleView/legacy/spin/K3X_002.jpg",
    "pictures/vehicleView/legacy/spin/K3X_003.jpg",
    "pictures/vehicleView/legacy/spin/K3X_004.jpg",
    "pictures/vehicleView/legacy/spin/K3X_005.jpg",
    "pictures/vehicleView/legacy/spin/K3X_006.jpg",
    "pictures/vehicleView/legacy/spin/K3X_007.jpg",
    "pictures/vehicleView/legacy/spin/K3X_008.jpg",
    "pictures/vehicleView/legacy/spin/K3X_009.jpg",
    "pictures/vehicleView/legacy/spin/K3X_010.jpg",
    "pictures/vehicleView/legacy/spin/K3X_011.jpg",
    "pictures/vehicleView/legacy/spin/K3X_012.jpg",
    "pictures/vehicleView/legacy/spin/K3X_013.jpg",
    "pictures/vehicleView/legacy/spin/K3X_014.jpg",
    "pictures/vehicleView/legacy/spin/K3X_015.jpg",
    "pictures/vehicleView/legacy/spin/K3X_016.jpg",
    "pictures/vehicleView/legacy/spin/K3X_017.jpg",
    "pictures/vehicleView/legacy/spin/K3X_018.jpg",
    "pictures/vehicleView/legacy/spin/K3X_019.jpg",
    "pictures/vehicleView/legacy/spin/K3X_020.jpg",
    "pictures/vehicleView/legacy/spin/K3X_021.jpg",
    "pictures/vehicleView/legacy/spin/K3X_022.jpg",
    "pictures/vehicleView/legacy/spin/K3X_023.jpg",
    "pictures/vehicleView/legacy/spin/K3X_024.jpg",
    "pictures/vehicleView/legacy/spin/K3X_025.jpg",
    "pictures/vehicleView/legacy/spin/K3X_026.jpg",
    "pictures/vehicleView/legacy/spin/K3X_027.jpg",
    "pictures/vehicleView/legacy/spin/K3X_028.jpg",
    "pictures/vehicleView/legacy/spin/K3X_029.jpg",
    "pictures/vehicleView/legacy/spin/K3X_030.jpg",
    "pictures/vehicleView/legacy/spin/K3X_031.jpg",
    "pictures/vehicleView/legacy/spin/K3X_032.jpg",
    "pictures/vehicleView/legacy/spin/K3X_033.jpg",
    "pictures/vehicleView/legacy/spin/K3X_034.jpg",
    "pictures/vehicleView/legacy/spin/K3X_035.jpg"
  ];

  var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var key = '&appid=c99beafdfe31e4cdd65c078c5af94300';

  this.getLocation = function() {
    var promise = $http({
      method: 'GET',
      url: 'http://ip-api.com/json'
    });
    return promise.then(function(location) {
      return location.data.city;
    })
  };

  this.getWeather = function(location) {
    var promise = $http({
      method: 'GET',
      url: baseUrl + location + key
    });
    return promise.then(function(results) {
      return results.data;
    })
  };
})
