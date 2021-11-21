const db = require('mongoose');

db.Promise = global.Promise;

const connectToDB = async (uri) => {
        db.connect(uri, {
        useNewUrlParser: true
    });
    console.log('Base de datos conectada correctamente');
};

module.exports = connectToDB;
