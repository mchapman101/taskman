angular.module('taskman').service("tasksService", function($http){

this.getTasks = function(){
  return $http({
    method: "GET",
    url: "/api/tasks"
  }).then(function(response){
    return response.data;
  });
};

this.addTask = function(newTask) {
  return $http({
    method: "POST",
    url: "/api/tasks",
    data: newTask
  }).then(function(response){
    return response.data;
  });
};

this.updateTask = function(task){
  return $http({
    method: "PUT",
    url: "/api/tasks/" + task._id,
    data: task
  }).then(function(response){
    return response.data;
  });
};

this.removeTask = function(task){
  return $http({
    method: "DELETE",
    url: "/api/tasks/" + task,
    data: task
  }).then(function(response){
    return response.data;
  });
};



});
