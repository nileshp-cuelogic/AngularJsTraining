(function () {
	angular.module('home.controller', [])
          .controller('homeCtrl', ['$scope','loginService',  HomeController])

	function HomeController($scope, loginService) {
	    $scope.name = loginService.getCurrentUserName("myname");
		
	};

	
})();