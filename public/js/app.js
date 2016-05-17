angular.module('taskman', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){


$urlRouterProvider.otherwise('/login');

$stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: '/views/dashboard.html',
    controller: "dashboardController",
    resolve: {
      user: function(loginService, $state) {
        return loginService.getUser().then(function(response) {
          return response.data;
        }).catch(function(err) {
          $state.go('login');
        });
      }
    }
  })

  .state('project', {
    url: '/project',
    templateUrl: '/views/project.html',
    controller: "projectController"
  })

  .state('team', {
    url: '/team',
    templateUrl: '/views/team.html',
    controller: "teamController"
  })

  .state('tasks', {
    url: '/tasks',
    templateUrl: '/views/tasks.html',
    controller: "tasksController"
  })

  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: "loginController"
  });


}]);
