function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        console.log("COSO");
        if(!user || !message) {
            console.log(`[message-service] - No contiene user o message`);
            reject(`Los datos son incorrectos`);
        }

        const fullMessage = {
            user,
            message,
            date: new Date(),
        };
        resolve(fullMessage);
    });
}

module.exports = {
    addMessage
}