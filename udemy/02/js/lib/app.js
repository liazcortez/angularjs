var app = angular.module('universidadApp', []);

app.controller('profesorCtrl', ['$scope', function(scope) {


    scope.profesor = profesorData;
    scope.editar = {};
    scope.ocultar = true;
    scope.editarProfesor = function() {
        angular.copy(scope.profesor, scope.editar);
        scope.ocultar = false;

    }
    scope.guardar = function() {

        angular.copy(scope.editar, scope.profesor, );
        scope.ocultar = true;


    }
    scope.borrar = function() {

        scope.editar = {};
        scope.ocultar = true;

    }


}]);

var profesorData = {
    nombre: "Juan Carlos Pineda",
    bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
    edad: 47,
    foto: "img/juancarlos.jpg"
}