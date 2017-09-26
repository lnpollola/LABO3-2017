
//alert("primer js");
//window.addEventListener.addEventListener('load',()=>{  --> es lo mismo

addEventListener('load', () => {

    var btnLeer = document.getElementById("btnEnviar");
    btnLeer.addEventListener('click', enviar)

});//fat arrow funcion anonima

var xhr;


function enviar() {

    var nombre = document.getElementById("txtNombre").value;
    var edad = document.getElementById("txtEdad").value; 

    if (nombre == "") {
        document.getElementById("txtNombre").className = "error";
        alert("Falto cargar el nombre!!");
    }
    else if (edad == "") {
        document.getElementById("txtEdad").className = "error";
        alert("Faltó cargar la edad!!");
    }
    else {
        document.getElementById("txtNombre").className = "itsOK";
        document.getElementById("txtEdad").className = "itsOK";
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = gestionarRespuesta;
        xhr.open('GET', 'pagina1.php?nombre=' + nombre + '&edad=' + edad, true)// true si es asincronico
        xhr.send();
    }

}


function gestionarRespuesta() {
    var div = document.getElementById('mensaje');
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            div.innerHTML = xhr.responseText; //puede venir como txt, html, json...

        }
        else {

            div.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
            // div.innerHTML = "Naranjas";
        }

    }
    else if (xhr.readyState != 4) {
        div.innerHTML = '<img src="45.gif" height="42" width="42">';
    }

    //alert('hey');
}