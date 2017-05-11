app.controller('vehicleCtrl', function($location, $anchorScroll, $scope, $stateParams, vehicleService) {

  $scope.imprezaSpin = vehicleService.imprezaSpin;
  $scope.wrxSpin = vehicleService.wrxSpin;
  $scope.legacySpin = vehicleService.legacySpin;
  $scope.test = 'mpg data';
  $scope.$watchCollection('$stateParams', function() {
    $location.hash('top');
    $anchorScroll();
  });

  $(function() {
    $('.spritespinImpreza').spritespin({
      source: $scope.imprezaSpin,
      width: 692,
      height: 392,
      sense: 1,
      //  animate: false
    });
  });

  $(function() {
    $('.spritespinWrx').spritespin({
      source: $scope.wrxSpin,
      width: 692,
      height: 392,
      sense: 1,
      //  animate: false
    });
  });

  $(function() {
    $('.spritespinLegacy').spritespin({
      source: $scope.legacySpin,
      width: 692,
      height: 392,
      sense: 1,
      //  animate: false
    });
  });

  $scope.getAllVehicles = function() {
    var promise = vehicleService.getAllVehicles();
    return promise.then(function(response) {
      $scope.vehicles = response;
      console.log(response);
    })
  }();

  $scope.getLocation = function() {
    return vehicleService.getLocation().then(function(location) {
      vehicleService.getWeather(location).then(function(results) {
        $scope.weather = results
        $scope.temp = (results.main.temp * 9 / 5 - 459.67).toFixed(2);
        console.log(results);
      })
    })
  };
})
