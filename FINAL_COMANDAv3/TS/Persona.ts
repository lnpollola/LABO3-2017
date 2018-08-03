namespace Clases 
{          
    export abstract class Persona 
    {
        //ATRIBUTOS
        public _nombre:string;
        public _edad:number;  
        public _sexo:string; 
  

        //CONSTRUCTOR
            constructor(nombre:string,edad:number,sexo:string) 
            {
                this._nombre=nombre;
                this._edad=edad;
                this._sexo=sexo;    
            }
            
        // GETTERS
            public get Nombre() : string 
        {
            return this._nombre;
            }
        
            public get Edad() : number 
            {
                return this._edad;
            }

            public get Sexo() : string
            {
                return this._sexo;
            }
        
            public empleadoCompleto() : string 
            {
            return `${this._nombre};${this._edad};${this._sexo}`;
            }

        //CONVERSIÓN    
            public toString():string
            {
                return this.empleadoCompleto(); 
            }
    }
}