var port = 3000;
var express=require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app=express();


app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({ extended: false }));


app.post('/agregar', function (req, res) {

var collection = req.body.collection;
var nuevoObjeto = JSON.parse(req.body.objeto);
nuevoObjeto.id = getID
    
    
    require('fs').readFile(__dirname + getPathFromCollection(collection), 'utf8', function (err, data) {
        if (err) {
           throw err; // error handling
        }else{
            array = JSON.parse(data);
            nuevoObjeto.id = getID(array);
            array.push(nuevoObjeto);
           require('fs').writeFileSync(__dirname + getPathFromCollection(collection), JSON.stringify(array));
           setTimeout(function(){res.send('Alta exitosa ');    },5000);
        }
           
    });  
    
});

function getID(array){
    var maxIndex = array.reduce(function(prev,curr,index){
        if(prev.id>curr.id)
        return prev.id;
        else
        return curr.id;
    });
    return maxIndex+1;
}
function getPathFromCollection(collection){
    if(collection==="Personas"){
        return '/data/people.json';
    }
}
function remove(a){
    a.active = false;
}

app.post('/eliminar', function (req, res) {

    var indice = req.body.id;
    var array;
    require('fs').readFile(__dirname + getPathFromCollection(req.body.collection), 'utf8', function (err, data) {
        if (err) {
            // error handling
        }
           array = JSON.parse(data);
           var objectToDelete = array.filter(function(a){
             return a.id == indice;
           });
          remove(objectToDelete[0]);
          require('fs').writeFileSync(__dirname + getPathFromCollection(req.body.collection), JSON.stringify(array));
          res.send('Baja exitosa'); 
    });  

});

function update(a,b){
    a.first_name = b.first_name;
    a.last_name = b.last_name;

    /*for (var property in a) {
        if (a.hasOwnProperty(property)) {
            
        }
    }*/
  
}
app.post('/modificar', function (req, res) {
    var object = JSON.parse(req.body.objetoModificado);
    var array;
    require('fs').readFile(__dirname + getPathFromCollection(req.body.collection), 'utf8', function (err, data) {
        if (err) {
            // error handling
        }
           array = JSON.parse(data);
           var objectToUpdate = array.filter(function(a){
             return a.id == object.id;
           });

          update(objectToUpdate[0],object);
          require('fs').writeFileSync(__dirname + getPathFromCollection(req.body.collection), JSON.stringify(array));
          res.send('Modificacion exitosa'); 
    });  
    

       
});


app.get('/traerpersona', function (req, res) {

    var indice = req.query.indice;    
    
    res.send(JSON.stringify(Personas[indice]));    
});

app.post('/traer', function (req, res) {

    require('fs').readFile(__dirname + getPathFromCollection(req.body.collection), 'utf8', function (err, data) {
        if (err) {
            // error handling
        }
           var array = JSON.parse(data);
           array = array.filter(function(a){
             return a.active == true;
           });
           res.send(array);
    });  
});


;
var server=app.listen(port ,function(){
    console.log('Servidor web iniciado. Escuchando en el puerto ' + port);
});