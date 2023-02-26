
const axios = require('axios');

const API_KEY = 'SFBJ6ER5ZZCR3CBTWD5JVIA1N8TP5CS7Q3'; // replace with your own Etherscan API key

axios.get('https://api.etherscan.io/api', {
  params: {
    module: 'account',
    action: 'txlist',
    address: '0x6DbaA06c2A1C87E7f9c6C90F1dC8dF59D6C933c6', // Marlon Humphrey's wallet address (MarlonHumphrey.eth)
    to: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // Bored Ape Yacht Club contract address
    apikey: API_KEY,
  }
})
.then((response) => {
  const txs = response.data.result;
  const apeTx = txs.find(tx => tx.input.includes('0xe200657363ada26fbcea0b4060fb83fe2e1c4ace380f57797b4bc7551d78eac3')); // find the transaction that minted Bored Ape #1880
  const ethAmount = parseFloat(apeTx.value) / Math.pow(10, 18); // convert the transaction value to ETH
  console.log(`Marlon Humphrey paid ${ethAmount} ETH for Bored Ape #1880.`);
})
.catch((error) => {
  console.log(error);
});
