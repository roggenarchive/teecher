var app = angular.module('chirpApp', ['ngRoute', 'ngResource']).run(function($rootScope) {
    $rootScope.authenticated = false;
    $rootScope.current_user = '';

});

app.config(function($routeProvider){
    $routeProvider
        //the timeline display
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController'
        })
        //the login display
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'authController'
        })
        //the signup display
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'authController'
        })
        .when('/signout', {
            templateUrl: 'views/logout.html',
            controller: 'logoutController'
        });
});

app.factory('postService', function($resource){
    return $resource('/api/posts/:id');
});

app.controller('mainController', function(postService, $scope, $rootScope){
    $scope.posts = postService.query();
    $scope.newPost = {created_by: '', text: '', created_at: ''};
    $scope.post = function() {
        $scope.newPost.created_by = $rootScope.current_user;
        console.log($scope.newPost.created_by)
        $scope.newPost.created_at = Date.now();
        console.dir(postService)
        postService.save($scope.newPost, function(){
            $scope.posts = postService.query();
            console.log(postService.query())
            $scope.newPost = {created_by: '', text: '', created_at: ''};
        });
    };
});

app.controller('authController', function($scope, $http, $rootScope, $location){
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    $scope.login = function(){
        $http.post('/auth/login', $scope.user).success(function(data){
            if(data.state == 'success'){
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                console.log($rootScope.current_user);
                $location.path('/');
            }
            else{
                $scope.error_message = data.message;
            }
        });
    };


    $scope.register = function(){
        $http.post('/auth/signup', $scope.user).success(function(data){
            if(data.state == 'success'){
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                $location.path('/');
            }
            else{
                $scope.error_message = data.message;
            }
        });
    };
});


app.controller('logoutController', function($scope, $rootScope, $location, $http){
        $http.get('auth/signout');
        console.log('br line')
        $rootScope.authenticated = false;
        $rootScope.current_user = '';
        $location.path('/')
});