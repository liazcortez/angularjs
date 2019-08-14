var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/posts")
        .succes(function(data) {
            console.log(data);
        })
        .error(function(err) {
            console.log('error');
        });

});