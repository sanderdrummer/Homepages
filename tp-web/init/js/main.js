(function(angular){
  "use strict";

  angular.module("Resume", ["ngRoute"])
  .config(["$routeProvider",
    function($routeProvider){

    $routeProvider
    .when("/", {
      redirectTo: "/Lebenslauf"
    })
    .when("/Lebenslauf", {
      templateUrl: "view/resume.html",
      controller: "ResumeCtrl",
      resolve: {
       resumeEntries: ["resumeService", function(resumeService){
        return resumeService.get();
       }]
      }
    })
    .when("/Portfolio", {
      templateUrl: "view/portfolio.html",
      controller: "ProjectCtrl",
      resolve: {
        projects: ["projectService", function(projectService){
          return projectService.get();
        }]
      }
    })
    .otherwise({
      redirectTo: "/Lebenslauf"
    });
  }])



  .directive("menu", ["$location", "$rootScope", function($location, $rootScope){
    return {
      restrict: "C",
      link: function(scope, elem){
        $rootScope.$on("$locationChangeSuccess", function(){

          var as = elem.find("a");
          var aIndex = as.length;
          while(aIndex--) {

            if(as[aIndex].href.indexOf($location.url()) > 0) {
              as[aIndex].classList.add("active");
            } else {
              as[aIndex].classList.remove("active");

            }
          }
        });

      }
    };
  }])



  .factory("resumeService", ["$http", function($http){

    var resumeService = {};

    resumeService.get = function(){
      return $http.get("data/resume.json", {cache: true});
    };

    return resumeService;

  }])
  .controller("ResumeCtrl", ["$scope", "resumeEntries", function($scope, resumeEntries){

    $scope.resumeEntries = resumeEntries.data;

  }])



  .factory("projectService", ["$http", function($http){

    var projectService = {};

    projectService.get = function(){
      return $http.get("data/projects.json", {cache: true});
    };

    return projectService;

  }])
  .controller("ProjectCtrl", ["$scope", "projects", function($scope, projects){

    $scope.projects = projects.data;

    $scope.showDetails = function(imgs){
      $scope.$broadcast("open-modal", {data: imgs});
    };

  }]);
})(angular);
