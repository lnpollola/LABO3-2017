var Clases;
(function (Clases) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, edad, sexo) {
            this._nombre = nombre;
            this._edad = edad;
            this._sexo = sexo;
        }
        Object.defineProperty(Persona.prototype, "Nombre", {
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
        Persona.prototype.personaCompleta = function () {
            return this._nombre + ";" + this._edad + ";" + this._sexo;
        };
        Persona.prototype.toString = function () {
            return this.personaCompleta();
        };
        return Persona;
    }());
    Clases.Persona = Persona;
})(Clases || (Clases = {}));
