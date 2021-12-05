const UserModel = require("./user-model");

const addUser = (user) => {
    const myUser = new UserModel(user);
    return myUser.save();
}

const getUser = (nameFilter) => {
    if(!nameFilter) {
        return userResult = UserModel.find();
    } else {
        return userResult = UserModel.find(nameFilter);
    }
}

module.exports = {
    add: addUser,
    get: getUser,
}