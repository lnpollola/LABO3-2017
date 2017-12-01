namespace Clases
{
    export class Empleado extends Persona 
    { 
            private _id:number; 
            public _tipo:tipoEmpleado;
            public imagen:string; 
        
            constructor(nombre:string,edad:number,sexo:string,id:number,tipo:tipoEmpleado,imagen:string) 
        {
            super(nombre,edad,sexo);
            this._id=id;
            this._tipo=tipo;
            this.imagen=imagen;   
        }

        public personaCompleta():string
        { 
            return `${super.personaCompleta()};${this._id};${this._tipo}`;
        }

        public toString():string
        {
            return JSON.stringify(this.personaCompleta()); 
        }
    
    }
}