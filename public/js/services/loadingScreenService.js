angular.module('taskman').service('loadingScreenService', function(){

  this.loadingScreen = function(){
    var loadingScreen = window.pleaseWait({
    backgroundColor: '#2c3e50',
    logo: "/assets/Task Manager Main Splash-alt.png",
    loadingHtml: "<div class='spinner'></div>",
  });
  setTimeout(function(){
  loadingScreen.finish();
}, 1000);
};

});
