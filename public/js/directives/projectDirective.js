angular.module('taskman')

.controller("projectListController",
 function($scope, $state, projectService){
  // $scope.removeProject = function(){
  //   projectService.removeProject($scopeProject._id).then(function(response){
  //     $state.go($state.current, {}, {reload: true});
  //   });
  // };
})

.directive("projectList", function() {
    return {
        templateUrl: "/js/directives/projectList.html",
        restrict: "E",
        scope: {
          project: "=",
        },
        controller: "projectListController",
        link: function(scope, element, attribute, $timeout) {
          scope.showRPMP = false;
          scope.selectProject = function(project){
            scope.selectedProject = project;
            scope.showRPMP = true;
            console.log("hit-Me!");
          };
        }
    };
});
