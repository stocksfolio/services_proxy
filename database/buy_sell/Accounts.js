// const Sequelize = require('mongoose');
// const db = require('./index.js');

// const Account = db.define('account', {
//   account_number: {
//     type: Sequelize.STRING(8),
//     primaryKey: true,
//     unique: true,
//     allowNull: false,
//   },
//   buying_power: Sequelize.DECIMAL(14, 4),
//   option_level: Sequelize.INTEGER,
//   watchlist: Sequelize.STRING,
// });

// module.exports = Account;


const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const accountSchema = new mongoose.Schema({
  account_number: {
    type: String,
    unique: true,
  },
  buying_power: String,
  option_level: Number,
  watchlist: String,
}, 
  {
    timestamps: true
  }
);

const Account = mongoose.model('buySellAccounts', accountSchema);

module.exports = Account;