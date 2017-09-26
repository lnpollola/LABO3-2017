
window.onload = function () {

    var btnenviar = document.getElementById("btnEnviar");

    btnenviar.addEventListener('click', function () {
        var varNombre = document.getElementById("nombrestr").value;
        var varAapellido = document.getElementById("apellidostr").value;
        confirm("Confirma que desea agregar usuario?");

        if ((varNombre == "") || (varAapellido == "")) {
            document.getElementById("nombrestr").className = "error";
            document.getElementById("apellidostr").className = "error";
        }

        var tcuerpo = document.getElementById("tablaUsuarios");
        tcuerpo.innerHTML = tcuerpo.innerHTML + "<td>" + varNombre + "</td>" + "<td>" + varAapellido + "</td>"
    }


    )
}

  // si error asigna clase error de css q pone border en elemento en rojo

    //textnombre.style.getAttribute