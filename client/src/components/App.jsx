import React from 'react';
import axios from 'axios';
import BuySell from './buy_sell/BuySell';
import StockChart from './stock_chart/StockChart';
import Search from './search/Search';
import Earnings from './earnings/earnings';
import Ratings from './ratings/AnalystChart';
import Price from './average_price_paid/averagePrice';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: null,
      account: null
    }
  }

  componentDidMount() {
    this.getStockData();
    this.getAccountData();
  }

  getStockData() {
    let ticker = window.location.pathname.split('/')[1];
    ticker = ticker ? ticker : 'TSLA';
    axios.get(`/api/stocks/${ticker}`)
      .then(res => res.data)
      .then((result) => {
        this.setState({
          stock: result,
        });
      });
  }

  getAccountData() {
    axios.get('/api/accounts/2QW30682')
      .then(res => res.data)
      .then((result) => {
        this.setState({
          account: result,
        });
      });
  }

  render() {
    const { stock, account } = this.state;
    return (
      <React.Fragment>
        <div id="header">
          <div id="search">
            <Search />
          </div>
        </div>
      {(stock && account) ? 
        <div id="main-container">
          <div id="main-column">
            <div id="stock-chart">
              <StockChart />
            </div>
            <div id="news"></div>
            <div id="averagePrice">
              <Price />
            </div>
            <div id="ratings">
              <Ratings />
            </div>
            <div id="earnings">
              <Earnings />
            </div>
          </div>

          <div id="minor-column">
            <div id="buy-sell">
              <BuySell />
            </div>
          </div>
        </div> : <div className="error_message">
          <h1 className="error_big">This Stock Data Does Not Exist!</h1>
          <h3 className="error_small">The data for this company does not exist as part of the 100 companies in the database</h3>
        </div>}
      </React.Fragment>
    )
  }
}

export default Index;