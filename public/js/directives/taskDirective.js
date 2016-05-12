angular.module('taskman')

.controller("tasksListController",
 function($scope, $state, tasksService){
  $scope.removeTask = function(){

    tasksService.removeTask($scope.task._id).then(function(response){
      $state.go($state.current, {}, {reload: true});
      // tasksService.getTasks();
    });

    $(document).ready (function(){
      $('.tasker').click ( function(){
        $('.right-task-menu-popup').animate({right: '300px'}, 1000, function(){});
      });
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
          showRTMP: "="
        },
        controller: "tasksListController",
        link: function(scope, element, attribute) {


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
