const storage =  require('./chat-storage');

function addChat(users) {
    return new Promise((resolve, reject) => {
        const chat = {
            users,
        }
        resolve(storage.add(chat));
    });
}

function getChat(users) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(users) {
            filter = { users };
        }
        resolve(storage.get(filter));
    });
}

function deleteChat(id) {
    return new Promise((resolve, reject) => {
        resolve(storage.delete(id));
    });
}

module.exports = {
    add: addChat,
    get: getChat,
    delete: deleteChat,
}