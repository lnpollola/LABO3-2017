namespace Clases 
{          
    export class Mesa 
    {
        //ATRIBUTOS
        public _codAlfa:string;
        public _estado:estadoMesa; 
        public _cantPedidos:number;
        public _recaudacion:number;
       
  

        //CONSTRUCTOR
            constructor(codAlfa:string,estado:estadoMesa) 
            {
                this._codAlfa=codAlfa;
                this._estado=estado; 
                this._cantPedidos=0;
                this._recaudacion=0;
            }

            
        // GETTERS
            public get CodigoMesa() : string 
        {
            return this._codAlfa;
            }
        
            public get EstadoMesa() : number 
            {
                return this._estado;
            }
        
            public mesaCompleta() : string 
            {
            return `${this._codAlfa};${this._estado}`;
            }


        //SETTERS
            public guardoPedido() 
            {
                this._cantPedidos ++;
            }

            public guardoRecaudacion(recaudacion:number) 
            {
                this._recaudacion += recaudacion   ;
            }
                
        //CONVERSIÓN    
            public toString():string
            {
                return this.mesaCompleta(); 
            }

    }
}