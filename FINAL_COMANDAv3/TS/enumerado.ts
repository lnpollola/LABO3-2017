namespace Clases{
    export enum tipoEmpleado{
        "BARTENDER",
        "CERVECERO",
        "COCINERO",
        "MOZO",
        "SOCIO"
    }

    export enum estadoCLIEMP{
        "ACTIVO",
        "SUSPENDIDO",
        "BAJA"
    }

    //ESTO LO HACE EL MOZO
    export enum estadoMesa{
        "ABIERTA",
        "CON CLIENTE ESPERANDO PEDIDO",
        "CON CLIENTES COMIENDO",
        "CON CLIENTES PAGANDO",
        "CERRADA"
    }

    //ESTO LO HACE EL COCINERO
    export enum estadoPedido{
        "ORDEN TOMADA",
        "EN PREPARACION",
        "LISTO PARA SERVIR"
    }

  }