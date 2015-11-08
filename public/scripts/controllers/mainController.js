app.controller('mainController', [

    "$http", "$scope", "$rootScope",

    function ($http, $scope, $rootScope) {

        $rootScope.hideNav = false;

        $scope.school = {
            region: '',
            name: '',
            extra: ''
        };


        $scope.loadingSubmit = false;


        $scope.submitSchool = function () {
            $scope.loadingSubmit = true;
            $scope.showAddSchoolFormBoo = false;
            $http.post('api/school', $scope.school)

                .then(function (school) {

                    console.log(school)

                })

        };


        $scope.showAddSchoolFormBoo = false;
        $scope.showAddSchoolForm = function () {

            if ($scope.showAddSchoolFormBoo === true) {
                $scope.showAddSchoolFormBoo = false;
            }
            else {
                $scope.showAddSchoolFormBoo = true;
            }
        }


    }]);
