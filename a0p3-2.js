const axios = require('axios');

const symbol = 'BTC'; // symbol for bitcoin
const exchange = 'Coinbase'; // exchange to get data from

// Unix timestamps for the specified dates and times in EST
const timestamp1 = '1646097600'; // March 1, 2022 at 12am EST
const timestamp2 = '1585545600'; // March 30, 2020 at 12am EST
const timestamp3 = '1493611200'; // May 1, 2017 at 12am EST
const timestamp4 = '484977600'; //May 15, 1985 at 12am EST
// First, get the historical price data for bitcoin from CryptoCompare at the specified dates and times
axios.all([
  axios.get(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=1&toTs=${timestamp1}&e=${exchange}`),
  axios.get(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=1&toTs=${timestamp2}&e=${exchange}`),
  axios.get(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=1&toTs=${timestamp3}&e=${exchange}`),
  axios.get(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=1&toTs=${timestamp4}&e=${exchange}`)
])
  .then(axios.spread(function (response1, response2, response3, response4) {
    // Get the prices of bitcoin at the specified dates and times
    const price1 = response1.data.Data.Data[0].close;
    const price2 = response2.data.Data.Data[0].close;
    const price3 = response3.data.Data.Data[0].close;
    const price4 = response4.data.Data.Data[0].close;

    console.log(`The price of Bitcoin on March 1, 2022 at 12am EST was ${price1} USD`);
    console.log(`The price of Bitcoin on March 30, 2020 at 12am EST was ${price2} USD`);
    console.log(`The price of Bitcoin on May 1, 2017 at 12am EST was ${price3} USD`);
    console.log(`The price of Bitcoin on May 15, 2017 at 12am EST was ${price4} USD`);

  }))
  .catch(function (error) {
    console.log(error);
  });
