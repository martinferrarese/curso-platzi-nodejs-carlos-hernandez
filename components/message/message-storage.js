const messageList = [];

function addMessage(message) {
    messageList.push(message);
}

function getMessages() {
    return messageList;
}

module.exports = {
    add: addMessage,
    getAll: getMessages
}