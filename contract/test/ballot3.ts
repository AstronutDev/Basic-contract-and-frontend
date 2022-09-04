import { ethers } from "hardhat";
import { expect } from "chai";
import { Ballot3 } from "../typechain-types/Ballot3";

describe("Ballot3", () => {
  function getProposalNames() {
    const names = ["ant", "bat", "cat"];
    const proposalNames = [];
    for (let index in names) {
      //convert string to byte32
      let p = ethers.utils.formatBytes32String(names[index]);

      proposalNames.push(p);
    }
    return proposalNames;
  }

  it("Should return cat", async () => {
    //setup
    const proposalNames = getProposalNames();
    const Ballot3 = await ethers.getContractFactory("Ballot3");
    const ballot3: Ballot3 = await Ballot3.deploy(proposalNames);

    console.log(await ballot3.chairman());

    const accounts = await ethers.getSigners();

    //give right to self and vote
    await ballot3.giveRightToVote(accounts[1].address);
    await ballot3.giveRightToVote(accounts[3].address);
    await ballot3.giveRightToVote(accounts[4].address);
    await ballot3.giveRightToVote(accounts[8].address);

    //delegate 1 -> 2
    await ballot3.connect(accounts[1]).delegate(accounts[2].address);

    //delegate 4 -> 6 -> 5 -> 7
    await ballot3.connect(accounts[4]).delegate(accounts[6].address);
    await ballot3.connect(accounts[6]).delegate(accounts[5].address);
    await ballot3.connect(accounts[5]).delegate(accounts[7].address);

    // 8 -> 4 result 4 -> 7 (due to previosuly delegate)
    await ballot3.connect(accounts[8]).delegate(accounts[4].address);

    await ballot3.connect(accounts[2]).vote(0);
    await ballot3.connect(accounts[3]).vote(1);
    await ballot3.connect(accounts[7]).vote(2);

    const winer32 = await ballot3.winerName();
    const winer = ethers.utils.parseBytes32String(winer32);

    expect(winer).to.equal("bat");
  });
});
