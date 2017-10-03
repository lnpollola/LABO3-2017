var xhr = new XMLHttpRequest();

//MANEJADORES DE EVENTOS
addEventListener('load', () => {
        var btnLeer = document.getElementById("btnEnviar");
        btnLeer.addEventListener('click', enviar)
});

addEventListener('click', function(e) {
        if(e.target && e.target.defaultValue== 'Guardar')
        {
        var btnGuardar = document.getElementById("btnGuardar");
        var nombre = document.getElementById("nombrestr").value;
        var apellido = document.getElementById("apellidostr").value;
        var indice = document.getElementById("indHidden").value;
        envioAModificarPersona(indice, nombre, apellido);
        } 
});

//FUNCIONES CON OBJETO XMLHTTPREQUEST
function enviar() {
    var nombre = document.getElementById("nombrestr").value;
    var apellido = document.getElementById("apellidostr").value; 
    
        var datos = 'nombre='+ encodeURIComponent(nombre) + '&apellido=' + encodeURIComponent(apellido);
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = gestionarRespuesta; 
        xhr.open('POST','http://localhost:3000/agregarpersona',true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(datos);
}

function modificar(indice) {
        var datos = '?indice='+ indice;
        xhr = new XMLHttpRequest();
        xhr.indice = indice;
        xhr.onreadystatechange = modificarPersona; 
        xhr.open('GET','http://localhost:3000/traerpersona'+datos,true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send();
}

function envioAModificarPersona(indice, nombre, apellido)
{
        var persona = {};
        persona.nombre = nombre;
        persona.apellido=apellido;

        var datos = 'indice='+ encodeURIComponent(indice) +  "&persona=" + encodeURIComponent(JSON.stringify(persona));
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = gestionarRespuesta; 
        xhr.open('POST','http://localhost:3000/modificarpersona',true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(datos);
    
}

function borrar(indice) {
        var datos = 'indice='+ encodeURIComponent(indice);
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = gestionarRespuesta; 
        xhr.open('POST','http://localhost:3000/eliminarpersona',true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(datos);
}

//FUNCIONES ONREADYSTATECHANGE    
function gestionarRespuesta() {
    if (xhr.readyState == 4 && xhr.status == 200) 
    { 
       alert(xhr.responseText); 
       limpiarIngreso();
       recibirDatos();
    }
}

function limpiarIngreso()
{
        var tcuerpo = document.getElementById("ingreso")
       document.getElementById('ingreso').innerHTML="";
       tcuerpo.innerHTML = 
            "Nombre: <input type='text' value='' name='nombre' id='nombrestr'></input>"+
            "Apellido: <input type='text' value='' name='apellido' id='apellidostr'>"+
              "<br>"+
           "<input type='button' value='Enviar' onclick='enviar()' id='btnEnviar'></input>"
}

function modificarPersona()
{
    if (xhr.readyState == 4 && xhr.status == 200) 
    {
       var persona = JSON.parse(xhr.responseText);
       var nombre = persona.nombre;
       var apellido = persona.apellido
       var tcuerpo = document.getElementById("ingreso")
       document.getElementById('ingreso').innerHTML="";
       tcuerpo.innerHTML = 
            "Nombre: <input type='text' value="+nombre+" name='nombre' id='nombrestr'></input>"+
            "Apellido: <input type='text' value="+apellido+" name='apellido' id='apellidostr'>"+
            "<input type='hidden' id='indHidden' value="+xhr.indice+"></input>"+
            "<br>"+
           "<input type='button' value='Guardar' id='btnGuardar'></input>"
       
    }
}

//LLAMADO A LISTAS
function recibirDatos (response,request) 
{
    xhr.open('GET', 'http://localhost:3000/traerpersonas', true);
    xhr.responseType = 'text';
    xhr.onreadystatechange = traerLista;
    xhr.send();
}
//LISTAS
function traerLista()
{
    if(xhr.readyState== 4 && xhr.status==200) 
    {
            var objPersonas = JSON.parse(xhr.responseText);
            var longitud=(objPersonas.length - 1);
            var tcuerpo = document.getElementById("tablaUsuarios");
            document.getElementById('tablaUsuarios').children[2].innerHTML="";
            for (i = 0; i < objPersonas.length; i++) { 
           
                tcuerpo.children[2].innerHTML = 
                tcuerpo.children[2].innerHTML + 
                "<tr>" + 
                    "<td>"+ objPersonas[i].nombre +      "</td>" + 
                    "<td>"+ objPersonas[i].apellido +    "</td>" + 
                   "<td>"+ "<input type='button' value='Borrar' onclick='borrar("+i+")' /> " + "</td>"+  
                   "<td>"+ "<input type='button' value='Modificar' id='btnModif' onclick='modificar("+i+")'/>" + "</td>" 
                "</tr>"
            
            }
          
                    
    }
}

window.onload = function (res,req) {
     recibirDatos();
     
}


