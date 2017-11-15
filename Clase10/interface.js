//CLASES
//INTERFACES
// function enviarMision(xmen:any){
// function enviarMision(xmen:{nombre:string,peleasGanadas:number}){
//     console.log(xmen);
// }
function enviarMision(xmen) {
    console.log(xmen.nombre);
}
// let xmen = {
//     nombre: "Ciclope",
//     peleasGanadas : 4
// }
var xmen;
xmen.nombre = "Ciclope";
xmen.peleasGanadas = 4;
xmen.otroAtributo = "otroAtributo";
enviarMision(xmen);
var XMEN2 = /** @class */ (function () {
    function XMEN2() {
    }
    XMEN2.prototype.miMetodo = function () {
        throw new Error("Method not implemented.");
    };
    return XMEN2;
}());
var xmen2 = new XMEN2();
console.log(xmen2.miMetodo());
