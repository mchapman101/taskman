angular.module('taskman').controller("mainCtrl", function($scope, $state, loginService, $rootScope){

$scope.userName = $rootScope.userName;

$rootScope.$watch('userName', function(nv, ov){
  console.log("update", nv, ov);
  $scope.userName = nv;
});

// $scope.getUser = function(){
//   loginService.getUser().then(function(response){
//     $scope.user = response.data;
//   });
// };
//
// $scope.getUser();

$scope.getUser = function(){
  loginService.getUser().then(function(response){
    console.log(response.data);
    $scope.userName = response.data;
  });
};

// $scope.getUser();

$scope.logout = function (user) {
  console.log("hit-logout");
    loginService.logout(user).then(function(response) {
      $state.go('login');
    });
  };


});
