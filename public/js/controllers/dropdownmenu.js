angular.module('taskman').controller("dropdownmenuCtrl", function($scope, $state, loginService){

$scope.getUser = function(){
  loginService.getUser().then(function(response){
    $scope.newUser = response.data;
    console.log($scope.newUser);
  });
};

$scope.getUser();

$scope.updateUser = function(user){
    console.log("hit1", user);
    loginService.updateUser(user).then(function(response){
      console.log("Hit from update User", response);
      $scope.getUser();
      $scope.userDropdownMenu = false;
    });
};

$scope.logout = function (user) {
  console.log("hit-logout");
    loginService.logout(user).then(function(response) {
      $state.go('login');
      $scope.userDropdownMenu = false;
    });
  };

});
