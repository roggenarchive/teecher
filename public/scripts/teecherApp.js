var app = angular.module('teecherApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'starsDirective']).run(function ($rootScope) {
    $rootScope.authenticated = false;
    $rootScope.current_user = '';

});

app.config(function ($routeProvider) {
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
        })
        .when('/regions', {
            templateUrl: 'views/regions.html'
        })
        .when('/schools', {
            templateUrl: 'views/schools.html',
            controller: 'schoolController'
        })
        .when('/schools/:id', {
            templateUrl: 'views/certainSchool.html',
            controller: 'certainSchoolController'
        })
        .when('/rating', {
            templateUrl: 'views/rating.html'
            //controller: 'ratingController'
        })
        .when('/dummy', {
            templateUrl: 'views/dummyrating.html'
        })

        .otherwise({templateUrl: 'views/error.html', controller: "errorController"});

});

/*app.factory('postService', function($resource){
 return $resource('/api/posts/:id');
 });*/


//app.controller('ratingController', function ($scope, $rootScope, $http) {
//    $scope.teacher = {
//        name: 'Manu Masson',
//        school: undefined,
//        age: '23',
//        subject: "Mathe, Sport"
//    };
//
//});
