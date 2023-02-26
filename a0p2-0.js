const axios = require('axios');

const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
const apiKey = 'SFBJ6ER5ZZCR3CBTWD5JVIA1N8TP5CS7Q3';

// First, get the Ethereum balance
axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`)
  .then(function (response) {
    // Get the balance in Ether
    const balanceInWei = response.data.result;
    const balanceInEther = balanceInWei / 10**18;

    // Then, get the current ETH-USD exchange rate from CoinGecko
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
      .then(function (response) {
        // Get the exchange rate and calculate the balance in US dollars
        const exchangeRate = response.data.ethereum.usd;
        const balanceInUSD = balanceInEther * exchangeRate;

        console.log(`The balance of address ${address} is ${balanceInUSD.toFixed(2)} USD`);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
  .catch(function (error) {
    console.log(error);
  });
