///<reference path="../node_modules/@types/jquery/index.d.ts" />
// import '../node_modules/rxjs/operator/filter';
// import '../node_modules/rxjs/add/operator/filter';
var imagenBASE64;
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
// // // // // // // FUNCIONES DE CARGA DE PÁGINA - HTML5 // // // // // // //// // // // // // //
function borrarPrincipal() {
    $("#principal")[0].innerHTML = "";
}
///////EMPLEADO///////////
function muestraAgregarEmpleado() {
    borrarPrincipal();
    var cuerpoAgregarEmpleado = "\n    <div class=\"box box-primary\">\n        <div class=\"box-header\">\n            <h3 class=\"box-title\">Agregar Empleado</h3>\n        </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form id=\"formCARGA\"  data-toggle=\"validator\">\n    <!--onsubmit=\"agregarEmpleado();\" -->\n      <div class=\"box-body\">\n            <!-- USUARIO -->\n            <div class=\"form-group\">\n            <label for=\"nombre\">Usuario</label>\n            <input type=\"email\" id=\"nombre\" class=\"sinError form-control\" name=\"nombre\" placeholder=\"Nombre..\" autocomplete=\"off\" class=\"form-control\" required autofocus>\n        </div>\n        <!-- EDAD -->\n            <div class=\"form-group\">\n            <label for=\"edad\">Edad</label>\n            <input type=\"text\" id=\"edad\" class=\"sinError form-control\" name=\"edad\" placeholder=\"Edad..\" autocomplete=\"off\" class=\"form-control\" required>\n            </div>\n        <!-- SEXO -->\n        <label for=\"opcion\">Elige SEXO:</label>\n        <div class=\"form-group\" >\n            <select name=\"sexo\" id=\"sexo\" class=\"form-control\" required>\n                <option value=\"MASCULINO\">MASCULINO</option>\n                <option value=\"FEMENINO\">FEMENINO</option>\n                <option value=\"OTROS\">OTROS</option>\n            </select>\n        </div>\n\n        <!-- TIPO - ENUM TIPO -->\n            <div class=\"form-group\">\n                <label for=\"opcion\">Elige un tipo de Empleado:</label>\n                <select class=\"form-control\" name=\"tipoMasc\" id=\"tipoMasc\">\n                    <option value=\"BARTENDER\">BARTENDER</option>\n                    <option value=\"CERVECERO\">CERVECERO</option>\n                    <option value=\"COCINERO\">COCINERO</option>\n                    <option value=\"MOZO\">MOZO</option>\n                    <option value=\"SOCIO\">SOCIO</option>\n                </select>\n            </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Clave</label>\n          <input type=\"password\" class=\"form-control\" id=\"ClaveUsuario\" placeholder=\"Password\">\n        </div>\n        \n        <!-- /.box-body -->\n\n        <div class=\"box-footer\">\n            <button type=\"submit\" onclick=\"agregarEmpleado();\" class=\"btn btn-primary\">Agregar</button>\n        </div>\n    </form>\n    <!-- /.box -->";
    // $("#nombre").val() = 'PONGOCUALQUIERCOSA';
    // var input = $("#nombre");
    // input.value = 'CUALQUIERA';
    $("#principal").append(cuerpoAgregarEmpleado);
}
function muestraModificarEmpleado(idEmpleado) {
    muestraAgregarEmpleado();
    var indice = determinoIndice(idEmpleado);
    var persona = JSON.parse(JSON.parse(localStorage.Empleados)[indice]);
    var tcuerpo = $("#formCARGA");
    tcuerpo[0].innerHTML = "";
    tcuerpo[0].innerHTML =
        "   <div class=\"box-body\">\n        <!-- USUARIO -->\n        <div class=\"form-group\">\n        <label for=\"nombre\">Usuario</label>\n        <input type=\"email\" id=\"nombre\" class=\"sinError form-control\" name=\"nombre\" value=\"" + persona._nombre + "\" placeholder=\"Nombre..\" autocomplete=\"off\" class=\"form-control\" required autofocus>\n    </div>\n    <!-- EDAD -->\n        <div class=\"form-group\">\n        <label for=\"edad\">Edad</label>\n        <input type=\"text\" id=\"edad\" class=\"sinError form-control\" name=\"edad\" value=\"" + persona._edad + "\" placeholder=\"Edad..\" autocomplete=\"off\" class=\"form-control\" required>\n        </div>\n    <!-- SEXO -->\n    <label for=\"opcion\">Elige SEXO:</label>\n    <div class=\"form-group\" >\n        <select name=\"sexo\" id=\"sexo\" class=\"form-control\" required>\n            <option value=\"MASCULINO\">MASCULINO</option>\n            <option value=\"FEMENINO\">FEMENINO</option>\n            <option value=\"OTROS\">OTROS</option>\n        </select>\n    </div>\n\n    <!-- TIPO - ENUM TIPO -->\n        <div class=\"form-group\">\n            <label for=\"opcion\">Elige un tipo de Empleado:</label>\n            <select class=\"form-control\" name=\"tipoMasc\" id=\"tipoMasc\">\n                <option value=\"BARTENDER\">BARTENDER</option>\n                <option value=\"CERVECERO\">CERVECERO</option>\n                <option value=\"COCINERO\">COCINERO</option>\n                <option value=\"MOZO\">MOZO</option>\n                <option value=\"SOCIO\">SOCIO</option>\n            </select>\n        </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Clave</label>\n      <input type=\"password\" class=\"form-control\" id=\"ClaveUsuario\" placeholder=\"Password\">\n    </div>\n    \n    <!-- /.box-body -->\n\n    <div class=\"box-footer\">\n        <button type=\"submit\" onclick=\"modificarEmpleado(" + (indice) + ")\" class=\"btn btn-primary\">Modificar</button>\n    </div>";
}
// // // // // // // FUNCIONES DE CLASES DE PÁGINA // // // // // // //// // // // // // //
////////////////////////////////GENERALES////////////////////////////////
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
                break;
            }
        case "CERVECERO":
            {
                tipo = Clases.tipoEmpleado.CERVECERO;
                break;
            }
        case "COCINERO":
            {
                tipo = Clases.tipoEmpleado.COCINERO;
                break;
            }
        case "MOZO":
            {
                tipo = Clases.tipoEmpleado.MOZO;
                break;
            }
        case "SOCIO":
            {
                tipo = Clases.tipoEmpleado.SOCIO;
                break;
            }
    }
    return tipo;
}
function determinoIndice(idEmpleado) {
    var retorno;
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    for (var i = 0; i < EmpleadosString.length; i++) {
        var empleadoActual = JSON.parse(EmpleadosString[i]);
        if (empleadoActual._id == idEmpleado) {
            retorno = i;
        }
    }
    return retorno;
}
function arrayMax(arr) {
    return arr.reduce(function (p, v) {
        return (p < JSON.parse(v)._id ? JSON.parse(v)._id : p);
    }, 0);
}
function armoJSON(indice, persona) {
    var EmpleadosStringNew = JSON.parse(localStorage.getItem("Empleados") || "[]");
    delete EmpleadosStringNew[indice];
    var objJsonResp = EmpleadosStringNew.filter(function (x) { return x !== null; });
    objJsonResp.push(JSON.stringify(persona));
    localStorage.clear();
    localStorage.setItem("Empleados", JSON.stringify(objJsonResp));
}
///////EMPLEADO///////////
function calcularIdEmpleado() {
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    var valormax = arrayMax(EmpleadosString);
    return valormax;
}
function agregarEmpleado(vienedeModif) {
    var tipoEMP = determinoRol(String($('#tipoMasc').val()));
    var nuevoEmpleado = new Clases.Empleado(String($('#nombre').val()), Number($('#edad').val()), String($('#sexo').val()), tipoEMP, Clases.estadoCLIEMP.ACTIVO, String($('#ClaveUsuario').val()));
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    EmpleadosString.push(JSON.stringify(nuevoEmpleado));
    localStorage.setItem("Empleados", JSON.stringify(EmpleadosString));
    console.log(EmpleadosString);
    alert("Empleado guardado");
    muestraAgregarEmpleado();
}
var vienedeEliminar;
function modificarEmpleado(indice, vienedeEliminar) {
    var indice = indice;
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    var persona = JSON.parse(JSON.parse(localStorage.Empleados)[indice]);
    if (!vienedeEliminar) {
        var tipoEMP = determinoRol(String($('#tipoMasc').val()));
        persona._nombre = String($('#nombre').val());
        persona._edad = Number($('#edad').val());
        persona._sexo = String($('#sexo').val());
        persona._tipo = tipoEMP;
        persona._clave = String($('#ClaveUsuario').val());
        // let EmpleadosStringNew  = JSON.parse(localStorage.getItem("Empleados") || "[]");
        // delete EmpleadosStringNew[indice];
        // var objJsonResp = EmpleadosStringNew.filter(function(x) { return x !== null });
        // objJsonResp.push( JSON.stringify(persona));
        // localStorage.clear();
        // localStorage.setItem("Empleados",JSON.stringify(objJsonResp));
    }
    else {
        persona._estado = Clases.estadoCLIEMP.BAJA;
        vienedeEliminar = false;
    }
    armoJSON(indice, persona);
    mostrarEmpleados();
}
function eliminarEmpleado(idEmpleado) {
    vienedeEliminar = true;
    var indice = determinoIndice(idEmpleado);
    modificarEmpleado(indice, vienedeEliminar);
}
function mostrarEmpleados() {
    borrarPrincipal();
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    //ENCABEZADO FIJO
    var encabezadoTablaAppend = '<div class="box box-info">'
        + '<div class="box-header with-border">'
        + '<h3 class="box-title">Listado de Empleados</h3>'
        + '<div class="box-tools pull-right">'
        + '<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>'
        + '<button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>'
        + '</div>'
        + '</div><!-- /.box-header -->'
        + '<div class="box-body">'
        + '<div class="table-responsive">'
        + '<table class="table no-margin">'
        + '<thead>'
        + '<tr>'
        + '  <th>Nombre</th>'
        + '  <th>Edad</th>'
        + '  <th>Sexo</th>'
        + '  <th>Tipo</th>'
        + '  <th>Estado</th>'
        + '<th>Acciones</th>'
        + '</tr>'
        + '</thead>'
        + '<tbody>';
    var cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < EmpleadosString.length; i++) {
        var empleadoActual = JSON.parse(EmpleadosString[i]);
        if (empleadoActual != null) {
            var html = '<tr>';
            //DATOS
            html += "<td>";
            html += empleadoActual._nombre;
            html += "</td>";
            html += "<td>";
            html += empleadoActual._edad;
            html += "</td>";
            html += "<td>";
            html += empleadoActual._sexo;
            html += "</td>";
            html += "<td>";
            html += Clases.tipoEmpleado[empleadoActual._tipo];
            html += "</td>";
            html += "<td>";
            html += Clases.estadoCLIEMP[empleadoActual._estado];
            html += "</td>";
            //BOTONES
            html += "<td>";
            html += "<button class='btn btn- btn-warning' type='button' id='btnEnviar' value='Modificar' onclick='muestraModificarEmpleado(" + empleadoActual._id + ")'>";
            html += "MODIFICAR ";
            html += "<i class='glyphicon glyphicon-pencil'></i>";
            html += "</button>";
            html += "</td>";
            html += "<td>";
            html += "<button class='btn btn-danger btn-sm' type='button' id='btnEnviar' value='Eliminar' onclick='eliminarEmpleado(" + empleadoActual._id + ")'>";
            html += "BORRAR ";
            html += "<i class='glyphicon glyphicon-minus'></i>";
            html += "</button>";
            html += "</td>";
            html += "</tr>";
        }
        if (i == 0) {
            cuerpoTablaAppend = html;
        }
        else {
            cuerpoTablaAppend += html;
        }
    }
    //FOOTER
    var footerTablaAppend = '</tbody>';
    footerTablaAppend += '</table>';
    footerTablaAppend += '</div><!-- /.table-responsive -->';
    footerTablaAppend += '</div><!-- /.box-body -->';
    footerTablaAppend += '<div class="box-footer clearfix">';
    footerTablaAppend += '<a onclick="muestraAgregarEmpleado();" class="btn btn-sm btn-info btn-flat pull-left">Nuevo Empleado</a>';
    footerTablaAppend += '<a href="javascript::;" class="btn btn-sm btn-default btn-flat pull-right">Ver Clave</a>';
    footerTablaAppend += '</div>';
    footerTablaAppend += '</div>';
    var tablafinal = encabezadoTablaAppend + cuerpoTablaAppend + footerTablaAppend;
    $("#principal").append(tablafinal);
}
//# sourceMappingURL=app.js.map