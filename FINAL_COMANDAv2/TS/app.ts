///<reference path="../node_modules/@types/jquery/index.d.ts" />
//  import '../node_modules/rxjs/operator/filter';
//  import '../node_modules/rxjs/add/operator/filter';
namespace Clases{
    
// $(function(){

    //     //EVENTOS
    //         //FORM MODIFICADO POR CHECKBOX
    //         // $("#checkFORM :checkbox").change(function() {
    //         //     encabezadoCheck();
    //         // });
    //         //BOTON FILTRAR
    //         // $("#filtrarPor").change(function(){
    //         //     let valorFiltro = $('#filtrarPor').map(function() { return this.value; }).get();
    //         //     mostrarEmpleados(valorFiltro);
    //         //     tablaAux = undefined;
    //         // });
    //     //CARGA DE LA PAGINA
    //     // encabezadoCheck();
    //     cargoMenusEncabezado();
    //     // mostrarEmpleados();
    // });

// var imagenBASE64;
/////////////////////////////////////////FUNCIONES DEL SISTEMA/////////////////////////////////////////

// function transformaImagen() {
           
//             var filesSelected = document.getElementById('imagen').files;
//             if (filesSelected.length > 0) {
//               var fileToLoad = filesSelected[0];
//               var fileReader = new FileReader();


//                 fileReader.onload = function(fileLoadedEvent):string {
//                     var srcData = fileLoadedEvent.target.result; // <--- data: base64

//                     var newImage = document.createElement('img');
//                     newImage.src = srcData;

//                     imagenBASE64 = newImage.outerHTML;
//                     return  newImage.outerHTML;
                
//                 }
//                 fileReader.readAsDataURL(fileToLoad);
            
//             }


// function calcularPromedio()
// {
//     let EmpleadosString:string|null =  JSON.parse(localStorage.getItem("Empleados") || "[]");    

//     //MUESTRO EL LISTADO DE EmpleadoS SEGUN FILTRO
//        var acumEdad = EmpleadosString
//                         .reduce(function(actual,siguiente){
//                             return actual+JSON.parse(siguiente)._edad;
//                         },0);

//         var cantidad = EmpleadosString
//                         .reduce (function(actual,siguiente){
//                             return actual + 1;
//                         }, 0);

//         var mostrarPromedio = $("labelProm").context.forms[1];
//         mostrarPromedio.innerHTML = "<label for='promedio'class='col-md-offset-1'>"+(acumEdad / cantidad).toFixed(2)+"</label>" ;
// }

// // // // // // // FUNCIONES DE CARGA DE PÁGINA // // // // // // //// // // // // // //

function borrarPrincipal():void
{
    $("#principal")[0].innerHTML="";
}

function muestraAgregarEmpleado():void
{
    borrarPrincipal();
    let cuerpoAgregarEmpleado = 
    `
    <div class="box box-primary">
        <div class="box-header">
            <h3 class="box-title">Agregar Empleado</h3>
        </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form id="formCARGA"  data-toggle="validator">
    <!--onsubmit="agregarEmpleado();" -->
      <div class="box-body">
            <!-- USUARIO -->
            <div class="form-group">
            <label for="nombre">Usuario</label>
            <input type="email" id="nombre" class="sinError form-control" name="nombre" placeholder="Nombre.." autocomplete="off" class="form-control" required autofocus>
        </div>
        <!-- EDAD -->
            <div class="form-group">
            <label for="edad">Edad</label>
            <input type="text" id="edad" class="sinError form-control" name="edad" placeholder="Edad.." autocomplete="off" class="form-control" required>
            </div>
        <!-- SEXO -->
        <label for="opcion">Elige SEXO:</label>
        <div class="form-group" >
            <select name="sexo" id="sexo" class="form-control" required>
                <option value="MASCULINO">MASCULINO</option>
                <option value="FEMENINO">FEMENINO</option>
                <option value="OTROS">OTROS</option>
            </select>
        </div>

        <!-- TIPO - ENUM TIPO -->
            <div class="form-group">
                <label for="opcion">Elige un tipo de Empleado:</label>
                <select class="form-control" name="tipoMasc" id="tipoMasc">
                    <option value="BARTENDER">BARTENDER</option>
                    <option value="CERVECERO">CERVECERO</option>
                    <option value="COCINERO">COCINERO</option>
                    <option value="MOZO">MOZO</option>
                    <option value="SOCIO">SOCIO</option>
                </select>
            </div>
        <div class="form-group">
          <label for="password">Clave</label>
          <input type="password" class="form-control" id="ClaveUsuario" placeholder="Password">
        </div>
        
        <!-- /.box-body -->

        <div class="box-footer">
            <button type="submit" onclick="agregarEmpleado();" class="btn btn-primary">Agregar</button>
        </div>
    </form>
    <!-- /.box -->`;

    // $("#nombre").val() = 'PONGOCUALQUIERCOSA';
    // var input = $("#nombre");
    // input.value = 'CUALQUIERA';
    $("#principal").append(cuerpoAgregarEmpleado);
}

function muestraModificarEmpleado(idEmpleado):void
{
   muestraAgregarEmpleado();
    var indice = determinoIndice(idEmpleado);
    var persona = JSON.parse(JSON.parse(localStorage.Empleados)[indice]);
    var tcuerpo = $("#formCARGA");

    tcuerpo[0].innerHTML = "";
    tcuerpo[0].innerHTML = 
    `   <div class="box-body">
        <!-- USUARIO -->
        <div class="form-group">
        <label for="nombre">Usuario</label>
        <input type="email" id="nombre" class="sinError form-control" name="nombre" value="`+persona._nombre+`" placeholder="Nombre.." autocomplete="off" class="form-control" required autofocus>
    </div>
    <!-- EDAD -->
        <div class="form-group">
        <label for="edad">Edad</label>
        <input type="text" id="edad" class="sinError form-control" name="edad" value="`+persona._edad+`" placeholder="Edad.." autocomplete="off" class="form-control" required>
        </div>
    <!-- SEXO -->
    <label for="opcion">Elige SEXO:</label>
    <div class="form-group" >
        <select name="sexo" id="sexo" class="form-control" required>
            <option value="MASCULINO">MASCULINO</option>
            <option value="FEMENINO">FEMENINO</option>
            <option value="OTROS">OTROS</option>
        </select>
    </div>

    <!-- TIPO - ENUM TIPO -->
        <div class="form-group">
            <label for="opcion">Elige un tipo de Empleado:</label>
            <select class="form-control" name="tipoMasc" id="tipoMasc">
                <option value="BARTENDER">BARTENDER</option>
                <option value="CERVECERO">CERVECERO</option>
                <option value="COCINERO">COCINERO</option>
                <option value="MOZO">MOZO</option>
                <option value="SOCIO">SOCIO</option>
            </select>
        </div>
    <div class="form-group">
      <label for="password">Clave</label>
      <input type="password" class="form-control" id="ClaveUsuario" placeholder="Password">
    </div>
    
    <!-- /.box-body -->

    <div class="box-footer">
        <button type="submit" onclick="modificarEmpleado(`+ (indice) +`)" class="btn btn-primary">Modificar</button>
    </div>` 
    ;
}



// // // // // // // FUNCIONES DE CLASES DE PÁGINA // // // // // // //// // // // // // //
function validaLogin()
{
    let EmpleadosString:string|null  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    for (var i = 0; i < EmpleadosString.length ; i++) 
    {   
      var estalogueado=0;
      let empleadoActual= JSON.parse(EmpleadosString[i]);
      if  
      (empleadoActual._nombre==$('#mailingresado').val() && empleadoActual._clave == $('#passingresado').val() )
      { estalogueado = 1; alert ("Empleado logueado OK"); window.location.href = 'home2.html'; }
      else {
      alert ("Empleado NO registrado en el sistema");
     }
    }   
}

function determinoRol (rol:string):tipoEmpleado
{
    var tipo:tipoEmpleado;
    switch (rol)
    {
        case "BARTENDER": 
        {
            tipo = tipoEmpleado.BARTENDER;
            break;
        }
        case "CERVECERO": 
        {
            tipo = tipoEmpleado.CERVECERO;
            break;
        }
        case "COCINERO": 
        {
            tipo = tipoEmpleado.COCINERO;
            break;
        }
        case "MOZO": 
        {
            tipo = tipoEmpleado.MOZO;
            break;
        }
        case "SOCIO": 
        {
            tipo = tipoEmpleado.SOCIO;
            break;
        }
    }
    return tipo;
}

function determinoIndice (idEmpleado:number):number
{
    var retorno;
    let EmpleadosString:string|null =  JSON.parse(localStorage.getItem("Empleados") || "[]"); 
    for (var i = 0; i < EmpleadosString.length ; i++) 
    {
       let empleadoActual = JSON.parse(EmpleadosString[i]);
       if (empleadoActual._id == idEmpleado)
       {retorno = i;}
    }
    return retorno;
}

function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return ( p < JSON.parse(v)._id ? JSON.parse(v)._id: p );
    },0);
  }

///////EMPLEADO///////////
function calcularIdEmpleado():number
{
    let EmpleadosString:string|null =  JSON.parse(localStorage.getItem("Empleados") || "[]");    
    let valormax = arrayMax(EmpleadosString);
    return valormax;
}

function agregarEmpleado(vienedeModif?):void
{
    
    var tipoEMP = determinoRol(String ($('#tipoMasc').val())) ; 
    let nuevoEmpleado    = new Empleado(  
                                            String ($('#nombre').val()),
                                            Number ($('#edad').val()),
                                            String ($('#sexo').val()),
                                            tipoEMP,
                                            estadoCLIEMP.ACTIVO,
                                            String ($('#ClaveUsuario').val())
                                            );
    
    let EmpleadosString  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    EmpleadosString.push( JSON.stringify(nuevoEmpleado));
    localStorage.setItem("Empleados",JSON.stringify(EmpleadosString));
        
    console.log(EmpleadosString);
    alert ("Empleado guardado");
    muestraAgregarEmpleado();  
    
}

function modificarEmpleado(indice):void
{
    var indice = indice;
    let EmpleadosString:string|null  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    var persona = JSON.parse(JSON.parse(localStorage.Empleados)[indice]);

    var tipoEMP = determinoRol(String ($('#tipoMasc').val())) ; 

    persona._nombre = String ($('#nombre').val());
    persona._edad   = Number ($('#edad').val());
    persona._sexo   = String ($('#sexo').val());
    persona._tipo  = tipoEMP ; 
    persona._clave  = String ($('#ClaveUsuario').val());
        
    eliminarEmpleado(indice,true);
    let EmpleadosStringNew  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    // delete EmpleadosStringNew[indice];
    EmpleadosStringNew.push( JSON.stringify(persona));
    // localStorage.clear();
    localStorage.setItem("Empleados",JSON.stringify(EmpleadosStringNew));

    alert(indice); 

}

function limpioArray(obj):any
{
    const removeEmpty = (obj) => {
        Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
        return obj;
      };
}

 function eliminarEmpleado(indice, vienedeModif?):void
{
    var indice = indice;
    var objJson: JSON = JSON.parse(localStorage.Empleados);
    delete objJson[indice];
    var objJsonResp = limpioArray(objJson);
    // var objJsonResp = objJson.filter(function(x) { return x !== null }); //borro los nulos
    localStorage.setItem("Empleados",JSON.stringify(objJsonResp));
    if( !(vienedeModif)) {alert("Empleado Eliminado");  mostrarEmpleados();} 
} 

function mostrarEmpleados():void
{
    borrarPrincipal();
    let EmpleadosString:string|null =  JSON.parse(localStorage.getItem("Empleados") || "[]");    
    //ENCABEZADO FIJO
    let encabezadoTablaAppend = 
        '<div class="box box-info">'
        +'<div class="box-header with-border">'
        +'<h3 class="box-title">Listado de Empleados</h3>'
        +'<div class="box-tools pull-right">'
        +'<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>'
        +'<button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>'
        +'</div>'
        +'</div><!-- /.box-header -->'
        +'<div class="box-body">'
        +'<div class="table-responsive">'
        +'<table class="table no-margin">'
        +'<thead>'
        +'<tr>'
        +'  <th>Nombre</th>'
        +'  <th>Edad</th>'
        +'  <th>Sexo</th>'
        +'  <th>Tipo</th>'
        +'  <th>Estado</th>'
        +'<th>Acciones</th>'
        +'</tr>'
        +'</thead>'
        +'<tbody>';
    let cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < EmpleadosString.length ; i++) 
     {
        let empleadoActual = JSON.parse(EmpleadosString[i]);
        if (empleadoActual != null)
        {
            var html='<tr>';
            //DATOS
                html+="<td>";html+=empleadoActual._nombre                       ;html+="</td>";
                html+="<td>";html+= empleadoActual._edad                        ;html+= "</td>";
                html+="<td>";html+= empleadoActual._sexo                        ;html+= "</td>";
                html+="<td>";html+= tipoEmpleado[empleadoActual._tipo]   ;html+= "</td>";
                html+="<td>";html+= estadoCLIEMP[empleadoActual._estado] ;html+= "</td>";
            //BOTONES
                html+="<td>"  
                html+="<button class='btn btn- btn-warning' type='button' id='btnEnviar' value='Modificar' onclick='muestraModificarEmpleado("+empleadoActual._id+")'>"
                html+="MODIFICAR ";
                html+="<i class='glyphicon glyphicon-pencil'></i>";
                html+="</button>";
                html+="</td>";  
                html+="<td>";
                html+="<button class='btn btn-danger btn-sm' type='button' id='btnEnviar' value='Eliminar' onclick='eliminarEmpleado("+empleadoActual._id+")'>";
                html+="BORRAR ";
                html+="<i class='glyphicon glyphicon-minus'></i>";
                html+="</button>";
                html+="</td>";  
                html+="</tr>";
        }
        if(i==0)
        {cuerpoTablaAppend = html;}
        else {cuerpoTablaAppend += html;}        
    }
        //FOOTER
        let footerTablaAppend = '</tbody>';
        footerTablaAppend+='</table>';
        footerTablaAppend+='</div><!-- /.table-responsive -->';
        footerTablaAppend+='</div><!-- /.box-body -->';
        footerTablaAppend+='<div class="box-footer clearfix">';
        footerTablaAppend+='<a onclick="muestraAgregarEmpleado();" class="btn btn-sm btn-info btn-flat pull-left">Nuevo Empleado</a>';
        footerTablaAppend+='<a href="javascript::;" class="btn btn-sm btn-default btn-flat pull-right">Ver Clave</a>';
        footerTablaAppend+='</div>';
        footerTablaAppend+='</div>';

        let tablafinal= encabezadoTablaAppend+cuerpoTablaAppend+footerTablaAppend;
        $("#principal").append(tablafinal);   
}    

}