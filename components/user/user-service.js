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

const getUser = (nameFilter) => {
    let filter = {};
    if(nameFilter) {
        filter = {
            name: nameFilter
        };
    }
    return storage.get(filter);
}

module.exports = {
    add: addUser,
    get: getUser
}