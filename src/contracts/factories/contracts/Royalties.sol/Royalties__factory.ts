/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Royalties,
  RoyaltiesInterface,
} from "../../../contracts/Royalties.sol/Royalties";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wbnb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_echoholders",
        type: "address",
      },
    ],
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
    name: "DISTRIBUTION",
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
        name: "to",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "claimable",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
    name: "depositors",
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
    name: "echoholders",
    outputs: [
      {
        internalType: "contract EchoHolders",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epoch",
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
    name: "feesPerEpoch",
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
        internalType: "address",
        name: "depositor",
        type: "address",
      },
    ],
    name: "removeDepositor",
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
    name: "reservedAmounts",
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
        name: "depositor",
        type: "address",
      },
    ],
    name: "setDepositor",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
        name: "",
        type: "address",
      },
    ],
    name: "userCheckpoint",
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
    name: "wbnb",
    outputs: [
      {
        internalType: "contract IERC20",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405262093a8060025534801561001757600080fd5b506040516110243803806110248339810160408190526100369161009a565b6001600081815560058054336001600160a01b031991821617909155825481166001600160a01b039586161790925560048054909216929093169190911790556003556100cd565b80516001600160a01b038116811461009557600080fd5b919050565b600080604083850312156100ad57600080fd5b6100b68361007e565b91506100c46020840161007e565b90509250929050565b610f48806100dc6000396000f3fe6080604052600436106101025760003560e01c80638da5cb5b11610095578063bd85b03911610064578063bd85b039146102b4578063df1cd77f146102e1578063eed75f6d1461030e578063f2c098b71461034e578063f4f3b2001461036e57600080fd5b80638da5cb5b1461023e578063900cf0cf1461025e578063b07b709b14610274578063b6b55f25146102a157600080fd5b80636e8967e8116100d15780636e8967e8146101b05780637c91e4eb146101e85780638b73e606146101fe5780638d72647e1461021e57600080fd5b806308438ce51461010e57806313af40351461014e5780631e83409a14610170578063402914f51461019057600080fd5b3661010957005b600080fd5b34801561011a57600080fd5b5061013b610129366004610d51565b60086020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561015a57600080fd5b5061016e610169366004610d6a565b61038e565b005b34801561017c57600080fd5b5061016e61018b366004610d6a565b6103f6565b34801561019c57600080fd5b5061013b6101ab366004610d6a565b61053f565b3480156101bc57600080fd5b506004546101d0906001600160a01b031681565b6040516001600160a01b039091168152602001610145565b3480156101f457600080fd5b5061013b60025481565b34801561020a57600080fd5b5061016e610219366004610d6a565b610670565b34801561022a57600080fd5b506001546101d0906001600160a01b031681565b34801561024a57600080fd5b506005546101d0906001600160a01b031681565b34801561026a57600080fd5b5061013b60035481565b34801561028057600080fd5b5061013b61028f366004610d6a565b600a6020526000908152604090205481565b61016e6102af366004610d51565b6106e5565b3480156102c057600080fd5b5061013b6102cf366004610d51565b60076020526000908152604090205481565b3480156102ed57600080fd5b5061013b6102fc366004610d51565b60066020526000908152604090205481565b34801561031a57600080fd5b5061033e610329366004610d6a565b60096020526000908152604090205460ff1681565b6040519015158152602001610145565b34801561035a57600080fd5b5061016e610369366004610d6a565b610927565b34801561037a57600080fd5b5061016e610389366004610d6a565b61099b565b6005546001600160a01b031633146103c15760405162461bcd60e51b81526004016103b890610d9a565b60405180910390fd5b6001600160a01b0381166103d457600080fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6103fe610a5d565b6001600160a01b03811661041157600080fd5b600061041c3361053f565b6001546040516370a0823160e01b81523060048201529192506001600160a01b0316906370a0823190602401602060405180830381865afa158015610465573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104899190610dbd565b8111156104cb5760405162461bcd60e51b815260206004820152601060248201526f746f6f206d616e79207265776172647360801b60448201526064016103b8565b600081116105075760405162461bcd60e51b81526020600482015260096024820152681dd85a5d081b995e1d60ba1b60448201526064016103b8565b600354336000908152600a6020526040902055600154610531906001600160a01b03168383610ab6565b5061053c6001600055565b50565b60006001600160a01b03821661055457600080fd5b6001600160a01b0382166000908152600a6020526040902054600354811061057f5750600092915050565b8060005b60035482101561066857600082815260086020908152604080832054600783528184205460069093528184205460048054935163d113d59d60e01b81526001600160a01b038c81169282019290925292959193919291169063d113d59d90602401602060405180830381865afa158015610601573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106259190610dbd565b90506106318484610dec565b61063b8284610e03565b6106459190610e22565b61064f9086610e44565b945050505050818061066090610e5c565b925050610583565b949350505050565b6005546001600160a01b0316331461069a5760405162461bcd60e51b81526004016103b890610d9a565b6001600160a01b03811660009081526009602052604090205460ff1615156001146106c457600080fd5b6001600160a01b03166000908152600960205260409020805460ff19169055565b3360009081526009602052604090205460ff1615156001148061071257506005546001600160a01b031633145b61074c5760405162461bcd60e51b815260206004820152600b60248201526a1b9bdd08185b1b1bddd95960aa1b60448201526064016103b8565b600081118061075b5750600034115b61076457600080fd5b60003460000361078d57600154610786906001600160a01b0316333085610b1e565b50806107fa565b600160009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0476040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107dd57600080fd5b505af11580156107f1573d6000803e3d6000fd5b50505050503490505b6003546000908152600660209081526040918290208390556004805483516318160ddd60e01b815293516001600160a01b03909116936318160ddd93818401939092918290030181865afa158015610856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087a9190610dbd565b6003546000908152600760209081526040918290209290925560048054825163f92c45b760e01b815292516001600160a01b039091169363f92c45b79380840193919291908290030181865afa1580156108d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fc9190610dbd565b6003805460009081526008602052604081209290925580549161091e83610e5c565b91905055505050565b6005546001600160a01b031633146109515760405162461bcd60e51b81526004016103b890610d9a565b6001600160a01b03811660009081526009602052604090205460ff161561097757600080fd5b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6005546001600160a01b031633146109c55760405162461bcd60e51b81526004016103b890610d9a565b6001600160a01b0381166109d857600080fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a439190610dbd565b9050610a596001600160a01b0383163383610ab6565b5050565b600260005403610aaf5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103b8565b6002600055565b6040516001600160a01b038316602482015260448101829052610b1990849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610b5c565b505050565b6040516001600160a01b0380851660248301528316604482015260648101829052610b569085906323b872dd60e01b90608401610ae2565b50505050565b6000610bb1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610c2e9092919063ffffffff16565b805190915015610b195780806020019051810190610bcf9190610e75565b610b195760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103b8565b6060610668848460008585600080866001600160a01b03168587604051610c559190610ec3565b60006040518083038185875af1925050503d8060008114610c92576040519150601f19603f3d011682016040523d82523d6000602084013e610c97565b606091505b5091509150610ca887838387610cb3565b979650505050505050565b60608315610d22578251600003610d1b576001600160a01b0385163b610d1b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103b8565b5081610668565b6106688383815115610d375781518083602001fd5b8060405162461bcd60e51b81526004016103b89190610edf565b600060208284031215610d6357600080fd5b5035919050565b600060208284031215610d7c57600080fd5b81356001600160a01b0381168114610d9357600080fd5b9392505050565b6020808252600990820152683737ba1037bbb732b960b91b604082015260600190565b600060208284031215610dcf57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610dfe57610dfe610dd6565b500390565b6000816000190483118215151615610e1d57610e1d610dd6565b500290565b600082610e3f57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115610e5757610e57610dd6565b500190565b600060018201610e6e57610e6e610dd6565b5060010190565b600060208284031215610e8757600080fd5b81518015158114610d9357600080fd5b60005b83811015610eb2578181015183820152602001610e9a565b83811115610b565750506000910152565b60008251610ed5818460208701610e97565b9190910192915050565b6020815260008251806020840152610efe816040850160208701610e97565b601f01601f1916919091016040019291505056fea264697066735822122081c73164391cbdb9d9cf871fdc588ceb7842d4285f6a47f43dbab3c1c4852e7364736f6c634300080d0033";

type RoyaltiesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoyaltiesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Royalties__factory extends ContractFactory {
  constructor(...args: RoyaltiesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _wbnb: AddressLike,
    _echoholders: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_wbnb, _echoholders, overrides || {});
  }
  override deploy(
    _wbnb: AddressLike,
    _echoholders: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_wbnb, _echoholders, overrides || {}) as Promise<
      Royalties & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Royalties__factory {
    return super.connect(runner) as Royalties__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoyaltiesInterface {
    return new Interface(_abi) as RoyaltiesInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Royalties {
    return new Contract(address, _abi, runner) as unknown as Royalties;
  }
}