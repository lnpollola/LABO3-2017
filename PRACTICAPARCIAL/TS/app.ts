///<reference path="../node_modules/@types/jquery/index.d.ts" />
// namespace Clases{

$(function(){
    // localStorage.clear();
    var i = 0;

    let select = $("#tipoMasc");
    for (var i = 0; i < 6; i++) 
    {
        select.append("<option value="+i+">"+Clases.tipoMascota[i]+"</option>");
    }

    mostrarMascotas();


});
function agregarMascota():void
{
    let tipo: Clases.tipoMascota  = Number($('#tipoMasc').val()); 
    let nuevaMascota = new Clases.Mascota(  String ($('#nombre').val()),
                                            Number ($('#edad').val()),
                                            Number ($('#patas').val()),
                                            Number ($('#id').val()),
                                            tipo
                                            );
    
    let MascotasString:string|null = localStorage.getItem("Mascotas");
    // //la primera vez no hay nada, las otras veces string
        let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(MascotasString); // ESTO ES UN IF        
        MascotasJson.push( JSON.parse(nuevaMascota.toJson()));
        localStorage.setItem("Mascotas",JSON.stringify(MascotasJson));
    console.log(MascotasJson);
    alert ("Mascota guardada");
    mostrarMascotas();
}

function mostrarMascotas():void
{
    let MascotasString:string|null = localStorage.getItem("Mascotas");
    let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(MascotasString); // ESTO ES UN IF        
    // //la primera vez no hay nada, las otras veces string
  
    let tabla = $("#tCuerpo");
    tabla["0"].innerHTML ="";
    for (var i = 0; i < MascotasJson.length ; i++) 
    {
        let varAppend = "<tr><td>" + MascotasJson[i].split(',')[0] + "</td>"+
                        "<td>" + MascotasJson[i].split(',')[1] + "</td>"+
                        "<td>" + MascotasJson[i].split(',')[2] + "</td>"+
                        "<td>" + MascotasJson[i].split(',')[3] + "</td>"+
                        "<td>" + MascotasJson[i].split(',')[4] + "</td></tr>"       
        tabla.append(varAppend);
   }

    // "${Clases.tipoMascota[MascotaJSON[i].nombre]}<td td> ${}"
}