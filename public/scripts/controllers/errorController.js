app.controller('errorController', function ($rootScope, $location, $window) {
    $rootScope.hideNav = true;
    //Makes hideNav false on other pages
    setTimeout(
        function () {
            $rootScope.hideNav = false;
        },
        1)
    //redirects to home page

    setTimeout(
        function () {
            $window.location.href = "/"
        },
        1999)
});