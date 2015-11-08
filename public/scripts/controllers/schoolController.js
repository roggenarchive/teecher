app.controller('schoolController', function ($scope, $rootScope, $http) {

    $http.get('api/school')

        .then(function (res) {
            console.log(1)
            console.dir(res);
            $scope.schools = res.data;
            $scope.schools.forEach(function (school, index) {
                school.id = res.data[index]._id
            })
        })


});