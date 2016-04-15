(function () {
    
    //var app = angular.module('provider', []);
    prividerapp.provider("employeeDetails", function () {
        this.data = [];
        this.$get = function () {
            var data = this.data;
            return {
                get: function () {
                    return data;
                }
            }
        };
        this.set = function (employeeDetails) {
            this.data = employeeDetails;
        };

    });



    prividerapp.config(function (employeeDetailsProvider) {
        var employeeDetails = [{ userid: 1, fullname:'Nilesh Patil', address:'Kolhapur', email:'nilesh@abc.com', age:12, gender:'M', education : 'MCA' },
                               { userid: 2, fullname: 'asdf asdf', address: 'Sangli', email: 'asdf@abc.com', age: 25, gender: 'F', education: 'BA' },
                               { userid: 3, fullname: 'abc abc', address: 'Pune', email: 'abc@abc.com', age: 47, gender: 'M', education: 'SSC' },
                               { userid: 4, fullname:'pqr pqr', address:'Mumbai', email:'pqr@pqr.com', age:22, gender:'F', education : 'BBA' }];
        employeeDetailsProvider.set(employeeDetails);
    });

})();