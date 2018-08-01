///<reference path="../node_modules/@types/jquery/index.d.ts" />
// import '../node_modules/rxjs/operator/filter';
// import '../node_modules/rxjs/add/operator/filter';
// $(function(){
//     //EVENTOS
//         //FORM MODIFICADO POR CHECKBOX
//         // $("#checkFORM :checkbox").change(function() {
//         //     encabezadoCheck();
//         // });
//         //BOTON FILTRAR
//         // $("#filtrarPor").change(function(){
//         //     let valorFiltro = $('#filtrarPor').map(function() { return this.value; }).get();
//         //     mostrarEmpleados(valorFiltro);
//         //     tablaAux = undefined;
//         // });
//     //CARGA DE LA PAGINA
//     // encabezadoCheck();
//     cargoMenusEncabezado();
//     // mostrarEmpleados();
// });
// var imagenBASE64;
/////////////////////////////////////////FUNCIONES DEL SISTEMA/////////////////////////////////////////
// function transformaImagen() {
//             var filesSelected = document.getElementById('imagen').files;
//             if (filesSelected.length > 0) {
//               var fileToLoad = filesSelected[0];
//               var fileReader = new FileReader();
//                 fileReader.onload = function(fileLoadedEvent):string {
//                     var srcData = fileLoadedEvent.target.result; // <--- data: base64
//                     var newImage = document.createElement('img');
//                     newImage.src = srcData;
//                     imagenBASE64 = newImage.outerHTML;
//                     return  newImage.outerHTML;
//                 }
//                 fileReader.readAsDataURL(fileToLoad);
//             }
//         }
//TRAIGO EN UN ARRAY LOS VALORES DEVUELTOS DE LOS CHECKBOX ON
//ARMO LA TABLA DINAMICA PASANDO LOS ENCABEZADOS Y FILTROS A MOSTRAR COLUMNAS
// function encabezadoCheck()
// {
//     var checkboxON = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();
//     tablaDinamica(checkboxON);
// }
//BOTON DE LIMPIAR LISTA
// function limpiarLista():void
// {
//        localStorage.clear();
//         mostrarEmpleados();
// }
//CARGO LOS DROPDOWN QUE DEPENDEN DEL ENUMERADO
// function cargoMenusEncabezado()
// {
//     //ENCABEZADO DE FORM DE CARGA
//     var i = 0;
//     let select = $("#tipoMasc");
//     for (var i = 0; i < 3; i++) 
//     {
//         select.append("<option value="+i+">"+Clases.tipoEmpleado[i]+"</option>");
//     }
//     //ENCABEZADO DE LA SECCION DE FILTRO
//     var filtrar = $("#filtrarPor");
//     filtrar[0].innerHTML = select[0].innerHTML ;
// }
// var tablaAux;
// //ARMO LA TABLA  DINAMICA
// function tablaDinamica(checkboxON?) 
// {
//     //CHEQUEO SI ES LA CARGA INICIAL O SI ENTRA POR EL CHANGE DE CHECKBOX
//     if(checkboxON.length != 0)
//     {
//     //TABLA DINAMICA, ENTRA POR EVENTO
//         //CABECERA DE LA TABLA
//         let row_name = checkboxON;
//         let cabecera = $("#tCabecera");
//         cabecera["0"].innerHTML ="";
//         row_name.forEach(element => 
//         {
//             if (element != "") 
//             {
//                 let cabeceraArmada = $('<th>' + element + '</th>');
//                 cabecera.append(cabeceraArmada);
//             } 
//         }); 
//         //CUERPO DE  LA TABLA
//         let tablaTXT = $("#tCuerpoTXT");
//         var ciclo;
//         if(tablaAux == null)    
//         {
//             var primeraVez = 1;
//             tablaAux = $("#tCuerpoAUX");  
//             ciclo = $("#tCuerpo")[0].childNodes.length;
//         }
//         else 
//         { 
//             ciclo = $("#tCuerpoAUX")[0].childNodes.length ;
//             tablaTXT[0].innerHTML = "";
//         }
//         for (var i = 0; i < ciclo ; i++) 
//         {
//             //AGREGO LAS COLUMNAS SEGUN VAYAN O NO
//             tablaTXT.append("<tr>");
//             checkboxON.includes("ID")       == true ? tablaTXT.append("<td id='mascID"      +i+"'>" +$('#mascID'+i)[0].innerHTML                    + "</td>") : null ; 
//             checkboxON.includes("NOMBRE")   == true ? tablaTXT.append("<td id='mascNOM"     +i+"'>" +$('#mascNOM'+i)[0].innerHTML                    + "</td>") : null ; 
//             checkboxON.includes("EDAD")     == true ? tablaTXT.append("<td id='mascEDAD"    +i+"'>" +$('#mascEDAD'+i)[0].innerHTML                    + "</td>") : null ; 
//             checkboxON.includes("TIPO")     == true ? tablaTXT.append("<td id='mascTIPO"    +i+"'>" +Clases.tipoEmpleado[$('#mascTIPO'+i)[0].innerHTML]+ "</td>") : null ; 
//             checkboxON.includes("SEX0")== true ? tablaTXT.append("<td id='mascSEXO"   +i+"'>" +$('#mascSEXO'+i)[0].innerHTML                    + "</td>") : null ; 
//             tablaTXT.append("</tr></table>");
//         }
//         let tablaFinal   = $("#tCuerpo");
//         let innerHtmlAux = tablaFinal["0"].innerHTML;
//         tablaFinal["0"].innerHTML =""; 
//         tablaFinal["0"].innerHTML = tablaTXT["0"].innerHTML;
//         if(primeraVez == 1)   {tablaAux["0"].innerHTML = innerHtmlAux; }
//     }
//     else
//     {  
//     //TABLA ENTERA, VIENE POR EL LOAD DE LA PAGINA
//         //CABECERA DE LA TABLA
//         let cabecera = $("#tCabecera");
//         cabecera["0"].innerHTML ="";
//         var devuelve =  "<th>ID</th>"       +
//                         "<th>NOMBRE</th>"   +  
//                         "<th>EDAD</th>"     +
//                         "<th>TIPO</th>"     +  
//                         "<th>SEXO</th>"     +
//                         "<th>Imagen</th>";
//         cabecera.append(devuelve);
//         //CUERPO DE LA TABLA
//         mostrarEmpleados();
//     }
// }
/////////////////////////////////////////FUNCIONES DE CLASES/////////////////////////////////////////
// VALIDA LOGIN 
function validaLogin() {
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    for (var i = 0; i < EmpleadosString.length; i++) {
        var estalogueado = 0;
        var empleadoActual = JSON.parse(EmpleadosString[i]);
        if (empleadoActual._nombre == $('#mailingresado').val() && empleadoActual._clave == $('#passingresado').val()) {
            estalogueado = 1;
            alert("Empleado logueado OK");
            window.location.href = 'home2.html';
        }
        else {
            alert("Empleado NO registrado en el sistema");
        }
    }
}
function determinoRol(rol) {
    var tipo;
    switch (rol) {
        case "BARTENDER":
            {
                tipo = Clases.tipoEmpleado.BARTENDER;
            }
        default:
            {
                tipo = Clases.tipoEmpleado.MOZO;
            }
    }
    return tipo;
}
function agregarEmpleado() {
    var tipoEMP = determinoRol(String($('#tipoMasc').val()));
    var nuevoEmpleado = new Clases.Empleado(String($('#nombre').val()), Number($('#edad').val()), String($('#sexo').val()), tipoEMP, Clases.estadoCLIEMP.ACTIVO, String($('#ClaveUsuario').val()));
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    EmpleadosString.push(JSON.stringify(nuevoEmpleado));
    localStorage.setItem("Empleados", JSON.stringify(EmpleadosString));
    console.log(EmpleadosString);
    alert("Empleado guardado");
    muestraAgregarEmpleado();
}
// function eliminarEmpleado(indice, vienedeModif?):void
// {
//     var indice = indice;
//     var objJson: JSON = JSON.parse(localStorage.Empleados);
//     delete objJson[indice];
//     var objJsonResp = objJson.filter(function(x) { return x !== null }); //borro los nulos
//     localStorage.setItem("Empleados",JSON.stringify(objJsonResp));
//     if( !(vienedeModif)) {alert("Empleado Eliminado");  mostrarEmpleados();} 
// } 
// var vienedeModif;
// function modificarEmpleado(indice):void
// {
//     var indice = indice;
//     var objJson: JSON = JSON.parse(localStorage.Empleados);
//     var persona = JSON.parse(objJson[indice]);
//     eliminarEmpleado(indice,1);   
//     var tcuerpo = $("#formCARGA");
//     tcuerpo[0].innerHTML = "";
//     tcuerpo[0].innerHTML = 
//         " <div class'row'>"+
//                     "<div class='form-group'>"+
//                     "<label for='nombre'>Nombre</label>"+
//                     "<input type='text' id='nombre' class='sinError form-control' name='nombre' value="+persona._nombre+" autocomplete='off' autofocus>"+
//                     "</div>"+
//                     "<div class='form-group'>"+
//                     "<label for='edad'>Edad</label>"+
//                     "<input type='text' id='edad' class='sinError form-control' name='edad' value="+persona._edad+" autocomplete='off'>"+
//                     "</div>"+
//                     "<div class='form-group'>"+
//                         "<label for='opcion'>Elige un tipo:</label>"+
//                         "<select class='form-control' name='tipoMasc' id='tipoMasc'>"+
//                         "</select>"+
//                     "</div>"+
//                     "<div class='form-group'>"+
//                         "<label for='opcion'>Elige SEXO:</label>"+
//                         "<select class='form-control' name='' id='sexo'> -->"+
//                             "<option value='M'>MASCULINO</option>"+
//                             "<option value='F'>FEMENINO</option>"+
//                         "</select>"+
//                     "</div>"+
//                     "<div class='form-group'>"+
//                         "<label for='archivo'>Archivo:</label>"+
//                         "<input type='file' id='imagen' onchange='transformaImagen();'>"+
//                         "<p class='help-block'>Máximo 50MB</p>"+
//                     "</div>"+
//                 "</div>"+
//         "</div>";
//         // cargoMenusEncabezado();
// }
// function calcularPromedio()
// {
//     let EmpleadosString:string|null =  JSON.parse(localStorage.getItem("Empleados") || "[]");    
//     //MUESTRO EL LISTADO DE EmpleadoS SEGUN FILTRO
//        var acumEdad = EmpleadosString
//                         .reduce(function(actual,siguiente){
//                             return actual+JSON.parse(siguiente)._edad;
//                         },0);
//         var cantidad = EmpleadosString
//                         .reduce (function(actual,siguiente){
//                             return actual + 1;
//                         }, 0);
//         var mostrarPromedio = $("labelProm").context.forms[1];
//         mostrarPromedio.innerHTML = "<label for='promedio'class='col-md-offset-1'>"+(acumEdad / cantidad).toFixed(2)+"</label>" ;
// }
// function calcularMaximo():number
// {
//     let EmpleadosString:[]|null =  JSON.parse(localStorage.getItem("Empleados") || "[]");    
//     let valormax = arrayMax(EmpleadosString);
//     return valormax;
// }
// function arrayMax(arr) {
//     return arr.reduce(function (p, v) {
//       return ( p < JSON.parse(v)._id ? JSON.parse(v)._id: p );
//     },0);
//   }
// // // // // // // FUNCIONES DE CARGA DE PÁGINA // // // // // // //// // // // // // //
function borrarPrincipal() {
    $("#principal")[0].innerHTML = "";
}
function muestraAgregarEmpleado() {
    borrarPrincipal();
    var cuerpoAgregarEmpleado = "\n    <div class=\"box box-primary\">\n        <div class=\"box-header\">\n            <h3 class=\"box-title\">Agregar Empleado</h3>\n        </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form id=\"formCARGA\" onsubmit=\"agregarEmpleado();\" data-toggle=\"validator\">\n      <div class=\"box-body\">\n            <!-- USUARIO -->\n            <div class=\"form-group\">\n            <label for=\"nombre\">Usuario</label>\n            <input type=\"email\" id=\"nombre\" class=\"sinError form-control\" name=\"nombre\" placeholder=\"Nombre..\" autocomplete=\"off\" class=\"form-control\" required autofocus>\n            </div>\n        <!-- EDAD -->\n            <div class=\"form-group\">\n            <label for=\"edad\">Edad</label>\n            <input type=\"text\" id=\"edad\" class=\"sinError form-control\" name=\"edad\" placeholder=\"Edad..\" autocomplete=\"off\" class=\"form-control\" required>\n            </div>\n        <!-- SEXO -->\n        <label for=\"opcion\">Elige SEXO:</label>\n        <div class=\"form-group\" >\n            <select name=\"sexo\" id=\"sexo\" class=\"form-control\" required>\n                <option value=\"M\">MASCULINO</option>\n                <option value=\"F\">FEMENINO</option>\n            </select>\n        </div>\n\n        <!-- TIPO - ENUM TIPO -->\n            <div class=\"form-group\">\n                <label for=\"opcion\">Elige un tipo de Empleado:</label>\n                <select class=\"form-control\" name=\"tipoMasc\" id=\"tipoMasc\">\n                    <option value=\"BARTENDER\">BARTENDER</option>\n                    <option value=\"CERVECERO\">CERVECERO</option>\n                    <option value=\"COCINERO\">COCINERO</option>\n                    <option value=\"MOZO\">MOZO</option>\n                    <option value=\"SOCIO\">SOCIO</option>\n                </select>\n            </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Clave</label>\n          <input type=\"password\" class=\"form-control\" id=\"ClaveUsuario\" placeholder=\"Password\">\n        </div>\n        \n        <!-- /.box-body -->\n\n        <div class=\"box-footer\">\n            <button type=\"submit\" class=\"btn btn-primary\">Agregar</button>\n        </div>\n    </form>\n    <!-- /.box -->";
    $("#principal").append(cuerpoAgregarEmpleado);
}
function mostrarEmpleados() {
    borrarPrincipal();
    // let cuerpoAgregarEmpleado = 
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    for (var i = 0; i < EmpleadosString.length; i++) {
        var empleadoActual = JSON.parse(EmpleadosString[i]);
        if (empleadoActual != null) {
            var miTipo = Clases.tipoEmpleado[empleadoActual._tipo];
            var varAppend = "<tr><td id='mascID" + i + "'>" + empleadoActual._id + "</td>" +
                "<td id='mascNOM" + i + "'>" + empleadoActual._nombre + "</td>" +
                "<td id='mascEDAD" + i + "'>" + empleadoActual._edad + "</td>" +
                "<td id='mascTIPO" + i + "'>" + Clases.tipoEmpleado[empleadoActual._tipo] + "</td>" +
                "<td id='mascSEXO" + i + "'>" + empleadoActual._sexo + "</td>" +
                "<td id='mascIMAGEN" + i + "'>" + empleadoActual.imagen + "</td>" +
                "<td>" +
                "<button class='btn btn- btn-warning' type='button' id='btnEnviar' value='Modificar' onclick='modificarEmpleado(" + i + ")'>"
                + "MODIFICAR" +
                "<i class='glyphicon glyphicon-pencil'></i>" +
                "</button>"
                + "</td>" +
                "<td>" +
                "<button class='btn btn-danger btn-sm' type='button' id='btnEnviar' value='Eliminar' onclick='eliminarEmpleado(" + i + ")'>"
                + "BORRAR" +
                "<i class='glyphicon glyphicon-minus'></i>" +
                "</button>"
                + "</td>" +
                "</tr>";
            $("#principal").append(varAppend);
        }
    }
}
//# sourceMappingURL=app.js.map