'use strict';

angular.module('ctcBand.footer', ['ngAudio'])
.controller('FooterCtrl', ['$scope','ngAudio', function($scope,ngAudio){
	$scope.sound = ngAudio.load("public/audio/colors.mp3");

	$scope.play = function(){
		$scope.sound.play();
	};	
	$scope.pause = function(){
		$scope.sound.pause();
	};
}]);
