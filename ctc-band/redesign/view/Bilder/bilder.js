'use strict';

angular.module('ctcBand.bilder', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bilder', {
    templateUrl: 'view/Bilder/bilder.html',
    controller: 'BilderCtrl'
  });
}])

.controller('BilderCtrl', ['$scope','$http',function($scope,$http) {
	$http.get('public/gal.php')
		.success(function(data){
			$scope.imageList = data;
		});	
}]);