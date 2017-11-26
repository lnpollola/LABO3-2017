///<reference path="../node_modules/@types/jquery/index.d.ts" />
// namespace Clases{

$(function(){

    //FORM MODIFICADO POR CHECKBOX
    $("#checkFORM :checkbox").change(function() {
        var checkboxON = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();
        tablaDinamica(checkboxON);
    });

    var i = 0;
    let select = $("#tipoMasc");
    for (var i = 0; i < 6; i++) 
    {
        select.append("<option value="+i+">"+Clases.tipoMascota[i]+"</option>");
    }
    mostrarMascotas();
});

function tablaDinamica(checkboxON) 
{
    //CABECERA DE LA TABLA
    if(checkboxON.length != 0)
    {
        let row_name = checkboxON;
        let cabecera = $("#tCabecera");
        cabecera["0"].innerHTML ="";

        row_name.forEach(element => 
        {
            if (element != "") 
            {
                let cabeceraArmada = $('<th>' + element + '</th>');
                cabecera.append(cabeceraArmada);
            } 
        });
    }
    else
    {  
        let cabecera = $("#tCabecera");
        cabecera["0"].innerHTML ="";
        var devuelve =  "<th>ID</th>"       +
                        "<th>Nombre</th>"   +  
                        "<th>Edad</th>"     +
                        "<th>Tipo</th>"     +  
                        "<th>Patas</th>";
        cabecera.append(devuelve);
    }

        //CUERPO DE LA TABLA
    let MascotasString:string|null =  JSON.parse(localStorage.getItem("Mascotas") || "[]");
    
    let tabla = $("#tCuerpo");
    tabla["0"].innerHTML ="";

    for (var i = 0; i < MascotasString.length ; i++) 
    {
        let mascotaActual = JSON.parse(MascotasString[i]);
        //AGREGO LAS COLUMNAS SEGUN VAYAN O NO
        tabla.append("<tr>");

        checkboxON.includes("ID")       == true ? tabla.append("<td>"+mascotaActual._id                         + "</td>") : null ; 
        checkboxON.includes("NOMBRE")   == true ? tabla.append("<td>"+mascotaActual._nombre                     + "</td>") : null ; 
        checkboxON.includes("EDAD")     == true ? tabla.append("<td>"+mascotaActual._edad                       + "</td>") : null ; 
        checkboxON.includes("TIPO")     == true ? tabla.append("<td>"+Clases.tipoMascota[mascotaActual._tipo]   + "</td>") : null ; 
        checkboxON.includes("CANTPATAS")== true ? tabla.append("<td>"+mascotaActual._cantPatas                  + "</td>") : null ; 
        
        tabla.append("</tr>");
    }
}

function limpiarLista():void
{
       localStorage.clear();
       mostrarMascotas();
}
function agregarMascota():void
{
    let tipo: Clases.tipoMascota  = Number($('#tipoMasc').val()); 
    let nuevaMascota = new Clases.Mascota(  String ($('#nombre').val()),
                                            Number ($('#edad').val()),
                                            Number ($('#patas').val()),
                                            Number ($('#id').val()),
                                            tipo
                                            );
    
    let MascotasString  = JSON.parse(localStorage.getItem("Mascotas") || "[]");
    MascotasString.push( JSON.stringify(nuevaMascota));
    localStorage.setItem("Mascotas",JSON.stringify(MascotasString));
        
    console.log(MascotasString);
    alert ("Mascota guardada");
    mostrarMascotas(); 
} 
 
function mostrarMascotas():void
{
    let MascotasString:string|null =  JSON.parse(localStorage.getItem("Mascotas") || "[]");
    
    let tabla = $("#tCuerpo");
    tabla["0"].innerHTML ="";
    for (var i = 0; i < MascotasString.length ; i++) 
    {
        let mascotaActual = JSON.parse(MascotasString[i]);
        let miTipo = Clases.tipoMascota[mascotaActual._tipo];

        let varAppend = "<tr><td>"  + mascotaActual._id                         + "</td>"+
                        "<td>"      + mascotaActual._nombre                     + "</td>"+
                        "<td>"      + mascotaActual._edad                       + "</td>"+
                        "<td>"      + Clases.tipoMascota[mascotaActual._tipo]   + "</td>"+
                        "<td>"      + mascotaActual._cantPatas                  + "</td></tr>"       
        tabla.append(varAppend); 
   }
}
