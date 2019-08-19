(function() {

    var app = angular.module('universidadApp', []);

    app.controller('listadoCtrl', ['$scope', function(s) {

        s.listado = ["fernando herrera", "Melisa Flores", "Kelly del una"];

        s.listadoprofesores = [{
                nombre: "juancarlos",
                edad: "29",
                clase: "PEE"
            },
            {
                nombre: "Melissa",
                edad: "34",
                clase: "ICE"
            },
            {
                nombre: "Fernando",
                edad: "42",
                clase: "M110"
            }
        ]

    }]);





})();