angular.module('taskman', ['ui.router'])

.run(function($rootScope, loadingScreenService){
  $rootScope.loadingScreen = loadingScreenService.loadingScreen();
})


.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){


$urlRouterProvider.otherwise('/login');

$stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: '/views/dashboard.html',
    controller: "dashboardController",
    resolve: {
      user: function(loginService){
        return loginService.getUser();
      }
    }
  })

  .state('project', {
    url: '/project',
    templateUrl: '/views/project.html',
    controller: "projectController",
    resolve: {
      user: function(loginService){
        return loginService.getUser();
      }
    }
  })

  .state('team', {
    url: '/team',
    templateUrl: '/views/team.html',
    controller: "teamController"
  })

  .state('tasks', {
    url: '/tasks',
    templateUrl: '/views/tasks.html',
    controller: "tasksController",
    resolve: {
      user: function(loginService){
        return loginService.getUser();
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: "loginController",
    resolve: {
      user: function(loginService, $state) {
        loginService.getUser().then(function(response){
          if(response.data){
            $state.go('dashboard', {reload: true});

          }else{
            return null;
          }
        })
      }
    }
  });


}]);
