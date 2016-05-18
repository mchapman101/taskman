angular.module('taskman').service("projectService", function($http){

  this.addProject = function(newProject) {
    return $http({
      method: "POST",
      url: "/api/projects",
      data: newProject
    }).then(function(response){
      return response.data;
    });
  };

this.getProjects = function(){
  return $http({
    method: "GET",
    url: "/api/projects"
  }).then(function(response){
    return response.data;
  });
};

this.updateProject = function(project) {
  return $http({
    method: "PUT",
    url: "/api/projects/" + project._id,
    data: project
  }).then(function(response){
    return response.data;
  });
};
});