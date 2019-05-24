// const Sequelize = require('mongoose');
// const db = require('./index.js');

// const Stock = db.define('stock', {
//   ask_price: {
//     type: Sequelize.DECIMAL(12, 6),
//     allowNull: false,
//   },
//   ask_size: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   bid_price: {
//     type: Sequelize.DECIMAL(12, 6),
//     allowNull: false,
//   },
//   bid_size: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   last_extended_hours_trade_price: {
//     type: Sequelize.DECIMAL(12, 6),
//     allowNull: false,
//   },
//   last_trade_price: {
//     type: Sequelize.DECIMAL(12, 6),
//     allowNull: false,
//   },
//   symbol: {
//     type: Sequelize.STRING(5),
//     primaryKey: true,
//     unique: true,
//   },
//   quantity: {
//     type: Sequelize.DECIMAL(14, 4),
//     allowNull: false,
//   },
// });

// module.exports = Stock;

const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js.js');

mongoose.Promise = global.Promise;

const stockSchema = new mongoose.Schema({
  ask_price: {
    type: String,
  },
  ask_size: {
    type: Number,
  },
  bid_price: {
    type: String,
  },
  bid_size: {
    type: Number,
  },
  last_extended_hours_trade_price: {
    type: String,
  },
  last_trade_price: {
    type: String,
  },
  symbol: {
    type: String,
    unique: true,
  },
  quantity: {
    type: String,
  },
}, 
  {
    timestamps: true
  }
);

const Stock = mongoose.model('buySellStocks', stockSchema);

module.exports = Stock;