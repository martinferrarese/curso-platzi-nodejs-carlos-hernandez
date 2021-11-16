const db = require('mongoose');

const uri = 'mongodb://ferra31:5173arrefmfzzz@comiditacluster0-shard-00-00.qcw0g.mongodb.net:27017,comiditacluster0-shard-00-01.qcw0g.mongodb.net:27017,comiditacluster0-shard-00-02.qcw0g.mongodb.net:27017/ComiditaCluster0?ssl=true&replicaSet=atlas-108pjv-shard-0&authSource=admin&retryWrites=true&w=majority';
db.Promise = global.Promise;

const connectToDB = async () => {
        db.connect(uri, {
        useNewUrlParser: true
    });
    console.log('Base de datos conectada correctamente');
};

module.exports = connectToDB;
