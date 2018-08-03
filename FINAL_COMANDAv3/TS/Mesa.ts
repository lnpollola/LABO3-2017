
namespace Clases 
{          
    export class Mesa 
    {
        //ATRIBUTOS
        public _codAlfa:string;
        public _estado:estadoMesa; 
  

        //CONSTRUCTOR
            constructor(codAlfa:string,estado:estadoMesa) 
            {
                this._codAlfa=codAlfa;
                this._estado=estado; 
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

        //CONVERSIÓN    
            public toString():string
            {
                return this.mesaCompleta(); 
            }
    }
}