var Clases;
(function (Clases) {
    var Pedido = /** @class */ (function () {
        //CONSTRUCTOR
        function Pedido(codAlfa, estado, nombreCliente, mesaAsignada, imagen) {
            this._sectorTragos = false;
            this._sectorVinos = false;
            this._sectorCerveza = false;
            this._sectorCocina = false;
            this._sectorCandy = false;
            this._productosTragos = "";
            this._productosVinos = "";
            this._productosCerveza = "";
            this._productosCocina = "";
            this._productosCandy = "";
            this._nroPedido = codAlfa;
            this._estado = estado;
            this._nombreCliente = nombreCliente;
            this._fechahoraIngreso = new Date().toLocaleTimeString();
            this._imagen = imagen;
            this._mesaAsignada = mesaAsignada;
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
                return this._fechahoraIngreso;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pedido.prototype, "TiempoEstimado", {
            get: function () {
                // var minutos = (endDate.getTime() - startDate.getTime()) / (1000*60);
                // this._fechahoraFinEstimado=tiempoEstimado;
                // return this._tiempoEstimado;
                return 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pedido.prototype, "TiempoRestante", {
            //CONSTRUIR DESPUES
            get: function () {
                return 1;
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