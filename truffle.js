require('babel-register');
require('babel-polyfill');

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "spike subway tide humble power nephew keen area degree fly cable deny";

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
      port: 7545,
      gas: 4700000,
      gasPrice: 10000000000, // Specified in Wei
      network_id: "*", // Match any network id
      from: "0x121fDe0352d1a1fa33AA5d7210a2715e0bBc0379"
    },

    mainnet: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/23b3759dd5d64f159255a7afd727870f')
     },
      network_id: "1",
      gas: 4700000,
      gasPrice: 1000000000,
    },
  }
};
