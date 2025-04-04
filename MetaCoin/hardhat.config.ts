import { HardhatUserConfig } from "hardhat/config";
import "@truffle/dashboard-hardhat-plugin";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

export default config;
