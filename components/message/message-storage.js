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

async function getMessages(filterMessage) {
    let filter = {};
    if(filterMessage == null) {
        return await Model.find();
    } else {
        filter = { user: filterMessage };
        return await Model.find(filter);
    }
}

async function updateMessage(id, newMessage) {
    const messageToModify = await Model.findById(id);
    messageToModify.message = newMessage;
    const modifiedMessage = messageToModify.save();
    return modifiedMessage;
}

async function deleteMessage(id) {
    filter = { _id: id };
    const deletedMessage = await Model.deleteOne(filter);
    return deletedMessage;
}

module.exports = {
    add: addMessage,
    get: getMessages,
    update: updateMessage,
    delete: deleteMessage
}