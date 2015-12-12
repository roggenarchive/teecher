
app.controller('authController', function ($scope, $http, $rootScope, $location) {
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    $rootScope.userInfo();

    $scope.login = function () {
        $http.post('/auth/login', $scope.user).success(function (data) {
            if (data.state == 'success') {
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                console.log($rootScope.current_user);
                $location.path('/');
            }
            else {
                $scope.error_message = data.message;
            }
        });
    };


    $scope.register = function () {
        $http.post('/auth/signup', $scope.user).success(function (data) {
            if (data.state == 'success') {
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                $location.path('/');
            }
            else {
                $scope.error_message = data.message;
            }
        });
    };
});