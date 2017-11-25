namespace Clases 
{         
    export abstract class Animal 
    {
        private _nombre:string;
        private _edad:number;  
        private _cantPatas:number; 

        constructor(nombre:string,edad:number,cantPatas:number) 
        {
            this._nombre=nombre;
            this._edad=edad;
            this._cantPatas=cantPatas;    
        }
            
        public get Nombre() : string 
        {
            return this._nombre;
        }

        public animalCompleto() : string 
        {
         return `${this._nombre},${this._edad},${this._cantPatas}`;
            
        }
            
        public toJson():string
        {
            return this.animalCompleto(); 
        }
    }
}