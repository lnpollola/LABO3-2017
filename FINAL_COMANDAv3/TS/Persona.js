var Clases;
(function (Clases) {
    var Persona = /** @class */ (function () {
        //CONSTRUCTOR
        function Persona(nombre, edad, sexo) {
            this._nombre = nombre;
            this._edad = edad;
            this._sexo = sexo;
        }
        Object.defineProperty(Persona.prototype, "Nombre", {
            // GETTERS
            get: function () {
                return this._nombre;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Edad", {
            get: function () {
                return this._edad;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Sexo", {
            get: function () {
                return this._sexo;
            },
            enumerable: true,
            configurable: true
        });
        Persona.prototype.empleadoCompleto = function () {
            return this._nombre + ";" + this._edad + ";" + this._sexo;
        };
        //CONVERSIÓN    
        Persona.prototype.toString = function () {
            return this.empleadoCompleto();
        };
        return Persona;
    }());
    Clases.Persona = Persona;
})(Clases || (Clases = {}));
//# sourceMappingURL=Persona.js.map