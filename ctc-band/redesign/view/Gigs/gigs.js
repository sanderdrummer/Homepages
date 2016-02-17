'use strict';

angular.module('ctcBand.gigs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gigs', {
    templateUrl: 'view/Gigs/gigs.html',
    controller: 'GigsCtrl'
  });
}])

.controller('GigsCtrl', ['$scope','$http',function($scope,$http) {
	$http.get('public/news.json')
		.success(function(data){
			$scope.news = data;
		});	
}]);