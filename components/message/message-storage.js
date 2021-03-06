const { populate } = require('./message-model');
const Model = require('./message-model');

async function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filter) {
    return new Promise((resolve, reject) => {
        Model.find(filter)
            .populate('chat')
            .populate('user')
            .exec((error, populated) => {
                if(error) {
                    reject(error);
                }
                resolve(populated);
            });
    });
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