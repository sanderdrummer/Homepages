'use strict';

angular.module('ctcBand.musik', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/musik', {
    templateUrl: 'view/Musik/musik.html',
    controller: 'MusikCtrl'
  });
}])


.factory('ServiceHelper', ['$sce', '$location', function($sce, $location){
    return {
        renderHtml: function(html) {
            return $sce.trustAsHtml(html);
        }
    };
}])

.controller('MusikCtrl', ['$scope','$http', 'ServiceHelper', 
	function($scope,$http, ServiceHelper) {
	$scope.showLightbox = false;
	$scope.showVideoPlayer = false;
	$http.get('public/img/gal.php')
		.success(function(data){
			$scope.imageList = angular.fromJson(data);
		});
	$http.get('public/videos.json')
		.success(function(data){
			console.log(data);
			$scope.videos = data;
		});



	$scope.selectImage = function(img){
		$scope.selectedImage = img;
		$scope.showLightbox = true;
	}

	$scope.closeLightbox = function(){
		$scope.showLightbox = false;
	}



	$scope.selectVideo = function(vid){
		$scope.youtube = '	<iframe id="ytplayer" type="text/html" width="800" height="450" src="http://www.youtube.com/embed/?';
		$scope.youtube += vid; 
		$scope.youtube += 'autoplay=1&controls=0&color=white&theme=light" frameborder="0" allowfullscreen>';
		$scope.youtubeFrame = ServiceHelper.renderHtml($scope.youtube);
		$scope.showVideoPlayer = true;
	}

	$scope.closeVideoPlayer = function(){
		$scope.showVideoPlayer = false;
	}



}]);