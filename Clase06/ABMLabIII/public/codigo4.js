var xhr = new XMLHttpRequest();

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
            var tcuerpo = document.getElementById("tablaUsuarios");
            tcuerpo.innerHTML = tcuerpo.innerHTML + "<td>" + element.nombre + "</td>" + "<td>" + element.apellido + "</td>"
        }, this);
    }
    
}

window.onload = function (res,req) {

    recibirDatos();
}


