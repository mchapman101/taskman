angular.module('taskman').controller("tasksController", function($scope, tasksService, $filter) {

    // $scope.taskTest = "Here's a task for you to do!";

    $scope.getTask = function() {
        tasksService.getTasks().then(function(response) {
            $scope.tasks = response;
        });
    };

    $scope.getTask();

    $scope.addTask = function(task) {
        tasksService.addTask(task).then(function(response) {
            $scope.task = "";
            $scope.getTask();
        });

    };

    $scope.showRTMP = false;

    $scope.selectTask = function(task){
      $scope.selectedTask = task;
      setTimeout(function(){
        $scope.showRTMP = true;
      }, 100);
    };

$scope.updateTask= function(task){
  console.log(task);
  tasksService.updateTask(task).then(function(response) {
    $scope.getTask();
  });
};

$scope.formatDate = function(date){
  return $filter('date')(date, 'fullDate');
};
});
