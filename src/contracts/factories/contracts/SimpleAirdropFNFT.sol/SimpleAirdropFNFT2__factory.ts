/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  SimpleAirdropFNFT2,
  SimpleAirdropFNFT2Interface,
} from "../../../contracts/SimpleAirdropFNFT.sol/SimpleAirdropFNFT2";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "vesting_period",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenPerSec",
        type: "uint256",
      },
    ],
    name: "VestingUpdate",
    type: "event",
  },
  {
    inputs: [],
    name: "amountPerUser",
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
    inputs: [],
    name: "distributeAirdrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "echo",
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
    name: "owner",
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
    inputs: [
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
    ],
    name: "pushFNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "secondOwner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setAmountPerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner2",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "users",
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
    name: "ve",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319908116331790915560028054821673fbbf371c9b0b994eebfcc977cef603f7f31c070d17905560038054821673f4c8e32eadec4bfe97e0f595add0f4450a863a1117905560018054909116731c6c2498854662fdeadbc4f14ea2f30ca305104b1790556817c568f2ba38ca0000600555610bca8061009d6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063609b105211610071578063609b10521461013f57806368a9f31c146101525780637ae662a314610165578063866131d21461017c5780638da5cb5b1461018f578063f4f3b200146101a257600080fd5b806313af4035146100b95780631f850716146100ce578063269af61d146100fe57806329f4acb014610106578063365b98b2146101195780635825884f1461012c575b600080fd5b6100cc6100c7366004610964565b6101b5565b005b6002546100e1906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100cc610232565b6003546100e1906001600160a01b031681565b6100e1610127366004610986565b610436565b6100cc61013a366004610964565b610460565b6100cc61014d3660046109b5565b6104d4565b6001546100e1906001600160a01b031681565b61016e60055481565b6040519081526020016100f5565b6100cc61018a366004610986565b610580565b6000546100e1906001600160a01b031681565b6100cc6101b0366004610964565b6105c4565b6000546001600160a01b03163314806101d857506001546001600160a01b031633145b6101fd5760405162461bcd60e51b81526004016101f490610a7a565b60405180910390fd5b6001600160a01b03811661021057600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633148061025557506001546001600160a01b031633145b6102715760405162461bcd60e51b81526004016101f490610a7a565b6000805b600454821015610432576004828154811061029257610292610a9d565b600091825260208220015460035460025460405163095ea7b360e01b81526001600160a01b03918216600482015260248101949094529182169350169063095ea7b3906044016020604051808303816000875af11580156102f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031b9190610ab3565b5060035460025460055460405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915291169063095ea7b3906044016020604051808303816000875af1158015610375573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103999190610ab3565b5060025460055460405163d4e54c3b60e01b815260048101919091526303c2670060248201526001600160a01b0383811660448301529091169063d4e54c3b906064016020604051808303816000875af11580156103fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041f9190610ad5565b508161042a81610aee565b925050610275565b5050565b6004818154811061044657600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b031633148061048357506001546001600160a01b031633145b61049f5760405162461bcd60e51b81526004016101f490610a7a565b6001600160a01b0381166104b257600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314806104f757506001546001600160a01b031633145b6105135760405162461bcd60e51b81526004016101f490610a7a565b60005b815181101561043257600482828151811061053357610533610a9d565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790558061057881610aee565b915050610516565b6000546001600160a01b03163314806105a357506001546001600160a01b031633145b6105bf5760405162461bcd60e51b81526004016101f490610a7a565b600555565b6000546001600160a01b03163314806105e757506001546001600160a01b031633145b6106035760405162461bcd60e51b81526004016101f490610a7a565b6001600160a01b03811661061657600080fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561065d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106819190610ad5565b60408051336024820181905260448083018590528351808403909101815260649092019092526020810180516001600160e01b031663a9059cbb60e01b179052919250610432916001600160a01b038516919084906106e19084906106e6565b505050565b600061073b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166107b89092919063ffffffff16565b8051909150156106e157808060200190518101906107599190610ab3565b6106e15760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101f4565b60606107c784846000856107cf565b949350505050565b6060824710156108305760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101f4565b600080866001600160a01b0316858760405161084c9190610b45565b60006040518083038185875af1925050503d8060008114610889576040519150601f19603f3d011682016040523d82523d6000602084013e61088e565b606091505b509150915061089f878383876108aa565b979650505050505050565b60608315610919578251600003610912576001600160a01b0385163b6109125760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101f4565b50816107c7565b6107c7838381511561092e5781518083602001fd5b8060405162461bcd60e51b81526004016101f49190610b61565b80356001600160a01b038116811461095f57600080fd5b919050565b60006020828403121561097657600080fd5b61097f82610948565b9392505050565b60006020828403121561099857600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156109c857600080fd5b823567ffffffffffffffff808211156109e057600080fd5b818501915085601f8301126109f457600080fd5b813581811115610a0657610a0661099f565b8060051b604051601f19603f83011681018181108582111715610a2b57610a2b61099f565b604052918252848201925083810185019188831115610a4957600080fd5b938501935b82851015610a6e57610a5f85610948565b84529385019392850192610a4e565b98975050505050505050565b6020808252600990820152683737ba1037bbb732b960b91b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610ac557600080fd5b8151801515811461097f57600080fd5b600060208284031215610ae757600080fd5b5051919050565b600060018201610b0e57634e487b7160e01b600052601160045260246000fd5b5060010190565b60005b83811015610b30578181015183820152602001610b18565b83811115610b3f576000848401525b50505050565b60008251610b57818460208701610b15565b9190910192915050565b6020815260008251806020840152610b80816040850160208701610b15565b601f01601f1916919091016040019291505056fea2646970667358221220d79606a92cdf7693b9e5ca76b535f469e334886584fee3cf3ec0c9610948ade964736f6c634300080d0033";

type SimpleAirdropFNFT2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAirdropFNFT2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAirdropFNFT2__factory extends ContractFactory {
  constructor(...args: SimpleAirdropFNFT2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SimpleAirdropFNFT2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SimpleAirdropFNFT2__factory {
    return super.connect(runner) as SimpleAirdropFNFT2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAirdropFNFT2Interface {
    return new Interface(_abi) as SimpleAirdropFNFT2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SimpleAirdropFNFT2 {
    return new Contract(address, _abi, runner) as unknown as SimpleAirdropFNFT2;
  }
}