const mongoose = require('mongoose');
const client = require('../main.js');

async function connect() {
    mongoose.connect(client.config.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

    mongoose.connection.once("open", () => {
        console.log('[DATABASE]: Conncted to Database')
    });
    return;
}

module.exports = connect;