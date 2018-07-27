namespace Clases
{
    export class Empleado extends Persona 
    { 
        //ATRIBUTOS
            private _id:number; 
            public _tipo:tipoEmpleado;
            private _estado:estadoCLIEMP;
            private _clave:string;

        //CONSTRUCTOR
        constructor(nombre:string,edad:number,sexo:string,tipo:tipoEmpleado,estado:estadoCLIEMP,clave:string) 
        {
            super(nombre,edad,sexo);
            
            //CALCULO DE ID
                // var maximo = calcularMaximo();
                // maximo++;
                // this._id = maximo;
            
            this._tipo=tipo;  
            this._estado=estado;
            this._clave = clave;
        }


        //GETTERS
        public empleadoCompleto():string
        { 
            return `${super.empleadoCompleto()};${this._id};${this._tipo};${this._estado};${this._clave}`;
        }

        public estadoEmpleado():string
        {
            return JSON.stringify(this._estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empleadoCompleto()); 
        }
    
    }
}