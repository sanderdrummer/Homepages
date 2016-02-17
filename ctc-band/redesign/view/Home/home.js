'use strict';

angular.module('ctcBand.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view/Home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$http',function($scope,$http) {
	
	$http.get('public/news.json')
		.success(function(data){
			$scope.news = data;
		});


	$scope.newsFilter = 'alle';	
	$scope.setFilter = function(filter){
		$scope.newsFilter = filter;
	}

	$scope.newsFilterFunction = function(newsEntry){
		if(newsEntry.category === $scope.newsFilter || $scope.newsFilter === 'alle') {
			return true;
		} else {
			return false;
		}
	}
	
}]);