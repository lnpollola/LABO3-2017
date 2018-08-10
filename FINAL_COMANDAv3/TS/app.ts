///<reference path="../node_modules/@types/jquery/index.d.ts" />

// $(function(){

// });

//CARGO LOS DROPDOWN QUE DEPENDEN DEL ENUMERADO

var imagenBASE64;
/////////////////////////////////////////FUNCIONES DEL SISTEMA/////////////////////////////////////////
function transformaImagen() {
           
    var filesSelected =(<HTMLInputElement> document.getElementById('imagen')).files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();


        fileReader.onload = function(fileLoadedEvent):string {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64

            var newImage = document.createElement('img');
            newImage.src = srcData;
            newImage.id  = "imgPedido";
            imagenBASE64 = newImage.outerHTML;
            return  newImage.outerHTML;
        
        }
        fileReader.readAsDataURL(fileToLoad);
    
    }
}


// // // // // // // FUNCIONES DE CARGA DE PÁGINA - HTML5 // // // // // // //// // // // // // //
 
function borrarPrincipal():void
{
    $("#principal")[0].innerHTML="";
    $("#agregar")[0].innerHTML="";
    $("#listar")[0].innerHTML="";
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
            <input type="email" id="nombre" class="sinError form-control" name="nombre" placeholder="Nombre@COMANDA.COM" value=@COMANDA.COM autocomplete="off" class="form-control" required autofocus>
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
        <!-- FECHA DESDE dd/m/aaaa -->
        <div class="form-group">
          <label>Fecha Desde:</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-calendar"></i>
            </div>
            <input type="text" id="fechaDesde" class="col-xs-4" placeholder="dd/m/aaaa" data-mask"/></input>
          </div><!-- /.input group -->
        </div><!-- /.form group -->
        <!-- /.box-body -->
        <!-- FECHA Hasta dd/m/aaaa -->
        <div class="form-group">
          <label>Fecha Hasta:</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-calendar"></i>
            </div>
            <input type="text" id="fechaHasta" class="col-xs-4" placeholder="dd/m/aaaa" data-mask"/></input>
          </div><!-- /.input group -->
        </div><!-- /.form group -->
        <!-- /.box-body -->
        <div class="box-footer">
            <button type="submit" onclick="agregarEmpleado();" class="btn btn-primary btn-block btn-flat" id="btnAgregarEmpleado" >Agregar</button>
        </div>
    </form>
    <!-- /.box -->`;

    $("#agregar").append(cuerpoAgregarEmpleado);
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
    <!-- FECHA DESDE dd/m/aaaa -->
    <div class="form-group">
      <label>Fecha Desde:</label>
      <div class="input-group">
        <div class="input-group-addon">
          <i class="fa fa-calendar"></i>
        </div>
        <input type="text" id="fechaDesde" class="col-xs-4" placeholder="dd/m/aaaa" data-mask"/></input>
      </div><!-- /.input group -->
    </div><!-- /.form group -->
    <!-- /.box-body -->
    <!-- FECHA Hasta dd/m/aaaa -->
    <div class="form-group">
      <label>Fecha Hasta:</label>
      <div class="input-group">
        <div class="input-group-addon">
          <i class="fa fa-calendar"></i>
        </div>
        <input type="text" id="fechaHasta" class="col-xs-4" placeholder="dd/m/aaaa" data-mask"/></input>
      </div><!-- /.input group -->
    </div><!-- /.form group -->
    <!-- /.box-body -->
    <div class="box-footer">
        <button type="submit" onclick="modificarEmpleado(`+(indice)+`,Clases.estadoCLIEMP.MODIFICAR)" id="botonModificar" class="btn btn-primary btn-block btn-flat">Modificar</button>
    </div>` 
    ;
}

///////MESAS///////////

function generarNuevoNum():void
{
    (<HTMLInputElement>document.getElementById("codAlfaBox")).value =  codigo_random(5);
}

function muestraAgregarMesa():void
{
    borrarPrincipal();
    let cuerpoAgregarEmpleado = 
    `
    <div class="box box-primary">
        <div class="box-header">
            <h3 class="box-title">Alta de Mesas</h3>
        </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form id="formCARGA"  data-toggle="validator">
    <!--onsubmit="agregarMesa();" -->
      <div class="box-body">
            <!-- CODIGO ALFANUMERICO -->
            <div class="form-group">
            <label for="codAlfa">CODIGO ALFANUMERICO</label>

            <div class="input-group">
                <div class="input-group-btn">
                    <button id="btnGenerarCodMesa" type="button"  onclick="generarNuevoNum();" class="btn btn-danger">Generar Código</button>
                </div><!-- /btn-group -->
                <input type="text" id="codAlfaBox" value="`+codigo_random(5)+`" class="form-control">
            </div><!-- /input-group -->
        <!-- /.box-body -->

        
        <div class="box-footer">
            <button type="submit" onclick="agregarMesa();" id="btnAgregarMesa" class="btn btn-primary btn-block btn-flat">Agregar</button>
        </div>
    </form>
    <!-- /.box -->`;

    $("#agregar").append(cuerpoAgregarEmpleado);
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
        <button type="submit" onclick="modificarEmpleado(`+ (indice) +` ,"MODIFICAR")" class="btn btn-primary">Modificar</button>
    </div>` 
    ;
}

///////PEDIDOS///////////
function muestraAgregarPedido():void
{
    borrarPrincipal();
    let cuerpoAgregarPedido = 
    `
    <div class="box box-primary">
        <div class="box-header">
            <h3 class="box-title">Nuevo Pedido</h3>
        </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form id="formCARGA"  data-toggle="validator">
      <div class="box-body">
            <!-- CODIGO ALFANUMERICO -->
            <div class="form-group">
            <label for="codAlfa">CODIGO ALFANUMERICO</label>

            <div class="input-group">
                <div class="input-group-btn">
                    <button type="button" id="btnGenerarCodPed"  onclick="generarNuevoNum();" class="btn btn-danger">Generar Código</button>
                </div><!-- /btn-group -->
                <input type="text" id="codAlfaBox" value="`+codigo_random(5)+`" class="form-control">
            </div><!-- /input-group -->
            
            <!-- Nombre Cliente -->
            <div class="form-group">
            <label for="edad">Nombre del Cliente</label>
            <input type="text" id="nombClien" class="sinError form-control" name="nombClien" placeholder="Nombre Cliente.." autocomplete="off" class="form-control" >
            </div>
        
            <!-- IMAGEN -->
            <div class="form-group">
               <label for="archivo">Imagen Adjunta:</label>
               <input type="file" id="imagen" onchange="transformaImagen();">
               <p class="help-block">Máximo 50MB</p>
           </div>
           <div id="imgTest"></div>
        <!-- /.box-body -->

        <!-- Mesas Disponibles-->
        <div class="form-group">
          <label for="opcion">Mesas Disponibles:</label>
            <select class="form-control" name="mesaDisp" id="mesaDisp">
            </select>
        </div>

        <!-- checkbox -->
        <div class="form-group">
          <input type="checkbox" id="checkTragos"  /><label>Tragos</label>             <input type="text" placeholder="Ingrese detalle de Tragos..." id="checkTragosForm" class="form-control">
          <label><input type="checkbox" id="checkVinos"   />Vinos</label>              <input type="text" placeholder="Ingrese detalle de Vinos..." id="checkVinosForm"  class="form-control">
          <label><input type="checkbox" id="checkCerveza" />Cerveza Artesanal</label>  <input type="text" placeholder="Ingrese detalle de Cerveza..." id="checkCervezaForm"class="form-control">
          <label><input type="checkbox" id="checkCocina"  />Cocina</label>             <input type="text" placeholder="Ingrese detalle de Cocina..." id="checkCocinaForm" class="form-control">
          <label><input type="checkbox" id="checkCandy"   />Candy Bar</label>          <input type="text" placeholder="Ingrese detalle de CandyBar..." id="checkCandyForm"  class="form-control">
        </div>

        <!-- Precio Pedido -->
        <div class="input-group col-xs-4">
        <span class="input-group-addon"><b>PRECIO</b> $</span>
        <input type="text" id="precioPedido" class="form-control">
        <span class="input-group-addon">.00</span>
        </div>

        <div class="box-footer">
            <button type="submit" id="botonAgregarPed" onclick="agregarPedido();" class="btn btn-primary btn-block btn-flat">Agregar</button>
        </div>
    </form>
    <!-- /.box -->`;

    $("#agregar").append(cuerpoAgregarPedido);
}

function filtroMesasActivas():void
{
    let valor = Clases.estadoMesa.ABIERTA;
    let MesasString=  JSON.parse(localStorage.getItem("Mesas") || "[]"); 
       
    
    let stringFinal = MesasString
                                .filter(function(Mesa){
                                    let mesaRet = JSON.parse(Mesa);
                                    return mesaRet._estado == valor;
                                })
                                .map(function(Mesa){
                                    let mesaRet = JSON.parse(Mesa);
                                    return mesaRet;
                                });   
    
    MesasString= stringFinal; 

    //ENCABEZADO DE FORM DE CARGA
    var i = 0;
    let select = $("#mesaDisp");
    for (var i = 0; i < MesasString.length; i++) 
    {
        select.append("<option value="+MesasString[i]._codAlfa+">"+MesasString[i]._codAlfa+"</option>");
    }
}

function muestraModificarPedido(idPedido):void
{
   muestraAgregarPedido();
   borrarPrincipal();
    var indice = determinoIndicePedido(idPedido);
    var pedido = JSON.parse(JSON.parse(localStorage.Pedidos)[indice]);


    var productosTragos="";
    var productosVinos ="";
    var productosCerveza = "";
    var productosCocina = "";
    var productosCandy = "";

    if ( pedido._sectorTragos == true ) { productosTragos = pedido._productosTragos;  } 
    if ( pedido._sectorVinos == true ) { productosVinos = pedido._productosVinos;  } 
    if ( pedido._sectorCerveza == true ) { productosCerveza = pedido._productosCerveza ;  } 
    if ( pedido._sectorCocina == true ) { productosCocina =  pedido._productosCocina;  } 
    if ( pedido._sectorCandy == true ) { productosCandy = pedido._productosCandy;  } 


    let cuerpoAgregarPedido = 
    `
    <div class="box box-primary">
        <div class="box-header">
            <h3 class="box-title">Modificar Pedido</h3>
        </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form id="formCARGA"  data-toggle="validator">
      <div class="box-body">
            <!-- CODIGO ALFANUMERICO -->
            <div class="form-group">
            <label for="codAlfa">CODIGO ALFANUMERICO</label>

            <div class="input-group">
                <div class="input-group-btn">
                    <button type="button" id="btnGenerarCodPed"  onclick="generarNuevoNum();" class="btn btn-danger">Generar Código</button>
                </div><!-- /btn-group -->
                <input type="text" id="codAlfaBox" value="`+pedido._nroPedido+`" class="form-control">
            </div><!-- /input-group -->
            
            <!-- Nombre Cliente -->
            <div class="form-group">
            <label for="edad">Nombre del Cliente</label>
            <input type="text" id="nombClien" value="`+pedido._nombreCliente+`"class="sinError form-control" name="nombClien" placeholder="Nombre Cliente.." autocomplete="off" class="form-control" >
            </div>
        
            <!-- IMAGEN -->
            <div class="form-group">
               <label for="archivo">Imagen Adjunta:</label>
               <input type="file" id="imagen" onchange="transformaImagen();">
               <p class="help-block">Máximo 50MB</p>
           </div>
           <div id="imgTest"></div>
        <!-- /.box-body -->

        <!-- Mesas Disponibles-->
        <div class="form-group">
          <label for="opcion">Mesas Disponibles:</label>
            <select class="form-control" name="mesaDisp" value="`+pedido._mesaAsignada+`"id="mesaDisp">
            <option value="`+pedido._mesaAsignada+`">`+pedido._mesaAsignada+`</option>
            </select>
        </div>

        <!-- checkbox -->
        <div class="form-group">
          <label><input type="checkbox" id="checkTragos" class="iCheck-helper"/>Tragos</label>             <input type="text" placeholder="Ingrese detalle de Tragos..." id="checkTragosForm"   value="`+productosTragos+`"  class="form-control">
          <label><input type="checkbox" id="checkVinos"  class="iCheck-helper"/>Vinos</label>              <input type="text" placeholder="Ingrese detalle de Vinos..." id="checkVinosForm"     value="`+productosVinos+`"   class="form-control">
          <label><input type="checkbox" id="checkCerveza"class="iCheck-helper"/>Cerveza Artesanal</label>  <input type="text" placeholder="Ingrese detalle de Cerveza..." id="checkCervezaForm" value="`+productosCerveza+`" class="form-control">
          <label><input type="checkbox" id="checkCocina" class="iCheck-helper"/>Cocina</label>             <input type="text" placeholder="Ingrese detalle de Cocina..." id="checkCocinaForm"   value="`+productosCocina+`"  class="form-control">
          <label><input type="checkbox" id="checkCandy"  class="iCheck-helper"/>Candy Bar</label>          <input type="text" placeholder="Ingrese detalle de CandyBar..." id="checkCandyForm"  value="`+productosCandy+`"   class="form-control">
        </div>

        <!-- Precio Pedido -->
        <div class="input-group col-xs-4">
        <span class="input-group-addon"><b>PRECIO</b> $</span>
        <input type="text" id="precioPedido" class="form-control">
        <span class="input-group-addon">.00</span>
        </div>


        <div class="box-footer">
            <button type="submit" id="botonAgregarPed" onclick="modificarPedido(`+(indice)+`,Clases.estadoPedido.MODIFICAR);" class="btn btn-primary btn-block btn-flat">Modificar Pedido</button>
        </div>
    </form>
    <!-- /.box -->`;

 
    $("#agregar").append(cuerpoAgregarPedido);
}
// // // // // // // FUNCIONES DE CLASES DE PÁGINA // // // // // // //// // // // // // //
////////////////////////////////GENERALES////////////////////////////////
function validaLogin()
{
    var estalogueado=0;
    var rol;
    let EmpleadosString:string|null  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    for (var i = 0; i < EmpleadosString.length ; i++) 
    {   
      
      let empleadoActual= JSON.parse(EmpleadosString[i]);
      if  
      (empleadoActual._nombre==$('#mailingresado').val() && empleadoActual._clave == $('#passingresado').val() && empleadoActual._estado == Clases.estadoCLIEMP.ACTIVO )
        {
             estalogueado = 1; 
             rol = Clases.tipoEmpleado[empleadoActual._tipo];   
             var nombEmp = empleadoActual._nombre    ;
        }
    }   

    if (estalogueado)
    {
        alert ("Bienvenido "+nombEmp);
         switch (rol)
        {
            case "BARTENDER": 
            {
                window.location.href = "homeSERVICIO.html";
                break;
            }
            case "CERVECERO": 
            {
                window.location.href = "homeSERVICIO.html";
                break;
            }
            case "COCINERO": 
            {
                window.location.href = "homeSERVICIO.html";
                break;
            }
            case "MOZO": 
            {
                window.location.href = "homeMOZO.html";
                break;
            }
            case "SOCIO": 
            {
                window.location.href = "homeSOCIO.html";
                break;
            }
        }
    }
    else 
    {
        alert ("Empleado NO registrado en el sistema");
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

function determinoIndicePedido (idPedido:number):number
{
    var retorno;
    let PedidosString:string|null =  JSON.parse(localStorage.getItem("Pedidos") || "[]"); 
    for (var i = 0; i < PedidosString.length ; i++) 
    {
       let PedidoActual = JSON.parse(PedidosString[i]);
       if (PedidoActual._nroPedido == idPedido)
       {retorno = i;}
    }
    return retorno;
}

determinoIndicePedido

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
    localStorage.Empleados = "";
    localStorage.setItem("Empleados",JSON.stringify(objJsonResp));
} 

function armoJSONMesa(indice,mesa)
{
    let MesasStringNew  = JSON.parse(localStorage.getItem("Mesas") || "[]");
    delete MesasStringNew[indice];
    var objJsonResp = MesasStringNew.filter(function(x) { return x !== null });
    objJsonResp.push( JSON.stringify(mesa));
    localStorage.Mesas = "";
    localStorage.setItem("Mesas",JSON.stringify(objJsonResp));
} 

function armoJSONPedido(indice,pedido)
{
    let PedidosStringNew  = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    delete PedidosStringNew[indice];
    var objJsonResp = PedidosStringNew.filter(function(x) { return x !== null });
    objJsonResp.push( JSON.stringify(pedido));
    localStorage.Pedidos = "";
    localStorage.setItem("Pedidos",JSON.stringify(objJsonResp));
} 




function codigo_random(longitud)
{
    var caracteres = "0123456789ABCDEF";
    var code = "";
    for (var x = 0; x < longitud; x++)
    {
        var rand = Math.floor(Math.random()*caracteres.length);
        code += caracteres.substr(rand, 1);
    }
    return code;
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
                                            String ($('#ClaveUsuario').val()),
                                            String ($('#fechaDesde').val()),
                                            String ($('#fechaHasta').val())
                                            );
    
    let EmpleadosString  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    EmpleadosString.push( JSON.stringify(nuevoEmpleado));
    localStorage.setItem("Empleados",JSON.stringify(EmpleadosString));
        
    console.log(EmpleadosString);
    alert ("Empleado guardado");
    muestraAgregarEmpleado();  
    
}


var auxEmpleado;
function modificarEmpleado(indice , auxEmpleado):void
{
    var indice = indice;
    let EmpleadosString:string|null  = JSON.parse(localStorage.getItem("Empleados") || "[]");
    var persona = JSON.parse(JSON.parse(localStorage.Empleados)[indice]);

    if (auxEmpleado == Clases.estadoCLIEMP.MODIFICAR)
    {
        var tipoEMP = determinoRol(String ($('#tipoMasc').val())) ; 

        persona._nombre = String ($('#nombre').val());
        persona._edad   = Number ($('#edad').val());
        persona._sexo   = String ($('#sexo').val());
        persona._tipo  = tipoEMP ; 
        persona._clave  = String ($('#ClaveUsuario').val());
        var fechaIniciocontrato =  String ($('#fechaDesde').val());
        if(fechaIniciocontrato=="")
        {
            persona._fechaDesde = new Date().toLocaleDateString();
        } 
        else
        { 
            persona._fechaDesde = fechaIniciocontrato;
        }
        persona._fechaHasta = String ($('#fechaHasta').val());;
    }
    else 
    {
        persona._estado = auxEmpleado;
        if(auxEmpleado == Clases.estadoCLIEMP.BAJA ||auxEmpleado == Clases.estadoCLIEMP.SUSPENDIDO )
        {persona._fechaHasta =  new Date().toLocaleDateString();}
        else if(auxEmpleado == Clases.estadoCLIEMP.ACTIVO)
        {persona._fechaDesde= new Date().toLocaleDateString();
         persona._fechaHasta =  "";}        
    }
    
    armoJSON(indice,persona);
    mostrarEmpleados();
}

///////MESA///////////

function calcularIdMesa(codAlfa):number
{
    let indice;
    let MesasString=  JSON.parse(localStorage.getItem("Mesas") || "[]");    
    for (var i = 0; i < MesasString.length ; i++) 
     {
        let mesaActual = JSON.parse(MesasString[i]);
        if (mesaActual != null)
        {
            if(mesaActual._codAlfa==codAlfa)
            {
                indice = i;
            }
        } 
    }
    return indice;
}

///////MESA///////////

function calcularIndXMesa(codAlfa):number
{
    let indice;
    let PedidosString=  JSON.parse(localStorage.getItem("Pedidos") || "[]");    
    for (var i = 0; i < PedidosString.length ; i++) 
     {
        let PedidoActual = JSON.parse(PedidosString[i]);
        if (PedidoActual != null)
        {
            if(PedidoActual._mesaAsignada==codAlfa)
            {
                indice = i;
            }
        } 
    }
    return indice;
}

//FUNCIONES QUE LLAMAN A MODIFICAR CON DISTINTOS PARAMETROS
 function eliminarEmpleado(idEmpleado):void
{
    var indice = determinoIndice(idEmpleado);
    modificarEmpleado(indice,Clases.estadoCLIEMP.BAJA);
} 

function habilitarEmpleado(idEmpleado):void
{
    var indice = determinoIndice(idEmpleado);
    modificarEmpleado(indice,Clases.estadoCLIEMP.ACTIVO);
} 

function suspenderEmpleado(idEmpleado):void
{
    var indice = determinoIndice(idEmpleado);
    modificarEmpleado(indice,Clases.estadoCLIEMP.SUSPENDIDO);
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
        +'  <th>Fecha Desde</th>'
        +'  <th>Fecha Hasta</th>'
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
                html+="<td>";html+= empleadoActual._fechaDesde ;html+= "</td>";
                html+="<td>";html+= empleadoActual._fechaHasta ;html+= "</td>";
            
                //BOTONES
                html+="<td>"  
                html+="<button class='btn btn-block btn-default btn-flat' type='button' id='btnEnviar' value='Modificar' onclick='muestraModificarEmpleado("+empleadoActual._id+")'>"
                html+="MODIFICAR ";
                html+="<i class='glyphicon glyphicon-pencil'></i>";
                html+="</button>";
                html+="</td>";  
               
                //CONDICION PARA AGREGAR O BORRAR
            if(empleadoActual._estado == Clases.estadoCLIEMP.SUSPENDIDO ||empleadoActual._estado == Clases.estadoCLIEMP.BAJA )
            {
                html+="<td>";
                html+="<button class='btn btn-block btn-success btn-sm' type='button' id='btnHabilitar' value='Habilitar' onclick='habilitarEmpleado("+empleadoActual._id+")'>";
                html+="HABILITAR ";
                html+="<i class='glyphicon glyphicon-plus'></i>";
                html+="</button>";
                html+="</td>"; 

                html+="<td>"  ;
                html+="<button class='btn btn-block btn-warning btn-flat disabled' type='button' id='btnSuspender' value='Suspender' onclick='suspenderEmpleado("+empleadoActual._id+")'>";
                html+="SUSPENDER ";
                html+="<i class='fa fa-ban'></i>";
                html+="</button>";
                html+="</td>";  

                html+="<td>";
                html+="<button class='btn btn-block btn-danger disabled' type='button' id='btnEnviar' value='Eliminar' onclick='eliminarEmpleado("+empleadoActual._id+")'>";
                html+="BORRAR ";
                html+="<i class='glyphicon glyphicon-minus'></i>";
                html+="</button>";
                html+="</td>";  
                html+="</tr>";    
                
            }
            else 
            {
                html+="<td>";
                html+="<button class='btn btn-block btn-success btn-sm disabled' type='button' id='btnHabilitar' value='Habilitar' onclick='habilitarEmpleado("+empleadoActual._id+")'>";
                html+="HABILITAR ";
                html+="<i class='glyphicon glyphicon-plus'></i>";
                html+="</button>";
                html+="</td>";  
                html+="<td>"  ;
                html+="<button class='btn btn-block btn-warning btn-flat ' type='button' id='btnSuspender' value='Suspender' onclick='suspenderEmpleado("+empleadoActual._id+")'>";
                html+="SUSPENDER ";
                html+="<i class='fa fa-ban'></i>";
                html+="</button>";
                html+="</td>";  
                html+="<td>";
                html+="<button class='btn btn-block btn-danger' type='button' id='btnEnviar' value='Eliminar' onclick='eliminarEmpleado("+empleadoActual._id+")'>";
                html+="BORRAR ";
                html+="<i class='glyphicon glyphicon-minus'></i>";
                html+="</button>";
                html+="</td>";  
                html+="</tr>";    
            }
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
        footerTablaAppend+='<a onclick="muestraAgregarEmpleado();" id="botonNuevoEmp" class="btn btn-sm btn-info btn-flat pull-left">Nuevo Empleado</a>';
        footerTablaAppend+='</div>';
        footerTablaAppend+='</div>';

        let tablafinal= encabezadoTablaAppend+cuerpoTablaAppend+footerTablaAppend;
        $("#listar").append(tablafinal);   
}    


///////MESAS///////////
function agregarMesa():void
{
    let codigoMesa =String ($('#codAlfaBox').val()) ; 
    let nuevaMesa    = new Clases.Mesa(codigoMesa, Clases.estadoMesa.ABIERTA);
    
    let MesasString  = JSON.parse(localStorage.getItem("Mesas") || "[]");
    MesasString.push( JSON.stringify(nuevaMesa));
    localStorage.setItem("Mesas",JSON.stringify(MesasString));

    alert ("Mesa dada de Alta");
    mostrarMesas();  
}

function cerrarMesa(idMesa):void
{
    var indice = calcularIdMesa(idMesa);
    modificarMesa(indice,Clases.estadoMesa.CERRADA);

    cerrarPedido(idMesa);
} 

function siguienteEstadoMesa(idMesa):void
{
    var indice = calcularIdMesa(idMesa);
    modificarMesa(indice,Clases.estadoMesa.SIGUIENTE);
    mostrarMesas(true);
}


var auxMesa;
function modificarMesa(indice , auxMesa?):void
{

    var indice = indice;
    var mesa = JSON.parse(JSON.parse(localStorage.Mesas)[indice]);

    if (auxMesa == Clases.estadoMesa.CERRADA)
    {
        mesa._estado = Clases.estadoMesa.ABIERTA;
    }
    else if (auxMesa == Clases.estadoMesa.SIGUIENTE)
    {
        mesa._estado += 1;
    }
    else
    {
        mesa._estado = auxMesa;
    }
    
    armoJSONMesa(indice,mesa);
    mostrarMesas();
}

function mostrarMesas(vienedeMozo?):void
{
    borrarPrincipal();
    let  varUltimaColumna ;
    if(!vienedeMozo)
    {
        varUltimaColumna = '  <th>Acciones</th>';
    }
    else 
    {
        varUltimaColumna = '  <th>Próximo Estado </th>';
    }
    let MesasString  = JSON.parse(localStorage.getItem("Mesas") || "[]");
    //ENCABEZADO FIJO
    let encabezadoTablaAppend = 
        '<div class="box box-info">'
        +'<div class="box-header with-border">'
        +'<h3 class="box-title">Listado de Mesas</h3>'
        +'<div class="box-tools pull-right">'
       +'</div>'
        +'</div><!-- /.box-header -->'
        +'<div class="box-body">'
        +'<div class="table-responsive">'
        +'<table class="table no-margin">'
        +'<thead>'
        +'<tr>'
        +'  <th>Cod. Mesa</th>'
        +'  <th>Recaudación Total</th>'
        +'  <th>Cant. Pedidos</th>'
        +'  <th>Estado Actual</th>'
        +varUltimaColumna
        +'</tr>'        
        +'</thead>'
        +'<tbody>';
    let cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < MesasString.length ; i++) 
     {
        let mesaActual = JSON.parse(MesasString[i]);
        if (mesaActual != null)
        {
            var html='<tr>';
            //DATOS
                html+="<td>";html+=mesaActual._codAlfa                    ;html+="</td>";
                html+="<td>";html+= mesaActual._recaudacion               ;html+= "</td>";
                html+="<td>";html+= mesaActual._cantPedidos               ;html+= "</td>";
                html+="<td>";html+= Clases.estadoMesa[mesaActual._estado] ;html+= "</td>";
                
                if(!vienedeMozo)
                {
                    if(mesaActual._estado == Clases.estadoMesa["CON CLIENTES PAGANDO"] )

                    {
                        html+="<td>";
                        html+="<button class='btn btn-block btn-danger' type='button' id='btnEnviar' value='Eliminar' onclick='cerrarMesa(`"+mesaActual._codAlfa+"`)' >" ; 
                        html+="CERRAR ";
                        html+="<i class='glyphicon glyphicon-minus'></i>";
                        html+="</button>";
                        html+="</td>";   
                    }
                    else 
                    {
                        html+="<td>";
                        html+="<button class='btn btn-block btn-danger disabled' type='button' id='btnEnviar' value='Eliminar' onclick='cerrarMesa(`"+mesaActual._codAlfa+"`)' >";
                        html+="CERRAR ";
                        html+="<i class='glyphicon glyphicon-minus'></i>";
                        html+="</button>";
                        html+="</td>";  
                    }
                }
                else 
                {
                    if( Clases.estadoMesa[mesaActual._estado+1] != "CERRADA" )
                    {
                        html+="<td>";
                        html+="<button class='btn btn-block btn-success btn-sm' type='button' id='btnEnviar' value='Eliminar' onclick='siguienteEstadoMesa(`"+mesaActual._codAlfa+"`)' >";
                        html+=Clases.estadoMesa[mesaActual._estado+1];
                        html+=" <i class='glyphicon glyphicon-fast-forward'></i>";
                        html+="</button>";
                        html+="</td>";  
                    }
                    else
                    {
                        html+="<td>";
                        html+="<button class='btn btn-block btn-danger btn-sm disabled' type='button' id='btnEnviar' value='Eliminar' onclick='siguienteEstadoMesa(`"+mesaActual._codAlfa+"`)' >";
                        html+=Clases.estadoMesa[mesaActual._estado+1];
                        html+=" <i class='glyphicon glyphicon-fast-forward'></i>";
                        html+="</button>";
                        html+="</td>";  
                    }
                   
                }
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
        footerTablaAppend+='<a onclick="muestraAgregarMesa();" id="btnNuevaMesa" class="btn btn-sm btn-info btn-flat pull-left">Agregar Mesa</a>';
        footerTablaAppend+='</div>';
        footerTablaAppend+='</div>';

        let tablafinal= encabezadoTablaAppend+cuerpoTablaAppend+footerTablaAppend;
        $("#listar").append(tablafinal);   
}  
///////PEDIDOS///////////
function agregarPedido():void
{
    let codigoPedido =String ($('#codAlfaBox').val()) ; 
    let codAlfaMesa =  String ($("#mesaDisp").val())  ;
    let nuevaPedido    = new Clases.Pedido(
                                        codigoPedido,
                                        Clases.estadoPedido["ORDEN TOMADA"],
                                        String ($('#nombClien').val()),
                                        codAlfaMesa ,
                                        imagenBASE64,
                                        Number ($('#precioPedido').val())  
                                        );
    
    const checkTragos =$('#checkTragos')[0] as HTMLInputElement ; 
    const checkVinos =$('#checkVinos')[0] as HTMLInputElement ; 
    const checkCerveza =$('#checkCerveza')[0] as HTMLInputElement ; 
    const checkCocina =$('#checkCocina')[0] as HTMLInputElement ; 
    const checkCandy =$('#checkCandy')[0] as HTMLInputElement ; 

    if(  checkTragos.checked  )
    {
        nuevaPedido._sectorTragos = true;
        nuevaPedido._productosTragos = String ($('#checkTragosForm').val()) ; 
    }
    
    if( checkVinos.checked  )
    {
        nuevaPedido._sectorVinos = true;
        nuevaPedido._productosVinos = String ($('#checkVinosForm').val()) ; 
    }
    if( checkCerveza.checked )
    {
        nuevaPedido._sectorCerveza = true;
        nuevaPedido._productosCerveza = String ($('#checkCervezaForm').val()) ; 
    }
    
    if( checkCocina.checked )
    {
        nuevaPedido._sectorCocina = true;
        nuevaPedido._productosCocina = String ($('#checkCocinaForm').val()) ; 
    }
    
    if( checkCandy.checked )
    {
        nuevaPedido._sectorCandy = true;
        nuevaPedido._productosCandy = String ($('#checkCandyForm').val()) ; 
    }

    let PedidosString  = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    PedidosString.push( JSON.stringify(nuevaPedido));
    localStorage.setItem("Pedidos",JSON.stringify(PedidosString));

    
    var indice = calcularIdMesa(codAlfaMesa);
    var Mesa = JSON.parse(JSON.parse(localStorage.Mesas)[indice]);
    Mesa._estado = Clases.estadoMesa["CON CLIENTE ESPERANDO PEDIDO"];
    Mesa._cantPedidos++;
    Mesa._recaudacion =Mesa._recaudacion +  Number ($('#precioPedido').val());
     
    armoJSONMesa(indice,Mesa);
    alert ("Pedido dada de Alta");
    mostrarPedidosMozo();  
}


var auxPedido;
function modificarPedido(indice , auxPedido):void
{
                  
    var indice = indice;
    let PedidosString:string|null  = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    var pedido = JSON.parse(JSON.parse(localStorage.Pedidos)[indice]);

    if (auxPedido == Clases.estadoPedido.MODIFICAR)
    {
        pedido._nroPedido = String ($('#codAlfaBox').val());
        pedido._nombreCliente   = String ($('#nombClien').val());
        pedido._imagen   = imagenBASE64;
        pedido._fechahoraIngreso =   new Date().toLocaleDateString();
        pedido._precioPedido =  Number ($('#precioPedido').val()) ;


        const checkTragos =$('#checkTragos')[0] as HTMLInputElement ; 
        const checkVinos =$('#checkVinos')[0] as HTMLInputElement ; 
        const checkCerveza =$('#checkCerveza')[0] as HTMLInputElement ; 
        const checkCocina =$('#checkCocina')[0] as HTMLInputElement ; 
        const checkCandy =$('#checkCandy')[0] as HTMLInputElement ; 


        if( checkTragos.checked  )
        {
            pedido._sectorTragos = true;
            pedido._productosTragos = String ($('#checkTragosForm').val()) ; 
        }
        
        if( checkVinos.checked  )
        {
            pedido._sectorVinos = true;
            pedido._productosVinos = String ($('#checkVinosForm').val()) ; 
        }
        if( checkCerveza.checked  )
        {
            pedido._sectorCerveza = true;
            pedido._productosCerveza = String ($('#checkCervezaForm').val()) ; 
        }
        
        if( checkCocina.checked  )
        {
            pedido._sectorCocina = true;
            pedido._productosCocina = String ($('#checkCocinaForm').val()) ; 
        }
        
        if( checkCandy.checked  )
        {
            pedido._sectorCandy = true;
            pedido._productosCandy = String ($('#checkCandyForm').val()) ; 
        }
    }
    else 
    {
        pedido._estado = auxPedido;    
    }
    
    armoJSONPedido(indice,pedido);
    mostrarPedidosMozo();
}


//FUNCIONES QUE USAN MODIFICAR
function cerrarPedido(idMesa):void
{
    var indicePedido = calcularIndXMesa(idMesa);
    var pedido = JSON.parse(JSON.parse(localStorage.Pedidos)[indicePedido]);
    pedido._estado = Clases.estadoPedido.SERVIDO;
    
    armoJSONPedido(indicePedido,pedido);
    mostrarMesas();
} 

function enpreparacionPedido(idPedido):void
{
    var indice = determinoIndice(idPedido);
    modificarPedido(indice,Clases.estadoPedido["EN PREPARACION"]);
} 

function terminadoPedido(idPedido):void
{
    var indice = determinoIndice(idPedido);
    modificarPedido(indice,Clases.estadoPedido["LISTO PARA SERVIR"]);
} 



function mostrarPedidosServicio(rol?):void
{
    borrarPrincipal();
    // let PedidosString  = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    
    
    let valor = Clases.sectoresProd.TRAGOS;
    let PedidosString=  JSON.parse(localStorage.getItem("Pedidos") || "[]"); 
       
    
    let stringFinal = PedidosString
                                .filter(function(Pedido){
                                    let PedidoRet = JSON.parse(Pedido);
                                    return PedidoRet._sectorVinos == true;
                                })
                                .map(function(Pedido){
                                    let PedidoRet = JSON.parse(Pedido);
                                    return PedidoRet;
                                });   
    
    PedidosString= stringFinal; 
    
    //ENCABEZADO FIJO
    let encabezadoTablaAppend = 
        '<div class="box box-info">'
        +'<div class="box-header with-border">'
        +'<h3 class="box-title">Listado de Pedidos</h3>'
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
        +'  <th>Cod. Pedido</th>'
        +'  <th>Nombre Cliente</th>'
        +'  <th>Hora Ingreso</th>'
        +'  <th>Mesa Asignada</th>'
        +'  <th>Tiempo Restante</th>'
        +'  <th>Estado Actual</th>'
        +'  <th>Imagen Asociada</th>'
        +'</tr>'
        +'</thead>'
        +'<tbody>';
    let cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < PedidosString.length ; i++) 
     {
        let PedidoActual = PedidosString[i];
        if (PedidoActual != null)
        {
            var html='<tr>';
            //DATOS
                html+="<td>";html+=PedidoActual._nroPedido                      ;html+="</td>";
                html+="<td>";html+= PedidoActual._nombreCliente                 ;html+= "</td>";
                html+="<td>";html+= PedidoActual._fechahoraIngreso              ;html+= "</td>";
                html+="<td>";html+= PedidoActual._mesaAsignada                  ;html+= "</td>";
                html+="<td>";html+= "TpoRestante()"                             ;html+= "</td>";
                html+="<td>";html+= Clases.estadoPedido[PedidoActual._estado]   ;html+= "</td>";
                html+=`<td style="width:150px; height:150px; text-align:center; vertical-align:middle" >`;
                html+= PedidoActual._imagen;
                html+= "</td>";
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
        footerTablaAppend+='</div>';
        footerTablaAppend+='</div>';
        let tablafinal= encabezadoTablaAppend+cuerpoTablaAppend+footerTablaAppend;
        $("#listar").append(tablafinal);   
}  



function mostrarPedidosJefe():void
{
    borrarPrincipal();
    let PedidosString  = JSON.parse(localStorage.getItem("Pedidos") || "[]");
    //ENCABEZADO FIJO
    let encabezadoTablaAppend = 
        '<div class="box box-info">'
        +'<div class="box-header with-border">'
        +'<h3 class="box-title">Listado de Pedidos</h3>'
        +'<div class="box-tools pull-right">'
        +'</div>'
        +'</div><!-- /.box-header -->'
        +'<div class="box-body">'
        +'<div class="table-responsive">'
        +'<table class="table no-margin">'
        +'<thead>'
        +'<tr>'
        +'  <th>Cod. Pedido</th>'
        +'  <th>Nombre Cliente</th>'
        +'  <th>Hora Ingreso</th>'
        +'  <th>Mesa Asignada</th>'
        +'  <th>Tiempo Restante</th>'
        +'  <th>Estado Actual</th>'
        +'  <th>Imagen Asociada</th>'
        +'</tr>'
        +'</thead>'
        +'<tbody>';
    let cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < PedidosString.length ; i++) 
     {
        let PedidoActual = JSON.parse(PedidosString[i]);
        if (PedidoActual != null)
        {
            var html='<tr>';
            //DATOS
                html+="<td>";html+=PedidoActual._nroPedido                      ;html+="</td>";
                html+="<td>";html+= PedidoActual._nombreCliente                 ;html+= "</td>";
                html+="<td>";html+= PedidoActual._fechahoraIngreso              ;html+= "</td>";
                html+="<td>";html+= PedidoActual._mesaAsignada                  ;html+= "</td>";
                html+="<td>";html+= "TpoRestante()"                             ;html+= "</td>";
                html+="<td>";html+= Clases.estadoPedido[PedidoActual._estado]   ;html+= "</td>";
                html+=`<td style="width:150px; height:150px; text-align:center; vertical-align:middle" >`;
                html+= PedidoActual._imagen;
                html+= "</td>";
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
        footerTablaAppend+='</div>';
        footerTablaAppend+='</div>';

        let tablafinal= encabezadoTablaAppend+cuerpoTablaAppend+footerTablaAppend;
        $("#listar").append(tablafinal);   
}  

function mostrarPedidosMozo():void
{
    borrarPrincipal();
    let PedidosString:string|null =  JSON.parse(localStorage.getItem("Pedidos") || "[]");    
    //ENCABEZADO FIJO
    let encabezadoTablaAppend =
    ` 

    <!-- PRODUCT LIST -->
    <div class="box box-primary">
      <div class="box-header with-border">
        <h3 class="box-title">Pedidos Recientes</h3>
        <div class="box-tools pull-right">
       </div>
      </div><!-- /.box-header -->
      <div class="box-body">
      `;
   let cuerpoTablaAppend;
    //CUERPO
    for (var i = 0; i < PedidosString.length ; i++) 
     {
        let PedidoActual = JSON.parse(PedidosString[i]);

        let varSectoresProd ="";

         if ( PedidoActual._sectorTragos == true ) { varSectoresProd = "<p></p> TRAGOS: "+PedidoActual._productosTragos;  } 
         if ( PedidoActual._sectorVinos == true ) { varSectoresProd = varSectoresProd+ " / VINOS:"+PedidoActual._productosVinos+"<p></p>";  } 
         if ( PedidoActual._sectorCerveza == true ) { varSectoresProd = varSectoresProd+ " CERVEZA:"+PedidoActual._productosCerveza ;  } 
         if ( PedidoActual._sectorCocina == true ) { varSectoresProd = varSectoresProd+ " / COCINA:"+PedidoActual._productosCocina;  } 
         if ( PedidoActual._sectorCandy == true ) { varSectoresProd = varSectoresProd+ " / CANDYBAR "+PedidoActual._productosCandy;  } 


        if (PedidoActual != null)
        {    
        var html =`
        
            <ul class="products-list product-list-in-box">
            <li class="item">
                <!-- IMAGEN PEDIDO-->
                    <div class="product-img">`
                    +PedidoActual._imagen+
                    `<!-- <img src="http://placehold.it/50x50/d2d6de/ffffff" alt="Product Image"/>-->
                    </div>
                <!-- INFO PEDIDO -->
                 <div class="product-info">
                    <a onclick="muestraModificarPedido('`+PedidoActual._nroPedido+`')" class="product-title">`
                    +"MESA:" +PedidoActual._mesaAsignada+
                    ` - `
                    +"PEDIDO:"+PedidoActual._nroPedido+
                    ` - `
                    +"NOMBRE CLIENTE:"+PedidoActual._nombreCliente+
                    ` - `
                    +"PRECIO:"+PedidoActual._precioPedido+
                    `<span class="label label-warning pull-right">`
                    +Clases.estadoPedido[PedidoActual._estado]+
                    `</span></a>
                <!--DESCIPCION PEDIDO--> 
                 <span class="product-description">`
                 +" HORA PEDIDO: " 
                 +PedidoActual._fechahoraIngreso
                 +"/ HORA FIN ESTIMADA: " 
                 +PedidoActual._fechahoraFinEstimado
                 +"<p></p> DETALLE DEL PEDIDO" 
                 +varSectoresProd
                 +
                 `</span>     
                 </div>           
            </li><!-- /.item -->
                `;
        }
        if(i==0)
        {cuerpoTablaAppend = html;}
        else {cuerpoTablaAppend += html;}    
    }

    let footerTablaAppend=
    `
        </ul>
      </div><!-- /.box-body -->
      <!-- <div class="box-footer text-center">
        <a href="javascript::;" class="uppercase">View All Products</a>
      </div>-->
      <!-- /.box-footer -->
    </div><!-- /.box -->
    `;
  let tablafinal= encabezadoTablaAppend+cuerpoTablaAppend+footerTablaAppend
  $("#listar").append(tablafinal);   
}