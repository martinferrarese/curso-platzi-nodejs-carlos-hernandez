const storage = require('./message-storage');
const socket = require('../../socket').socket;

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if(!chat || !user || !message) {
            console.log(`[message-service] - No contiene chat, user o message`);
            reject(`Los datos son incorrectos`);
        } else {
            let fullMessage = {
                chat: chat,
                user: user,
                message: message,
                date: new Date(),
                file: '',
            };
            if(file) {
                fullMessage.file = `http://localhost:3000/app/files/${file.filename}`;
            }
            storage.add(fullMessage);
            socket.io.emit('messages', fullMessage);
            resolve(fullMessage);
        }
    });
}

function getMessages(chatFilter, userFilter) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(chatFilter) {
            filter.chat = chatFilter;
        }
        if(userFilter) {
            filter.user = userFilter;
        }
        resolve(storage.get(filter));
    });
}

function updateMessage(id, change) {
    return new Promise((resolve, reject) => {
        if(!id || !change){
            console.log(`[message-service] - No contiene id o texto`);
            return reject(`Los datos son incorrectos`);
        } else {
            const updatedMessage = storage.update(id, change);
            return resolve(updatedMessage);
        }
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if(!id){
            console.log(`[message-service] - No contiene id`);
            return reject(`No se puede eliminar sin id`);
        } else {
            storage.delete(id);
            return resolve(`${id} eliminado con éxito`);
        }
    });
};

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}