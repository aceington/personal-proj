var app = angular.module('subaru', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/home')

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })
      .state('impreza', {
        url: '/vehicle/impreza',
        templateUrl: 'views/impreza.html',
        controller: 'vehicleCtrl'
      })
      .state('wrx', {
        url: '/vehicle/wrx',
        templateUrl: 'views/wrx.html',
        controller: 'vehicleCtrl'
      })
      .state('legacy', {
        url: '/vehicle/legacy',
        templateUrl: 'views/legacy.html',
        controller: 'vehicleCtrl'
      })
      .state('newOutback', {
        url: '/vehicle/2018-outback',
        templateUrl: 'views/2018Outback.html',
        controller: 'vehicleCtrl'
      })
      .state('brz', {
        url: '/vehicle/brz',
        templateUrl: 'views/brz.html',
        controller: 'vehicleCtrl'
      })
      .state('forester', {
        url: '/vehicle/forester',
        templateUrl: 'views/forester.html',
        controller: 'vehicleCtrl'
      })
      .state('outback', {
        url: '/vehicle/outback',
        templateUrl: 'views/outback.html',
        controller: 'vehicleCtrl'
      })
      .state('crosstrek', {
        url: '/vehicle/crosstrek',
        templateUrl: 'views/crosstrek.html',
        controller: 'vehicleCtrl'
      })
  })
