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
    var sectoresProd;
    (function (sectoresProd) {
        sectoresProd[sectoresProd["TRAGOS"] = 0] = "TRAGOS";
        sectoresProd[sectoresProd["VINOS"] = 1] = "VINOS";
        sectoresProd[sectoresProd["CERVEZA ARTESANAL"] = 2] = "CERVEZA ARTESANAL";
        sectoresProd[sectoresProd["COCINA"] = 3] = "COCINA";
        sectoresProd[sectoresProd["CANDY BAR"] = 4] = "CANDY BAR";
    })(sectoresProd = Clases.sectoresProd || (Clases.sectoresProd = {}));
    var estadoCLIEMP;
    (function (estadoCLIEMP) {
        estadoCLIEMP[estadoCLIEMP["ACTIVO"] = 0] = "ACTIVO";
        estadoCLIEMP[estadoCLIEMP["SUSPENDIDO"] = 1] = "SUSPENDIDO";
        estadoCLIEMP[estadoCLIEMP["BAJA"] = 2] = "BAJA";
        estadoCLIEMP[estadoCLIEMP["MODIFICAR"] = 3] = "MODIFICAR";
    })(estadoCLIEMP = Clases.estadoCLIEMP || (Clases.estadoCLIEMP = {}));
    //ESTO LO HACE EL MOZO
    var estadoMesa;
    (function (estadoMesa) {
        estadoMesa[estadoMesa["ABIERTA"] = 0] = "ABIERTA";
        estadoMesa[estadoMesa["CON CLIENTE ESPERANDO PEDIDO"] = 1] = "CON CLIENTE ESPERANDO PEDIDO";
        estadoMesa[estadoMesa["CON CLIENTES COMIENDO"] = 2] = "CON CLIENTES COMIENDO";
        estadoMesa[estadoMesa["CON CLIENTES PAGANDO"] = 3] = "CON CLIENTES PAGANDO";
        estadoMesa[estadoMesa["CERRADA"] = 4] = "CERRADA";
        estadoMesa[estadoMesa["MODIFICAR"] = 5] = "MODIFICAR";
    })(estadoMesa = Clases.estadoMesa || (Clases.estadoMesa = {}));
    //ESTO LO HACE EL COCINERO
    var estadoPedido;
    (function (estadoPedido) {
        estadoPedido[estadoPedido["ORDEN TOMADA"] = 0] = "ORDEN TOMADA";
        estadoPedido[estadoPedido["EN PREPARACION"] = 1] = "EN PREPARACION";
        estadoPedido[estadoPedido["LISTO PARA SERVIR"] = 2] = "LISTO PARA SERVIR";
        estadoPedido[estadoPedido["SERVIDO"] = 3] = "SERVIDO";
        estadoPedido[estadoPedido["MODIFICAR"] = 4] = "MODIFICAR";
    })(estadoPedido = Clases.estadoPedido || (Clases.estadoPedido = {}));
})(Clases || (Clases = {}));
//# sourceMappingURL=enumerado.js.map