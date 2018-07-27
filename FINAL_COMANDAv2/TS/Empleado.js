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
        //CONSTRUCTOR
        function Empleado(nombre, edad, sexo, tipo, estado, clave) {
            var _this = _super.call(this, nombre, edad, sexo) || this;
            //CALCULO DE ID
            // var maximo = calcularMaximo();
            // maximo++;
            // this._id = maximo;
            _this._tipo = tipo;
            _this._estado = estado;
            _this._clave = clave;
            return _this;
        }
        //GETTERS
        Empleado.prototype.empleadoCompleto = function () {
            return _super.prototype.empleadoCompleto.call(this) + ";" + this._id + ";" + this._tipo + ";" + this._estado + ";" + this._clave;
        };
        Empleado.prototype.estadoEmpleado = function () {
            return JSON.stringify(this._estado);
        };
        Empleado.prototype.toString = function () {
            return JSON.stringify(this.empleadoCompleto());
        };
        return Empleado;
    }(Clases.Persona));
    Clases.Empleado = Empleado;
})(Clases || (Clases = {}));
//# sourceMappingURL=Empleado.js.map