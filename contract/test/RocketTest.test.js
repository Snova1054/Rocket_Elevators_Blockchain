const RocketElevators = artifacts.require("RocketElevators");
contract("RocketElevators", (accounts) => {
  let deployedContract;
  describe("deployement", async() => {
    before(async () => {
        deployedContract = await RocketElevators.deployed();
    });
    it("has a name", async () => {
      const name = await deployedContract.name();
      assert.equal(name, "RocketElevatorsMundo")
    })
    it("has a symbol", async () => {
      const symbol = await deployedContract.symbol();
      assert.equal(symbol, "REM")
    })
    it("has correct max supply", async () => {
      const maxSupplyIs = await deployedContract.maxSupply();
      assert.equal(maxSupplyIs, 1000)
    })
    it("is not revealed", async () => {
      const isRevealed = await deployedContract.revealed();
      assert.equal(isRevealed, false)
    })
    it("has a correct white list", async () => {
      const whitelistmember1 = await deployedContract.whiteListedAddresses(1);
      const whitelistmember2 = await deployedContract.whiteListedAddresses(2);
      assert.equal(whitelistmember1, "0x49C99dB83eA1cDa354b718A4Be90f4B1C3Dc94A4")
      assert.equal(whitelistmember2, "0xd1679bB3543e8aD195FF9f3Ac3436039bA389237")
    })
  });
});