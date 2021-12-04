const storage = require("./user-storage");

const addUser = (name) => {
    if(!name) {
        return Promise.reject('No existe el dato name');
    }
    const user = {
        name,
    };
    return storage.add(user);
}

module.exports = {
    add: addUser,
}