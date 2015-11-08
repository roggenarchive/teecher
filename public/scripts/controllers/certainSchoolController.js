app.controller('certainSchoolController', function ($routeParams, $scope, $rootScope, $http) {
    $scope.schoolId = $routeParams.id;
    $http.get('api/schools/' + $scope.schoolId).then(function (res) {
        $scope.certainSchool = res.data;
    }, function () {
    })
});

