const EtherClusterToken = artifacts.require("EtherClusterToken");

module.exports = function (deployer) {
  deployer.deploy(EtherClusterToken);
};
