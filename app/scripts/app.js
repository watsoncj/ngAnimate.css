'use strict';

angular.module('Helpers', []);

angular.module('ngAnimationcssApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'Helpers'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/use', {
        templateUrl: 'views/use.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
