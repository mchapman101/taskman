angular.module('taskman').controller("tasksController", function($scope, tasksService) {

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

});
