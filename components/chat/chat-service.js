const storage =  require('./chat-storage');

function addChat(users) {
    return new Promise((resolve, reject) => {
        const chat = {
            users,
        }
        resolve(storage.add(chat));
    });
}

module.exports = {
    add: addChat,
}