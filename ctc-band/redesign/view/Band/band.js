'use strict';

angular.module('ctcBand.band', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/band', {
    templateUrl: 'view/Band/band.html',
    controller: 'BandCtrl'
  });
}])

.controller('BandCtrl', ['$scope','$http',function($scope,$http) {

}]);