module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 7000000,        // Use a higher gas limit
      gasPrice: 20000000000  // 20 gwei
     },

    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraProjectId}`),
        network_id: 5,       // Goerli's id
        chain_id: 5
    },

    dashboard: {
      port: 25012,
      host: "localhost"
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.28",      // Fetch exact version from solc-bin
    }
  }
};
