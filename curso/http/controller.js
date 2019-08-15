var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope, $http) {
    $scope.posts = [];
    $scope.nombre = "alex";
    $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(success, error);

    function success(data) {
        console.log(data);
        $scope.posts = data;
    }

    function error(err) {
        console.log('error get');

    }

    $scope.addPost = function() {
        $http.post('https://jsonplaceholder.typicode.com/posts')
            .then(function(data, status, headers, config) {

            })
            .catch(function(err) {
                console.log("error post");

            });

    }
});