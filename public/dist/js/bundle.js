'use strict';

var app = angular.module('subaru', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/home');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  }).state('impreza', {
    url: '/vehicle/impreza',
    templateUrl: 'views/impreza.html',
    controller: 'vehicleCtrl'
  }).state('wrx', {
    url: '/vehicle/wrx',
    templateUrl: 'views/wrx.html',
    controller: 'vehicleCtrl'
  }).state('legacy', {
    url: '/vehicle/legacy',
    templateUrl: 'views/legacy.html',
    controller: 'vehicleCtrl'
  }).state('newOutback', {
    url: '/vehicle/2018-outback',
    templateUrl: 'views/2018Outback.html',
    controller: 'vehicleCtrl'
  }).state('brz', {
    url: '/vehicle/brz',
    templateUrl: 'views/brz.html',
    controller: 'vehicleCtrl'
  }).state('forester', {
    url: '/vehicle/forester',
    templateUrl: 'views/forester.html',
    controller: 'vehicleCtrl'
  }).state('outback', {
    url: '/vehicle/outback',
    templateUrl: 'views/outback.html',
    controller: 'vehicleCtrl'
  }).state('crosstrek', {
    url: '/vehicle/crosstrek',
    templateUrl: 'views/crosstrek.html',
    controller: 'vehicleCtrl'
  });
});
'use strict';

$(document).ready(function () {

  $('body').fadeIn();

  $(".dropdown-button").dropdown();

  $('.carousel').carousel();

  var amountScrolled = 500;

  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  });

  $('a.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    return false;
  });
});
'use strict';

app.controller('vehicleCtrl', function ($location, $anchorScroll, $scope, $stateParams, vehicleService) {

  $scope.imprezaSpin = vehicleService.imprezaSpin;
  $scope.wrxSpin = vehicleService.wrxSpin;
  $scope.legacySpin = vehicleService.legacySpin;
  $scope.brzSpin = vehicleService.brzSpin;
  $scope.foresterSpin = vehicleService.foresterSpin;
  $scope.crosstrekSpin = vehicleService.crosstrekSpin;
  $scope.outbackSpin = vehicleService.outbackSpin;

  $scope.$watchCollection('$stateParams', function () {
    $location.hash('top');
    $anchorScroll();
  });

  $(function () {
    $('.spritespinImpreza').spritespin({
      source: $scope.imprezaSpin,
      width: 692,
      height: 392,
      sense: 1,
      animate: false
    });
  });

  $(function () {
    $('.spritespinWrx').spritespin({
      source: $scope.wrxSpin,
      width: 692,
      height: 392,
      sense: 1,
      animate: false
    });
  });

  $(function () {
    $('.spritespinLegacy').spritespin({
      source: $scope.legacySpin,
      width: 692,
      height: 392,
      sense: 1,
      animate: false
    });
  });

  $(function () {
    $('.spritespinBrz').spritespin({
      source: $scope.brzSpin,
      width: 692,
      height: 392,
      sense: 1,
      animate: false
    });
  });

  $(function () {
    $('.spritespinForester').spritespin({
      source: $scope.foresterSpin,
      width: 692,
      height: 392,
      sense: 1,
      animate: false
    });
  });

  $(function () {
    $('.spritespinCrosstrek').spritespin({
      source: $scope.crosstrekSpin,
      width: 692,
      height: 392,
      sense: 1,
      animate: false
    });
  });

  $(function () {
    $('.spritespinOutback').spritespin({
      source: $scope.outbackSpin,
      width: 692,
      height: 392,
      sense: 1,
      animate: false
    });
  });

  $scope.getAllVehicles = function () {
    var promise = vehicleService.getAllVehicles();
    return promise.then(function (response) {
      $scope.vehicles = response;
      console.log(response);
    });
  }();

  $scope.getLocation = function () {
    return vehicleService.getLocation().then(function (location) {
      vehicleService.getWeather(location).then(function (results) {
        $scope.weather = results;
        $scope.temp = (results.main.temp * 9 / 5 - 459.67).toFixed(2);
        console.log(results);
      });
    });
  };
});
'use strict';

app.service('vehicleService', function ($http) {

  this.getAllVehicles = function () {
    console.log("at srvc");
    var promise = $http({
      method: 'GET',
      url: "/vehicles/all"
    });
    return promise.then(function (response) {
      return response.data;
    });
  };

  this.imprezaSpin = ["pictures/vehicleView/impreza/spin/D4S_000.jpg", "pictures/vehicleView/impreza/spin/D4S_001.jpg", "pictures/vehicleView/impreza/spin/D4S_002.jpg", "pictures/vehicleView/impreza/spin/D4S_003.jpg", "pictures/vehicleView/impreza/spin/D4S_004.jpg", "pictures/vehicleView/impreza/spin/D4S_005.jpg", "pictures/vehicleView/impreza/spin/D4S_006.jpg", "pictures/vehicleView/impreza/spin/D4S_007.jpg", "pictures/vehicleView/impreza/spin/D4S_008.jpg", "pictures/vehicleView/impreza/spin/D4S_009.jpg", "pictures/vehicleView/impreza/spin/D4S_010.jpg", "pictures/vehicleView/impreza/spin/D4S_011.jpg", "pictures/vehicleView/impreza/spin/D4S_012.jpg", "pictures/vehicleView/impreza/spin/D4S_013.jpg", "pictures/vehicleView/impreza/spin/D4S_014.jpg", "pictures/vehicleView/impreza/spin/D4S_015.jpg", "pictures/vehicleView/impreza/spin/D4S_016.jpg", "pictures/vehicleView/impreza/spin/D4S_017.jpg", "pictures/vehicleView/impreza/spin/D4S_018.jpg", "pictures/vehicleView/impreza/spin/D4S_019.jpg", "pictures/vehicleView/impreza/spin/D4S_020.jpg", "pictures/vehicleView/impreza/spin/D4S_021.jpg", "pictures/vehicleView/impreza/spin/D4S_022.jpg", "pictures/vehicleView/impreza/spin/D4S_023.jpg", "pictures/vehicleView/impreza/spin/D4S_024.jpg", "pictures/vehicleView/impreza/spin/D4S_025.jpg", "pictures/vehicleView/impreza/spin/D4S_026.jpg", "pictures/vehicleView/impreza/spin/D4S_027.jpg", "pictures/vehicleView/impreza/spin/D4S_028.jpg", "pictures/vehicleView/impreza/spin/D4S_029.jpg", "pictures/vehicleView/impreza/spin/D4S_030.jpg", "pictures/vehicleView/impreza/spin/D4S_031.jpg", "pictures/vehicleView/impreza/spin/D4S_032.jpg", "pictures/vehicleView/impreza/spin/D4S_033.jpg", "pictures/vehicleView/impreza/spin/D4S_034.jpg", "pictures/vehicleView/impreza/spin/D4S_035.jpg"];

  this.wrxSpin = ["pictures/vehicleView/wrx/spin/K1X_000.jpg", "pictures/vehicleView/wrx/spin/K1X_001.jpg", "pictures/vehicleView/wrx/spin/K1X_002.jpg", "pictures/vehicleView/wrx/spin/K1X_003.jpg", "pictures/vehicleView/wrx/spin/K1X_004.jpg", "pictures/vehicleView/wrx/spin/K1X_005.jpg", "pictures/vehicleView/wrx/spin/K1X_006.jpg", "pictures/vehicleView/wrx/spin/K1X_007.jpg", "pictures/vehicleView/wrx/spin/K1X_008.jpg", "pictures/vehicleView/wrx/spin/K1X_009.jpg", "pictures/vehicleView/wrx/spin/K1X_010.jpg", "pictures/vehicleView/wrx/spin/K1X_011.jpg", "pictures/vehicleView/wrx/spin/K1X_012.jpg", "pictures/vehicleView/wrx/spin/K1X_013.jpg", "pictures/vehicleView/wrx/spin/K1X_014.jpg", "pictures/vehicleView/wrx/spin/K1X_015.jpg", "pictures/vehicleView/wrx/spin/K1X_016.jpg", "pictures/vehicleView/wrx/spin/K1X_017.jpg", "pictures/vehicleView/wrx/spin/K1X_018.jpg", "pictures/vehicleView/wrx/spin/K1X_019.jpg", "pictures/vehicleView/wrx/spin/K1X_020.jpg", "pictures/vehicleView/wrx/spin/K1X_021.jpg", "pictures/vehicleView/wrx/spin/K1X_022.jpg", "pictures/vehicleView/wrx/spin/K1X_023.jpg", "pictures/vehicleView/wrx/spin/K1X_024.jpg", "pictures/vehicleView/wrx/spin/K1X_025.jpg", "pictures/vehicleView/wrx/spin/K1X_026.jpg", "pictures/vehicleView/wrx/spin/K1X_027.jpg", "pictures/vehicleView/wrx/spin/K1X_028.jpg", "pictures/vehicleView/wrx/spin/K1X_029.jpg", "pictures/vehicleView/wrx/spin/K1X_030.jpg", "pictures/vehicleView/wrx/spin/K1X_031.jpg", "pictures/vehicleView/wrx/spin/K1X_032.jpg", "pictures/vehicleView/wrx/spin/K1X_033.jpg", "pictures/vehicleView/wrx/spin/K1X_034.jpg", "pictures/vehicleView/wrx/spin/K1X_035.jpg"];

  this.legacySpin = ["pictures/vehicleView/legacy/spin/K3X_000.jpg", "pictures/vehicleView/legacy/spin/K3X_001.jpg", "pictures/vehicleView/legacy/spin/K3X_002.jpg", "pictures/vehicleView/legacy/spin/K3X_003.jpg", "pictures/vehicleView/legacy/spin/K3X_004.jpg", "pictures/vehicleView/legacy/spin/K3X_005.jpg", "pictures/vehicleView/legacy/spin/K3X_006.jpg", "pictures/vehicleView/legacy/spin/K3X_007.jpg", "pictures/vehicleView/legacy/spin/K3X_008.jpg", "pictures/vehicleView/legacy/spin/K3X_009.jpg", "pictures/vehicleView/legacy/spin/K3X_010.jpg", "pictures/vehicleView/legacy/spin/K3X_011.jpg", "pictures/vehicleView/legacy/spin/K3X_012.jpg", "pictures/vehicleView/legacy/spin/K3X_013.jpg", "pictures/vehicleView/legacy/spin/K3X_014.jpg", "pictures/vehicleView/legacy/spin/K3X_015.jpg", "pictures/vehicleView/legacy/spin/K3X_016.jpg", "pictures/vehicleView/legacy/spin/K3X_017.jpg", "pictures/vehicleView/legacy/spin/K3X_018.jpg", "pictures/vehicleView/legacy/spin/K3X_019.jpg", "pictures/vehicleView/legacy/spin/K3X_020.jpg", "pictures/vehicleView/legacy/spin/K3X_021.jpg", "pictures/vehicleView/legacy/spin/K3X_022.jpg", "pictures/vehicleView/legacy/spin/K3X_023.jpg", "pictures/vehicleView/legacy/spin/K3X_024.jpg", "pictures/vehicleView/legacy/spin/K3X_025.jpg", "pictures/vehicleView/legacy/spin/K3X_026.jpg", "pictures/vehicleView/legacy/spin/K3X_027.jpg", "pictures/vehicleView/legacy/spin/K3X_028.jpg", "pictures/vehicleView/legacy/spin/K3X_029.jpg", "pictures/vehicleView/legacy/spin/K3X_030.jpg", "pictures/vehicleView/legacy/spin/K3X_031.jpg", "pictures/vehicleView/legacy/spin/K3X_032.jpg", "pictures/vehicleView/legacy/spin/K3X_033.jpg", "pictures/vehicleView/legacy/spin/K3X_034.jpg", "pictures/vehicleView/legacy/spin/K3X_035.jpg"];

  this.brzSpin = ["pictures/vehicleView/brz/spin/K7X_000.jpg", "pictures/vehicleView/brz/spin/K7X_001.jpg", "pictures/vehicleView/brz/spin/K7X_002.jpg", "pictures/vehicleView/brz/spin/K7X_003.jpg", "pictures/vehicleView/brz/spin/K7X_004.jpg", "pictures/vehicleView/brz/spin/K7X_005.jpg", "pictures/vehicleView/brz/spin/K7X_006.jpg", "pictures/vehicleView/brz/spin/K7X_007.jpg", "pictures/vehicleView/brz/spin/K7X_008.jpg", "pictures/vehicleView/brz/spin/K7X_009.jpg", "pictures/vehicleView/brz/spin/K7X_010.jpg", "pictures/vehicleView/brz/spin/K7X_011.jpg", "pictures/vehicleView/brz/spin/K7X_012.jpg", "pictures/vehicleView/brz/spin/K7X_013.jpg", "pictures/vehicleView/brz/spin/K7X_014.jpg", "pictures/vehicleView/brz/spin/K7X_015.jpg", "pictures/vehicleView/brz/spin/K7X_016.jpg", "pictures/vehicleView/brz/spin/K7X_017.jpg", "pictures/vehicleView/brz/spin/K7X_018.jpg", "pictures/vehicleView/brz/spin/K7X_019.jpg", "pictures/vehicleView/brz/spin/K7X_020.jpg", "pictures/vehicleView/brz/spin/K7X_021.jpg", "pictures/vehicleView/brz/spin/K7X_022.jpg", "pictures/vehicleView/brz/spin/K7X_023.jpg", "pictures/vehicleView/brz/spin/K7X_024.jpg", "pictures/vehicleView/brz/spin/K7X_025.jpg", "pictures/vehicleView/brz/spin/K7X_026.jpg", "pictures/vehicleView/brz/spin/K7X_027.jpg", "pictures/vehicleView/brz/spin/K7X_028.jpg", "pictures/vehicleView/brz/spin/K7X_029.jpg", "pictures/vehicleView/brz/spin/K7X_030.jpg", "pictures/vehicleView/brz/spin/K7X_031.jpg", "pictures/vehicleView/brz/spin/K7X_032.jpg", "pictures/vehicleView/brz/spin/K7X_033.jpg", "pictures/vehicleView/brz/spin/K7X_034.jpg", "pictures/vehicleView/brz/spin/K7X_035.jpg"];

  this.foresterSpin = ["pictures/vehicleView/forester/spin/H5Q_000.jpg", "pictures/vehicleView/forester/spin/H5Q_001.jpg", "pictures/vehicleView/forester/spin/H5Q_002.jpg", "pictures/vehicleView/forester/spin/H5Q_003.jpg", "pictures/vehicleView/forester/spin/H5Q_004.jpg", "pictures/vehicleView/forester/spin/H5Q_005.jpg", "pictures/vehicleView/forester/spin/H5Q_006.jpg", "pictures/vehicleView/forester/spin/H5Q_007.jpg", "pictures/vehicleView/forester/spin/H5Q_008.jpg", "pictures/vehicleView/forester/spin/H5Q_009.jpg", "pictures/vehicleView/forester/spin/H5Q_010.jpg", "pictures/vehicleView/forester/spin/H5Q_011.jpg", "pictures/vehicleView/forester/spin/H5Q_012.jpg", "pictures/vehicleView/forester/spin/H5Q_013.jpg", "pictures/vehicleView/forester/spin/H5Q_014.jpg", "pictures/vehicleView/forester/spin/H5Q_015.jpg", "pictures/vehicleView/forester/spin/H5Q_016.jpg", "pictures/vehicleView/forester/spin/H5Q_017.jpg", "pictures/vehicleView/forester/spin/H5Q_018.jpg", "pictures/vehicleView/forester/spin/H5Q_019.jpg", "pictures/vehicleView/forester/spin/H5Q_020.jpg", "pictures/vehicleView/forester/spin/H5Q_021.jpg", "pictures/vehicleView/forester/spin/H5Q_022.jpg", "pictures/vehicleView/forester/spin/H5Q_023.jpg", "pictures/vehicleView/forester/spin/H5Q_024.jpg", "pictures/vehicleView/forester/spin/H5Q_025.jpg", "pictures/vehicleView/forester/spin/H5Q_026.jpg", "pictures/vehicleView/forester/spin/H5Q_027.jpg", "pictures/vehicleView/forester/spin/H5Q_028.jpg", "pictures/vehicleView/forester/spin/H5Q_029.jpg", "pictures/vehicleView/forester/spin/H5Q_030.jpg", "pictures/vehicleView/forester/spin/H5Q_031.jpg", "pictures/vehicleView/forester/spin/H5Q_032.jpg", "pictures/vehicleView/forester/spin/H5Q_033.jpg", "pictures/vehicleView/forester/spin/H5Q_034.jpg", "pictures/vehicleView/forester/spin/H5Q_035.jpg"];

  this.crosstrekSpin = ["pictures/vehicleView/crosstrek/spin/M3Y_001.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_002.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_003.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_004.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_005.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_006.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_007.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_008.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_009.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_010.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_011.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_012.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_013.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_014.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_015.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_016.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_017.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_018.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_019.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_020.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_021.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_022.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_023.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_024.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_025.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_026.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_027.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_028.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_029.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_030.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_031.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_032.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_033.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_034.jpg", "pictures/vehicleView/crosstrek/spin/M3Y_035.jpg"];

  this.outbackSpin = ["pictures/vehicleView/outback/spin/K4X_000.jpg", "pictures/vehicleView/outback/spin/K4X_001.jpg", "pictures/vehicleView/outback/spin/K4X_002.jpg", "pictures/vehicleView/outback/spin/K4X_003.jpg", "pictures/vehicleView/outback/spin/K4X_004.jpg", "pictures/vehicleView/outback/spin/K4X_005.jpg", "pictures/vehicleView/outback/spin/K4X_006.jpg", "pictures/vehicleView/outback/spin/K4X_007.jpg", "pictures/vehicleView/outback/spin/K4X_008.jpg", "pictures/vehicleView/outback/spin/K4X_009.jpg", "pictures/vehicleView/outback/spin/K4X_010.jpg", "pictures/vehicleView/outback/spin/K4X_011.jpg", "pictures/vehicleView/outback/spin/K4X_012.jpg", "pictures/vehicleView/outback/spin/K4X_013.jpg", "pictures/vehicleView/outback/spin/K4X_014.jpg", "pictures/vehicleView/outback/spin/K4X_015.jpg", "pictures/vehicleView/outback/spin/K4X_016.jpg", "pictures/vehicleView/outback/spin/K4X_017.jpg", "pictures/vehicleView/outback/spin/K4X_018.jpg", "pictures/vehicleView/outback/spin/K4X_019.jpg", "pictures/vehicleView/outback/spin/K4X_020.jpg", "pictures/vehicleView/outback/spin/K4X_021.jpg", "pictures/vehicleView/outback/spin/K4X_022.jpg", "pictures/vehicleView/outback/spin/K4X_023.jpg", "pictures/vehicleView/outback/spin/K4X_024.jpg", "pictures/vehicleView/outback/spin/K4X_025.jpg", "pictures/vehicleView/outback/spin/K4X_026.jpg", "pictures/vehicleView/outback/spin/K4X_027.jpg", "pictures/vehicleView/outback/spin/K4X_028.jpg", "pictures/vehicleView/outback/spin/K4X_029.jpg", "pictures/vehicleView/outback/spin/K4X_030.jpg", "pictures/vehicleView/outback/spin/K4X_031.jpg", "pictures/vehicleView/outback/spin/K4X_032.jpg", "pictures/vehicleView/outback/spin/K4X_033.jpg", "pictures/vehicleView/outback/spin/K4X_034.jpg", "pictures/vehicleView/outback/spin/K4X_035.jpg"];

  var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var key = '&appid=c99beafdfe31e4cdd65c078c5af94300';

  this.getLocation = function () {
    var promise = $http({
      method: 'GET',
      url: 'http://ip-api.com/json'
    });
    return promise.then(function (location) {
      return location.data.city;
    });
  };

  this.getWeather = function (location) {
    var promise = $http({
      method: 'GET',
      url: baseUrl + location + key
    });
    return promise.then(function (results) {
      return results.data;
    });
  };
});
//# sourceMappingURL=bundle.js.map
