angular.module('taskman').controller("dashboardController", function($scope, user, $rootScope, tasksService, projectService, $filter){

$scope.userName = user.data;
$rootScope.userName = $scope.userName;

$scope.getTask = function() {
    tasksService.getTasks().then(function(response) {
        $scope.tasks = response;
    });
};
$scope.getProjects = function(){
  projectService.getAndPopulateProjects().then(function(response){
    $scope.projects = response;
  });
};

$scope.getProjects();
$scope.getTask();

$scope.formatDate = function(date){
  return $filter('date')(date, 'fullDate');
};


});
