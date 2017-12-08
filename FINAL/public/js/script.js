var xhr;
var arrayPersonas = null;
var indiceMod;

$(document).ready(function(){
  traerPersonas();
  $('#btnEnviar').animate({'left': '0px','opacity':'1'},{
      duration: 'slow',
      easing: 'swing'
    });
    var visitas_local = localStorage.getItem("numero_visitas_local");
    var visitas_local = localStorage.numero_visitas_local;
    if(visitas_local !=null){
      //localStorage.setItem("numero_visitas_local",parseInt(visitas_local)+1);
      localStorage.numero_visitas_local = parseInt(visitas_local)+1;
    }else{
      //localStorage.setItem("numero_visitas_local",1);
      localStorage.numero_visitas_local=1;
    }

    var visitas_session = sessionStorage.getItem("numero_visitas_session");
    if(visitas_session !=null){
      sessionStorage.setItem("numero_visitas_session",parseInt(visitas_session)+1);
    }else{
      sessionStorage.setItem("numero_visitas_session",1);
    }

    if(localStorage.usuarioPreferido!=null){
      var usuarioPreferido = JSON.parse(localStorage.usuarioPreferido);
      if(usuarioPreferido !=null){
        $("#nombre").val(usuarioPreferido.nombre);
        $("#apellido").val(usuarioPreferido.apellido);
      }
    }
   
    
});

function agregar() {
  var txtNombre = $('#nombre');
  var txtApellido = $('#apellido');

  var nombre = txtNombre.val();
  var apellido = txtApellido.val();
  if (nombre == ""){
    txtNombre.addClass("error");
    alert("Debe ingresar un nombre");
  }
  else if (apellido == ""){
    txtApellido.addClass("error");
    alert("Debe ingresar un apellido");
  }
  else if (confirm("¿Esta seguro que desea agregar una persona?") == true) {   
        txtNombre.removeClass("error");
        txtApellido.removeClass("error");  
        enviarDatos(nombre, apellido);
  }

  var objetoUsuario = {
    "nombre":nombre,
    "apellido":apellido
  }

  localStorage.usuarioPreferido = JSON.stringify(objetoUsuario);
}

function enviarDatos(nombre, apellido) {
  var persona = {'first_name':nombre,'last_name':apellido,'active':true};
  persona = JSON.stringify(persona);

  $.ajax('http://localhost:3000/agregar',{
    success:procesarRespuesta,
    data:{'collection':"Personas",'objeto':persona},
    crossDomain: true,
    type:'POST',
    beforeSend: function(){
      $('#tCuerpo').html('<img src="images/spin.gif">')
    },
    error: function (xhr, ajaxOptions, thrownError){
      alert(xhr.statusText);
      alert(thrownError);
    }   
  })
}

function traerPersonas(nombre, apellido) {
  
    $.ajax('http://localhost:3000/traer',{
      success:procesarPersonas,
      crossDomain: true,
      type:'POST',
      dataType:'JSON',
      data:{"collection":"Personas"},
      beforeSend: function(){
        $('#tCuerpo').html('<img src="images/spin.gif">')
      },
      error: function (xhr, ajaxOptions, thrownError){
        alert(xhr.statusText);
        alert(thrownError);
      }   
    })
  }

function procesarRespuesta() {
      traerPersonas();
}


function procesarPersonas(data) {

      refrescarLista(data);  
      if(localStorage)
      localStorage.personas = JSON.stringify(data);
}

function refrescarLista(array) {

  var tCuerpo = document.getElementById("tCuerpo");
  tCuerpo.innerHTML = "";

  for (var i = 0; i < array.length; i++) {

    tCuerpo.innerHTML = tCuerpo.innerHTML +
      "<td>" + array[i].first_name + "</td>" +
      "<td>" + array[i].last_name + "</td>" +
      "<td><button  onclick='eliminarPersona(" + i + ")' >Borrar</button>" +
      "<button  onclick='traerPersona(" + i + ")' >Modificar</button></td>";

  }

}

function eliminarPersona(indice) {
  var personas = localStorage.personas;
  var array = JSON.parse(personas);
  var persona = array[indice];

  $.ajax('http://localhost:3000/eliminar',{
    success:procesarRespuesta,
    crossDomain: true,
    type:'POST',
    data:{'collection':"Personas",'id':persona.id},
    error: function (xhr, ajaxOptions, thrownError){
      alert(xhr.statusText);
      alert(thrownError);
    }   
  })
}

function modificarPersona(indice) {
  var nombre = $("#nombre").val();
  var apellido = $("#apellido").val();
  var personas = localStorage.personas;
  var array = JSON.parse(personas);
  var persona = array[indice];
  persona.first_name = nombre;
  persona.last_name = apellido;

  persona = JSON.stringify(persona);

  $.ajax('http://localhost:3000/modificar',{
    success:procesarRespuesta2,
    crossDomain: true,
    type:'POST',
    data:{'collection':"Personas",'objetoModificado':persona},
    error: function (xhr, ajaxOptions, thrownError){
      alert(xhr.statusText);
      alert(thrownError);
      procesarRespuesta2();
    }   
  })

}

function procesarRespuesta2() {

  var spinner = document.getElementById('tCuerpo');
      traerPersonas();
      var boton = document.getElementById('btnEnviar');
      boton.setAttribute('value', 'Guardar');
      
      boton.setAttribute('onclick', 'agregar()');
      document.getElementById('nombre').value = "";
      document.getElementById('apellido').value = "";
}

function traerPersona(indice) {

indiceMod = indice;
  var personas = JSON.parse(localStorage.personas);
  var persona = personas[indice];
  $("#nombre").val(persona.first_name);
  $("#apellido").val(persona.last_name);

  $("#btnEnviar").val("Modificar");
  $("#btnEnviar").attr("onclick",'modificarPersona(' + indiceMod + ')');

}

function procesarPersona() {

  var txtNombre = document.getElementById('nombre');
  var txtApellido = document.getElementById('apellido');
  var boton = document.getElementById('btnEnviar');
  var spinner = document.getElementById('tCuerpo');

  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      var unaPersona = JSON.parse(xhr.responseText);
      //alert(xhr.responseText);
      txtNombre.value = unaPersona.nombre;
      txtApellido.value = unaPersona.apellido;

      boton.setAttribute('value', 'Modificar');
      
      boton.setAttribute('onclick', 'modificarPersona(' + indiceMod + ')');

    }
    else
      alert('Error: ' + hxr.statusText + ' ' + xhr.statusText);
  }
  else {

    //spinner.innerHTML = '<img src="images/spin.gif">';

  }

}

