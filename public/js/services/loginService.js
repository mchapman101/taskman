angular.module('taskman').service('loginService', function($http){

  this.login = function(user) {
      return $http({
        method: 'POST',
        url: '/api/users/login',
        data: user
      }).then(function(response) {
        return response;
      });
    };

  this.getUser = function() {
  return $http({
    method: 'GET',
    url: '/api/users/me'
  }).then(function(response) {
    return response;
  });
};

this.register = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.updateUser = function(user) {
    return $http({
      method: "PUT",
      url: "/api/users/" + user._id,
      data: user
    }).then(function(response){
      return response.data;
    });
  };


  this.logout = function() {
    return $http({
      method: "GET",
      url: '/api/logout',
    }).then(function(response){
      return response.data;
    });
  };

});
