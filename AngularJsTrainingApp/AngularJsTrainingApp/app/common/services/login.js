(function () {
    angular.module('login.service', ['provider', 'localstoragemanager.service'])
               .service('loginService', ['userCredentials', 'employeeDetails','localstoragemanager', loginService]);


    function loginService(userCredentials, employeeDetails, localstoragemanager) {
        var userDeatails = userCredentials.get();
        var employees =  employeeDetails.get();

        function isValid(credentials) {
            for (var i = 0; i < userDeatails.length; i++) {
                if (userDeatails[i].email === credentials.username
                    && userDeatails[i].password === credentials.password)
                    return getEmployeeDetail(userDeatails[i].userid);
            }
            return "";
        };
        function getEmployeeDetail(userid)
        {
            for (var i = 0; i < employees.length; i++) {
                if (employees[i].userid === userid)
                    return employees[i].fullname;
            }
            return "";
        }

        function authenticate(credentials) {
            return isValid(credentials)
        }
        // factory patter
        //var service = {};
        //service.authenticate = authenticate;
        //return service;

        //Contructor pattern
        this.authenticate = function (credentials) {
            return isValid(credentials)
        }

        this.saveCurrentUserName = function (value) {
            localstoragemanager.setLocalStorage("username", value)
        }

        this.getCurrentUserName = function () {
            return localstoragemanager.getLocalStorage("username")
        }

       
    };
})();