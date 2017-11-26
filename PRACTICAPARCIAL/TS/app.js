///<reference path="../node_modules/@types/jquery/index.d.ts" />
// namespace Clases{
$(function () {
    //FORM MODIFICADO POR CHECKBOX
    $("#checkFORM :checkbox").change(function () {
        var checkboxON = $('input:checkbox:checked.checkItems').map(function () { return this.value; }).get();
        tablaDinamica(checkboxON);
    });
    var i = 0;
    var select = $("#tipoMasc");
    for (var i = 0; i < 6; i++) {
        select.append("<option value=" + i + ">" + Clases.tipoMascota[i] + "</option>");
    }
    mostrarMascotas();
});
function tablaDinamica(checkboxON) {
    //CABECERA DE LA TABLA
    var row_name = checkboxON;
    var cabecera = $("#tCabecera");
    cabecera["0"].innerHTML = "";
    row_name.forEach(function (element) {
        if (element != "") {
            var cabeceraArmada = $('<th>' + element + '</th>');
            cabecera.append(cabeceraArmada);
        }
    });
    //CUERPO DE LA TABLA
    var MascotasString = JSON.parse(localStorage.getItem("Mascotas") || "[]");
    var tabla = $("#tCuerpo");
    tabla["0"].innerHTML = "";
    for (var i = 0; i < MascotasString.length; i++) {
        var mascotaActual = JSON.parse(MascotasString[i]);
        var miTipo = Clases.tipoMascota[mascotaActual._tipo];
        var varAppend = "<tr><td>" + mascotaActual._id + "</td>" +
            "<td>" + mascotaActual._nombre + "</td>" +
            "<td>" + mascotaActual._edad + "</td>" +
            "<td>" + Clases.tipoMascota[mascotaActual._tipo] + "</td>" +
            "<td>" + mascotaActual._cantPatas + "</td></tr>";
        tabla.append(varAppend);
    }
}
function limpiarLista() {
    localStorage.clear();
    mostrarMascotas();
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
}
function mostrarMascotas() {
    var MascotasString = JSON.parse(localStorage.getItem("Mascotas") || "[]");
    var tabla = $("#tCuerpo");
    tabla["0"].innerHTML = "";
    for (var i = 0; i < MascotasString.length; i++) {
        var mascotaActual = JSON.parse(MascotasString[i]);
        var miTipo = Clases.tipoMascota[mascotaActual._tipo];
        var varAppend = "<tr><td>" + mascotaActual._id + "</td>" +
            "<td>" + mascotaActual._nombre + "</td>" +
            "<td>" + mascotaActual._edad + "</td>" +
            "<td>" + Clases.tipoMascota[mascotaActual._tipo] + "</td>" +
            "<td>" + mascotaActual._cantPatas + "</td></tr>";
        tabla.append(varAppend);
    }
}
