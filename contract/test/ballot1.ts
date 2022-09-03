import { expect } from "chai";
import { ethers } from "hardhat";
import { Ballot1 } from "../typechain-types/Ballot1";

describe("Ballot1", () => {
  it("Should return cat", async () => {
    //setup
    const Ballot1 = await ethers.getContractFactory("Ballot1");
    const ballot1: Ballot1 = await Ballot1.deploy();

    //account[0] = chairman = deployer
    console.log(await ballot1.chairman());

    //Default is contract deployer: account[0]
    //ปกติแล้วเขียนข้อมูลลง block ต้อง .connect() แต่ถ้าไม่ .connect() จะแปลว่าคนที่เรียกคือคนที่ deploy
    await ballot1.vote(2);

    const accounts = await ethers.getSigners();
    await ballot1.connect(accounts[1]).vote(0);
    await ballot1.connect(accounts[2]).vote(1);
    await ballot1.connect(accounts[3]).vote(2);
    await ballot1.connect(accounts[4]).vote(2);

    console.log(`winer is`, await ballot1.winerName());
    expect(await ballot1.winerName()).to.equal("cat");
  });
});
