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
        Animal.prototype.animalCompleto = function () {
            return this._nombre + ";" + this._edad + ";" + this._cantPatas;
        };
        Animal.prototype.toJson = function () {
            return this.animalCompleto();
        };
        return Animal;
    }());
    Clases.Animal = Animal;
})(Clases || (Clases = {}));
