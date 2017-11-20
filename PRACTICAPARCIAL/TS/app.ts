function agregarMascota() 
{
    let id: number = Number ($('#id').val());
    let nombre: string = String ($('#nombre').val());
    let edad: number = Number ($('#edad').val());
    let patas: number = Number ($('#patas').val());
    let tipo: Clases.tipoMascota = Number($('#tipo').val()); 
    
    // let nuevaMascota = new Clases.Mascota(nombre,edad,patas,id,tipo);
    let nuevaMascota = new Clases.Mascota(  String ($('#nombre').val()),
                                            Number ($('#edad').val()),
                                            Number ($('#patas').val()),
                                            Number ($('#id').val()),
                                            tipo
                                            );
    
    // let MascotasString:string|null = localStorage.getItem("Mascotas");
    // //la primera vez no hay nada, las otras veces string
    //     let MascotasJson : JSON[] = MAscotaString == null ? [] : JSON.parse(MascotaNueva.Json()); // ESTO ES UN IF
    //     console.log(nuevaMascota.toJson()); //ver como anda
    //     MascotassJson.push(Json.parse(nuevaMascota.toJSON()));
        
    //     localStorage.setItem("Mascotas",JSON.stringify(MascotasJSON));
    
    //     alert ("Mascota guardada");
    // console.log(tipo);
    console.log(nuevaMascota);
    // alert (nombre);
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