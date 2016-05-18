angular.module('taskman').controller("loginController", function($scope, $state, loginService){

// $scope.userName = user;

// $scope.getUser = function(){
//   loginService.getUser().then(function(response){
//     $scope.user = response.data;
//   });
// };



$scope.login = function(loginInfo) {
  loginService.login(loginInfo).then(function(response){
    $state.go('dashboard');
  });
};

$scope.register = function(){
  loginService.register($scope.newUser).then(function(response){
    console.log(response.data);
    $scope.login($scope.newUser);
  });
};


$scope.updateUser = function(user){
    console.log("hit1", user);
    loginService.updateUser(user).then(function(response){
      console.log("Hit from update User", response);
      $scope.getUser();
    });
};


});
