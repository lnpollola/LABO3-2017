$(function()){
    localStorage.clear();
}

function agregarMascota() 
{
    let tipo: Clases.tipoMascota = Number($('#tipo').val()); 
    
    // let nuevaMascota = new Clases.Mascota(nombre,edad,patas,id,tipo);
    let nuevaMascota = new Clases.Mascota(  String ($('#nombre').val()),
                                            Number ($('#edad').val()),
                                            Number ($('#patas').val()),
                                            Number ($('#id').val()),
                                            tipo
                                            );
    
    let MascotasString:string|null = localStorage.getItem("Mascotas");
    // //la primera vez no hay nada, las otras veces string
        // let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(nuevaMascota.toJson()); // ESTO ES UN IF
        let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(MascotasString); // ESTO ES UN IF        
        MascotasJson.push( JSON.parse(nuevaMascota.toJson()));
        localStorage.setItem("Mascotas",JSON.stringify(MascotasJson));

         let devuelve = localStorage.getItem("Mascotas");
    
    console.log(nuevaMascota);
    // alert ("Mascota guardada");
}

    //         mostrarMascotas();
    //             let MascotasJson : Clases.Mascota[i].id
    //             armo la tabla como el primer parcial con el fastix
    //             #divtabla.html(tabla);
    //         limpiarCampos();
    //             $txtnombred.val("")
    //             a selectipo le da 0
    //             y que ponga foco en txtid
    // armo el json con un array de mascotas
    // }