namespace Clases
{
    export class Mascota extends Animal 
    {
            private _id:number; 
            public _tipo:tipoMascota; 
        
        constructor(nombre:string,edad:number,cantPatas:number,id:number,tipo:tipoMascota) 
        {
            super(nombre,edad,cantPatas);
            this._id=id;
            this._tipo=tipo;
        }

        public animalCompleto():string
        { 
            return `${super.animalCompleto()},${this._id},${this._tipo}`;
        }

        public toJson():string
        {
            return JSON.stringify(this.animalCompleto()); 
        }
    
    }
}