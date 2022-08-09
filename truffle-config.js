const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      network_id: "*",
      host: "localhost",
      // port: 7545, // for ganache gui
      port: 8545, // for ganache-cli
      gas: 6721975,
      gasPrice: 20000000000,
    },
  },
};
