const mongoose = require('mongoose');

const mongoUri = 'mongodb://gary:abcd1234@ds031922.mlab.com:31922/front-end-capstone-project';

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;