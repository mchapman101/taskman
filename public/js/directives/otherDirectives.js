angular.module('taskman')

.directive("leftNavbar", function() {
    return {
        templateUrl: "/js/directives/leftNavbar.html",
        restrict: "E",
      };
    });
