namespace Clases 
{          
    export abstract class Persona 
    {
        //ATRIBUTOS
            private _nombre:string;
            private _edad:number;  
            private _sexo:string; 
            private _estado:string;

        //CONSTRUCTOR
            constructor(nombre:string,edad:number,sexo:string,estado:string) 
            {
                this._nombre=nombre;
                this._edad=edad;
                this._sexo=sexo;    
                this._estado = estado;
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
        
            public get Estado() : string
            {
                return this._estado;
            }
        
            public empleadoCompleto() : string 
            {
            return `${this._nombre};${this._edad};${this._sexo}`;${this._estado};
            }

        //CONVERSIÓN    
            public toString():string
            {
                return this.empleadoCompleto(); 
            }
    }
}