"use strict";
var Clases;
(function (Clases) {
    var Animal = /** @class */ (function () {
        function Animal(nombre, edad, cantPatas) {
            this._nombre = nombre;
            this._edad = edad;
            this._cantPatas = cantPatas;
        }
        Object.defineProperty(Animal.prototype, "Nombre", {
            get: function () {
                return this._nombre;
            },
            enumerable: true,
            configurable: true
        });
        Animal.prototype.toJson = function (Nombre) {
            if (Nombre === void 0) { Nombre = function () { return ; }; }
            return;
        };
        return Animal;
    }());
    Clases.Animal = Animal;
})(Clases || (Clases = {}));
