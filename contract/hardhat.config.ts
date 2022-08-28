import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

task("heelo", async () => {
  console.log("hello world", process.env.PRIVATE_KEY);
});

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
    rinkeby: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;
