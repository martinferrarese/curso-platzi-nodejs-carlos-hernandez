const express = require('express');
const app = express();
// Setea a express para que se haga cargo de todas las rutas
const server = require('http').Server(app);
// Crea el socket io que va a utilizar el server para montarse
const io = require('socket.io')(server);

// Ruta que toma cuando alguien usa el server. Toma lo de la carpeta public
app.use(express.static('public'));

// Cuando alguien se conecta, se ejecuta esta acción
io.on('connection', function(socket) {
    console.log("Se conectó un nuevo cliente");
    socket.emit('mensaje', 'Bienvenide!!!');
});

setInterval(function() {
    io.emit('mensaje', 'Mensaje broadcast cada 3 segundos');
}, 3000);

server.listen(8080, function() {
    console.log("Servidor iniciado en 'http://localhost:8080'");
});