const axios = require('axios');

//This is my API key
const API_KEY = 'SFBJ6ER5ZZCR3CBTWD5JVIA1N8TP5CS7Q3'; 

axios.get('https://api.etherscan.io/api', {
  params: {
    module: 'account',
    action: 'txlist',
    address: '0x6cB088F972E52c4858Df07B6a032CcBD6fDc2A1D', // This is Trey Songz's wallet address (TreySongz.eth)
    to: '0x5e0b733905CC54989Ec7c28A07c516e51c5Afedf', // This is the destination wallet address
    apikey: API_KEY,
  }
})
.then((response) => {
  const txs = response.data.result;
  const ethAmount = txs.reduce((total, tx) => total + parseFloat(tx.value), 0) / Math.pow(10, 18); // sum up the value of all transactions and convert to ETH
  console.log(`Trey Songz transferred ${ethAmount} ETH to 0x5e0b733905CC54989Ec7c28A07c516e51c5Afedf.`);
})
.catch((error) => {
  console.log(error);
});
