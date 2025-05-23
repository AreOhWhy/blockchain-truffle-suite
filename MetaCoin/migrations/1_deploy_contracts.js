const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const MyContract = artifacts.require("MyContract");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib, { gas: 4000000 });

  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  
  deployer.deploy(MyContract);
};
