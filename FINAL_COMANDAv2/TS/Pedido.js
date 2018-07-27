var Clases;
(function (Clases) {
    var Pedido = /** @class */ (function () {
        //CONSTRUCTOR
        function Pedido(nroPedido, estado, horaIngreso, tiempoEstimado) {
            this._nroPedido = nroPedido;
            this._estado = estado;
            this._horaIngreso = horaIngreso;
            this._tiempoEstimado = tiempoEstimado;
        }
        Object.defineProperty(Pedido.prototype, "NroPedido", {
            // GETTERS
            get: function () {
                return this._nroPedido;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pedido.prototype, "EstadoPedido", {
            get: function () {
                return this._estado;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pedido.prototype, "HoraIngreso", {
            get: function () {
                return this._horaIngreso;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pedido.prototype, "TiempoEstimado", {
            get: function () {
                return this._tiempoEstimado;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pedido.prototype, "TiempoRestante", {
            //CONSTRUIR DESPUES
            get: function () {
                return this._tiempoEstimado;
            },
            enumerable: true,
            configurable: true
        });
        Pedido.prototype.pedidoCompleto = function () {
            return this._nroPedido + ";" + this._estado;
        };
        //CONVERSIÓN    
        Pedido.prototype.toString = function () {
            return this.pedidoCompleto();
        };
        return Pedido;
    }());
    Clases.Pedido = Pedido;
})(Clases || (Clases = {}));
//# sourceMappingURL=Pedido.js.map