var app = angular.module('subaru', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.when('','/home')

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  })
})
