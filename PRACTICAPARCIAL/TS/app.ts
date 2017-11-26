///<reference path="../node_modules/@types/jquery/index.d.ts" />
// namespace Clases{

$(function(){

    //FORM MODIFICADO POR CHECKBOX
    $("#checkFORM :checkbox").change(function() {
        var checkedValues = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();
        //     var uncheckedValues = $('input:checkbox:not(:checked).checkItems').map(function() { return this.value; }).get();
        tablaDinamica(checkedValues);
    });

    var i = 0;
    let select = $("#tipoMasc");
    for (var i = 0; i < 6; i++) 
    {
        select.append("<option value="+i+">"+Clases.tipoMascota[i]+"</option>");
    }
    mostrarMascotas();
});

function tablaDinamica(checkedValues) 
{
    let row_name = checkedValues;
    let cabeceraArmada="";
    row_name.forEach(element => 
    {
        if (element != "") 
        {
            let cabecera = $("#tCabecera");
            let cabeceraAux = cabecera["0"].innerHTML;
            cabecera["0"].innerHTML ="";

            let cabeceraArmada = cabeceraAux+"<tr class='info'><th>"+element+"</th>";
            
            cabecera.append(cabeceraArmada);
            //     let varAppend = "<tr><td>" + MascotasJson[i].split(',')[1] + "</td>"+
            //                     "<td>" + MascotasJson[i].split(',')[0] + "</td>"+
            //                     "<td>" + MascotasJson[i].split(',')[3] + "</td>"+
            //                     "<td>" + Clases.tipoMascota[MascotasJson[i].split(',')[4]] + "</td>"+
            //                     "<td>" + MascotasJson[i].split(',')[2] + "</td></tr>"       
            //     tabla.append(varAppend); 
            // var row = $('<tr><td>' + row_name + '</td></tr>');
            // $('input[type="checkbox"]').each(function() 
            // {
            //     if ($(this).is(':checked')) 
            //     {
            //        row.append('<td><input class="txtfld" type="text" placeholder="edit"></td>')
            //     } 
            //     else 
            //     {
            //          row.append('<td></td>')
            //     }
            // })
            // row.append('<td></td>')
            // $("table.printer-row tbody tr:last").before(row)


        } 
    });
}

function limpiarLista():void
{
       localStorage.clear();
       mostrarMascotas();
}
function agregarMascota():void
{
    let tipo: Clases.tipoMascota  = Number($('#tipoMasc').val()); 
    let nuevaMascota = new Clases.Mascota(  String ($('#nombre').val()),
                                            Number ($('#edad').val()),
                                            Number ($('#patas').val()),
                                            Number ($('#id').val()),
                                            tipo
                                            );
    
    let MascotasString:string|null = localStorage.getItem("Mascotas");
    // //la primera vez no hay nada, las otras veces string
        let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(MascotasString); // ESTO ES UN IF        
        MascotasJson.push( JSON.parse(nuevaMascota.toJson()));
        localStorage.setItem("Mascotas",JSON.stringify(MascotasJson));
    console.log(MascotasJson);
    alert ("Mascota guardada");
    mostrarMascotas(); 
} 
 
function mostrarMascotas():void
{
    let MascotasString:string|null = localStorage.getItem("Mascotas");
    let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(MascotasString); // ESTO ES UN IF        
    // //la primera vez no hay nada, las otras veces string
  
    let tabla = $("#tCuerpo");
    tabla["0"].innerHTML ="";
    for (var i = 0; i < MascotasJson.length ; i++) 
    {
        var miTipo = Clases.tipoMascota[MascotasJson[i].split(',')[4]];
        var twoAsString = Clases.tipoMascota[miTipo]; // twoAsString == "two"

        let varAppend = "<tr><td>" + MascotasJson[i].split(',')[1] + "</td>"+
                        "<td>" + MascotasJson[i].split(',')[0] + "</td>"+
                        "<td>" + MascotasJson[i].split(',')[3] + "</td>"+
                        "<td>" + Clases.tipoMascota[MascotasJson[i].split(',')[4]] + "</td>"+
                        "<td>" + MascotasJson[i].split(',')[2] + "</td></tr>"       
        tabla.append(varAppend); 
   }

    // "${Clases.tipoMascota[MascotaJSON[i].nombre]}<td td> ${}"
}

// function boxChange(type)
// {
//     var checkedValues = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();
//     var uncheckedValues = $('input:checkbox:not(:checked).checkItems').map(function() { return this.value; }).get();

//   if(type == "not"){
//         return uncheckedValues;
//     } else {
//         return checkedValues;
//     } 
// }

// $(":checkbox").change(function() {
// $("#checkItems").change(function() {
//     // boxChange();
//     alert("estoy aaca");
//     boxChange("not");
// });

// // Only Needed For Buttons

// $("body").on("click", "button#chk1", function() {
//     alert (boxChange());
// });

// $("body").on("click", "button#chk2", function() {
//     alert (boxChange("not"));
// });