(function () {
    angular.module('login.controller', ['services'])
          .controller('loginCtrl', ['$scope', 'loginService', '$location', LoginController])

    function LoginController($scope, loginService, $location) {
        $scope.username = '';
        $scope.password = '';
        var userdetails = {};
        $scope.authenticate = function () {
            userdetails.username = $scope.username;
            userdetails.password = $scope.password;
            var employeeName = loginService.authenticate(userdetails);

            alert('Login attept ' + (employeeName != "" ? 'Successfull' : 'failed'));
            $location.path("/home");
            loginService.saveCurrentUserName(employeeName)
        };
    };
})();