var app = angular.module("MyFirstApp", []);
app.controller("FirstController", ["$scope,$http", function(s, h) {
    s.nombre = "uriel";
    s.nuevoComentario = {

    };

    s.comentarios = [{
        comentario: "Buen tutorial",
        username: "Codigo facilito"
    }, {
        comentario: "Malisimo tutorial",
        username: "otro usuario"
    }];
    s.agregarComentario = function() {
        s.comentarios.push(s.nuevoComentario);
        s.nuevoComentario = {};
    }
}]);