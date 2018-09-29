var ConvertLib = artifacts.require("./ConvertLib.sol");
var GcgToken = artifacts.require("./GcgToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, GcgToken);
  deployer.deploy(GcgToken);
};
