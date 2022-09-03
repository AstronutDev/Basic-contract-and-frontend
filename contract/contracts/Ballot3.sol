// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Ballot3 {

  struct Voter {
    uint weight;
    bool voted;
    uint vote;
    address delegate;
  }

  struct Proposal {
    bytes32 name;
    uint voteCount;
  }

  address public chairman;

  mapping(address => Voter) public voters;
  Proposal[] public proposals;

  constructor(bytes32[] memory proposalName) {
    chairman = msg.sender;
    for(uint i = 0 ; i< proposalName.length; i++ ) {
        proposals.push(
            Proposal({ name: proposalName[i], voteCount:0})
        );
    }
  }

  function giveRightToVote(address _voter) public {
    //only chairman can call
    require(msg.sender == chairman, "Permisson denined");

    //check have voter vote yet?
    require(!voters[_voter].voted, "voter already vote");

    //check voter's weight is 0 (no right)
    require(voters[_voter].weight  == 0, "voter never get right to vote before");
    voters[_voter].weight = 1;
  } 

  function delegate(address _to) public {
    //sender ชี้ไปตัวแปร voter -> call by ref
    //ตัวแปร sender เป้นตัวแปรที่อ้างอิงไปยัง 0x02
    Voter storage sender = voters[msg.sender];
    require(!sender.voted, "already vote");
    require(_to != msg.sender,"can not self delegate");

    //โดย defaul ค่า address ที่ไม่ได้กำหนดจะเป้น 0
    //วนเช็คว่าค่าแต่ละ delegate ที่มีใน voters[] ไม่เท่ากับ 0 จะทำ loop ต่อ
    while(voters[_to].delegate != address(0)) {
      _to = voters[_to].delegate;
      require(_to != msg.sender, "found loop");
    }
    sender.voted = true;
    sender.delegate = _to;
    Voter storage delegate_ = voters[_to];
    if (delegate_.voted) {
        // If the delegate already voted,
        // directly add to the number of votes
        proposals[delegate_.vote].voteCount += sender.weight;
    } else {
        // If the delegate did not vote yet,
        // add to her weight.
        delegate_.weight += sender.weight;
        }
  }

   function vote(uint _proposal) public {
    Voter storage sender = voters[msg.sender];
    //check right
    require(sender.weight == 1, "not right to vote");

    //check 
    require(!sender.voted, "Already voted");

    sender.voted = true;
    sender.vote = _proposal;

    proposals[_proposal].voteCount++;
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


  function winerName() public view returns(bytes32 winername_) {
    return proposals[winingProposal()].name;
  }
}
