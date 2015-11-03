var app = angular.module('teecherApp', ['ngRoute', 'ngResource', 'ui.bootstrap']).run(function($rootScope) {
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
        })
        .when('/regions', {
            templateUrl: 'views/regions.html'
        })
        .when('/schools', {
            templateUrl: 'views/schools.html',
            controller : 'schoolController'
        })
        .when('/schools/:id', {
            templateUrl: 'views/certainSchool.html',
            controller : 'certainSchoolController'
        })
	    .when('/rating', {
            templateUrl: 'views/rating.html',
            controller : 'ratingController'
	    })
	    .when('/dummy', {
	        templateUrl: 'views/dummyrating.html'
	    })

    .otherwise({ templateUrl: 'views/error.html', controller: "errorController"});

});

/*app.factory('postService', function($resource){
    return $resource('/api/posts/:id');
});*/

app.controller('mainController', [

    "$http", "$scope", "$rootScope",

    function($http, $scope, $rootScope){
	
	$rootScope.hideNav = false;

        $scope.school = {
            region : '',
            name : '',
            extra : ''
        };
	
	
        $scope.loadingSubmit = false;



        $scope.submitSchool = function(){
            console.dir($scope.school);
            $scope.loadingSubmit = true;
            $scope.showAddSchoolFormBoo = false;
            $http.post('api/school', $scope.school)
                .then(function(a,b){console.log(a, b)}, function(){})

        };


        $scope.showAddSchoolFormBoo = false;
    $scope.showAddSchoolForm = function(){
        if($scope.showAddSchoolFormBoo === true){
            $scope.showAddSchoolFormBoo = false;
        }
        else { $scope.showAddSchoolFormBoo = true;}
    }



}]);

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
    console.log('br line');
    $rootScope.authenticated = false;
    $rootScope.current_user = '';
    $location.path('/')
});

app.controller('schoolController', function($scope, $rootScope, $http){

    $http.get('api/school')

        .then (function(res){
            console.log(1)
            console.dir(res);
            $scope.schools = res.data;
            $scope.schools.forEach(function(school, index){school.id = res.data[index]._id})
         })


});

app.controller('ratingController', function($scope, $rootScope, $http){
   $scope.categoryNames = {
        coolness : 'Coolness und Humor ',
       fairness : 'Fairness der Notenverteilung',
       competence : 'Fachliche Kompetenz',
       fun : 'Spass im Unterricht',
       flexibility : 'Flexiblitaet & Eingehen auf die Schueler'

   };

    $scope.categoryKeys = Object.keys($scope.categoryNames);
    $scope.teacher = {
        rating : {
            coolness : 0,
            fairness : 0,
            competence : 0,
            fun: 0,
            flexibility : 0
        },
        name : 'Manu Masson',
        school : undefined,
        age : '23',
        subject : "Mathe, Sport"
    };

});

app.controller('certainSchoolController',  function($routeParams, $scope, $rootScope, $http){
    $scope.schoolId = $routeParams.id;
    $http.get('api/schools/' + $scope.schoolId).then(function(res){
        $scope.certainSchool = res.data;
    },function(){})
});

app.controller('errorController',  function($rootScope, $location, $window){
    $rootScope.hideNav = true;
	//Makes hideNav false on other pages
	setTimeout(
		function(){
		$rootScope.hideNav = false;
		},
	1)
	//redirects to home page

	setTimeout(
		function(){
		$window.location.href = "/"
		},
	1999)
});
