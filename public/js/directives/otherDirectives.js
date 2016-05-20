angular.module('taskman')

// .run(function($rootScope) {
// 	angular.element(document).on("click", function(e) {
// 		$rootScope.$broadcast("documentClicked", angular.element(e.target));
// 	});
// })

.directive("leftNavbar", function() {
    return {
        templateUrl: "/js/directives/leftNavbar.html",
        restrict: "E",
    };
})

.directive("userDropdownMenu", function() {
    return {
        templateUrl: "/js/directives/userDropdown.html",
        restrict: "E",
				controller: "dropdownmenuCtrl"
    };
})


.directive("datepicker", function() {
    return {
        restrict: "A",
        link: function(scope, element, attribute) {
            $(function() {
                $(".datePicker").datepicker({
                    showButtonPanel: true,
                    dateFormat: 'DD, MM d,  yy',
                    onClose: function(selectedDate) {
                        scope.selectedTask.deadline = selectedDate;
                        scope.updateTask(scope.selectedTask);
                    }
                });
            });
        }
    };
})

.directive("sortable", function() {
  return {
    restrict: "A",
    link: function(scope, element, attribute){
      $(function (){
        $(".sortable").sortable({
          scroll: false
        });
        $(".sortable").disableSelection();
      });
    }
  };
});
