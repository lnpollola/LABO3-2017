
alert('probando');

window.addEventListener('load',function(){

    var frm = document.getElementById('formulario');
    frm.addEventListener('submit',enviarDatos);
});


function enviarDatos(e){
    e.preventDefault();  // como el handler, mata lista de invocacoion, lo frena
    enviarFormulario();

}

function enviarFormulario(){
alert('Dentro de enviar formulario!')

}

/*  
jason stringfy arma cadena con clave y valro con cada uno de los objetos
si lo enviamos con post

jason.stringify()

div.innerHTML =  JSON.parse(xhr.responseTXT)

TAREA: SOBRE ARCHIVO, SHIFT, ABRIR COMANDO np install; verificar instalar node; se carga carpeta
node modules

en comando "nodeserver"


 postman hacer nombre y dead, manda a agregar peronas; lo ag

*/