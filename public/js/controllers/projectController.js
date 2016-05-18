angular.module('taskman').controller("projectController", function($scope, projectService, $rootScope, user){

  $scope.userName = user.data;
  $rootScope.userName = $scope.userName;

  $scope.getProjects = function(){
    projectService.getProjects().then(function(response){
      $scope.projects = response;
    });
  };

  $scope.showRPMP = false;

  $scope.selectProject = function(project){
    $scope.selectedProject = project;
    setTimeout(function(){
      $scope.showRPMP = true;
    }, 100);
  };


$scope.addProject = function(project){
  projectService.addProject(project).then(function(response){
    console.log(response);
    $scope.project = "";
    $scope.getProjects();
  });
};

$scope.updateProject = function(project){
  console.log(project, "Project-Hit!");
  projectService.updateProject(project).then(function(reresponse){
    $scope.getProjects();
  });
};

$scope.getProjects();
});
