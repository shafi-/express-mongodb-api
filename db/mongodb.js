// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost';
let mongodbPort = ':27017';
let mongoDB = dev_db_url + mongodbPort;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
module.exports = db;
