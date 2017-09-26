
//alert("primer js");
//window.addEventListener.addEventListener('load',()=>{  --> es lo mismo

addEventListener('load', () => {

    var btnLeer = document.getElementById("btnLeer");
    btnLeer.addEventListener('click', enviar)

});//fat arrow funcion anonima

var xhr;


function enviar() {

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = gestionarRespuesta;
    xhr.open('GET', 'prueba1.txt', true)// true si es asincronico
    xhr.send();
    //  alert('Hola');
}


function gestionarRespuesta() {
    var div = document.getElementById('contenedor');
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            div.innerHTML = xhr.responseText; //puede venir como txt, html, json...

        }
        else {

            div.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
            // div.innerHTML = "Naranjas";
        }

    }
    else{
        div.innerHTML = '<img src= 45.gif'
    }

    //alert('hey');
}