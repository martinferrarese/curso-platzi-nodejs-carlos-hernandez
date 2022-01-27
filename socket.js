const SocketIO = require('socket.io');
const socket = {};

function connectSocket(server) {
    socket.io = SocketIO(server);
}

module.exports = {
    connect: connectSocket,
    socket,
}