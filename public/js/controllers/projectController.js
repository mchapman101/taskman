angular.module('taskman').controller("projectController", function($scope, projectService, tasksService, $rootScope, user, $state){

  $scope.userName = user.data;
  $rootScope.userName = $scope.userName;

  $scope.showRPMP = false;

  $scope.getProjects = function(){
    projectService.getProjects().then(function(response){
      $scope.projects = response;
    });
  };

  $scope.getProjects();

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
  projectService.updateProject(project).then(function(){
    $scope.getProjects();
  });
};

$scope.getUserTasks = function(){
  tasksService.getTasks().then(function(response){
    console.log(response);
    $scope.userTasks = response;
  });
};
$scope.getUserTasks();

$scope.deleteProject = function(selectedProject){
  console.log(selectedProject);
  projectService.deleteProject(selectedProject._id).then(function(response){
    $state.go($state.current, {}, {reload: true});
  });
};
});
