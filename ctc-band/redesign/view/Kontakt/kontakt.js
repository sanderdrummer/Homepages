'use strict';

angular.module('ctcBand.kontakt', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kontakt', {
    templateUrl: 'view/Kontakt/kontakt.html',
    controller: 'KontaktCtrl'
  });
}])

.controller('KontaktCtrl', ['$scope','$http',function($scope,$http) {
	$http.get('public/news.json')
		.success(function(data){
			$scope.news = data;
		});	
}]);