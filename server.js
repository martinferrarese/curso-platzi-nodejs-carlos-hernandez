require("dotenv").config({ path: ".env" });
const express = require('express');
const router = require('./network/routes');
const connectToDB = require('./db');
const uri = process.env.DBURL;

connectToDB(uri);

var app = express();
//Con esto puede manejar JSON
app.use(express.json());
//Con esto puede leer los datos que se pasan por url
app.use(express.urlencoded({extended: false}));

//El responsable de manejar las peticiones
router(app);

//Le tiro que voy a usar esa carpeta como repositorio
app.use('/app', express.static('public'));

//Para que escuche en un determinado puerto
app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');