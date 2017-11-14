"use strict";
//CLASES 
//  PROPRIEDADES, CONSTRUCTORES, METODOS
var Avenger = /** @class */ (function () {
    function Avenger(nombre, nombreReal, peleasGanadas) {
        this._nombre = nombre;
        this.nombreReal = nombreReal;
        this.peleasGanadas = peleasGanadas;
    }
    Avenger.prototype.mostrar = function () {
        return this._nombre + ", " + this.nombreReal + ", " + this.peleasGanadas;
    };
    Object.defineProperty(Avenger.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
var a1 = new Avenger("Iron Man", "Tony", 10);
// a1.nombreReal = "Tony";
// a1.peleasGanadas = 10;
console.log(a1.mostrar());
console.log(a1);
