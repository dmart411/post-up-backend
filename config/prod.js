require('dotenv').config()

module.exports = {
    mongoUser: process.env.MONGO_USER,
    mongoPassword: process.env.MONGO_PASSWORD,
    mongoDatabase: process.env.MONGO_DATABASE,
};