namespace Clases
{
    export class Empleado extends Persona 
    { 
            private _id:number; 
            public _tipo:tipoEmpleado;
            public imagen:string; 
                    
            constructor(nombre:string,edad:number,sexo:string,tipo:tipoEmpleado,imagen:string) 
        {
            super(nombre,edad,sexo);
            
            //CALCULO DE ID
            // if( primeravez == 0) {this._id = 0;}
            // else 
            // {
            //     // var maximoID = calcularMaximo();
                var maximo = calcularMaximo();
                maximo++;
                this._id = maximo;
            // }
            // this._id=id;
            
            
            this._tipo=tipo;
            this.imagen=imagen;   

            // primeravez ++;
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