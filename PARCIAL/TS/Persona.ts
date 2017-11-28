namespace Clases 
{          
    export abstract class Persona 
    {
        private _nombre:string;
        private _edad:number;  
        private _sexo:string; 

        constructor(nombre:string,edad:number,sexo:string) 
        {
            this._nombre=nombre;
            this._edad=edad;
            this._sexo=sexo;    
        }
            
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

        public personaCompleta() : string 
        {
         return `${this._nombre};${this._edad};${this._sexo}`;
        }
            
        public toString():string
        {
            return this.personaCompleta(); 
        }
    }
}