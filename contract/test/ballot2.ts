import { ethers } from "hardhat";
import { expect } from "chai";
import { Ballot2 } from "../typechain-types/Ballot2";

describe("Ballot2", () => {
  it("Should return cat", async () => {
    //setup
    const Ballot2 = await ethers.getContractFactory("Ballot2");
    const ballot2: Ballot2 = await Ballot2.deploy();

    console.log(await ballot2.chairman());

    const accounts = await ethers.getSigners();
    //give right to self and vote
    await ballot2.giveRightToVote(accounts[0].address);
    await ballot2.vote(2);

    //give right to everyone
    for (let i = 1; i < 10; i++) {
      await ballot2.giveRightToVote(accounts[i].address);
    }

    await ballot2.connect(accounts[1]).vote(0);
    await ballot2.connect(accounts[2]).vote(1);
    await ballot2.connect(accounts[3]).vote(2);
    await ballot2.connect(accounts[4]).vote(2);

    console.log(`winer is`, await ballot2.winerName());
    expect(await ballot2.winerName()).to.equal("cat");
  });
});
