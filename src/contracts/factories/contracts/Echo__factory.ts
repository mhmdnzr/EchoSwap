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
import type { NonPayableOverrides } from "../../common";
import type { Echo, EchoInterface } from "../../contracts/Echo";

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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "initialMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialMinted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleClaim",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
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
    name: "name",
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
    inputs: [],
    name: "redemptionReceiver",
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
        name: "_minter",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b5060038054610100600160a81b0319163361010081029190911790915561003c906000610042565b506100d9565b60008160008082825461005591906100b3565b90915550506001600160a01b0383166000818152600160209081526040808320805487019055518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a350600192915050565b600082198211156100d457634e487b7160e01b600052601160045260246000fd5b500190565b61075b806100e86000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063ca1c4de911610066578063ca1c4de91461026a578063dd62ed3e14610277578063e752c44a146102a2578063fca3b5aa146102b557600080fd5b806370a08231146101ff57806395d89b411461021f578063a9059cbb14610242578063c268f9ba1461025557600080fd5b806323b872dd116100d357806323b872dd146101ac578063313ce567146101bf57806340c10f19146101d95780635e05fe50146101ec57600080fd5b806306fdde03146101055780630754617214610142578063095ea7b31461017257806318160ddd14610195575b600080fd5b61012c6040518060400160405280600881526020016704543484f535741560c41b81525081565b60405161013991906105bb565b60405180910390f35b60035461015a9061010090046001600160a01b031681565b6040516001600160a01b039091168152602001610139565b61018561018036600461062c565b6102c8565b6040519015158152602001610139565b61019e60005481565b604051908152602001610139565b6101856101ba366004610656565b610334565b6101c7601281565b60405160ff9091168152602001610139565b6101856101e736600461062c565b6103ae565b60045461015a906001600160a01b031681565b61019e61020d366004610692565b60016020526000908152604090205481565b61012c604051806040016040528060048152602001634543484f60e01b81525081565b61018561025036600461062c565b610416565b610268610263366004610692565b61042a565b005b6003546101859060ff1681565b61019e6102853660046106ad565b600260209081526000928352604080842090915290825290205481565b60055461015a906001600160a01b031681565b6102686102c3366004610692565b61047b565b3360008181526002602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103239086815260200190565b60405180910390a350600192915050565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019811461039a576001600160a01b0385166000908152600260209081526040808320338452909152812080548592906103949084906106f6565b90915550505b6103a58585856104bf565b95945050505050565b60035460009061010090046001600160a01b031633146104025760405162461bcd60e51b815260206004820152600b60248201526a1b9bdd08185b1b1bddd95960aa1b604482015260640160405180910390fd5b61040c8383610556565b5060019392505050565b60006104233384846104bf565b9392505050565b60035461010090046001600160a01b03163314801561044c575060035460ff16155b61045557600080fd5b6003805460ff19166001179055610477816aa56fa5b99019a5c8000000610556565b5050565b60035461010090046001600160a01b0316331461049757600080fd5b600380546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b6001600160a01b0383166000908152600160205260408120805483919083906104e99084906106f6565b90915550506001600160a01b03808416600081815260016020526040908190208054860190555190918616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906105449086815260200190565b60405180910390a35060019392505050565b600081600080828254610569919061070d565b90915550506001600160a01b0383166000818152600160209081526040808320805487019055518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610323565b600060208083528351808285015260005b818110156105e8578581018301518582016040015282016105cc565b818111156105fa576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461062757600080fd5b919050565b6000806040838503121561063f57600080fd5b61064883610610565b946020939093013593505050565b60008060006060848603121561066b57600080fd5b61067484610610565b925061068260208501610610565b9150604084013590509250925092565b6000602082840312156106a457600080fd5b61042382610610565b600080604083850312156106c057600080fd5b6106c983610610565b91506106d760208401610610565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600082821015610708576107086106e0565b500390565b60008219821115610720576107206106e0565b50019056fea2646970667358221220e9d50e98c1a5f6f432e6f938ca07a74a0b622fa7320801a7bcbf051c727d4b1664736f6c634300080d0033";

type EchoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EchoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Echo__factory extends ContractFactory {
  constructor(...args: EchoConstructorParams) {
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
      Echo & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Echo__factory {
    return super.connect(runner) as Echo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EchoInterface {
    return new Interface(_abi) as EchoInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Echo {
    return new Contract(address, _abi, runner) as unknown as Echo;
  }
}
