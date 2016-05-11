angular.module('taskman',['ui.router'])

.config(['$stateProvider','$urlRouterProvider',
  function(stateProvider, urlRouterProvider){


urlRouterProvider.otherwise('/dashboard');

stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: '/views/dashboard.html',
    controller: "dashboardController"
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
  });

}]);
