
namespace Clases 
{          
    export class Pedido 
    {
        //ATRIBUTOS
        public _nroPedido:string;
        public _estado:estadoPedido;
        public _fechahoraIngreso:string; 
        public _fechahoraFinEstimado:string;
        public _nombreCliente:string; 
        public _imagen:string;
        public _mesaAsignada:string;
        public _sectorTragos:boolean = false;
        public _sectorVinos:boolean= false;
        public _sectorCerveza:boolean= false;
        public _sectorCocina:boolean= false;
        public _sectorCandy:boolean= false;
        public _productosTragos:string="";
        public _productosVinos:string="";
        public _productosCerveza:string="";
        public _productosCocina:string="";
        public _productosCandy:string="";

        //CONSTRUCTOR
            constructor(codAlfa:string,estado:estadoPedido,nombreCliente:string,mesaAsignada:string,imagen:string) 
            {
                
                this._nroPedido=codAlfa;
                this._estado=estado; 
                this._nombreCliente = nombreCliente;
                this._fechahoraIngreso=new Date().toLocaleTimeString();
                this._imagen=imagen;
                this._mesaAsignada = mesaAsignada;
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

            public get HoraIngreso() : string 
            {
                return this._fechahoraIngreso;
            }

            public get TiempoEstimado() : number 
            {
                      // var minutos = (endDate.getTime() - startDate.getTime()) / (1000*60);

                // this._fechahoraFinEstimado=tiempoEstimado;
                // return this._tiempoEstimado;
                return 1;
            }

            //CONSTRUIR DESPUES
            public get TiempoRestante() : number 
            {
                return 1;
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