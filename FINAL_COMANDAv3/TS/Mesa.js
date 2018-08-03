var Clases;
(function (Clases) {
    var Mesa = /** @class */ (function () {
        //CONSTRUCTOR
        function Mesa(codAlfa, estado) {
            this._codAlfa = codAlfa;
            this._estado = Clases.estadoMesa.ABIERTA;
            this._cantPedidos = 0;
            this._recaudacion = 0;
        }
        Object.defineProperty(Mesa.prototype, "CodigoMesa", {
            // GETTERS
            get: function () {
                return this._codAlfa;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Mesa.prototype, "EstadoMesa", {
            get: function () {
                return this._estado;
            },
            enumerable: true,
            configurable: true
        });
        Mesa.prototype.mesaCompleta = function () {
            return this._codAlfa + ";" + this._estado;
        };
        //SETTERS
        Mesa.prototype.guardoPedido = function () {
            this._cantPedidos++;
        };
        Mesa.prototype.guardoRecaudacion = function (recaudacion) {
            this._recaudacion += recaudacion;
        };
        //CONVERSIÓN    
        Mesa.prototype.toString = function () {
            return this.mesaCompleta();
        };
        return Mesa;
    }());
    Clases.Mesa = Mesa;
})(Clases || (Clases = {}));
//# sourceMappingURL=Mesa.js.map