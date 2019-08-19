(function() {

    var app = angular.module('ejemplosApp', []);



    app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.profesores = {};
        $http.get('./json/profesores.json').then(params => {
            $scope.profesores = params.data.profesores;
            console.log($scope.profesores);

        });





    }]);





})();