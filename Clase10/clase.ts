//CLASES 
//  PROPRIEDADES, CONSTRUCTORES, METODOS

class Avenger{
    private _nombre:string;
    nombreReal:string;
    peleasGanadas:number;

    constructor (nombre:string,nombreReal:string, peleasGanadas:number){
        this._nombre=nombre;
        this.nombreReal=nombreReal;
        this.peleasGanadas=peleasGanadas;
    }

    mostrar():string{
        return `${this._nombre}, ${this.nombreReal}, ${this.peleasGanadas}`;
    }

    get nombre():string{
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

}

let a1:Avenger = new Avenger("Iron Man","Tony",10);
// a1.nombreReal = "Tony";
// a1.peleasGanadas = 10;
console.log(a1.mostrar());
console.log(a1);