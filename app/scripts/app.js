'use strict';

var angularMovieApp = angular.module('cafeApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap'
  ]);
angularMovieApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/cafes-arrondissement', {
    templateUrl: 'views/cafes-arrondissement.html',
    controller: 'CafesArrondissementCtrl'})
  .otherwise({
    redirectTo: '/'
  });
});
// To remove this error : Request header field X-Requested-With is not allowed by Access-Control-Allow-Headers.
// https://github.com/angular/angular.js/pull/1454
angularMovieApp.config(function($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
