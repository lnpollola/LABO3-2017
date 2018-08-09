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
            mostrarEmpleados(valorFiltro);
            tablaAux = undefined;
        });
    //CARGA DE LA PAGINA
    encabezadoCheck();
    cargoMenusEncabezado();
    mostrarEmpleados();
});

var imagenBASE64;
/////////////////////////////////////////FUNCIONES DEL SISTEMA/////////////////////////////////////////

function transformaImagen() {
           
            var filesSelected = document.getElementById('imagen').files;
            if (filesSelected.length > 0) {
              var fileToLoad = filesSelected[0];
              var fileReader = new FileReader();


                fileReader.onload = function(fileLoadedEvent):string {
                    var srcData = fileLoadedEvent.target.result; // <--- data: base64

                    var newImage = document.createElement('img');
                    newImage.src = srcData;

                    imagenBASE64 = newImage.outerHTML;
                    return  newImage.outerHTML;
                
                }
                fileReader.readAsDataURL(fileToLoad);
            
            }
        }


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
       mostrarEmpleados();
}

//CARGO LOS DROPDOWN QUE DEPENDEN DEL ENUMERADO
function cargoMenusEncabezado()
{
    //ENCABEZADO DE FORM DE CARGA
    var i = 0;
    let select = $("#tipoMasc");
    for (var i = 0; i < 3; i++) 
    {
        select.append("<option value="+i+">"+Clases.tipoEmpleado[i]+"</option>");
    }
    //ENCABEZADO DE LA SECCION DE FILTRO
    var filtrar = $("#filtrarPor");
    filtrar[0].innerHTML = select[0].innerHTML ;
}
var tablaAux;


//ARMO LA TABLA  DINAMICA
function tablaDinamica(checkboxON?) 
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
        
        //CUERPO DE  LA TABLA
        let tablaTXT = $("#tCuerpoTXT");
        var ciclo;
        if(tablaAux == null)    
        {
            var primeraVez = 1;
            tablaAux = $("#tCuerpoAUX");  

            ciclo = $("#tCuerpo")[0].childNodes.length;
        }
        else 
        { 
            ciclo = $("#tCuerpoAUX")[0].childNodes.length ;
            tablaTXT[0].innerHTML = "";
        }

        for (var i = 0; i < ciclo ; i++) 
        {
            //AGREGO LAS COLUMNAS SEGUN VAYAN O NO
            tablaTXT.append("<tr>");
            checkboxON.includes("ID")       == true ? tablaTXT.append("<td id='mascID"      +i+"'>" +$('#mascID'+i)[0].innerHTML                    + "</td>") : null ; 
            checkboxON.includes("NOMBRE")   == true ? tablaTXT.append("<td id='mascNOM"     +i+"'>" +$('#mascNOM'+i)[0].innerHTML                    + "</td>") : null ; 
            checkboxON.includes("EDAD")     == true ? tablaTXT.append("<td id='mascEDAD"    +i+"'>" +$('#mascEDAD'+i)[0].innerHTML                    + "</td>") : null ; 
            checkboxON.includes("TIPO")     == true ? tablaTXT.append("<td id='mascTIPO"    +i+"'>" +Clases.tipoEmpleado[$('#mascTIPO'+i)[0].innerHTML]+ "</td>") : null ; 
            checkboxON.includes("SEX0")== true ? tablaTXT.append("<td id='mascSEXO"   +i+"'>" +$('#mascSEXO'+i)[0].innerHTML                    + "</td>") : null ; 
            
            tablaTXT.append("</tr></table>");
        }
        let tablaFinal   = $("#tCuerpo");
        let innerHtmlAux = tablaFinal["0"].innerHTML;
        tablaFinal["0"].innerHTML =""; 
        tablaFinal["0"].innerHTML = tablaTXT["0"].innerHTML;
        if(primeraVez == 1)   {tablaAux["0"].innerHTML = innerHtmlAux; }
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
                        "<th>SEXO</th>"     +
                        "<th>Imagen</th>";
        cabecera.append(devuelve);
        //CUERPO DE LA TABLA
        mostrarEmpleados();
    }
}
/////////////////////////////////////////FUNCIONES DE CLASES/////////////////////////////////////////
function mostrarEmpleados(valor?):void
{
    let EmpleadosString:string|null =  JSON.parse(localStorage.getItem("Empleados") || "[]");    
    //ARMO EL ARRAY DE EmpleadoS, SEGUN SI ES TABLA FULL O FILTRADA
    if(valor)
    {
    //MUESTRO EL LISTADO DE EmpleadoS SEGUN FILTRO
       let stringFinal = EmpleadosString
                                .filter(function(empleado){
                                    let empleadoRet = JSON.parse(empleado);
                                    return empleadoRet._tipo == valor;
                                })
                                .map(function(empleado){
                                    let empleadoRet = JSON.parse(empleado);
                                    return empleadoRet;
                                });   
        EmpleadosString= stringFinal;
    }
       
    let tabla = $("#tCuerpo");
    tabla["0"].innerHTML ="";
    for (var i = 0; i < EmpleadosString.length ; i++) 
    {
        let empleadoActual;
        if(valor){empleadoActual = EmpleadosString[i];}
        else     {empleadoActual = JSON.parse(EmpleadosString[i]);}
        
        if (empleadoActual != null)
        {
            let miTipo = Clases.tipoEmpleado[empleadoActual._tipo];
            
                    let varAppend = "<tr><td id='mascID"+i+"'>"+ empleadoActual._id                         + "</td>"+
                                    "<td id='mascNOM"   +i+"'>"+ empleadoActual._nombre                     + "</td>"+
                                    "<td id='mascEDAD"  +i+"'>"+ empleadoActual._edad                       + "</td>"+
                                    "<td id='mascTIPO"  +i+"'>"+ Clases.tipoEmpleado[empleadoActual._tipo]   + "</td>"+
                                    "<td id='mascSEXO" +i+"'>"+ empleadoActual._sexo                  + "</td>"+
                                    "<td id='mascIMAGEN" +i+"'>"+ empleadoActual.imagen                  + "</td>"+
                                    "<td>"+  
                                        "<button class='btn btn- btn-warning' type='button' id='btnEnviar' value='Modificar' onclick='modificarEmpleado("+i+")'>"
                                        +"MODIFICAR"+
                                        "<i class='glyphicon glyphicon-pencil'></i>"+
                                        "</button>"
                                    + "</td>"   +  
                                    "<td>"+  
                                        "<button class='btn btn-danger btn-sm' type='button' id='btnEnviar' value='Eliminar' onclick='eliminarEmpleado("+i+")'>"
                                        +"BORRAR"+
                                        "<i class='glyphicon glyphicon-minus'></i>"+
                                        "</button>"
                                    + "</td>"   +  
                                    "</tr>"       
                    tabla.append(varAppend); 
        }
        
   }    
   
}
function agregarEmpleado():void
{
    let tipo: Clases.tipoEmpleado  = Number($('#tipoMasc').val()); 
    let nuevoEmpleado    = new Clases.Empleado(  String ($('#nombre').val()),
                                            Number ($('#edad').val()),
                                            String ($('#sexo').val()),
                                            tipo,
                                            imagenBASE64
                                            );
    
    let EmpleadosString  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    EmpleadosString.push( JSON.stringify(nuevoEmpleado));
    localStorage.setItem("Empleados",JSON.stringify(EmpleadosString));
        
    console.log(EmpleadosString);
    alert ("Empleado guardado");
    mostrarEmpleados(); 
    $('#formCARGA').trigger("reset");   
    
} 
 
function eliminarEmpleado(indice, vienedeModif?):void
{
    var indice = indice;
    var objJson: JSON = JSON.parse(localStorage.Empleados);
    delete objJson[indice];
    var objJsonResp = objJson.filter(function(x) { return x !== null }); //borro los nulos
    localStorage.setItem("Empleados",JSON.stringify(objJsonResp));
    if( !(vienedeModif)) {alert("Empleado Eliminado");  mostrarEmpleados();} 
} 

var vienedeModif;
function modificarEmpleado(indice):void
{
    var indice = indice;
    var objJson: JSON = JSON.parse(localStorage.Empleados);
    
    
    var persona = JSON.parse(objJson[indice]);
    eliminarEmpleado(indice,1);   
    var tcuerpo = $("#formCARGA");

    tcuerpo[0].innerHTML = "";
    tcuerpo[0].innerHTML = 
        " <div class'row'>"+
                    "<div class='form-group'>"+
                    "<label for='nombre'>Nombre</label><br>"+
                    "<input type='text' id='nombre' class='sinError form-control' name='nombre' value="+persona._nombre+" autocomplete='off' autofocus><br>"+
                    "</div>"+
                
                    "<div class='form-group'>"+
                    "<label for='edad'>Edad</label><br>"+
                    "<input type='text' id='edad' class='sinError form-control' name='edad' value="+persona._edad+" autocomplete='off'><br>"+
                    "</div>"+
                
                    "<div class='form-group'>"+
                        "<label for='opcion'>Elige un tipo:</label>"+
                        "<select class='form-control' name='tipoMasc' id='tipoMasc'>"+
                        "</select>"+
                    "</div>"+
                
                    "<div class='form-group'>"+
                        "<label for='opcion'>Elige SEXO:</label>"+
                        "<select class='form-control' name='' id='sexo'> -->"+
                            "<option value='M'>MASCULINO</option>"+
                            "<option value='F'>FEMENINO</option>"+
                        "</select>"+
                    "</div>"+
                    "<div class='form-group'>"+
                        "<label for='archivo'>Archivo:</label>"+
                        "<input type='file' id='imagen' onchange='transformaImagen();'>"+
                        "<p class='help-block'>Máximo 50MB</p>"+
                    "</div>"+
                "</div>"+
        "</div>";
    

        cargoMenusEncabezado();
}

function calcularPromedio()
{
    let EmpleadosString:string|null =  JSON.parse(localStorage.getItem("Empleados") || "[]");    

    //MUESTRO EL LISTADO DE EmpleadoS SEGUN FILTRO
       var acumEdad = EmpleadosString
                        .reduce(function(actual,siguiente){
                            return actual+JSON.parse(siguiente)._edad;
                        },0);

        var cantidad = EmpleadosString
                        .reduce (function(actual,siguiente){
                            return actual + 1;
                        }, 0);

        var mostrarPromedio = $("labelProm").context.forms[1];
        mostrarPromedio.innerHTML = "<label for='promedio'class='col-md-offset-1'>"+(acumEdad / cantidad).toFixed(2)+"</label><br>" ;
}

function calcularMaximo():number
{
    let EmpleadosString:[]|null =  JSON.parse(localStorage.getItem("Empleados") || "[]");    
    let valormax = arrayMax(EmpleadosString);

    return valormax;
}

function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return ( p < JSON.parse(v)._id ? JSON.parse(v)._id: p );
    },0);
  }