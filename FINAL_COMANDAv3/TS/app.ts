///<reference path="../node_modules/@types/jquery/index.d.ts" />
// import '../node_modules/rxjs/operator/filter';
// import '../node_modules/rxjs/add/operator/filter';
var imagenBASE64;
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


// // // // // // // FUNCIONES DE CARGA DE PÁGINA - HTML5 // // // // // // //// // // // // // //

function borrarPrincipal():void
{
    $("#principal")[0].innerHTML="";
}

///////EMPLEADO///////////
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

///////MESAS///////////
function muestraAgregarMesa():void
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

function muestraModificarMesa(idEmpleado):void
{
    muestraAgregarMesa();
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
////////////////////////////////GENERALES////////////////////////////////
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

function determinoRol (rol:string):Clases.tipoEmpleado
{
    var tipo:Clases.tipoEmpleado;
    switch (rol)
    {
        case "BARTENDER": 
        {
            tipo = Clases.tipoEmpleado.BARTENDER;
            break;
        }
        case "CERVECERO": 
        {
            tipo = Clases.tipoEmpleado.CERVECERO;
            break;
        }
        case "COCINERO": 
        {
            tipo = Clases.tipoEmpleado.COCINERO;
            break;
        }
        case "MOZO": 
        {
            tipo = Clases.tipoEmpleado.MOZO;
            break;
        }
        case "SOCIO": 
        {
            tipo = Clases.tipoEmpleado.SOCIO;
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

function armoJSON(indice,persona)
{
    let EmpleadosStringNew  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    delete EmpleadosStringNew[indice];
    var objJsonResp = EmpleadosStringNew.filter(function(x) { return x !== null });
    objJsonResp.push( JSON.stringify(persona));
    localStorage.clear();
    localStorage.setItem("Empleados",JSON.stringify(objJsonResp));
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
    let nuevoEmpleado    = new Clases.Empleado(  
                                            String ($('#nombre').val()),
                                            Number ($('#edad').val()),
                                            String ($('#sexo').val()),
                                            tipoEMP,
                                            Clases.estadoCLIEMP.ACTIVO,
                                            String ($('#ClaveUsuario').val())
                                            );
    
    let EmpleadosString  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    EmpleadosString.push( JSON.stringify(nuevoEmpleado));
    localStorage.setItem("Empleados",JSON.stringify(EmpleadosString));
        
    console.log(EmpleadosString);
    alert ("Empleado guardado");
    muestraAgregarEmpleado();  
    
}

var vienedeEliminar;

function modificarEmpleado(indice,vienedeEliminar?):void
{
    var indice = indice;
    let EmpleadosString:string|null  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    var persona = JSON.parse(JSON.parse(localStorage.Empleados)[indice]);

    if (!vienedeEliminar)
    {
        var tipoEMP = determinoRol(String ($('#tipoMasc').val())) ; 

        persona._nombre = String ($('#nombre').val());
        persona._edad   = Number ($('#edad').val());
        persona._sexo   = String ($('#sexo').val());
        persona._tipo  = tipoEMP ; 
        persona._clave  = String ($('#ClaveUsuario').val());
    
        
        // let EmpleadosStringNew  = JSON.parse(localStorage.getItem("Empleados") || "[]");
        // delete EmpleadosStringNew[indice];
        // var objJsonResp = EmpleadosStringNew.filter(function(x) { return x !== null });
        // objJsonResp.push( JSON.stringify(persona));
        // localStorage.clear();
        // localStorage.setItem("Empleados",JSON.stringify(objJsonResp));
    }
    else
    {
        persona._estado= Clases.estadoCLIEMP.BAJA;
        vienedeEliminar=false;
    }
    
    armoJSON(indice,persona);
    mostrarEmpleados();
}

 function eliminarEmpleado(idEmpleado):void
{
    vienedeEliminar=true;
    var indice = determinoIndice(idEmpleado);
    modificarEmpleado(indice,vienedeEliminar);
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
                html+="<td>";html+= Clases.tipoEmpleado[empleadoActual._tipo]   ;html+= "</td>";
                html+="<td>";html+= Clases.estadoCLIEMP[empleadoActual._estado] ;html+= "</td>";
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


///////MESAS///////////
function agregarMesa(vienedeModif?):void
{
    var tipoEMP = determinoRol(String ($('#tipoMasc').val())) ; 
    let nuevoEmpleado    = new Clases.Empleado(  
                                            String ($('#nombre').val()),
                                            Number ($('#edad').val()),
                                            String ($('#sexo').val()),
                                            tipoEMP,
                                            Clases.estadoCLIEMP.ACTIVO,
                                            String ($('#ClaveUsuario').val())
                                            );
    
    let EmpleadosString  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    EmpleadosString.push( JSON.stringify(nuevoEmpleado));
    localStorage.setItem("Empleados",JSON.stringify(EmpleadosString));
        
    console.log(EmpleadosString);
    alert ("Empleado guardado");
    muestraAgregarEmpleado();  
    
}

function mostrarMesas():void
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
                html+="<td>";html+= Clases.tipoEmpleado[empleadoActual._tipo]   ;html+= "</td>";
                html+="<td>";html+= Clases.estadoCLIEMP[empleadoActual._estado] ;html+= "</td>";
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

///////PEDIDOS///////////
function mostrarPedidos():void
{
    borrarPrincipal();
    let Pedidos:string|null =  JSON.parse(localStorage.getItem("Pedidos") || "[]");    
    //ENCABEZADO FIJO
    let encabezadoTablaAppend =
    ` 

    <!-- PRODUCT LIST -->
    <div class="box box-primary">
      <div class="box-header with-border">
        <h3 class="box-title">Pedidos Recientes</h3>
        <div class="box-tools pull-right">
          <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
          <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
        </div>
      </div><!-- /.box-header -->
      `
    //   let cuerpoTablaAppend;

      var cuerpoTablaAppend =`
      <div class="box-body">
        <ul class="products-list product-list-in-box">
          <li class="item">
            <div class="product-img">
              <img src="http://placehold.it/50x50/d2d6de/ffffff" alt="Product Image"/>
            </div>
            <div class="product-info">
              <a href="javascript::;" class="product-title">Samsung TV <span class="label label-warning pull-right">$1800</span></a>
              <span class="product-description">
                Samsung 32" 1080p 60Hz LED Smart HDTV.
              </span>
            </div>
          </li><!-- /.item -->
          <li class="item">
            <div class="product-img">
              <img src="dist/img/default-50x50.gif" alt="Product Image"/>
            </div>
            <div class="product-info">
              <a href="javascript::;" class="product-title">Bicycle <span class="label label-info pull-right">$700</span></a>
              <span class="product-description">
                26" Mongoose Dolomite Men's 7-speed, Navy Blue.
              </span>
            </div>
          </li><!-- /.item -->
          <li class="item">
            <div class="product-img">
              <img src="dist/img/default-50x50.gif" alt="Product Image"/>
            </div>
            <div class="product-info">
              <a href="javascript::;" class="product-title">Xbox One <span class="label label-danger pull-right">$350</span></a>
              <span class="product-description">
                Xbox One Console Bundle with Halo Master Chief Collection.
              </span>
            </div>
          </li><!-- /.item -->
          <li class="item">
            <div class="product-img">
              <img src="dist/img/default-50x50.gif" alt="Product Image"/>
            </div>
            <div class="product-info">
              <a href="javascript::;" class="product-title">PlayStation 4 <span class="label label-success pull-right">$399</span></a>
              <span class="product-description">
                PlayStation 4 500GB Console (PS4)
              </span>
            </div>
          </li><!-- /.item -->
        </ul>
      </div><!-- /.box-body -->
      <div class="box-footer text-center">
        <a href="javascript::;" class="uppercase">View All Products</a>
      </div><!-- /.box-footer -->
    </div><!-- /.box -->
  `;
  let tablafinal= encabezadoTablaAppend+cuerpoTablaAppend;
  $("#principal").append(tablafinal);   
}