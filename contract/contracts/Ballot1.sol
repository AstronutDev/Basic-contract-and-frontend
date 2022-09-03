// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Ballot1 {
  struct Voter {
    bool voted;
    uint vote;
  }

  struct Proposal {
    string name;
    uint voteCount;
  }

  address public chairman;

  mapping(address => Voter) public voters;
  Proposal[] public proposals;

  string[] public propersalName = ["ant", "bat", "cat"];
  uint public numPropersal;

  constructor() {
    chairman = msg.sender;
    numPropersal = propersalName.length;
    for(uint i = 0 ; i< numPropersal; i++ ) {
        proposals.push(
            Proposal({ name: propersalName[i], voteCount:0})
        );
    }
  }

  function vote(uint proposal) public {
    //เก็บข้อมูล voter โดยมี key เป็น address
    Voter storage sender = voters[msg.sender];
    require(!sender.voted, "already vote");
    sender.voted = true;
    sender.vote = proposal;
    proposals[proposal].voteCount++;
  }

  function winingProposal() public view returns(uint winingProposal_){
    uint winingVoteCount = 0;
    for(uint i = 0; i < proposals.length; i++) {
      if(proposals[i].voteCount > winingVoteCount) {
        winingVoteCount = proposals[i].voteCount;
        winingProposal_ = i;
      }
    }
  }

  function winerName() public view returns(string memory winername_) {
    return proposals[winingProposal()].name;
  }
}