///<reference path="../node_modules/@types/jquery/index.d.ts" />
// namespace Clases{
$(function () {
    //EVENTOS
    //FORM MODIFICADO POR CHECKBOX
    $("#checkFORM :checkbox").change(function () {
        encabezadoCheck();
    });
    //BOTON FILTRAR
    $("#filtrarPor").change(function () {
        var valorFiltro = $('#filtrarPor').map(function () { return this.value; }).get();
        mostrarMascotas(valorFiltro);
        tablaAux = undefined;
    });
    //CARGA DE LA PAGINA
    encabezadoCheck();
    cargoMenusEncabezado();
    mostrarMascotas();
});
/////////////////////////////////////////FUNCIONES DEL SISTEMA/////////////////////////////////////////
//TRAIGO EN UN ARRAY LOS VALORES DEVUELTOS DE LOS CHECKBOX ON
//ARMO LA TABLA DINAMICA PASANDO LOS ENCABEZADOS Y FILTROS A MOSTRAR COLUMNAS
function encabezadoCheck() {
    var checkboxON = $('input:checkbox:checked.checkItems').map(function () { return this.value; }).get();
    tablaDinamica(checkboxON);
}
//BOTON DE LIMPIAR LISTA
function limpiarLista() {
    localStorage.clear();
    mostrarMascotas();
}
//CARGO LOS DROPDOWN QUE DEPENDEN DEL ENUMERADO
function cargoMenusEncabezado() {
    //ENCABEZADO DE FORM DE CARGA
    var i = 0;
    var select = $("#tipoMasc");
    for (var i = 0; i < 6; i++) {
        select.append("<option value=" + i + ">" + Clases.tipoMascota[i] + "</option>");
    }
    //ENCABEZADO DE LA SECCION DE FILTRO
    var filtrar = $("#filtrarPor");
    filtrar[0].innerHTML = select[0].innerHTML;
}
var tablaAux;
//ARMO LA TABLA  DINAMICA
function tablaDinamica(checkboxON) {
    //CHEQUEO SI ES LA CARGA INICIAL O SI ENTRA POR EL CHANGE DE CHECKBOX
    if (checkboxON.length != 0) {
        //TABLA DINAMICA, ENTRA POR EVENTO
        //CABECERA DE LA TABLA
        var row_name = checkboxON;
        var cabecera_1 = $("#tCabecera");
        cabecera_1["0"].innerHTML = "";
        row_name.forEach(function (element) {
            if (element != "") {
                var cabeceraArmada = $('<th>' + element + '</th>');
                cabecera_1.append(cabeceraArmada);
            }
        });
        //CUERPO DE  LA TABLA
        var tablaTXT = $("#tCuerpoTXT");
        var ciclo;
        if (tablaAux == null) {
            var primeraVez = 1;
            tablaAux = $("#tCuerpoAUX");
            ciclo = $("#tCuerpo")[0].childNodes.length;
        }
        else {
            ciclo = $("#tCuerpoAUX")[0].childNodes.length;
            tablaTXT[0].innerHTML = "";
        }
        for (var i = 0; i < ciclo; i++) {
            //AGREGO LAS COLUMNAS SEGUN VAYAN O NO
            tablaTXT.append("<tr>");
            checkboxON.includes("ID") == true ? tablaTXT.append("<td id='mascID" + i + "'>" + $('#mascID' + i)[0].innerHTML + "</td>") : null;
            checkboxON.includes("NOMBRE") == true ? tablaTXT.append("<td id='mascNOM" + i + "'>" + $('#mascNOM' + i)[0].innerHTML + "</td>") : null;
            checkboxON.includes("EDAD") == true ? tablaTXT.append("<td id='mascEDAD" + i + "'>" + $('#mascEDAD' + i)[0].innerHTML + "</td>") : null;
            checkboxON.includes("TIPO") == true ? tablaTXT.append("<td id='mascTIPO" + i + "'>" + Clases.tipoMascota[$('#mascTIPO' + i)[0].innerHTML] + "</td>") : null;
            checkboxON.includes("CANTPATAS") == true ? tablaTXT.append("<td id='mascPATAS" + i + "'>" + $('#mascPATAS' + i)[0].innerHTML + "</td>") : null;
            tablaTXT.append("</tr></table>");
        }
        var tablaFinal = $("#tCuerpo");
        var innerHtmlAux = tablaFinal["0"].innerHTML;
        tablaFinal["0"].innerHTML = "";
        tablaFinal["0"].innerHTML = tablaTXT["0"].innerHTML;
        if (primeraVez == 1) {
            tablaAux["0"].innerHTML = innerHtmlAux;
        }
    }
    else {
        //TABLA ENTERA, VIENE POR EL LOAD DE LA PAGINA
        //CABECERA DE LA TABLA
        var cabecera = $("#tCabecera");
        cabecera["0"].innerHTML = "";
        var devuelve = "<th>ID</th>" +
            "<th>NOMBRE</th>" +
            "<th>EDAD</th>" +
            "<th>TIPO</th>" +
            "<th>CANTPATAS</th>";
        cabecera.append(devuelve);
        //CUERPO DE LA TABLA
        mostrarMascotas();
    }
}
/////////////////////////////////////////FUNCIONES DE CLASES/////////////////////////////////////////
function mostrarMascotas(valor) {
    var MascotasString = JSON.parse(localStorage.getItem("Mascotas") || "[]");
    //ARMO EL ARRAY DE MASCOTAS, SEGUN SI ES TABLA FULL O FILTRADA
    if (valor) {
        //MUESTRO EL LISTADO DE MASCOTAS SEGUN FILTRO
        var stringFinal = MascotasString
            .filter(function (mascota) {
            var mascotaRet = JSON.parse(mascota);
            return mascotaRet._tipo == valor;
        })
            .map(function (mascota) {
            var mascotaRet = JSON.parse(mascota);
            return mascotaRet;
        });
        MascotasString = stringFinal;
    }
    var tabla = $("#tCuerpo");
    tabla["0"].innerHTML = "";
    for (var i = 0; i < MascotasString.length; i++) {
        var mascotaActual = void 0;
        if (valor) {
            mascotaActual = MascotasString[i];
        }
        else {
            mascotaActual = JSON.parse(MascotasString[i]);
        }
        if (mascotaActual != null) {
            var miTipo = Clases.tipoMascota[mascotaActual._tipo];
            var varAppend = "<tr><td id='mascID" + i + "'>" + mascotaActual._id + "</td>" +
                "<td id='mascNOM" + i + "'>" + mascotaActual._nombre + "</td>" +
                "<td id='mascEDAD" + i + "'>" + mascotaActual._edad + "</td>" +
                "<td id='mascTIPO" + i + "'>" + Clases.tipoMascota[mascotaActual._tipo] + "</td>" +
                "<td id='mascPATAS" + i + "'>" + mascotaActual._cantPatas + "</td>" +
                "<td>" +
                "<button class='btn btn- btn-warning' type='button' id='btnEnviar' value='Modificar' onclick='modificarMascota(" + i + ")'>"
                + "MODIFICAR" +
                "<i class='glyphicon glyphicon-pencil'></i>" +
                "</button>"
                + "</td>" +
                "<td>" +
                "<button class='btn btn-danger btn-sm' type='button' id='btnEnviar' value='Eliminar' onclick='eliminarMascota(" + i + ")'>"
                + "BORRAR" +
                "<i class='glyphicon glyphicon-minus'></i>" +
                "</button>"
                + "</td>" +
                "</tr>";
            tabla.append(varAppend);
        }
    }
}
function agregarMascota() {
    var tipo = Number($('#tipoMasc').val());
    var nuevaMascota = new Clases.Mascota(String($('#nombre').val()), Number($('#edad').val()), Number($('#patas').val()), Number($('#id').val()), tipo);
    var MascotasString = JSON.parse(localStorage.getItem("Mascotas") || "[]");
    MascotasString.push(JSON.stringify(nuevaMascota));
    localStorage.setItem("Mascotas", JSON.stringify(MascotasString));
    console.log(MascotasString);
    alert("Mascota guardada");
    mostrarMascotas();
    $('#formCARGA').trigger("reset");
}
function eliminarMascota(indice) {
    var indice = indice;
    var objJson = JSON.parse(localStorage.Mascotas);
    delete objJson[indice];
    localStorage.setItem("Mascotas", JSON.stringify(objJson));
    alert("Mascota Eliminada");
    mostrarMascotas();
}
