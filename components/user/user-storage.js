const UserModel = require("./user-model");

const addUser = (user) => {
    const myUser = new UserModel(user);
    return myUser.save();
}

module.exports = {
    add: addUser,
}