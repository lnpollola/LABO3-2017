var Clases;
(function (Clases) {
    var tipoEmpleado;
    (function (tipoEmpleado) {
        tipoEmpleado[tipoEmpleado["BARTENDER"] = 0] = "BARTENDER";
        tipoEmpleado[tipoEmpleado["CERVECERO"] = 1] = "CERVECERO";
        tipoEmpleado[tipoEmpleado["COCINERO"] = 2] = "COCINERO";
        tipoEmpleado[tipoEmpleado["MOZO"] = 3] = "MOZO";
        tipoEmpleado[tipoEmpleado["SOCIO"] = 4] = "SOCIO";
    })(tipoEmpleado = Clases.tipoEmpleado || (Clases.tipoEmpleado = {}));
    //ESTO LO HACE EL MOZO
    var estadoMesa;
    (function (estadoMesa) {
        estadoMesa[estadoMesa["CON CLIENTE ESPERANDO PEDIDO"] = 0] = "CON CLIENTE ESPERANDO PEDIDO";
        estadoMesa[estadoMesa["CON CLIENTES COMIENDO"] = 1] = "CON CLIENTES COMIENDO";
        estadoMesa[estadoMesa["CON CLIENTES PAGANDO"] = 2] = "CON CLIENTES PAGANDO";
        estadoMesa[estadoMesa["CERRADA"] = 3] = "CERRADA";
    })(estadoMesa = Clases.estadoMesa || (Clases.estadoMesa = {}));
    //ESTO LO HACE EL COCINERO
    var estadoPedido;
    (function (estadoPedido) {
        estadoPedido[estadoPedido["EN PREPARACION"] = 0] = "EN PREPARACION";
        estadoPedido[estadoPedido["LISTO PARA SERVIR"] = 1] = "LISTO PARA SERVIR";
    })(estadoPedido = Clases.estadoPedido || (Clases.estadoPedido = {}));
})(Clases || (Clases = {}));
//# sourceMappingURL=enumerado.js.map