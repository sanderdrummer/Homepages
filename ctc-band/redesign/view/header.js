'use strict';

angular.module('ctcBand.header', [])
.controller('HeaderCtrl', ['$scope', function($scope){
	$scope.toggleMenu = function() {
		angular.element( document.querySelector( '#menuBtn' ) )
			.toggleClass('active');
		angular.element( document.querySelector( '#mainMenuContainer' ) )
			.toggleClass('slideInRight animated active');
	      
	}

}]);
