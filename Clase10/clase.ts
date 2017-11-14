//CLASES 
//  PROPRIEDADES, CONSTRUCTORES, METODOS
namespace EsClase10{
    
export class Avenger{
    private _nombre:string|undefined;
    nombreReal:string;
    peleasGanadas:number;

    constructor (nombreReal:string, peleasGanadas:number,nombre?:string){
   //cuando pongo el signo de pregunta, tengo que sacar el strict del tsconfig.json
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

//OTRA CLASE, HEREDADA
class Xmen extends Avenger{
    private _poder:string;
    constructor(nr:string,pg:number,n:string,p:string){
        super(nr,pg,n);
        this._poder = p;
        
    }    

    mostrar():string{
        return super.mostrar() + " "+ this._poder;
    }

}

//////////////////////
class Apocalipsis{
    private static _instance:Apocalipsis;
    //COMO HACER PARA HACER 1 SOLO APOCALIPSIS QUE NO HAYA MAS
    //EL CONSTRUCTOR ES PRIVADO 
    private constructor(public nombre:string){


    }
    //Instancio o no dependiendo si ya existe
    static get Instance():Apocalipsis{
        if(!(this._instance)){
            this._instance = new Apocalipsis("HEEELL");
        }
        return this._instance;
    }
}


let a1 : Avenger = new Avenger("Iron Man",10,"Tony");
let a2:Avenger = new Avenger("Bruce",10);
let x1:Xmen = new Xmen("Logan",2,"Wolverine","garras mortales")

console.log(a1);
console.log(a1.mostrar());
console.log(a2.mostrar());
console.log(x1.mostrar());

//ARray de avenger
let array = new Array<Avenger>();
array.push(a1);
array.push(a2);
array.push(x1);

console.log(Apocalipsis.Instance);


}