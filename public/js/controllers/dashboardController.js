angular.module('taskman').controller("dashboardController", function($scope, user, $rootScope){

  $scope.dashTest = "Here's a list of tasks from the dashboard";

$scope.userName = user.data;
$rootScope.userName = $scope.userName;

console.log($scope.userName, $rootScope.userName);


});
