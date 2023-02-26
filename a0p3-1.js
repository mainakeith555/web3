const axios = require('axios');

const cryptoIds = ['ethereum', 'bitcoin', 'solana', 'cardano'];
const vsCurrencies = ['usd'];

// First, get the price data for the specified cryptocurrencies from CoinGecko
axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds.join(',')}&vs_currencies=${vsCurrencies.join(',')}`)
  .then(function (response) {
    // Loop through the cryptocurrencies and print the price in USD
    for (const id of cryptoIds) {
      const prices = response.data[id];
      const priceInUSD = prices.usd;

      console.log(`The current price of ${id.toUpperCase()} is ${priceInUSD} USD`);
    }
  })
  .catch(function (error) {
    console.log(error);
  });

