var ConvertLib = artifacts.require("./ConvertLib.sol");
var SPZToken = artifacts.require("./SPZToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, SPZToken);
  deployer.deploy(SPZToken);
};
