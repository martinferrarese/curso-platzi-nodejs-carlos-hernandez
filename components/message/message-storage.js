const messageList = [];
const db = require('mongoose');
const Model = require('./message-model');

const uri = 'mongodb://ferra31:5173arrefmfzzz@comiditacluster0-shard-00-00.qcw0g.mongodb.net:27017,comiditacluster0-shard-00-01.qcw0g.mongodb.net:27017,comiditacluster0-shard-00-02.qcw0g.mongodb.net:27017/ComiditaCluster0?ssl=true&replicaSet=atlas-108pjv-shard-0&authSource=admin&retryWrites=true&w=majority';

db.Promise = global.Promise;
db.connect(uri, {
    useNewUrlParser: true
});
console.log('Base de datos conectada correctamente');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    return await Model.find();
}

async function updateMessage(id, newMessage) {
    const messageToModify = await Model.findById(id);
    messageToModify.message = newMessage;
    const modifiedMessage = messageToModify.save();
    return modifiedMessage;
}

module.exports = {
    add: addMessage,
    getAll: getMessages,
    update: updateMessage
}