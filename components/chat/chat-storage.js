const ChatModel = require('./chat-model');

async function addChat(chat) {
    const myChat = new ChatModel(chat);
    myChat.save();
}

module.exports = {
    add: addChat,
}