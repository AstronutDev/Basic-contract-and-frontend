/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "foo",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "greet",
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
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e0e38038062000e0e8339818101604052810190620000379190620003a3565b6200006760405180606001604052806022815260200162000dec60229139826200008760201b6200028b1760201c565b80600090805190602001906200007f92919062000156565b5050620004f1565b620001298282604051602401620000a092919062000451565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200012d60201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546200016490620004bb565b90600052602060002090601f016020900481019282620001885760008555620001d4565b82601f10620001a357805160ff1916838001178555620001d4565b82800160010185558215620001d4579182015b82811115620001d3578251825591602001919060010190620001b6565b5b509050620001e39190620001e7565b5090565b5b8082111562000202576000816000905550600101620001e8565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200026f8262000224565b810181811067ffffffffffffffff8211171562000291576200029062000235565b5b80604052505050565b6000620002a662000206565b9050620002b4828262000264565b919050565b600067ffffffffffffffff821115620002d757620002d662000235565b5b620002e28262000224565b9050602081019050919050565b60005b838110156200030f578082015181840152602081019050620002f2565b838111156200031f576000848401525b50505050565b60006200033c6200033684620002b9565b6200029a565b9050828152602081018484840111156200035b576200035a6200021f565b5b62000368848285620002ef565b509392505050565b600082601f8301126200038857620003876200021a565b5b81516200039a84826020860162000325565b91505092915050565b600060208284031215620003bc57620003bb62000210565b5b600082015167ffffffffffffffff811115620003dd57620003dc62000215565b5b620003eb8482850162000370565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60006200041d82620003f4565b620004298185620003ff565b93506200043b818560208601620002ef565b620004468162000224565b840191505092915050565b600060408201905081810360008301526200046d818562000410565b9050818103602083015262000483818462000410565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004d457607f821691505b60208210811415620004eb57620004ea6200048c565b5b50919050565b6108eb80620005016000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634c970b2f14610046578063a413686214610076578063cfae321714610092575b600080fd5b610060600480360381019061005b91906104dc565b6100b0565b60405161006d91906105a2565b60405180910390f35b610090600480360381019061008b91906106f9565b610132565b005b61009a6101f9565b6040516100a791906105a2565b60405180910390f35b6060600082136100f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ec9061078e565b60405180910390fd5b6040518060400160405280600381526020017f666f6f00000000000000000000000000000000000000000000000000000000008152509050919050565b6101df604051806060016040528060238152602001610893602391396000805461015b906107dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610187906107dd565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b505050505083610327565b80600090805190602001906101f59291906103ef565b5050565b606060008054610208906107dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610234906107dd565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b61032382826040516024016102a192919061080f565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103c6565b5050565b6103c183838360405160240161033f93929190610846565b6040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103c6565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546103fb906107dd565b90600052602060002090601f01602090048101928261041d5760008555610464565b82601f1061043657805160ff1916838001178555610464565b82800160010185558215610464579182015b82811115610463578251825591602001919060010190610448565b5b5090506104719190610475565b5090565b5b8082111561048e576000816000905550600101610476565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6104b9816104a6565b81146104c457600080fd5b50565b6000813590506104d6816104b0565b92915050565b6000602082840312156104f2576104f161049c565b5b6000610500848285016104c7565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610543578082015181840152602081019050610528565b83811115610552576000848401525b50505050565b6000601f19601f8301169050919050565b600061057482610509565b61057e8185610514565b935061058e818560208601610525565b61059781610558565b840191505092915050565b600060208201905081810360008301526105bc8184610569565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61060682610558565b810181811067ffffffffffffffff82111715610625576106246105ce565b5b80604052505050565b6000610638610492565b905061064482826105fd565b919050565b600067ffffffffffffffff821115610664576106636105ce565b5b61066d82610558565b9050602081019050919050565b82818337600083830152505050565b600061069c61069784610649565b61062e565b9050828152602081018484840111156106b8576106b76105c9565b5b6106c384828561067a565b509392505050565b600082601f8301126106e0576106df6105c4565b5b81356106f0848260208601610689565b91505092915050565b60006020828403121561070f5761070e61049c565b5b600082013567ffffffffffffffff81111561072d5761072c6104a1565b5b610739848285016106cb565b91505092915050565b7f6e6f74206e65676174697665206f72207a65726f000000000000000000000000600082015250565b6000610778601483610514565b915061078382610742565b602082019050919050565b600060208201905081810360008301526107a78161076b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806107f557607f821691505b60208210811415610809576108086107ae565b5b50919050565b600060408201905081810360008301526108298185610569565b9050818103602083015261083d8184610569565b90509392505050565b600060608201905081810360008301526108608186610569565b905081810360208301526108748185610569565b905081810360408301526108888184610569565b905094935050505056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a2646970667358221220ba5f72b5d68f0e2f91c6e2bfee6e855c283a612b1143d1627a74929644f4bfc564736f6c634300080900334465706c6f79696e67206120477265657465722077697468206772656574696e673a";

type GreeterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GreeterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Greeter__factory extends ContractFactory {
  constructor(...args: GreeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _greeting: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  override getDeployTransaction(
    _greeting: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  override attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  override connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}