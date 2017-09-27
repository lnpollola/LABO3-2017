var xhr = new XMLHttpRequest();

addEventListener('load', () => {
        var btnLeer = document.getElementById("btnEnviar");
        btnLeer.addEventListener('click', enviar)
});
   
function enviar() {
    var nombre = document.getElementById("nombrestr").value;
    var apellido = document.getElementById("apellidostr").value; 
    
        var datos = 'nombre='+ encodeURIComponent(nombre) + '&apellido=' + encodeURIComponent(apellido);
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = gestionarRespuesta; //?????
        xhr.open('POST','http://localhost:3000/agregarpersona',true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(datos);
}
    
function gestionarRespuesta() {
    if (xhr.readyState == 4 && xhr.status == 200) 
    {
       alert(xhr.responseText);
        recibirDatos();
    }
}

function recibirDatos (response,request) 
{
    xhr.open('GET', 'http://localhost:3000/traerpersonas', true);
    xhr.responseType = 'text';
    xhr.onreadystatechange = traerLista;
    xhr.send();
}

function traerLista()
{
    if(xhr.readyState== 4 && xhr.status==200) 
    {
        var objPersonas = JSON.parse(xhr.responseText);

        
        objPersonas.forEach(function(element) {
                //HACER ESTO CON UN FOR
            // objPersonas.indexof(element);
            var tLimpioTabla = document.getElementById("tablaUsuarios");

            var tcuerpo = document.getElementById("tablaUsuarios");
            tcuerpo.children[2].innerHTML = tcuerpo.children[2].innerHTML + 
            "<tr>" + 
            "<td>"+ element.nombre + "</td>" + "<td>" + element.apellido + "</td>" + 
            //ARMAR BOTON BUTTON APUNTANDO CON ONCLICK A UNA FUNCION Y DE LA FUNCION A EL SERVER
            //EN EL DE MODIFICAR, CAMBIAR EL FUNCIONAMIENTO DEL BOTON CON SETATRIBUTTE, LLAMAR PRIMERO A TRAER PERSONA, CARGARLO EN EL HTML Y MODIFICAR
            "<td>"+ element.nombre + "</td>" + "<td>" + element.apellido + "</td>" + 
            "</tr>"
        }, this);
    }
}

window.onload = function (res,req) {
     recibirDatos();
}


