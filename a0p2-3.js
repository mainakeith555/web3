const axios = require('axios');

axios.get('https://api.coingecko.com/api/v3/simple/price', {
  params: {
    ids: 'ethereum',
    vs_currencies: 'usd,btc',
  }
})
.then((response) => {
  const ethPriceUSD = response.data.ethereum.usd;
  const ethPriceBTC = response.data.ethereum.btc;
  console.log(`The current price of ETH is $${ethPriceUSD} USD and ${ethPriceBTC} BTC.`);
})
.catch((error) => {
  console.log(error);
});