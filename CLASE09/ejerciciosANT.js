soluciones.usuariosFemeninos = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero =='Female';
    })
    .map(function(user){
        return user.nombre;
    });
}

console.log(soluciones.usuariosFemeninos);


soluciones.mailVarones = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero =='Male';
    })
    .map(function(user){
        return user.mail;
    });
}

soluciones.usuariosMayores = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.edad > edad;
    })
    .map(function(user){
        var x={};
        x.nombre= user.nombre;
        x.email = user.email;
        x.edad = user.edad;
        return x;
    });
}

console.log(soluciones.usuariosFemeninos(data,40));

soluciones.usuarioMasGrande = function(usuarios){
    return usuarios
    .reduce(function(actual,siguiente){
        if (actual.edad > siguiente.edad){
            return {
                nombre:actual.nombre,
                edad: actual.edad
            }
        }
        return {
            nombre:siguiente.nombre,
            edad : siguiente.edad
        }
    });
}

console.log(soluciones.usuariosFemeninos(data));

soluciones.promedio = function(usuarios){
    var acumEdad = usuarios
    .reduce(function(actual,siguiente){
        return actual+siguiente.edad;
    },0); //Inicializa y arranca en 0 porque es un numero lo que devuelve y no un objeto
    //En la primer iteracion, actual toma 0 como valor

    var cantidad = usuarios
    .reduce (function(actual,siguiente){
        return actual + 1;
    }, 0);
    return (acumEdad / cantidad).toFixed(2);
}



