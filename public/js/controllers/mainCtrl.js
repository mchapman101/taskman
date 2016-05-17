angular.module('taskman').controller("mainCtrl", function($scope, $state, loginService){

$scope.showThis = false;

$scope.test = "Testing, testing!";

$scope.userName = function(){
  loginService.getUser().then(function(response){
    console.log("hit1", response);
    $scope.userName = response.data[0];
    console.log(response.data[0].firstname);
  });
};

$scope.userName();

var loadingScreen = window.pleaseWait({
  backgroundColor: '#2c3e50',
  logo: "/assets/Task Manager Main Splash-alt.png",
  loadingHtml: "<div class='spinner'></div>",
});


setTimeout(function(){
  loadingScreen.finish();
}, 1000);

$scope.logout = function (user) {
  console.log("hit-logout");
    loginService.logout(user).then(function(response) {
      $state.go('login');
    });
  };


});
