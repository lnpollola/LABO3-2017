namespace Clases{
    export enum tipoEmpleado{
        "BARTENDER",
        "CERVECERO",
        "COCINERO",
        "MOZO",
        "SOCIO"
    }

    //ESTO LO HACE EL MOZO
    export enum estadoMesa{
        "CON CLIENTE ESPERANDO PEDIDO",
        "CON CLIENTES COMIENDO",
        "CON CLIENTES PAGANDO",
        "CERRADA"
    }

    //ESTO LO HACE EL COCINERO
    export enum estadoPedido{
        "EN PREPARACION",
        "LISTO PARA SERVIR"
    }

  }