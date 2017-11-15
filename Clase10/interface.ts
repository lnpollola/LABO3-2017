//CLASES
//INTERFACES

interface IXmen{
    nombre:string;
    peleasGanadas:number;
    otroAtributo: string;
    miMetodo(): string;   
}

// function enviarMision(xmen:any){
// function enviarMision(xmen:{nombre:string,peleasGanadas:number}){
//     console.log(xmen);
// }

function enviarMision(xmen:IXmen){
    console.log(xmen.nombre);
}

// let xmen = {
//     nombre: "Ciclope",
//     peleasGanadas : 4
// }

let xmen:IXmen;
xmen.nombre = "Ciclope";
xmen.peleasGanadas = 4;
xmen.otroAtributo = "otroAtributo";

enviarMision(xmen);

class XMEN2 implements IXmen{
    nombre: string;
    peleasGanadas: number;
    otroAtributo: string;
    miMetodo(): string {
        throw new Error("Method not implemented.");
    }
}

let xmen2:XMEN2 = new XMEN2();
console.log(xmen2.miMetodo());