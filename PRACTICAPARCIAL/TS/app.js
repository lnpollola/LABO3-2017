"use strict";
var aplicaciones;
(function (aplicaciones) {
    function agregarMascota(txtid) {
        var id = Number($, txtid).val();
        var tipo = Number($(selecTipo).val());
        var nuevaMascota = new Clases.Mascota(Number($('#txtId').val()), string($(), tipo));
        var MascotasString = localStorage.getItem("Mascotas");
        //la primera vez no hay nada, las otras veces string
        var MascotasJson = MAscotaString == null ? [] : JSON.parse(MascotaNueva.Json()); // ESTO ES UN IF
        console.log(nuevaMascota.toJson()); //ver como anda
        MascotassJson.push(Json.parse(nuevaMascota.toJSON()));
        localStorage.setItem("Mascotas", JSON.stringify(MascotasJSON));
        alert("Mascota guardada");
    }
    //         mostrarMascotas();
    //             let MascotasJson : Clases.Mascota[i].id
    //             armo la tabla como el primer parcial con el fastix
    //             #divtabla.html(tabla);
    //         limpiarCampos();
    //             $txtnombred.val("")
    //             a selectipo le da 0
    //             y que ponga foco en txtid
    // armo el json con un array de mascotas
})(aplicaciones || (aplicaciones = {}));
