app.controller('logoutController', function ($scope, $rootScope, $location, $http) {
    $http.get('auth/signout');
    console.log('br line');
    $rootScope.authenticated = false;
    $rootScope.current_user = '';
    $location.path('/')
});