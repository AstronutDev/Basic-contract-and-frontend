/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Ballot1, Ballot1Interface } from "../Ballot1";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "chairman",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numPropersal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "propersalName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winerName",
    outputs: [
      {
        internalType: "string",
        name: "winername_",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winingProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winingProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405180606001604052806040518060400160405280600381526020017f616e74000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f626174000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f63617400000000000000000000000000000000000000000000000000000000008152508152506003906003620000d092919062000273565b50348015620000de57600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060038054905060048190555060005b6004548110156200026c5760026040518060400160405280600384815481106200015d576200015c620003f8565b5b906000526020600020018054620001749062000456565b80601f0160208091040260200160405190810160405280929190818152602001828054620001a29062000456565b8015620001f35780601f10620001c757610100808354040283529160200191620001f3565b820191906000526020600020905b815481529060010190602001808311620001d557829003601f168201915b5050505050815260200160008152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001908051906020019062000249929190620002da565b5060208201518160010155505080806200026390620004c5565b9150506200012e565b5062000513565b828054828255906000526020600020908101928215620002c7579160200282015b82811115620002c6578251829080519060200190620002b5929190620002da565b509160200191906001019062000294565b5b509050620002d691906200036b565b5090565b828054620002e89062000456565b90600052602060002090601f0160209004810192826200030c576000855562000358565b82601f106200032757805160ff191683800117855562000358565b8280016001018555821562000358579182015b82811115620003575782518255916020019190600101906200033a565b5b50905062000367919062000393565b5090565b5b808211156200038f5760008181620003859190620003b2565b506001016200036c565b5090565b5b80821115620003ae57600081600090555060010162000394565b5090565b508054620003c09062000456565b6000825580601f10620003d45750620003f5565b601f016020900490600052602060002090810190620003f4919062000393565b5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200046f57607f821691505b6020821081141562000486576200048562000427565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000620004d282620004bb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156200050857620005076200048c565b5b600182019050919050565b6109d480620005236000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806385bcdc0f1161005b57806385bcdc0f14610128578063866933131461014657806387f7b97514610164578063a3ec138d1461018257610088565b80630121b93f1461008d578063013cf08b146100a95780631115652e146100da578063409032c1146100f8575b600080fd5b6100a760048036038101906100a291906105ef565b6101b3565b005b6100c360048036038101906100be91906105ef565b6102ad565b6040516100d19291906106c4565b60405180910390f35b6100e2610369565b6040516100ef91906106f4565b60405180910390f35b610112600480360381019061010d91906105ef565b61036f565b60405161011f919061070f565b60405180910390f35b61013061041b565b60405161013d91906106f4565b60405180910390f35b61014e6104a3565b60405161015b919061070f565b60405180910390f35b61016c61055f565b6040516101799190610772565b60405180910390f35b61019c600480360381019061019791906107b9565b610583565b6040516101aa929190610801565b60405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060000160009054906101000a900460ff1615610248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023f90610876565b60405180910390fd5b60018160000160006101000a81548160ff0219169083151502179055508181600101819055506002828154811061028257610281610896565b5b906000526020600020906002020160010160008154809291906102a4906108f4565b91905055505050565b600281815481106102bd57600080fd5b90600052602060002090600202016000915090508060000180546102e09061096c565b80601f016020809104026020016040519081016040528092919081815260200182805461030c9061096c565b80156103595780601f1061032e57610100808354040283529160200191610359565b820191906000526020600020905b81548152906001019060200180831161033c57829003601f168201915b5050505050908060010154905082565b60045481565b6003818154811061037f57600080fd5b90600052602060002001600091509050805461039a9061096c565b80601f01602080910402602001604051908101604052809291908181526020018280546103c69061096c565b80156104135780601f106103e857610100808354040283529160200191610413565b820191906000526020600020905b8154815290600101906020018083116103f657829003601f168201915b505050505081565b6000806000905060005b60028054905081101561049e57816002828154811061044757610446610896565b5b906000526020600020906002020160010154111561048b576002818154811061047357610472610896565b5b90600052602060002090600202016001015491508092505b8080610496906108f4565b915050610425565b505090565b606060026104af61041b565b815481106104c0576104bf610896565b5b906000526020600020906002020160000180546104dc9061096c565b80601f01602080910402602001604051908101604052809291908181526020018280546105089061096c565b80156105555780601f1061052a57610100808354040283529160200191610555565b820191906000526020600020905b81548152906001019060200180831161053857829003601f168201915b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154905082565b600080fd5b6000819050919050565b6105cc816105b9565b81146105d757600080fd5b50565b6000813590506105e9816105c3565b92915050565b600060208284031215610605576106046105b4565b5b6000610613848285016105da565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561065657808201518184015260208101905061063b565b83811115610665576000848401525b50505050565b6000601f19601f8301169050919050565b60006106878261061c565b6106918185610627565b93506106a1818560208601610638565b6106aa8161066b565b840191505092915050565b6106be816105b9565b82525050565b600060408201905081810360008301526106de818561067c565b90506106ed60208301846106b5565b9392505050565b600060208201905061070960008301846106b5565b92915050565b60006020820190508181036000830152610729818461067c565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061075c82610731565b9050919050565b61076c81610751565b82525050565b60006020820190506107876000830184610763565b92915050565b61079681610751565b81146107a157600080fd5b50565b6000813590506107b38161078d565b92915050565b6000602082840312156107cf576107ce6105b4565b5b60006107dd848285016107a4565b91505092915050565b60008115159050919050565b6107fb816107e6565b82525050565b600060408201905061081660008301856107f2565b61082360208301846106b5565b9392505050565b7f616c726561647920766f74650000000000000000000000000000000000000000600082015250565b6000610860600c83610627565b915061086b8261082a565b602082019050919050565b6000602082019050818103600083015261088f81610853565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108ff826105b9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610932576109316108c5565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061098457607f821691505b602082108114156109985761099761093d565b5b5091905056fea26469706673582212204dad6339c6dc754dc49e4df0a6c531bfd56f15130c4c98c56af5f2a6dbb6b68064736f6c63430008090033";

type Ballot1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Ballot1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ballot1__factory extends ContractFactory {
  constructor(...args: Ballot1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Ballot1> {
    return super.deploy(overrides || {}) as Promise<Ballot1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Ballot1 {
    return super.attach(address) as Ballot1;
  }
  override connect(signer: Signer): Ballot1__factory {
    return super.connect(signer) as Ballot1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Ballot1Interface {
    return new utils.Interface(_abi) as Ballot1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Ballot1 {
    return new Contract(address, _abi, signerOrProvider) as Ballot1;
  }
}