///<reference path="../node_modules/@types/jquery/index.d.ts" />
// namespace Clases{

$(function(){

    //EVENTOS
        //FORM MODIFICADO POR CHECKBOX
        $("#checkFORM :checkbox").change(function() {
            encabezadoCheck();
        });
        //BOTON FILTRAR
        $("#filtrarPor").change(function(){
            let valorFiltro = $('#filtrarPor').map(function() { return this.value; }).get();
            mostrarMascotas( valorFiltro);
        });

    //CARGA DE LA PAGINA
    encabezadoCheck();
    cargoMenusEncabezado();
    mostrarMascotas();
});

/////////////////////////////////////////FUNCIONES DEL SISTEMA/////////////////////////////////////////

//TRAIGO EN UN ARRAY LOS VALORES DEVUELTOS DE LOS CHECKBOX ON
//ARMO LA TABLA DINAMICA PASANDO LOS ENCABEZADOS Y FILTROS A MOSTRAR COLUMNAS
function encabezadoCheck()
{
    var checkboxON = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();
    tablaDinamica(checkboxON);
}
//BOTON DE LIMPIAR LISTA
function limpiarLista():void
{
       localStorage.clear();
       mostrarMascotas();
}

//CARGO LOS DROPDOWN QUE DEPENDEN DEL ENUMERADO
function cargoMenusEncabezado()
{
    //ENCABEZADO DE FORM DE CARGA
    var i = 0;
    let select = $("#tipoMasc");
    for (var i = 0; i < 6; i++) 
    {
        select.append("<option value="+i+">"+Clases.tipoMascota[i]+"</option>");
    }
    //ENCABEZADO DE LA SECCION DE FILTRO
    var filtrar = $("#filtrarPor");
    filtrar[0].innerHTML = select[0].innerHTML ;
}

//ARMO LA TABLA  DINAMICA
function tablaDinamica(checkboxON) 
{
    //CHEQUEO SI ES LA CARGA INICIAL O SI ENTRA POR EL CHANGE DE CHECKBOX
    if(checkboxON.length != 0)
    {
    //TABLA DINAMICA, ENTRA POR EVENTO
        //CABECERA DE LA TABLA
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
            tabla.append("</tr></table>");
        }

    }
    else
    {  
    //TABLA ENTERA, VIENE POR EL LOAD DE LA PAGINA
        //CABECERA DE LA TABLA
        let cabecera = $("#tCabecera");
        cabecera["0"].innerHTML ="";
        var devuelve =  "<th>ID</th>"       +
                        "<th>NOMBRE</th>"   +  
                        "<th>EDAD</th>"     +
                        "<th>TIPO</th>"     +  
                        "<th>CANTPATAS</th>";
        cabecera.append(devuelve);
        //CUERPO DE LA TABLA
        mostrarMascotas();
    }
}

/////////////////////////////////////////FUNCIONES DE CLASES/////////////////////////////////////////
function mostrarMascotas(valor?):void
{
    let MascotasString:string|null =  JSON.parse(localStorage.getItem("Mascotas") || "[]");    
    //ARMO EL ARRAY DE MASCOTAS, SEGUN SI ES TABLA FULL O FILTRADA
    if(valor)
    {
    //MUESTRO EL LISTADO DE MASCOTAS SEGUN FILTRO
       let stringFinal = MascotasString
                                .filter(function(mascota){
                                    let mascotaRet = JSON.parse(mascota);
                                    return mascotaRet._tipo == valor;
                                })
                                .map(function(mascota){
                                    let mascotaRet = JSON.parse(mascota);
                                    return mascotaRet;
                                });   
        MascotasString= stringFinal;
    }
       
    let tabla = $("#tCuerpo");
    tabla["0"].innerHTML ="";
    for (var i = 0; i < MascotasString.length ; i++) 
    {
        if(valor){let mascotaActual = MascotasString[i];}
        else     {let mascotaActual = JSON.parse(MascotasString[i]);}
        
        let miTipo = Clases.tipoMascota[mascotaActual._tipo];

        let varAppend = "<tr><td>"  + mascotaActual._id                         + "</td>"+
                        "<td>"      + mascotaActual._nombre                     + "</td>"+
                        "<td>"      + mascotaActual._edad                       + "</td>"+
                        "<td>"      + Clases.tipoMascota[mascotaActual._tipo]   + "</td>"+
                        "<td>"      + mascotaActual._cantPatas                  + "</td></tr>"       
        tabla.append(varAppend); 
   }
   
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
 
