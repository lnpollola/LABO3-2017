var xhr = new XMLHttpRequest();

//MANEJADORES DE EVENTOS
addEventListener('load', () => {
        var btnLeer = document.getElementById("btnEnviar");
        btnLeer.addEventListener('click', enviar)
});



//FUNCIONES CON OBJETO XMLHTTPREQUEST
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

function borrar(indice) {

    // alert(indice);
    // var indice = document.getElementById("indiceJS").value;
    
        var datos = 'indice='+ encodeURIComponent(indice);
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = gestionarRespuestaBorrar; //?????
        xhr.open('POST','http://localhost:3000/eliminarpersona',true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(datos);
}
function modificar() {
    alert("Estoy en modificar");
}

//FUNCIONES ONREADYSTATECHANGE    
function gestionarRespuesta() {
    if (xhr.readyState == 4 && xhr.status == 200) 
    {
       alert(xhr.responseText);
       recibirDatosNew();
    }
}

function gestionarRespuestaBorrar() {
    if (xhr.readyState == 4 && xhr.status == 200) 
    {
       alert(xhr.responseText);
    //    recibirDatosNew();
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

function recibirDatosNew (response,request) 
{
    xhr.open('GET', 'http://localhost:3000/traerpersonas', true);
    xhr.responseType = 'text';
    xhr.onreadystatechange = traerListaNew;
    xhr.send();
}

//LISTASA
function traerLista()
{
    if(xhr.readyState== 4 && xhr.status==200) 
    {
        var objPersonas = JSON.parse(xhr.responseText);
        var contador= 0;
    

        var objPersonas = JSON.parse(xhr.responseText);
        var longitud=(objPersonas.length - 1);
        var tcuerpo = document.getElementById("tablaUsuarios");
        document.getElementById('tablaUsuarios').children[2].innerHTML="";
        for (i = 0; i < objPersonas.length; i++) { 
       
            tcuerpo.children[2].innerHTML = 
            tcuerpo.children[2].innerHTML + 
            //document.getElementById('td1').innerHTML=GenRand();
            "<tr>" + 
                "<td>"+ objPersonas[i].nombre +      "</td>" + 
                "<td>"+ objPersonas[i].apellido +    "</td>" + 
               "<td>"+ "<input type='button' id='btnBorrar' value='Borrar' onclick='borrar("+i+")' /> "   
                + "<input type='button' value='Modificar' onclick='Modificar()'/>" + "</td>" 
            "</tr>"
        
        }
        
        // objPersonas.forEach(function(element) {
        //     var tcuerpo = document.getElementById("tablaUsuarios");
            
        //     tcuerpo.children[2].innerHTML = 
        //     tcuerpo.children[2].innerHTML + 
        //     "<tr>" + 
        //     "<td>"+ element.nombre + "</td>" + "<td>" + element.apellido + "</td>" + 
        //     "<td>"+ "<input type='button' id='btnBorrar' value='Borrar' onclick='borrar("+contador+")'/> " +
        //     "<input type='button' id='btnModificar' value='Modificar' onclick='modificar()' />"+ "</td>"
        //     //ARMAR BOTON BUTTON APUNTANDO CON ONCLICK A UNA FUNCION Y DE LA FUNCION A EL SERVER
        //     //EN EL DE MODIFICAR, CAMBIAR EL FUNCIONAMIENTO DEL BOTON CON SETATRIBUTTE, LLAMAR PRIMERO A TRAER PERSONA, CARGARLO EN EL HTML Y MODIFICAR
        //     // "<td>"+ element.nombre + "</td>" + "<td>" + element.apellido + "</td>" + 
            
        //     "</tr>"
           
            
        // }, this);
        
    }
}

function traerListaNew()
{
    if(xhr.readyState== 4 && xhr.status==200) 
    {
        var contador=0;
        contador++;
            var objPersonas = JSON.parse(xhr.responseText);
            var longitud=(objPersonas.length - 1);
            var tcuerpo = document.getElementById("tablaUsuarios");
            tcuerpo.children[2].innerHTML = 
                tcuerpo.children[2].innerHTML + 
                "<tr>" + 
                    "<td>"+ objPersonas[longitud].nombre +      "</td>" + 
                    "<td>"+ objPersonas[longitud].apellido +    "</td>" + 

                    "<td>"+ "<input type='button' id='btnBorrar' value='Borrar' onclick='borrar("+contador+")'/> " +
                    "<input type='button' id='btnModificar' value='Modificar' onclick='modificar()' />"+ "</td>"
                "</tr>"

    }
}


window.onload = function (res,req) {
     recibirDatos();
     
}


