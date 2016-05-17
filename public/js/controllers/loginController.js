angular.module('taskman').controller("loginController", function($scope, $state, loginService){

$scope.login = function() {
  loginService.login($scope.credentials).then(function(response){
    $state.go('dashboard');
  });
};

$scope.register = function(){
  loginService.register($scope.newUser).then(function(response){
    console.log(response.data);
  });
};


});
