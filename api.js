require("dotenv").config({ path: ".env" });
const express = require('express');
const app = express();
const server = require('http').Server(app);

const router = require('./network/routes');
const connectToDB = require('./db');
const socket = require('./socket');
const uri = process.env.DBURI;

connectToDB(uri);

//Con esto puede manejar JSON
app.use(express.json());
//Con esto puede leer los datos que se pasan por url
app.use(express.urlencoded({extended: false}));

// Inicializo el socket
socket.connect(server);
//El responsable de manejar las peticiones
router(app);

//Le tiro que voy a usar esa carpeta como repositorio
app.use(express.static('public'));

//Para que escuche en un determinado puerto
server.listen(3000, () => {
    console.log('La aplicación está escuchando en http://localhost:3000');
});