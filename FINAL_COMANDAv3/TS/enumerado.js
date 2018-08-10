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
    var sectores;
    (function (sectores) {
        sectores[sectores["BARRA DE TRAGOS Y VINOS"] = 0] = "BARRA DE TRAGOS Y VINOS";
        sectores[sectores["BARRA DE CERVEZA"] = 1] = "BARRA DE CERVEZA";
        sectores[sectores["COCINA"] = 2] = "COCINA";
        sectores[sectores["CANDY BAR"] = 3] = "CANDY BAR";
    })(sectores = Clases.sectores || (Clases.sectores = {}));
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
    })(estadoMesa = Clases.estadoMesa || (Clases.estadoMesa = {}));
    //ESTO LO HACE EL COCINERO
    var estadoPedido;
    (function (estadoPedido) {
        estadoPedido[estadoPedido["ORDEN TOMADA"] = 0] = "ORDEN TOMADA";
        estadoPedido[estadoPedido["EN PREPARACION"] = 1] = "EN PREPARACION";
        estadoPedido[estadoPedido["LISTO PARA SERVIR"] = 2] = "LISTO PARA SERVIR";
    })(estadoPedido = Clases.estadoPedido || (Clases.estadoPedido = {}));
})(Clases || (Clases = {}));
//# sourceMappingURL=enumerado.js.map