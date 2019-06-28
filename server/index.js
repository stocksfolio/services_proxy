/* eslint-disable no-console */
// const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const Stocks = require('../database/Chart/StockChart.js');
const Price = require('../database/PricePaidAverage/index');
const Earnings = require('../database/Earnings/index');
const Ratings = require('../database/Analyst/index');
// const controller = require('../database/controller');

const app = express();
const port = process.env.PORT || 2468;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../public/dist')));

app.listen(port, () => {
  console.log(`Server is now listening on port: ${port}`)
})

app.get('/api/stock-chart/:stockId', (req, res) => {
  console.log('Got a request searching for', req.params.stockId);
  Stocks.find({stockId: req.params.stockId}, (err, data) => {
    if (err) {
      console.log(err.message);
    } else if (!data.length) {
      Stocks.find({id: req.params.stockId}, (err, data) => {
        if (err) {
          console.log(err.message);
        } else if (!data.length) {
          console.log('Data not found');
          res.sendStatus(404);
        } else {
          console.log(`Sending ${req.params.stockId} to client`);
          res.send(data);
        }
      })
    } else {
      console.log(`Sending ${req.params.stockId} to client`);
      res.send(data);
    }
  }) 
})

app.get('/api/stocks/:ticker', (req, res) => {
  axios.get(`http://ec2-54-183-100-147.us-west-1.compute.amazonaws.com/api/stocks/${req.params.ticker}`)
    .then((stockData) => {
      res.status(200);
      res.send(stockData.data);
    });
})

app.get('/api/accounts/:account_number', (req, res) => {
  axios.get(`http://ec2-54-183-100-147.us-west-1.compute.amazonaws.com/api/accounts/${req.params.account_number}`)
    .then((stockData) => {
      res.status(200);
      res.send(stockData.data);
    });
});

app.get('/api/price/:ticker', (req, res) => {
  Price.getPaidPrice(req.params.ticker, (data) => {
    res.status(200).json(data)
  })
});

app.get('/api/ratings/:ticker', (req, res) => {
  console.log("here1",req.params)
  Ratings.getRating(req.params.ticker, (data) => {
    res.status(200).json(data)
  })
});

app.get('/api/earnings/:ticker', (req, res) => {
  Earnings.getEarning(req.params.ticker, (data) => {
    res.status(200).json(data)
  })
});

app.get('/:stockId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/dist/index.html'));
})
