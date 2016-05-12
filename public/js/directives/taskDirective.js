angular.module('taskman')

.controller("tasksListController",
 function($scope, $state, tasksService){
  $scope.removeTask = function(){

    tasksService.removeTask($scope.task._id).then(function(response){
      $state.go($state.current, {}, {reload: true});
      // tasksService.getTasks();
    });
  };

$scope.showThis = false;
})

.directive("tasksList", function() {
    return {

        templateUrl: "/js/directives/taskList.html",
        restrict: "E",
        scope: {
          task: "=",
        },
        controller: "tasksListController",
        link: function(scope, element, attribute, $timeout) {
          scope.showRTMP = false;
          scope.selectTask = function(task){

            scope.selectedTask = task;
            scope.showRTMP = true;

            console.log("hit", scope.showRTMP, scope.selectedTask);
          };

            scope.checkTask = function() {
              scope.checked = false;
              // console.log(checked);
                if (scope.checked) {
                    element.toggleClass("checked");
                } else {
                    element.toggleClass("checked");
                }
            };

        }


    };
});
