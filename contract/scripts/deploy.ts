import { artifacts, ethers } from "hardhat";
import { Greeter } from "../typechain-types";
import fs from "fs";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = ethers.utils.parseEther("1");

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);

  const Greet = await ethers.getContractFactory("Greeter");
  const greeter = await Greet.deploy("Hello, Hardhat!");
  console.log(`greet deploy at:`, greeter.address);
  await greeter.deployed();
  saveContract(greeter as Greeter);
}

const saveContract = (greeter: Greeter) => {
  const path = __dirname + "/../savecontract";
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  //address
  fs.writeFileSync(
    `${path}/address.json`,
    JSON.stringify(
      {
        address: greeter.address,
      },
      undefined,
      2
    )
  );
  //abi
  fs.writeFileSync(
    `${path}/abi.json`,
    JSON.stringify(artifacts.readArtifactSync("Greeter"), undefined, 2)
  );
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
