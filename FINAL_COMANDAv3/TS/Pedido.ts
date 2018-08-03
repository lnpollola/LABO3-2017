
namespace Clases 
{          
    export class Pedido 
    {
        //ATRIBUTOS
        public _nroPedido:string;
        public _estado:estadoPedido;
        public _fechahoraIngreso:string; 
        public _fechahoraFinEstimado:Date;
        public _nombreCliente:string; 
        public _imagen:string;
        public _mesaAsignada:string;
  

        //CONSTRUCTOR
            constructor(codAlfa:string,estado:estadoPedido,nombreCliente:string,mesaAsignada:string,imagen:string) 
            {
                
                this._nroPedido=codAlfa;
                this._estado=estado; 
                this._nombreCliente = nombreCliente;
                this._fechahoraIngreso=new Date().toLocaleTimeString();
                this._imagen=imagen;

                // var minutos = (endDate.getTime() - startDate.getTime()) / (1000*60);

                // this._fechahoraFinEstimado=tiempoEstimado;
            }
            
        // GETTERS
            public get NroPedido() : string 
        {
            return this._nroPedido;
            }
        
            public get EstadoPedido() : number 
            {
                return this._estado;
            }

            public get HoraIngreso() : Date 
            {
                return this._horaIngreso;
            }

            public get TiempoEstimado() : Date 
            {
                return this._tiempoEstimado;
            }

            //CONSTRUIR DESPUES
            public get TiempoRestante() : Date 
            {
                return this._tiempoEstimado;
            }


        
            public pedidoCompleto() : string 
            {
            return `${this._nroPedido};${this._estado}`;
            }

        //CONVERSIÓN    
            public toString():string
            {
                return this.pedidoCompleto(); 
            }
    }
}