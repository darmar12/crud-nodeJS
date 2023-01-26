require('dotenv').config({path: process.env.DOTENV || '.env'});

module.exports = {
    port: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI
}
