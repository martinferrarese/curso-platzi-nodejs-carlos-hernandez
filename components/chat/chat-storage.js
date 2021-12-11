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

module.exports = {
    add: addChat,
    get: getChat,
}