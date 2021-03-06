///<reference path="../node_modules/@types/jquery/index.d.ts" />
// $(function(){
// });
//CARGO LOS DROPDOWN QUE DEPENDEN DEL ENUMERADO
var imagenBASE64;
/////////////////////////////////////////FUNCIONES DEL SISTEMA/////////////////////////////////////////
function transformaImagen() {
    var filesSelected = document.getElementById('imagen').files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
            var newImage = document.createElement('img');
            newImage.src = srcData;
            newImage.id = "imgPedido";
            imagenBASE64 = newImage.outerHTML;
            return newImage.outerHTML;
        };
        fileReader.readAsDataURL(fileToLoad);
    }
}
// // // // // // // FUNCIONES DE CARGA DE PÁGINA - HTML5 // // // // // // //// // // // // // //
function borrarPrincipal() {
    $("#principal")[0].innerHTML = "";
    $("#agregar")[0].innerHTML = "";
    $("#listar")[0].innerHTML = "";
}
///////EMPLEADO///////////
function muestraAgregarEmpleado() {
    borrarPrincipal();
    var cuerpoAgregarEmpleado = "\n    <div class=\"box box-primary\">\n        <div class=\"box-header\">\n            <h3 class=\"box-title\">Agregar Empleado</h3>\n        </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form id=\"formCARGA\"  data-toggle=\"validator\">\n    <!--onsubmit=\"agregarEmpleado();\" -->\n      <div class=\"box-body\">\n            <!-- USUARIO -->\n            <div class=\"form-group\">\n            <label for=\"nombre\">Usuario</label>\n            <input type=\"email\" id=\"nombre\" class=\"sinError form-control\" name=\"nombre\" placeholder=\"Nombre@COMANDA.COM\" value=@COMANDA.COM autocomplete=\"off\" class=\"form-control\" required autofocus>\n        </div>\n        <!-- EDAD -->\n            <div class=\"form-group\">\n            <label for=\"edad\">Edad</label>\n            <input type=\"text\" id=\"edad\" class=\"sinError form-control\" name=\"edad\" placeholder=\"Edad..\" autocomplete=\"off\" class=\"form-control\" required>\n            </div>\n        <!-- SEXO -->\n        <label for=\"opcion\">Elige SEXO:</label>\n        <div class=\"form-group\" >\n            <select name=\"sexo\" id=\"sexo\" class=\"form-control\" required>\n                <option value=\"MASCULINO\">MASCULINO</option>\n                <option value=\"FEMENINO\">FEMENINO</option>\n                <option value=\"OTROS\">OTROS</option>\n            </select>\n        </div>\n\n        <!-- TIPO - ENUM TIPO -->\n            <div class=\"form-group\">\n                <label for=\"opcion\">Elige un tipo de Empleado:</label>\n                <select class=\"form-control\" name=\"tipoMasc\" id=\"tipoMasc\">\n                    <option value=\"BARTENDER\">BARTENDER</option>\n                    <option value=\"CERVECERO\">CERVECERO</option>\n                    <option value=\"COCINERO\">COCINERO</option>\n                    <option value=\"MOZO\">MOZO</option>\n                    <option value=\"SOCIO\">SOCIO</option>\n                </select>\n            </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Clave</label>\n          <input type=\"password\" class=\"form-control\" id=\"ClaveUsuario\" placeholder=\"Password\">\n        </div>\n        <!-- FECHA DESDE dd/m/aaaa -->\n        <div class=\"form-group\">\n          <label>Fecha Desde:</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n            <input type=\"text\" id=\"fechaDesde\" class=\"col-xs-4\" placeholder=\"dd/m/aaaa\" data-mask\"/></input>\n          </div><!-- /.input group -->\n        </div><!-- /.form group -->\n        <!-- /.box-body -->\n        <!-- FECHA Hasta dd/m/aaaa -->\n        <div class=\"form-group\">\n          <label>Fecha Hasta:</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n            <input type=\"text\" id=\"fechaHasta\" class=\"col-xs-4\" placeholder=\"dd/m/aaaa\" data-mask\"/></input>\n          </div><!-- /.input group -->\n        </div><!-- /.form group -->\n        <!-- /.box-body -->\n        <div class=\"box-footer\">\n            <button type=\"submit\" onclick=\"agregarEmpleado();\" class=\"btn btn-primary btn-block btn-flat\" id=\"btnAgregarEmpleado\" >Agregar</button>\n        </div>\n    </form>\n    <!-- /.box -->";
    $("#agregar").append(cuerpoAgregarEmpleado);
}
function muestraModificarEmpleado(idEmpleado) {
    muestraAgregarEmpleado();
    var indice = determinoIndice(idEmpleado);
    var persona = JSON.parse(JSON.parse(localStorage.Empleados)[indice]);
    var tcuerpo = $("#formCARGA");
    tcuerpo[0].innerHTML = "";
    tcuerpo[0].innerHTML =
        "   <div class=\"box-body\">\n        <!-- USUARIO -->\n        <div class=\"form-group\">\n        <label for=\"nombre\">Usuario</label>\n        <input type=\"email\" id=\"nombre\" class=\"sinError form-control\" name=\"nombre\" value=\"" + persona._nombre + "\" placeholder=\"Nombre..\" autocomplete=\"off\" class=\"form-control\" required autofocus>\n    </div>\n    <!-- EDAD -->\n        <div class=\"form-group\">\n        <label for=\"edad\">Edad</label>\n        <input type=\"text\" id=\"edad\" class=\"sinError form-control\" name=\"edad\" value=\"" + persona._edad + "\" placeholder=\"Edad..\" autocomplete=\"off\" class=\"form-control\" required>\n        </div>\n    <!-- SEXO -->\n    <label for=\"opcion\">Elige SEXO:</label>\n    <div class=\"form-group\" >\n        <select name=\"sexo\" id=\"sexo\" class=\"form-control\" required>\n            <option value=\"MASCULINO\">MASCULINO</option>\n            <option value=\"FEMENINO\">FEMENINO</option>\n            <option value=\"OTROS\">OTROS</option>\n        </select>\n    </div>\n\n    <!-- TIPO - ENUM TIPO -->\n        <div class=\"form-group\">\n            <label for=\"opcion\">Elige un tipo de Empleado:</label>\n            <select class=\"form-control\" name=\"tipoMasc\" id=\"tipoMasc\">\n                <option value=\"BARTENDER\">BARTENDER</option>\n                <option value=\"CERVECERO\">CERVECERO</option>\n                <option value=\"COCINERO\">COCINERO</option>\n                <option value=\"MOZO\">MOZO</option>\n                <option value=\"SOCIO\">SOCIO</option>\n            </select>\n        </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Clave</label>\n      <input type=\"password\" class=\"form-control\" id=\"ClaveUsuario\" placeholder=\"Password\">\n    </div>\n    \n    <!-- /.box-body -->\n    <!-- FECHA DESDE dd/m/aaaa -->\n    <div class=\"form-group\">\n      <label>Fecha Desde:</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-addon\">\n          <i class=\"fa fa-calendar\"></i>\n        </div>\n        <input type=\"text\" id=\"fechaDesde\" class=\"col-xs-4\" placeholder=\"dd/m/aaaa\" data-mask\"/></input>\n      </div><!-- /.input group -->\n    </div><!-- /.form group -->\n    <!-- /.box-body -->\n    <!-- FECHA Hasta dd/m/aaaa -->\n    <div class=\"form-group\">\n      <label>Fecha Hasta:</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-addon\">\n          <i class=\"fa fa-calendar\"></i>\n        </div>\n        <input type=\"text\" id=\"fechaHasta\" class=\"col-xs-4\" placeholder=\"dd/m/aaaa\" data-mask\"/></input>\n      </div><!-- /.input group -->\n    </div><!-- /.form group -->\n    <!-- /.box-body -->\n    <div class=\"box-footer\">\n        <button type=\"submit\" onclick=\"modificarEmpleado(" + (indice) + ",Clases.estadoCLIEMP.MODIFICAR)\" id=\"botonModificar\" class=\"btn btn-primary btn-block btn-flat\">Modificar</button>\n    </div>";
}
///////MESAS///////////
function generarNuevoNum() {
    document.getElementById("codAlfaBox").value = codigo_random(5);
}
function muestraAgregarMesa() {
    borrarPrincipal();
    var cuerpoAgregarEmpleado = "\n    <div class=\"box box-primary\">\n        <div class=\"box-header\">\n            <h3 class=\"box-title\">Alta de Mesas</h3>\n        </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form id=\"formCARGA\"  data-toggle=\"validator\">\n    <!--onsubmit=\"agregarMesa();\" -->\n      <div class=\"box-body\">\n            <!-- CODIGO ALFANUMERICO -->\n            <div class=\"form-group\">\n            <label for=\"codAlfa\">CODIGO ALFANUMERICO</label>\n\n            <div class=\"input-group\">\n                <div class=\"input-group-btn\">\n                    <button id=\"btnGenerarCodMesa\" type=\"button\"  onclick=\"generarNuevoNum();\" class=\"btn btn-danger\">Generar C\u00F3digo</button>\n                </div><!-- /btn-group -->\n                <input type=\"text\" id=\"codAlfaBox\" value=\"" + codigo_random(5) + "\" class=\"form-control\">\n            </div><!-- /input-group -->\n        <!-- /.box-body -->\n\n        \n        <div class=\"box-footer\">\n            <button type=\"submit\" onclick=\"agregarMesa();\" id=\"btnAgregarMesa\" class=\"btn btn-primary btn-block btn-flat\">Agregar</button>\n        </div>\n    </form>\n    <!-- /.box -->";
    $("#agregar").append(cuerpoAgregarEmpleado);
}
function muestraModificarMesa(idEmpleado) {
    muestraAgregarMesa();
    var indice = determinoIndice(idEmpleado);
    var persona = JSON.parse(JSON.parse(localStorage.Empleados)[indice]);
    var tcuerpo = $("#formCARGA");
    tcuerpo[0].innerHTML = "";
    tcuerpo[0].innerHTML =
        "   <div class=\"box-body\">\n        <!-- USUARIO -->\n        <div class=\"form-group\">\n        <label for=\"nombre\">Usuario</label>\n        <input type=\"email\" id=\"nombre\" class=\"sinError form-control\" name=\"nombre\" value=\"" + persona._nombre + "\" placeholder=\"Nombre..\" autocomplete=\"off\" class=\"form-control\" required autofocus>\n    </div>\n    <!-- EDAD -->\n        <div class=\"form-group\">\n        <label for=\"edad\">Edad</label>\n        <input type=\"text\" id=\"edad\" class=\"sinError form-control\" name=\"edad\" value=\"" + persona._edad + "\" placeholder=\"Edad..\" autocomplete=\"off\" class=\"form-control\" required>\n        </div>\n    <!-- SEXO -->\n    <label for=\"opcion\">Elige SEXO:</label>\n    <div class=\"form-group\" >\n        <select name=\"sexo\" id=\"sexo\" class=\"form-control\" required>\n            <option value=\"MASCULINO\">MASCULINO</option>\n            <option value=\"FEMENINO\">FEMENINO</option>\n            <option value=\"OTROS\">OTROS</option>\n        </select>\n    </div>\n\n    <!-- TIPO - ENUM TIPO -->\n        <div class=\"form-group\">\n            <label for=\"opcion\">Elige un tipo de Empleado:</label>\n            <select class=\"form-control\" name=\"tipoMasc\" id=\"tipoMasc\">\n                <option value=\"BARTENDER\">BARTENDER</option>\n                <option value=\"CERVECERO\">CERVECERO</option>\n                <option value=\"COCINERO\">COCINERO</option>\n                <option value=\"MOZO\">MOZO</option>\n                <option value=\"SOCIO\">SOCIO</option>\n            </select>\n        </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Clave</label>\n      <input type=\"password\" class=\"form-control\" id=\"ClaveUsuario\" placeholder=\"Password\">\n    </div>\n    \n    <!-- /.box-body -->\n\n    <div class=\"box-footer\">\n        <button type=\"submit\" onclick=\"modificarEmpleado(" + (indice) + " ,\"MODIFICAR\")\" class=\"btn btn-primary\">Modificar</button>\n    </div>";
}
///////PEDIDOS///////////
function muestraAgregarPedido() {
    borrarPrincipal();
    var cuerpoAgregarPedido = "\n    <div class=\"box box-primary\">\n        <div class=\"box-header\">\n            <h3 class=\"box-title\">Nuevo Pedido</h3>\n        </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form id=\"formCARGA\"  data-toggle=\"validator\">\n      <div class=\"box-body\">\n            <!-- CODIGO ALFANUMERICO -->\n            <div class=\"form-group\">\n            <label for=\"codAlfa\">CODIGO ALFANUMERICO</label>\n\n            <div class=\"input-group\">\n                <div class=\"input-group-btn\">\n                    <button type=\"button\" id=\"btnGenerarCodPed\"  onclick=\"generarNuevoNum();\" class=\"btn btn-danger\">Generar C\u00F3digo</button>\n                </div><!-- /btn-group -->\n                <input type=\"text\" id=\"codAlfaBox\" value=\"" + codigo_random(5) + "\" class=\"form-control\">\n            </div><!-- /input-group -->\n            \n            <!-- Nombre Cliente -->\n            <div class=\"form-group\">\n            <label for=\"edad\">Nombre del Cliente</label>\n            <input type=\"text\" id=\"nombClien\" class=\"sinError form-control\" name=\"nombClien\" placeholder=\"Nombre Cliente..\" autocomplete=\"off\" class=\"form-control\" >\n            </div>\n        \n            <!-- IMAGEN -->\n            <div class=\"form-group\">\n               <label for=\"archivo\">Imagen Adjunta:</label>\n               <input type=\"file\" id=\"imagen\" onchange=\"transformaImagen();\">\n               <p class=\"help-block\">M\u00E1ximo 50MB</p>\n           </div>\n           <div id=\"imgTest\"></div>\n        <!-- /.box-body -->\n\n        <!-- Mesas Disponibles-->\n        <div class=\"form-group\">\n          <label for=\"opcion\">Mesas Disponibles:</label>\n            <select class=\"form-control\" name=\"mesaDisp\" id=\"mesaDisp\">\n            </select>\n        </div>\n\n        <!-- checkbox -->\n        <div class=\"form-group\">\n          <input type=\"checkbox\" id=\"checkTragos\"  /><label>Tragos</label>             <input type=\"text\" placeholder=\"Ingrese detalle de Tragos...\" id=\"checkTragosForm\" class=\"form-control\">\n          <label><input type=\"checkbox\" id=\"checkVinos\"   />Vinos</label>              <input type=\"text\" placeholder=\"Ingrese detalle de Vinos...\" id=\"checkVinosForm\"  class=\"form-control\">\n          <label><input type=\"checkbox\" id=\"checkCerveza\" />Cerveza Artesanal</label>  <input type=\"text\" placeholder=\"Ingrese detalle de Cerveza...\" id=\"checkCervezaForm\"class=\"form-control\">\n          <label><input type=\"checkbox\" id=\"checkCocina\"  />Cocina</label>             <input type=\"text\" placeholder=\"Ingrese detalle de Cocina...\" id=\"checkCocinaForm\" class=\"form-control\">\n          <label><input type=\"checkbox\" id=\"checkCandy\"   />Candy Bar</label>          <input type=\"text\" placeholder=\"Ingrese detalle de CandyBar...\" id=\"checkCandyForm\"  class=\"form-control\">\n        </div>\n\n        <!-- Precio Pedido -->\n        <div class=\"input-group col-xs-4\">\n        <span class=\"input-group-addon\"><b>PRECIO</b> $</span>\n        <input type=\"text\" id=\"precioPedido\" class=\"form-control\">\n        <span class=\"input-group-addon\">.00</span>\n        </div>\n\n        <div class=\"box-footer\">\n            <button type=\"submit\" id=\"botonAgregarPed\" onclick=\"agregarPedido();\" class=\"btn btn-primary btn-block btn-flat\">Agregar</button>\n        </div>\n    </form>\n    <!-- /.box -->";
    $("#agregar").append(cuerpoAgregarPedido);
}
function filtroMesasActivas() {
    var valor = Clases.estadoMesa.ABIERTA;
    var MesasString = JSON.parse(localStorage.getItem("Mesas") || "[]");
    var stringFinal = MesasString
        .filter(function (Mesa) {
        var mesaRet = JSON.parse(Mesa);
        return mesaRet._estado == valor;
    })
        .map(function (Mesa) {
        var mesaRet = JSON.parse(Mesa);
        return mesaRet;
    });
    MesasString = stringFinal;
    //ENCABEZADO DE FORM DE CARGA
    var i = 0;
    var select = $("#mesaDisp");
    for (var i = 0; i < MesasString.length; i++) {
        select.append("<option value=" + MesasString[i]._codAlfa + ">" + MesasString[i]._codAlfa + "</option>");
    }
}
function muestraBuscarPedido() {
    borrarPrincipal();
    var principal = $("#principal");
    principal.append("\n    <div class=\"login-box-body\">\n    <!--<p class=\"login-box-msg\">Sign in to start your session</p>-->\n    <img id=\"profile-img\" src=\"img/busquedaCliente.png\">\n    <form onsubmit=\"buscarPedido();return false;\">\n      <div class=\"form-group has-feedback\">\n        <input id=\"numeroPedido\" type=\"text\" class=\"form-control\" placeholder=\"Ingrese el n\u00FAmero de PEDIDO Alf\u00E1numerico que fue brindado por el Mozo\" autocomplete=\"off\" autofocus/>\n        <span class=\"glyphicon glyphicon-gift form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input id=\"numeroMesa\" type=\"text\" class=\"form-control\" placeholder=\"Ingrese el n\u00FAmero de MesA Alf\u00E1numerico que fue brindado por el Mozo\" autocomplete=\"off\" autofocus/>\n        <span class=\"glyphicon glyphicon-cutlery form-control-feedback\"></span>\n      </div>\n      <div class=\"box-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\">Buscar Pedido</button>\n    </div>");
}
function buscarPedido() {
    var mesa = String($("#numeroMesa").val());
    var pedido = String($("#numeroPedido").val());
    borrarPrincipal();
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    var stringFinal = PedidosString
        .filter(function (Pedido) {
        var PedidoRet = JSON.parse(Pedido);
        return PedidoRet._mesaAsignada == mesa && PedidoRet._nroPedido == pedido;
    })
        .map(function (Pedido) {
        var PedidoRet = JSON.parse(Pedido);
        return PedidoRet;
    });
    PedidosString = stringFinal;
    var encabezadoTablaAppend = '<div class="box box-info">'
        + '<div class="box-header with-border">'
        + '<h3 class="box-title">Listado de Pedidos</h3>'
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
        + '  <th>Cod. Pedido</th>'
        + '  <th>Nombre Cliente</th>'
        + '  <th>Hora Ingreso</th>'
        + '  <th>Mesa Asignada</th>'
        + '  <th>Tiempo Restante</th>'
        + '  <th>Estado Actual</th>'
        + '  <th>Imagen Asociada</th>'
        + '</tr>'
        + '</thead>'
        + '<tbody>';
    var cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < PedidosString.length; i++) {
        var PedidoActual = PedidosString[i];
        if (PedidoActual != null) {
            var html = '<tr>';
            //DATOS
            html += "<td>";
            html += PedidoActual._nroPedido;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._nombreCliente;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._fechahoraIngreso;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._mesaAsignada;
            html += "</td>";
            html += "<td>";
            html += "TpoRestante()";
            html += "</td>";
            html += "<td>";
            html += Clases.estadoPedido[PedidoActual._estado];
            html += "</td>";
            html += "<td style=\"width:150px; height:150px; text-align:center; vertical-align:middle\" >";
            html += PedidoActual._imagen;
            html += "</td>";
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
    footerTablaAppend += '</div>';
    footerTablaAppend += '</div>';
    var tablafinal = encabezadoTablaAppend + cuerpoTablaAppend + footerTablaAppend;
    $("#listar").append(tablafinal);
}
function muestraModificarPedido(idPedido) {
    muestraAgregarPedido();
    borrarPrincipal();
    var indice = determinoIndicePedido(idPedido);
    var pedido = JSON.parse(JSON.parse(localStorage.Pedidos)[indice]);
    var productosTragos = "";
    var productosVinos = "";
    var productosCerveza = "";
    var productosCocina = "";
    var productosCandy = "";
    if (pedido._sectorTragos == true) {
        productosTragos = pedido._productosTragos;
    }
    if (pedido._sectorVinos == true) {
        productosVinos = pedido._productosVinos;
    }
    if (pedido._sectorCerveza == true) {
        productosCerveza = pedido._productosCerveza;
    }
    if (pedido._sectorCocina == true) {
        productosCocina = pedido._productosCocina;
    }
    if (pedido._sectorCandy == true) {
        productosCandy = pedido._productosCandy;
    }
    var cuerpoAgregarPedido = "\n    <div class=\"box box-primary\">\n        <div class=\"box-header\">\n            <h3 class=\"box-title\">Modificar Pedido</h3>\n        </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form id=\"formCARGA\"  data-toggle=\"validator\">\n      <div class=\"box-body\">\n            <!-- CODIGO ALFANUMERICO -->\n            <div class=\"form-group\">\n            <label for=\"codAlfa\">CODIGO ALFANUMERICO</label>\n\n            <div class=\"input-group\">\n                <div class=\"input-group-btn\">\n                    <button type=\"button\" id=\"btnGenerarCodPed\"  onclick=\"generarNuevoNum();\" class=\"btn btn-danger\">Generar C\u00F3digo</button>\n                </div><!-- /btn-group -->\n                <input type=\"text\" id=\"codAlfaBox\" value=\"" + pedido._nroPedido + "\" class=\"form-control\">\n            </div><!-- /input-group -->\n            \n            <!-- Nombre Cliente -->\n            <div class=\"form-group\">\n            <label for=\"edad\">Nombre del Cliente</label>\n            <input type=\"text\" id=\"nombClien\" value=\"" + pedido._nombreCliente + "\"class=\"sinError form-control\" name=\"nombClien\" placeholder=\"Nombre Cliente..\" autocomplete=\"off\" class=\"form-control\" >\n            </div>\n        \n            <!-- IMAGEN -->\n            <div class=\"form-group\">\n               <label for=\"archivo\">Imagen Adjunta:</label>\n               <input type=\"file\" id=\"imagen\" onchange=\"transformaImagen();\">\n               <p class=\"help-block\">M\u00E1ximo 50MB</p>\n           </div>\n           <div id=\"imgTest\"></div>\n        <!-- /.box-body -->\n\n        <!-- Mesas Disponibles-->\n        <div class=\"form-group\">\n          <label for=\"opcion\">Mesas Disponibles:</label>\n            <select class=\"form-control\" name=\"mesaDisp\" value=\"" + pedido._mesaAsignada + "\"id=\"mesaDisp\">\n            <option value=\"" + pedido._mesaAsignada + "\">" + pedido._mesaAsignada + "</option>\n            </select>\n        </div>\n\n        <!-- checkbox -->\n        <div class=\"form-group\">\n          <label><input type=\"checkbox\" id=\"checkTragos\" class=\"iCheck-helper\"/>Tragos</label>             <input type=\"text\" placeholder=\"Ingrese detalle de Tragos...\" id=\"checkTragosForm\"   value=\"" + productosTragos + "\"  class=\"form-control\">\n          <label><input type=\"checkbox\" id=\"checkVinos\"  class=\"iCheck-helper\"/>Vinos</label>              <input type=\"text\" placeholder=\"Ingrese detalle de Vinos...\" id=\"checkVinosForm\"     value=\"" + productosVinos + "\"   class=\"form-control\">\n          <label><input type=\"checkbox\" id=\"checkCerveza\"class=\"iCheck-helper\"/>Cerveza Artesanal</label>  <input type=\"text\" placeholder=\"Ingrese detalle de Cerveza...\" id=\"checkCervezaForm\" value=\"" + productosCerveza + "\" class=\"form-control\">\n          <label><input type=\"checkbox\" id=\"checkCocina\" class=\"iCheck-helper\"/>Cocina</label>             <input type=\"text\" placeholder=\"Ingrese detalle de Cocina...\" id=\"checkCocinaForm\"   value=\"" + productosCocina + "\"  class=\"form-control\">\n          <label><input type=\"checkbox\" id=\"checkCandy\"  class=\"iCheck-helper\"/>Candy Bar</label>          <input type=\"text\" placeholder=\"Ingrese detalle de CandyBar...\" id=\"checkCandyForm\"  value=\"" + productosCandy + "\"   class=\"form-control\">\n        </div>\n\n        <!-- Precio Pedido -->\n        <div class=\"input-group col-xs-4\">\n        <span class=\"input-group-addon\"><b>PRECIO</b> $</span>\n        <input type=\"text\" id=\"precioPedido\" class=\"form-control\">\n        <span class=\"input-group-addon\">.00</span>\n        </div>\n\n\n        <div class=\"box-footer\">\n            <button type=\"submit\" id=\"botonAgregarPed\" onclick=\"modificarPedido(" + (indice) + ",Clases.estadoPedido.MODIFICAR);\" class=\"btn btn-primary btn-block btn-flat\">Modificar Pedido</button>\n        </div>\n    </form>\n    <!-- /.box -->";
    $("#agregar").append(cuerpoAgregarPedido);
}
// // // // // // // FUNCIONES DE CLASES DE PÁGINA // // // // // // //// // // // // // //
////////////////////////////////GENERALES////////////////////////////////
function validaLogin() {
    var estalogueado = 0;
    var rol;
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    for (var i = 0; i < EmpleadosString.length; i++) {
        var empleadoActual = JSON.parse(EmpleadosString[i]);
        if (empleadoActual._nombre == $('#mailingresado').val() && empleadoActual._clave == $('#passingresado').val() && empleadoActual._estado == Clases.estadoCLIEMP.ACTIVO) {
            estalogueado = 1;
            rol = Clases.tipoEmpleado[empleadoActual._tipo];
            var nombEmp = empleadoActual._nombre;
        }
    }
    if (estalogueado) {
        alert("Bienvenido " + nombEmp);
        switch (rol) {
            case "BARTENDER":
                {
                    window.location.href = "homeSERVICIOBAR.html";
                    break;
                }
            case "CERVECERO":
                {
                    window.location.href = "homeSERVICIOCER.html";
                    break;
                }
            case "COCINERO":
                {
                    window.location.href = "homeSERVICIOCOC.html";
                    break;
                }
            case "MOZO":
                {
                    window.location.href = "homeMOZO.html";
                    break;
                }
            case "SOCIO":
                {
                    window.location.href = "homeSOCIO.html";
                    break;
                }
        }
    }
    else {
        alert("Empleado NO registrado en el sistema");
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
function determinoIndicePedido(idPedido) {
    var retorno;
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    for (var i = 0; i < PedidosString.length; i++) {
        var PedidoActual = JSON.parse(PedidosString[i]);
        if (PedidoActual._nroPedido == idPedido) {
            retorno = i;
        }
    }
    return retorno;
}
determinoIndicePedido;
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
    localStorage.Empleados = "";
    localStorage.setItem("Empleados", JSON.stringify(objJsonResp));
}
function armoJSONMesa(indice, mesa) {
    var MesasStringNew = JSON.parse(localStorage.getItem("Mesas") || "[]");
    delete MesasStringNew[indice];
    var objJsonResp = MesasStringNew.filter(function (x) { return x !== null; });
    objJsonResp.push(JSON.stringify(mesa));
    localStorage.Mesas = "";
    localStorage.setItem("Mesas", JSON.stringify(objJsonResp));
}
function armoJSONPedido(indice, pedido) {
    var PedidosStringNew = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    delete PedidosStringNew[indice];
    var objJsonResp = PedidosStringNew.filter(function (x) { return x !== null; });
    objJsonResp.push(JSON.stringify(pedido));
    localStorage.Pedidos = "";
    localStorage.setItem("Pedidos", JSON.stringify(objJsonResp));
}
function codigo_random(longitud) {
    var caracteres = "0123456789ABCDEF";
    var code = "";
    for (var x = 0; x < longitud; x++) {
        var rand = Math.floor(Math.random() * caracteres.length);
        code += caracteres.substr(rand, 1);
    }
    return code;
}
///////EMPLEADO///////////
function calcularIdEmpleado() {
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    var valormax = arrayMax(EmpleadosString);
    return valormax;
}
function agregarEmpleado(vienedeModif) {
    var tipoEMP = determinoRol(String($('#tipoMasc').val()));
    var nuevoEmpleado = new Clases.Empleado(String($('#nombre').val()), Number($('#edad').val()), String($('#sexo').val()), tipoEMP, Clases.estadoCLIEMP.ACTIVO, String($('#ClaveUsuario').val()), String($('#fechaDesde').val()), String($('#fechaHasta').val()));
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    EmpleadosString.push(JSON.stringify(nuevoEmpleado));
    localStorage.setItem("Empleados", JSON.stringify(EmpleadosString));
    console.log(EmpleadosString);
    alert("Empleado guardado");
    muestraAgregarEmpleado();
}
var auxEmpleado;
function modificarEmpleado(indice, auxEmpleado) {
    var indice = indice;
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    var persona = JSON.parse(JSON.parse(localStorage.Empleados)[indice]);
    if (auxEmpleado == Clases.estadoCLIEMP.MODIFICAR) {
        var tipoEMP = determinoRol(String($('#tipoMasc').val()));
        persona._nombre = String($('#nombre').val());
        persona._edad = Number($('#edad').val());
        persona._sexo = String($('#sexo').val());
        persona._tipo = tipoEMP;
        persona._clave = String($('#ClaveUsuario').val());
        var fechaIniciocontrato = String($('#fechaDesde').val());
        if (fechaIniciocontrato == "") {
            persona._fechaDesde = new Date().toLocaleDateString();
        }
        else {
            persona._fechaDesde = fechaIniciocontrato;
        }
        persona._fechaHasta = String($('#fechaHasta').val());
        ;
    }
    else {
        persona._estado = auxEmpleado;
        if (auxEmpleado == Clases.estadoCLIEMP.BAJA || auxEmpleado == Clases.estadoCLIEMP.SUSPENDIDO) {
            persona._fechaHasta = new Date().toLocaleDateString();
        }
        else if (auxEmpleado == Clases.estadoCLIEMP.ACTIVO) {
            persona._fechaDesde = new Date().toLocaleDateString();
            persona._fechaHasta = "";
        }
    }
    armoJSON(indice, persona);
    mostrarEmpleados();
}
///////MESA///////////
function calcularIdMesa(codAlfa) {
    var indice;
    var MesasString = JSON.parse(localStorage.getItem("Mesas") || "[]");
    for (var i = 0; i < MesasString.length; i++) {
        var mesaActual = JSON.parse(MesasString[i]);
        if (mesaActual != null) {
            if (mesaActual._codAlfa == codAlfa) {
                indice = i;
            }
        }
    }
    return indice;
}
///////MESA///////////
function calcularIndXMesa(codAlfa) {
    var indice;
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    for (var i = 0; i < PedidosString.length; i++) {
        var PedidoActual = JSON.parse(PedidosString[i]);
        if (PedidoActual != null) {
            if (PedidoActual._mesaAsignada == codAlfa) {
                indice = i;
            }
        }
    }
    return indice;
}
//FUNCIONES QUE LLAMAN A MODIFICAR CON DISTINTOS PARAMETROS
function eliminarEmpleado(idEmpleado) {
    var indice = determinoIndice(idEmpleado);
    modificarEmpleado(indice, Clases.estadoCLIEMP.BAJA);
}
function habilitarEmpleado(idEmpleado) {
    var indice = determinoIndice(idEmpleado);
    modificarEmpleado(indice, Clases.estadoCLIEMP.ACTIVO);
}
function suspenderEmpleado(idEmpleado) {
    var indice = determinoIndice(idEmpleado);
    modificarEmpleado(indice, Clases.estadoCLIEMP.SUSPENDIDO);
}
function mostrarEmpleados() {
    borrarPrincipal();
    var EmpleadosString = JSON.parse(localStorage.getItem("Empleados") || "[]");
    //ENCABEZADO FIJO
    var encabezadoTablaAppend = '<div class="box box-info">'
        + '<div class="box-header with-border">'
        + '<h3 class="box-title">Listado de Empleados</h3>'
        + '<div class="box-tools pull-right">'
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
        + '  <th>Fecha Desde</th>'
        + '  <th>Fecha Hasta</th>'
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
            html += "<td>";
            html += empleadoActual._fechaDesde;
            html += "</td>";
            html += "<td>";
            html += empleadoActual._fechaHasta;
            html += "</td>";
            //BOTONES
            html += "<td>";
            html += "<button class='btn btn-block btn-default btn-flat' type='button' id='btnEnviar' value='Modificar' onclick='muestraModificarEmpleado(" + empleadoActual._id + ")'>";
            html += "MODIFICAR ";
            html += "<i class='glyphicon glyphicon-pencil'></i>";
            html += "</button>";
            html += "</td>";
            //CONDICION PARA AGREGAR O BORRAR
            if (empleadoActual._estado == Clases.estadoCLIEMP.SUSPENDIDO || empleadoActual._estado == Clases.estadoCLIEMP.BAJA) {
                html += "<td>";
                html += "<button class='btn btn-block btn-success btn-sm' type='button' id='btnHabilitar' value='Habilitar' onclick='habilitarEmpleado(" + empleadoActual._id + ")'>";
                html += "HABILITAR ";
                html += "<i class='glyphicon glyphicon-plus'></i>";
                html += "</button>";
                html += "</td>";
                html += "<td>";
                html += "<button class='btn btn-block btn-warning btn-flat disabled' type='button' id='btnSuspender' value='Suspender' onclick='suspenderEmpleado(" + empleadoActual._id + ")'>";
                html += "SUSPENDER ";
                html += "<i class='fa fa-ban'></i>";
                html += "</button>";
                html += "</td>";
                html += "<td>";
                html += "<button class='btn btn-block btn-danger disabled' type='button' id='btnEnviar' value='Eliminar' onclick='eliminarEmpleado(" + empleadoActual._id + ")'>";
                html += "BORRAR ";
                html += "<i class='glyphicon glyphicon-minus'></i>";
                html += "</button>";
                html += "</td>";
                html += "</tr>";
            }
            else {
                html += "<td>";
                html += "<button class='btn btn-block btn-success btn-sm disabled' type='button' id='btnHabilitar' value='Habilitar' onclick='habilitarEmpleado(" + empleadoActual._id + ")'>";
                html += "HABILITAR ";
                html += "<i class='glyphicon glyphicon-plus'></i>";
                html += "</button>";
                html += "</td>";
                html += "<td>";
                html += "<button class='btn btn-block btn-warning btn-flat ' type='button' id='btnSuspender' value='Suspender' onclick='suspenderEmpleado(" + empleadoActual._id + ")'>";
                html += "SUSPENDER ";
                html += "<i class='fa fa-ban'></i>";
                html += "</button>";
                html += "</td>";
                html += "<td>";
                html += "<button class='btn btn-block btn-danger' type='button' id='btnEnviar' value='Eliminar' onclick='eliminarEmpleado(" + empleadoActual._id + ")'>";
                html += "BORRAR ";
                html += "<i class='glyphicon glyphicon-minus'></i>";
                html += "</button>";
                html += "</td>";
                html += "</tr>";
            }
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
    footerTablaAppend += '<a onclick="muestraAgregarEmpleado();" id="botonNuevoEmp" class="btn btn-sm btn-info btn-flat pull-left">Nuevo Empleado</a>';
    footerTablaAppend += '</div>';
    footerTablaAppend += '</div>';
    var tablafinal = encabezadoTablaAppend + cuerpoTablaAppend + footerTablaAppend;
    $("#listar").append(tablafinal);
}
///////MESAS///////////
function agregarMesa() {
    var codigoMesa = String($('#codAlfaBox').val());
    var nuevaMesa = new Clases.Mesa(codigoMesa, Clases.estadoMesa.ABIERTA);
    var MesasString = JSON.parse(localStorage.getItem("Mesas") || "[]");
    MesasString.push(JSON.stringify(nuevaMesa));
    localStorage.setItem("Mesas", JSON.stringify(MesasString));
    alert("Mesa dada de Alta");
    mostrarMesas();
}
function cerrarMesa(idMesa) {
    var indice = calcularIdMesa(idMesa);
    modificarMesa(indice, Clases.estadoMesa.CERRADA);
    cerrarPedido(idMesa);
}
function siguienteEstadoMesa(idMesa) {
    var indice = calcularIdMesa(idMesa);
    modificarMesa(indice, Clases.estadoMesa.SIGUIENTE);
    mostrarMesas(true);
}
function siguienteEstadoPedido(idPedido) {
    var indice = determinoIndicePedido(idPedido);
    modificarPedido(indice, Clases.estadoPedido.SIGUIENTE);
    window.location.reload();
}
var auxMesa;
function modificarMesa(indice, auxMesa) {
    var indice = indice;
    var mesa = JSON.parse(JSON.parse(localStorage.Mesas)[indice]);
    if (auxMesa == Clases.estadoMesa.CERRADA) {
        mesa._estado = Clases.estadoMesa.ABIERTA;
    }
    else if (auxMesa == Clases.estadoMesa.SIGUIENTE) {
        mesa._estado += 1;
    }
    else {
        mesa._estado = auxMesa;
    }
    armoJSONMesa(indice, mesa);
    mostrarMesas();
}
function mostrarMesas(vienedeMozo) {
    borrarPrincipal();
    var varUltimaColumna;
    if (!vienedeMozo) {
        varUltimaColumna = '  <th>Acciones</th>';
    }
    else {
        varUltimaColumna = '  <th>Próximo Estado </th>';
    }
    var MesasString = JSON.parse(localStorage.getItem("Mesas") || "[]");
    //ENCABEZADO FIJO
    var encabezadoTablaAppend = '<div class="box box-info">'
        + '<div class="box-header with-border">'
        + '<h3 class="box-title">Listado de Mesas</h3>'
        + '<div class="box-tools pull-right">'
        + '</div>'
        + '</div><!-- /.box-header -->'
        + '<div class="box-body">'
        + '<div class="table-responsive">'
        + '<table class="table no-margin">'
        + '<thead>'
        + '<tr>'
        + '  <th>Cod. Mesa</th>'
        + '  <th>Recaudación Total</th>'
        + '  <th>Cant. Pedidos</th>'
        + '  <th>Estado Actual</th>'
        + varUltimaColumna
        + '</tr>'
        + '</thead>'
        + '<tbody>';
    var cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < MesasString.length; i++) {
        var mesaActual = JSON.parse(MesasString[i]);
        if (mesaActual != null) {
            var html = '<tr>';
            //DATOS
            html += "<td>";
            html += mesaActual._codAlfa;
            html += "</td>";
            html += "<td>";
            html += mesaActual._recaudacion;
            html += "</td>";
            html += "<td>";
            html += mesaActual._cantPedidos;
            html += "</td>";
            html += "<td>";
            html += Clases.estadoMesa[mesaActual._estado];
            html += "</td>";
            if (!vienedeMozo) {
                if (mesaActual._estado == Clases.estadoMesa["CON CLIENTES PAGANDO"]) {
                    html += "<td>";
                    html += "<button class='btn btn-block btn-danger' type='button' id='btnEnviar' value='Eliminar' onclick='cerrarMesa(`" + mesaActual._codAlfa + "`)' >";
                    html += "CERRAR ";
                    html += "<i class='glyphicon glyphicon-minus'></i>";
                    html += "</button>";
                    html += "</td>";
                }
                else {
                    html += "<td>";
                    html += "<button class='btn btn-block btn-danger disabled' type='button' id='btnEnviar' value='Eliminar' onclick='cerrarMesa(`" + mesaActual._codAlfa + "`)' >";
                    html += "CERRAR ";
                    html += "<i class='glyphicon glyphicon-minus'></i>";
                    html += "</button>";
                    html += "</td>";
                }
            }
            else {
                if (Clases.estadoMesa[mesaActual._estado + 1] != "CERRADA") {
                    html += "<td>";
                    html += "<button class='btn btn-block btn-success btn-sm' type='button' id='btnEnviar' value='Eliminar' onclick='siguienteEstadoMesa(`" + mesaActual._codAlfa + "`)' >";
                    html += Clases.estadoMesa[mesaActual._estado + 1];
                    html += " <i class='glyphicon glyphicon-fast-forward'></i>";
                    html += "</button>";
                    html += "</td>";
                }
                else {
                    html += "<td>";
                    html += "<button class='btn btn-block btn-danger btn-sm disabled' type='button' id='btnEnviar' value='Eliminar' onclick='siguienteEstadoMesa(`" + mesaActual._codAlfa + "`)' >";
                    html += Clases.estadoMesa[mesaActual._estado + 1];
                    html += " <i class='glyphicon glyphicon-fast-forward'></i>";
                    html += "</button>";
                    html += "</td>";
                }
            }
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
    footerTablaAppend += '<a onclick="muestraAgregarMesa();" id="btnNuevaMesa" class="btn btn-sm btn-info btn-flat pull-left">Agregar Mesa</a>';
    footerTablaAppend += '</div>';
    footerTablaAppend += '</div>';
    var tablafinal = encabezadoTablaAppend + cuerpoTablaAppend + footerTablaAppend;
    $("#listar").append(tablafinal);
}
///////PEDIDOS///////////
function agregarPedido() {
    var codigoPedido = String($('#codAlfaBox').val());
    var codAlfaMesa = String($("#mesaDisp").val());
    var nuevaPedido = new Clases.Pedido(codigoPedido, Clases.estadoPedido["ORDEN TOMADA"], String($('#nombClien').val()), codAlfaMesa, imagenBASE64, Number($('#precioPedido').val()));
    var checkTragos = $('#checkTragos')[0];
    var checkVinos = $('#checkVinos')[0];
    var checkCerveza = $('#checkCerveza')[0];
    var checkCocina = $('#checkCocina')[0];
    var checkCandy = $('#checkCandy')[0];
    if (checkTragos.checked) {
        nuevaPedido._sectorTragos = true;
        nuevaPedido._productosTragos = String($('#checkTragosForm').val());
    }
    if (checkVinos.checked) {
        nuevaPedido._sectorVinos = true;
        nuevaPedido._productosVinos = String($('#checkVinosForm').val());
    }
    if (checkCerveza.checked) {
        nuevaPedido._sectorCerveza = true;
        nuevaPedido._productosCerveza = String($('#checkCervezaForm').val());
    }
    if (checkCocina.checked) {
        nuevaPedido._sectorCocina = true;
        nuevaPedido._productosCocina = String($('#checkCocinaForm').val());
    }
    if (checkCandy.checked) {
        nuevaPedido._sectorCandy = true;
        nuevaPedido._productosCandy = String($('#checkCandyForm').val());
    }
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    PedidosString.push(JSON.stringify(nuevaPedido));
    localStorage.setItem("Pedidos", JSON.stringify(PedidosString));
    var indice = calcularIdMesa(codAlfaMesa);
    var Mesa = JSON.parse(JSON.parse(localStorage.Mesas)[indice]);
    Mesa._estado = Clases.estadoMesa["CON CLIENTE ESPERANDO PEDIDO"];
    Mesa._cantPedidos++;
    Mesa._recaudacion = Mesa._recaudacion + Number($('#precioPedido').val());
    armoJSONMesa(indice, Mesa);
    alert("Pedido dada de Alta");
    mostrarPedidosMozo();
}
var auxPedido;
function modificarPedido(indice, auxPedido) {
    var indice = indice;
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    var pedido = JSON.parse(JSON.parse(localStorage.Pedidos)[indice]);
    if (auxPedido == Clases.estadoPedido.MODIFICAR) {
        pedido._nroPedido = String($('#codAlfaBox').val());
        pedido._nombreCliente = String($('#nombClien').val());
        pedido._imagen = imagenBASE64;
        pedido._fechahoraIngreso = new Date().toLocaleDateString();
        pedido._precioPedido = Number($('#precioPedido').val());
        var checkTragos = $('#checkTragos')[0];
        var checkVinos = $('#checkVinos')[0];
        var checkCerveza = $('#checkCerveza')[0];
        var checkCocina = $('#checkCocina')[0];
        var checkCandy = $('#checkCandy')[0];
        if (checkTragos.checked) {
            pedido._sectorTragos = true;
            pedido._productosTragos = String($('#checkTragosForm').val());
        }
        if (checkVinos.checked) {
            pedido._sectorVinos = true;
            pedido._productosVinos = String($('#checkVinosForm').val());
        }
        if (checkCerveza.checked) {
            pedido._sectorCerveza = true;
            pedido._productosCerveza = String($('#checkCervezaForm').val());
        }
        if (checkCocina.checked) {
            pedido._sectorCocina = true;
            pedido._productosCocina = String($('#checkCocinaForm').val());
        }
        if (checkCandy.checked) {
            pedido._sectorCandy = true;
            pedido._productosCandy = String($('#checkCandyForm').val());
        }
    }
    else if (auxPedido = Clases.estadoPedido.SIGUIENTE) {
        pedido._estado++;
    }
    else {
        pedido._estado = auxPedido;
    }
    armoJSONPedido(indice, pedido);
    mostrarPedidosMozo();
}
//FUNCIONES QUE USAN MODIFICAR
function cerrarPedido(idMesa) {
    var indicePedido = calcularIndXMesa(idMesa);
    var pedido = JSON.parse(JSON.parse(localStorage.Pedidos)[indicePedido]);
    pedido._estado = Clases.estadoPedido.SERVIDO;
    armoJSONPedido(indicePedido, pedido);
    mostrarMesas();
}
function enpreparacionPedido(idPedido) {
    var indice = determinoIndice(idPedido);
    modificarPedido(indice, Clases.estadoPedido["EN PREPARACION"]);
}
function terminadoPedido(idPedido) {
    var indice = determinoIndice(idPedido);
    modificarPedido(indice, Clases.estadoPedido["LISTO PARA SERVIR"]);
}
function mostrarPedidosServicioBAR() {
    borrarPrincipal();
    var valor = Clases.sectoresProd.TRAGOS;
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    var stringFinal = PedidosString
        .filter(function (Pedido) {
        var PedidoRet = JSON.parse(Pedido);
        return PedidoRet._sectorTragos == true || PedidoRet._sectorVinos == true;
    })
        .map(function (Pedido) {
        var PedidoRet = JSON.parse(Pedido);
        return PedidoRet;
    });
    PedidosString = stringFinal;
    //ENCABEZADO FIJO
    var encabezadoTablaAppend = '<div class="box box-info">'
        + '<div class="box-header with-border">'
        + '<h3 class="box-title">Listado de Pedidos</h3>'
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
        + '  <th>Cod. Pedido</th>'
        + '  <th>Nombre Cliente</th>'
        + '  <th>Hora Ingreso</th>'
        + '  <th>Mesa Asignada</th>'
        + '  <th>Tiempo Restante</th>'
        + '  <th>Estado Actual</th>'
        + '  <th>Imagen Asociada</th>'
        + '</tr>'
        + '</thead>'
        + '<tbody>';
    var cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < PedidosString.length; i++) {
        var PedidoActual = PedidosString[i];
        if (PedidoActual != null) {
            var html = '<tr>';
            //DATOS
            html += "<td>";
            html += PedidoActual._nroPedido;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._nombreCliente;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._fechahoraIngreso;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._mesaAsignada;
            html += "</td>";
            html += "<td>";
            html += "TpoRestante()";
            html += "</td>";
            html += "<td>";
            html += Clases.estadoPedido[PedidoActual._estado];
            html += "</td>";
            html += "<td style=\"width:150px; height:150px; text-align:center; vertical-align:middle\" >";
            html += PedidoActual._imagen;
            html += "</td>";
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
    footerTablaAppend += '</div>';
    footerTablaAppend += '</div>';
    var tablafinal = encabezadoTablaAppend + cuerpoTablaAppend + footerTablaAppend;
    $("#listar").append(tablafinal);
}
function mostrarPedidosServicioCOC() {
    borrarPrincipal();
    var valor = Clases.sectoresProd.TRAGOS;
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    var stringFinal = PedidosString
        .filter(function (Pedido) {
        var PedidoRet = JSON.parse(Pedido);
        return PedidoRet._sectorCocina == true;
    })
        .map(function (Pedido) {
        var PedidoRet = JSON.parse(Pedido);
        return PedidoRet;
    });
    PedidosString = stringFinal;
    //ENCABEZADO FIJO
    var encabezadoTablaAppend = '<div class="box box-info">'
        + '<div class="box-header with-border">'
        + '<h3 class="box-title">Listado de Pedidos</h3>'
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
        + '  <th>Cod. Pedido</th>'
        + '  <th>Nombre Cliente</th>'
        + '  <th>Hora Ingreso</th>'
        + '  <th>Mesa Asignada</th>'
        + '  <th>Tiempo Restante</th>'
        + '  <th>Estado Actual</th>'
        + '  <th>Imagen Asociada</th>'
        + '  <th>Acciones</th>'
        + '</tr>'
        + '</thead>'
        + '<tbody>';
    var cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < PedidosString.length; i++) {
        var PedidoActual = PedidosString[i];
        if (PedidoActual != null) {
            var html = '<tr>';
            //DATOS
            html += "<td>";
            html += PedidoActual._nroPedido;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._nombreCliente;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._fechahoraIngreso;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._mesaAsignada;
            html += "</td>";
            html += "<td>";
            html += "TpoRestante()";
            html += "</td>";
            html += "<td>";
            html += Clases.estadoPedido[PedidoActual._estado];
            html += "</td>";
            html += "<td style=\"width:150px; height:150px; text-align:center; vertical-align:middle\" >";
            html += PedidoActual._imagen;
            html += "</td>";
        }
        if (Clases.estadoPedido[PedidoActual._estado + 1] != "MODIFICAR" && Clases.estadoPedido[PedidoActual._estado + 1] != "SIGUIENTE") {
            html += "<td>";
            html += "<button class='btn btn-block btn-success btn-sm' type='button' id='btnEnviar' value='Eliminar' onclick='siguienteEstadoPedido(`" + PedidoActual._nroPedido + "`)' >";
            html += Clases.estadoPedido[PedidoActual._estado + 1];
            html += " <i class='glyphicon glyphicon-fast-forward'></i>";
            html += "</button>";
            html += "</td>";
        }
        else {
            html += "<td>";
            html += "<button class='btn btn-block btn-danger btn-sm disabled' type='button' id='btnEnviar' value='Eliminar' onclick='siguienteEstadoPedido(`" + PedidoActual._nroPedido + "`)' >";
            html += Clases.estadoMesa[PedidoActual._estado + 1];
            html += " <i class='glyphicon glyphicon-fast-forward'></i>";
            html += "</button>";
            html += "</td>";
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
    footerTablaAppend += '</div>';
    footerTablaAppend += '</div>';
    var tablafinal = encabezadoTablaAppend + cuerpoTablaAppend + footerTablaAppend;
    $("#listar").append(tablafinal);
}
function mostrarPedidosServicioCER() {
    borrarPrincipal();
    var valor = Clases.sectoresProd.TRAGOS;
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    var stringFinal = PedidosString
        .filter(function (Pedido) {
        var PedidoRet = JSON.parse(Pedido);
        return PedidoRet._sectorCerveza == true;
    })
        .map(function (Pedido) {
        var PedidoRet = JSON.parse(Pedido);
        return PedidoRet;
    });
    PedidosString = stringFinal;
    //ENCABEZADO FIJO
    var encabezadoTablaAppend = '<div class="box box-info">'
        + '<div class="box-header with-border">'
        + '<h3 class="box-title">Listado de Pedidos</h3>'
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
        + '  <th>Cod. Pedido</th>'
        + '  <th>Nombre Cliente</th>'
        + '  <th>Hora Ingreso</th>'
        + '  <th>Mesa Asignada</th>'
        + '  <th>Tiempo Restante</th>'
        + '  <th>Estado Actual</th>'
        + '  <th>Imagen Asociada</th>'
        + '</tr>'
        + '</thead>'
        + '<tbody>';
    var cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < PedidosString.length; i++) {
        var PedidoActual = PedidosString[i];
        if (PedidoActual != null) {
            var html = '<tr>';
            //DATOS
            html += "<td>";
            html += PedidoActual._nroPedido;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._nombreCliente;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._fechahoraIngreso;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._mesaAsignada;
            html += "</td>";
            html += "<td>";
            html += "TpoRestante()";
            html += "</td>";
            html += "<td>";
            html += Clases.estadoPedido[PedidoActual._estado];
            html += "</td>";
            html += "<td style=\"width:150px; height:150px; text-align:center; vertical-align:middle\" >";
            html += PedidoActual._imagen;
            html += "</td>";
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
    footerTablaAppend += '</div>';
    footerTablaAppend += '</div>';
    var tablafinal = encabezadoTablaAppend + cuerpoTablaAppend + footerTablaAppend;
    $("#listar").append(tablafinal);
}
function mostrarPedidosJefe() {
    borrarPrincipal();
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    //ENCABEZADO FIJO
    var encabezadoTablaAppend = '<div class="box box-info">'
        + '<div class="box-header with-border">'
        + '<h3 class="box-title">Listado de Pedidos</h3>'
        + '<div class="box-tools pull-right">'
        + '</div>'
        + '</div><!-- /.box-header -->'
        + '<div class="box-body">'
        + '<div class="table-responsive">'
        + '<table class="table no-margin">'
        + '<thead>'
        + '<tr>'
        + '  <th>Cod. Pedido</th>'
        + '  <th>Nombre Cliente</th>'
        + '  <th>Hora Ingreso</th>'
        + '  <th>Mesa Asignada</th>'
        + '  <th>Tiempo Restante</th>'
        + '  <th>Estado Actual</th>'
        + '  <th>Imagen Asociada</th>'
        + '</tr>'
        + '</thead>'
        + '<tbody>';
    var cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < PedidosString.length; i++) {
        var PedidoActual = JSON.parse(PedidosString[i]);
        if (PedidoActual != null) {
            var html = '<tr>';
            //DATOS
            html += "<td>";
            html += PedidoActual._nroPedido;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._nombreCliente;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._fechahoraIngreso;
            html += "</td>";
            html += "<td>";
            html += PedidoActual._mesaAsignada;
            html += "</td>";
            html += "<td>";
            html += "TpoRestante()";
            html += "</td>";
            html += "<td>";
            html += Clases.estadoPedido[PedidoActual._estado];
            html += "</td>";
            html += "<td style=\"width:150px; height:150px; text-align:center; vertical-align:middle\" >";
            html += PedidoActual._imagen;
            html += "</td>";
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
    footerTablaAppend += '</div>';
    footerTablaAppend += '</div>';
    var tablafinal = encabezadoTablaAppend + cuerpoTablaAppend + footerTablaAppend;
    $("#listar").append(tablafinal);
}
function mostrarPedidosMozo() {
    borrarPrincipal();
    var PedidosString = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    //ENCABEZADO FIJO
    var encabezadoTablaAppend = " \n\n    <!-- PRODUCT LIST -->\n    <div class=\"box box-primary\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Pedidos Recientes</h3>\n        <div class=\"box-tools pull-right\">\n       </div>\n      </div><!-- /.box-header -->\n      <div class=\"box-body\">\n      ";
    var cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < PedidosString.length; i++) {
        var PedidoActual = JSON.parse(PedidosString[i]);
        var varSectoresProd = "";
        if (PedidoActual._sectorTragos == true) {
            varSectoresProd = "<p></p> TRAGOS: " + PedidoActual._productosTragos;
        }
        if (PedidoActual._sectorVinos == true) {
            varSectoresProd = varSectoresProd + " / VINOS:" + PedidoActual._productosVinos + "<p></p>";
        }
        if (PedidoActual._sectorCerveza == true) {
            varSectoresProd = varSectoresProd + " CERVEZA:" + PedidoActual._productosCerveza;
        }
        if (PedidoActual._sectorCocina == true) {
            varSectoresProd = varSectoresProd + " / COCINA:" + PedidoActual._productosCocina;
        }
        if (PedidoActual._sectorCandy == true) {
            varSectoresProd = varSectoresProd + " / CANDYBAR " + PedidoActual._productosCandy;
        }
        if (PedidoActual != null) {
            var html = "\n        \n            <ul class=\"products-list product-list-in-box\">\n            <li class=\"item\">\n                <!-- IMAGEN PEDIDO-->\n                    <div class=\"product-img\">"
                + PedidoActual._imagen +
                "<!-- <img src=\"http://placehold.it/50x50/d2d6de/ffffff\" alt=\"Product Image\"/>-->\n                    </div>\n                <!-- INFO PEDIDO -->\n                 <div class=\"product-info\">\n                    <a onclick=\"muestraModificarPedido('" + PedidoActual._nroPedido + "')\" class=\"product-title\">"
                + "MESA:" + PedidoActual._mesaAsignada +
                " - "
                + "PEDIDO:" + PedidoActual._nroPedido +
                " - "
                + "NOMBRE CLIENTE:" + PedidoActual._nombreCliente +
                " - "
                + "PRECIO:" + PedidoActual._precioPedido +
                "<span class=\"label label-warning pull-right\">"
                + Clases.estadoPedido[PedidoActual._estado] +
                "</span></a>\n                <!--DESCIPCION PEDIDO--> \n                 <span class=\"product-description\">"
                + " HORA PEDIDO: "
                + PedidoActual._fechahoraIngreso
                + "/ HORA FIN ESTIMADA: "
                + PedidoActual._fechahoraFinEstimado
                + "<p></p> DETALLE DEL PEDIDO"
                + varSectoresProd
                +
                    "</span>     \n                 </div>           \n            </li><!-- /.item -->\n                ";
        }
        if (i == 0) {
            cuerpoTablaAppend = html;
        }
        else {
            cuerpoTablaAppend += html;
        }
    }
    var footerTablaAppend = "\n        </ul>\n      </div><!-- /.box-body -->\n      <!-- <div class=\"box-footer text-center\">\n        <a href=\"javascript::;\" class=\"uppercase\">View All Products</a>\n      </div>-->\n      <!-- /.box-footer -->\n    </div><!-- /.box -->\n    ";
    var tablafinal = encabezadoTablaAppend + cuerpoTablaAppend + footerTablaAppend;
    $("#listar").append(tablafinal);
}
//# sourceMappingURL=app.js.map