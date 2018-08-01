namespace Clases
{
    export class Cliente extends Persona 
    { 
        //ATRIBUTOS
            public _nroCliente:number; 
            public _estadoCliente:estadoCLIEMP;

        //CONSTRUCTOR
        constructor(nombre:string,edad:number,sexo:string,estado:estadoCLIEMP) 
        {
            super(nombre,edad,sexo);
            
            //CALCULO DE ID
                // var maximo = calcularMaximo();
                // maximo++;
                // this._nroCliente = maximo;

            this._estadoCliente=estado;
        }


        //GETTERS
        public empleadoCompleto():string
        { 
            return `${super.empleadoCompleto()};${this._nroCliente};${this._estadoCliente} `;
        }

        public estadoEmpleado():string
        {
            return JSON.stringify(this._estadoCliente);
        }

        public toString():string
        {
            return JSON.stringify(this.empleadoCompleto()); 
        }
    
    }
}