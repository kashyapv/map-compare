'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
      	templateUrl: 'partials/index',
      	controller: IndexCtrl
      }).
      when('/leaflet', {
        templateUrl: 'partials/leaflet',
        controller: LeafletCtrl
      }).
      when('/openstreetmap', {
        templateUrl: 'partials/openstreetmap',
        controller: OSMCtrl
      }).
      when('/googlemaps', {
        templateUrl: 'partials/googlemaps',
        controller: GoogleCtrl
      }).
      when('/openlayers', {
        templateUrl: 'partials/openlayers',
        controller: OpenLayersCtrl
      }).
      otherwise({
      	redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);