require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "quarter gift medal brother eagle soon action morning pull under mom violin";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    etherlinkTestnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://node.ghostnet.etherlink.com`),
      network_id: 128123, // Chain ID for Etherlink Testnet
      gas: 5500000, // Gas limit used for transactions
      //gasPrice: 21000000000,
      timeoutBlocks: 200, // Number of blocks before a deployment times out
      skipDryRun: true // Skip dry run before migrations? Up to you
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
