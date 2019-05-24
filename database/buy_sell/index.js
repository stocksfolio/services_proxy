// const Sequelize = require('mongoose');

// const db = new Sequelize('stocks', 'root', '', { // <- make sure to change password and input from a config file
//   host: '172.17.0.3', // <- update host
//   dialect: 'mysql',
// });

// db
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

// module.exports = db;


const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/stockData';

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;