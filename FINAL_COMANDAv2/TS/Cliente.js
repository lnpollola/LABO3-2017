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
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        //CONSTRUCTOR
        function Cliente(nombre, edad, sexo, estado) {
            var _this = _super.call(this, nombre, edad, sexo) || this;
            //CALCULO DE ID
            // var maximo = calcularMaximo();
            // maximo++;
            // this._nroCliente = maximo;
            _this._estadoCliente = estado;
            return _this;
        }
        //GETTERS
        Cliente.prototype.empleadoCompleto = function () {
            return _super.prototype.empleadoCompleto.call(this) + ";" + this._nroCliente + ";" + this._estadoCliente + " ";
        };
        Cliente.prototype.estadoEmpleado = function () {
            return JSON.stringify(this._estadoCliente);
        };
        Cliente.prototype.toString = function () {
            return JSON.stringify(this.empleadoCompleto());
        };
        return Cliente;
    }(Clases.Persona));
    Clases.Cliente = Cliente;
})(Clases || (Clases = {}));
//# sourceMappingURL=Cliente.js.map