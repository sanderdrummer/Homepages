'use strict';

// Declare app level module which depends on views, and components
var ctcBand = angular.module('ctcBand', [
  'ngRoute',
  'ctcBand.home',
  'ctcBand.band',
  'ctcBand.gigs',
  'ctcBand.bilder',
  'ctcBand.musik',
  'ctcBand.kontakt',
  'ctcBand.header',
  'ctcBand.footer'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.factory('ServiceHelper', ['$sce', '$location', function($sce, $location){
    return {
        renderHtml: function(html) {
            return $sce.trustAsHtml(html);
        }
    };
}])




;



