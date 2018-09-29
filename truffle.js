require('babel-register');
require('babel-polyfill');

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "mnemonic"

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 2000000000
    }
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 4700000,
      gasPrice: 10000000000, // Specified in Wei
      network_id: "*", // Match any network id
      from: "0x1Eb2a2cdD9383d5804A2b1ABC9C353168BF93738"
    },

    mainnet: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/<API_KEY>')
     },
      network_id: "1",
      gas: 4500000,
      gasPrice: 10000000000,
    },
  }
};
