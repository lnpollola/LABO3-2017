var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, edad, sexo, id, tipo, imagen) {
            var _this = _super.call(this, nombre, edad, sexo) || this;
            _this._id = id;
            _this._tipo = tipo;
            _this.imagen = imagen;
            return _this;
        }
        Empleado.prototype.personaCompleta = function () {
            return _super.prototype.personaCompleta.call(this) + ";" + this._id + ";" + this._tipo;
        };
        Empleado.prototype.toString = function () {
            return JSON.stringify(this.personaCompleta());
        };
        return Empleado;
    }(Clases.Persona));
    Clases.Empleado = Empleado;
})(Clases || (Clases = {}));
