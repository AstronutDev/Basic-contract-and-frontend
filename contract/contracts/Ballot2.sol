// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

//add more feature
//chairman can giveRightToVote to voter;
// weight for vote
//emit event 

contract Ballot2 {

  //add weight
  struct Voter {
    //weight mean right
    uint weight;
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
 
  uint public closeDate;
  event Vote(address sender, uint propersal, uint voteCount);
  event GiveRightToVote(address voter);

  constructor() {
    chairman = msg.sender;
    numPropersal = propersalName.length;

    closeDate = block.timestamp + 1 hours;

    for(uint i = 0 ; i< numPropersal; i++ ) {
        proposals.push(
            Proposal({ name: propersalName[i], voteCount:0})
        );
    }
  }

  function giveRightToVote(address _voter) public {
    //only chairman can call
    require(msg.sender == chairman, "Permisson denined");

    //check have voter vote yet?
    require(!voters[_voter].voted, "voter already vote");

    //check voter's weight is 0 (no right)
    require(voters[_voter].weight  == 0);

    voters[_voter].weight = 1;

    emit GiveRightToVote(_voter);
  } 

  function vote(uint _proposal) public {
    Voter storage sender = voters[msg.sender];
    //check right
    require(sender.weight == 1, "not right to vote");

    //check 
    require(!sender.voted, "Already voted");

    //check time
    require(block.timestamp < closeDate);

    sender.voted = true;
    sender.vote = _proposal;

    proposals[_proposal].voteCount++;
    emit Vote(msg.sender, _proposal, proposals[_proposal].voteCount);
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