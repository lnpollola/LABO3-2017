
namespace Clases 
{          
    export class Pedido 
    {
        //ATRIBUTOS
        public _nroPedido:string;
        public _estado:estadoPedido;
        public _horaIngreso:Date; 
        public _tiempoEstimado:Date;
  

        //CONSTRUCTOR
            constructor(nroPedido:string,estado:estadoPedido,horaIngreso:Date,tiempoEstimado:Date) 
            {
                this._nroPedido=nroPedido;
                this._estado=estado; 
                this._horaIngreso=horaIngreso;
                this._tiempoEstimado=tiempoEstimado;
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