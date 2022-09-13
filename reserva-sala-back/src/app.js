'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const db = require('db');
const config = require('./config');


const app =  express();
const router = express.Router();

//connecta ao banco
db.connect(config.connectionString);

//carrega os models
const Salas =  require('./models/Model-Reservas');
const Usuarios =  require('./models/Model-Usuario');
const Recursos =  require('./models/Model-Recursos');

//carrega as Rotas
const indexRoutes = require('./routes/index');
const reservasRoutes = require('./routes/Routes-Reservas');
const usuariosRoutes = require('./routes/Routes-Usuarios');
const recursosRoutes = require('./routes/Routes-Recursos');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/', indexRoutes);
app.use('/reservas', reservasRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/recursos', recursosRoutes);


module.exports = app;