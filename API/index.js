const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');


// crear el servidor
const app = express();

// Habilitar Cors
const whitelist =['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        //console.log(origin);
        const existe = whitelist.some(dominio => dominio === origin);
        if (existe) {
            callback(null, true)
        }else {
            callback(new Error('No permitido por CORS'))
        }
    }
}

// Habilitar o deshabilitar Cors
//app.use(cors(corsOptions)); // => visualizacion por 3ros NO permitida
app.use(cors()); // => visualizacion por 3ros permitida


//Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

//Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Middlewares Habilitar routing
app.use('/', routes())

// puerto y arrancar el servidor
app.listen(4000, () =>{
    console.log('Servidor funcionando')
})