const storage = require('./message-storage');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.log(`[message-service] - No contiene user o message`);
            reject(`Los datos son incorrectos`);
        } else {
            const fullMessage = {
                user,
                message,
                date: new Date(),
            };
            storage.add(fullMessage);
            resolve(fullMessage);
        }
    });
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(storage.getAll());
    })
}

module.exports = {
    addMessage,
    getMessages
}