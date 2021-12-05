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

function deleteUser(userId) {
    return new Promise((resolve, reject) => {
        if(!userId) {
            reject('No se puede eliminar un usuario sin Id');
        }
        const userFilter = { _id: userId };
        resolve(storage.delete(userFilter));
    });
}

module.exports = {
    add: addUser,
    get: getUser,
    delete: deleteUser
}