/// <reference path="D:\AngularJS training\Assignment\AngularJsTrainingApp\AngularJsTrainingApp\Scripts/angular.min.js" />


    var prividerapp = angular.module('provider', []);
    prividerapp.provider("userCredentials", function () {
        this.data = [];
        this.$get = function () {
            var data = this.data;
            return {
                get: function () {
                    return data;
                }
            }
        };
        this.set = function (listCredentials) {
            this.data = listCredentials;
        };

    });



    prividerapp.config(function (userCredentialsProvider) {
        var userDeatails = [{ userid: 1, email: 'nilesh@nilesh.com', password: 'nilesh' },
                            { userid: 2, email: 'asdf@asdf.com', password: 'asdf' },
                            { userid: 3, email: 'abc@abc.com', password: 'abc' },
                            { userid: 4, email: 'pqr@pqr.com', password: 'pqr' }];
        userCredentialsProvider.set(userDeatails);
    });
