const ChatModel = require('./chat-model');

async function addChat(chat) {
    const myChat = new ChatModel(chat);
    myChat.save();
}

async function getChat(filter) {
    return new Promise((resolve, reject) => {
        ChatModel.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if(error) {
                    reject(error);
                }
                resolve(populated);
            });
    });
}

async function deleteChat(id) {
    return new Promise((resolve, reject) => {
        const chatToDelete = ChatModel.findById(id);
        resolve(ChatModel.deleteOne(chatToDelete));
    });
}

module.exports = {
    add: addChat,
    get: getChat,
    delete: deleteChat,
}