const Model = require('./message-model');

async function addMessage(message) {
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