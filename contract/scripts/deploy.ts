import { artifacts, ethers } from "hardhat";
import { Ballot3, Greeter } from "../typechain-types";
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

  const Ballot3 = await ethers.getContractFactory("Ballot3");

  const names = ["Kyogre", "Groudon", "Rayquaza"];
  const proposalNames = [];
  for (let index in names) {
    //convert string to byte32
    let p = ethers.utils.formatBytes32String(names[index]);

    proposalNames.push(p);
  }

  const ballot3 = await Ballot3.deploy(proposalNames);
  console.log(`Ballot3 deploy at:`, ballot3.address);
  await ballot3.deployed();
  saveContract(ballot3 as Ballot3);
}

const saveContract = (ballot3: Ballot3) => {
  const path = __dirname + "/../savecontract";
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  //address
  fs.writeFileSync(
    `${path}/address.json`,
    JSON.stringify(
      {
        address: ballot3.address,
      },
      undefined,
      2
    )
  );
  //abi
  fs.writeFileSync(
    `${path}/abi.json`,
    JSON.stringify(artifacts.readArtifactSync("Ballot3"), undefined, 2)
  );
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
