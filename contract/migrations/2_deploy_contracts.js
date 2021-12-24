var RocketElevators = artifacts.require("RocketElevators");

module.exports = function(deployer) {
  deployer.deploy(RocketElevators, "RocketElevatorsMundo", "REM", "ipfs://QmPK5DrogEbRs5vuQifj1UYY44CZZ3Lw6KZRQ7ufWt4f94/", "ipfs://QmVdweafQjvFWBfYMkubpuWYMiyQ1rME8WWv2j2LLLXsvz/hidden.json");
};