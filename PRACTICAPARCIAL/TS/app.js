///<reference path="../node_modules/@types/jquery/index.d.ts" />
// namespace Clases{
$(function () {
    // localStorage.clear();
    var i = 0;
    var select = $("#tipoMasc");
    for (var i = 0; i < 6; i++) {
        select.append("<option value=" + i + ">" + Clases.tipoMascota[i] + "</option>");
    }
    mostrarMascotas();
});
function agregarMascota() {
    var tipo = Number($('#tipoMasc').val());
    var nuevaMascota = new Clases.Mascota(String($('#nombre').val()), Number($('#edad').val()), Number($('#patas').val()), Number($('#id').val()), tipo);
    var MascotasString = localStorage.getItem("Mascotas");
    // //la primera vez no hay nada, las otras veces string
    var MascotasJson = MascotasString == null ? [] : JSON.parse(MascotasString); // ESTO ES UN IF        
    MascotasJson.push(JSON.parse(nuevaMascota.toJson()));
    localStorage.setItem("Mascotas", JSON.stringify(MascotasJson));
    console.log(MascotasJson);
    alert("Mascota guardada");
    mostrarMascotas();
}
function mostrarMascotas() {
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJson = MascotasString == null ? [] : JSON.parse(MascotasString); // ESTO ES UN IF        
    // //la primera vez no hay nada, las otras veces string
    var tabla = $("#tCuerpo");
    tabla["0"].innerHTML = "";
    for (var i = 0; i < MascotasJson.length; i++) {
        var varAppend = "<tr><td>" + MascotasJson[i].split(',')[0] + "</td>" +
            "<td>" + MascotasJson[i].split(',')[1] + "</td>" +
            "<td>" + MascotasJson[i].split(',')[2] + "</td>" +
            "<td>" + MascotasJson[i].split(',')[3] + "</td>" +
            "<td>" + MascotasJson[i].split(',')[4] + "</td></tr>";
        tabla.append(varAppend);
    }
    // "${Clases.tipoMascota[MascotaJSON[i].nombre]}<td td> ${}"
}
