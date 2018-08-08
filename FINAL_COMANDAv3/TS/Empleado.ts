namespace Clases
{
    export class Empleado extends Persona 
    { 
        //ATRIBUTOS
        public _id:number; 
            public _tipo:tipoEmpleado;
            public _estado:estadoCLIEMP;
            public _clave:string;
            public _imagen:string; 
            public _fechaDesde:string; 
            public _fechaHasta:string;

        //CONSTRUCTOR
        constructor(nombre:string,edad:number,sexo:string,tipo:tipoEmpleado,estado:estadoCLIEMP,clave:string,fechaFincontrato:string) 
        {
            super(nombre,edad,sexo);
            
            //CALCULO DE ID
                var maximo = calcularIdEmpleado();
                maximo++;
                this._id = maximo;
            
            this._tipo=tipo;  
            this._estado=estado;
            this._clave = clave;
            this._fechaDesde = new Date().toLocaleDateString();
            this._fechaHasta = fechaFincontrato;
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