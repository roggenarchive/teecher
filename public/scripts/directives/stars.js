angular.module('starsDirective', [])
    .directive('stars', function () {
        return {
            restrict : 'E',
            title: "=",
            templateUrl : "../../views/stars.html",
            controller :
             function($scope, $rootScope, $http){

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

            }

            }
        });
