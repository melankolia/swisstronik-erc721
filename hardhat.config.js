require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ['0x6b27f07f6015c0b05bf6d9c314f90bccf11ee2b724fcb9cf4497411e61d76546'],
    },
  },
};
