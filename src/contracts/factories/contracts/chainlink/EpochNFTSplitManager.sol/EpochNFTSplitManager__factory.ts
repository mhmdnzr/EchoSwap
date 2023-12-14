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
import type { NonPayableOverrides } from "../../../../common";
import type {
  EpochNFTSplitManager,
  EpochNFTSplitManagerInterface,
} from "../../../../contracts/chainlink/EpochNFTSplitManager.sol/EpochNFTSplitManager";

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
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "automationRegistry",
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "condition",
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
        name: "_condition",
        type: "address",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_automationRegistry",
        type: "address",
      },
    ],
    name: "setAutomationRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_condition",
        type: "address",
      },
    ],
    name: "setCondition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
    ],
    name: "setTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "target",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061094e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063715018a611610071578063715018a614610158578063776d1a01146101605780638da5cb5b14610173578063c503133114610184578063d4b8399214610197578063f2fde38b146101aa57600080fd5b80634585e33b146100b9578063485cc955146100ce5780635dc228a0146100e15780635ff2d2aa146101115780636acd6481146101245780636e04ff0d14610137575b600080fd5b6100cc6100c73660046106a2565b6101bd565b005b6100cc6100dc366004610730565b61028e565b6065546100f4906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100cc61011f366004610763565b6103d1565b6100cc610132366004610763565b61040e565b61014a61014536600461079b565b61044b565b60405161010892919061084c565b6100cc6104cd565b6100cc61016e366004610763565b6104e1565b6033546001600160a01b03166100f4565b6066546100f4906001600160a01b031681565b6067546100f4906001600160a01b031681565b6100cc6101b8366004610763565b61051e565b6065546001600160a01b03163314806101e057506033546001600160a01b031633145b6102225760405162461bcd60e51b815260206004820152600e60248201526d63616e6e6f74206578656375746560901b60448201526064015b60405180910390fd5b606760009054906101000a90046001600160a01b03166001600160a01b0316636e4d243a6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561027257600080fd5b505af1158015610286573d6000803e3d6000fd5b505050505050565b600054610100900460ff16158080156102ae5750600054600160ff909116105b806102c85750303b1580156102c8575060005460ff166001145b61032b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610219565b6000805460ff19166001179055801561034e576000805461ff0019166101001790555b610356610597565b606680546001600160a01b038086166001600160a01b031992831617909255606780549285169290911691909117905580156103cc576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b6103d96105c6565b6001600160a01b0381166103ec57600080fd5b606580546001600160a01b0319166001600160a01b0392909216919091179055565b6104166105c6565b6001600160a01b03811661042957600080fd5b606680546001600160a01b0319166001600160a01b0392909216919091179055565b60006060606660009054906101000a90046001600160a01b03166001600160a01b031663919840ad6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c691906108ab565b9150915091565b6104d56105c6565b6104df6000610620565b565b6104e96105c6565b6001600160a01b0381166104fc57600080fd5b606780546001600160a01b0319166001600160a01b0392909216919091179055565b6105266105c6565b6001600160a01b03811661058b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610219565b61059481610620565b50565b600054610100900460ff166105be5760405162461bcd60e51b8152600401610219906108cd565b6104df610672565b6033546001600160a01b031633146104df5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610219565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166106995760405162461bcd60e51b8152600401610219906108cd565b6104df33610620565b600080602083850312156106b557600080fd5b823567ffffffffffffffff808211156106cd57600080fd5b818501915085601f8301126106e157600080fd5b8135818111156106f057600080fd5b86602082850101111561070257600080fd5b60209290920196919550909350505050565b80356001600160a01b038116811461072b57600080fd5b919050565b6000806040838503121561074357600080fd5b61074c83610714565b915061075a60208401610714565b90509250929050565b60006020828403121561077557600080fd5b61077e82610714565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156107ad57600080fd5b813567ffffffffffffffff808211156107c557600080fd5b818401915084601f8301126107d957600080fd5b8135818111156107eb576107eb610785565b604051601f8201601f19908116603f0116810190838211818310171561081357610813610785565b8160405282815287602084870101111561082c57600080fd5b826020860160208301376000928101602001929092525095945050505050565b821515815260006020604081840152835180604085015260005b8181101561088257858101830151858201606001528201610866565b81811115610894576000606083870101525b50601f01601f191692909201606001949350505050565b6000602082840312156108bd57600080fd5b8151801515811461077e57600080fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212203c2d255d23eb67a69b2808626a83fc88a19c902674e329775cdf5b5e295eb27d64736f6c634300080d0033";

type EpochNFTSplitManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EpochNFTSplitManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EpochNFTSplitManager__factory extends ContractFactory {
  constructor(...args: EpochNFTSplitManagerConstructorParams) {
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
  // @ts-ignore
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    // @ts-ignore
    return super.deploy(overrides || {}) as Promise<
      EpochNFTSplitManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  // @ts-ignore
  override connect(
    runner: ContractRunner | null
  ): EpochNFTSplitManager__factory {
    // @ts-ignore
    return super.connect(runner) as EpochNFTSplitManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EpochNFTSplitManagerInterface {
    return new Interface(_abi) as EpochNFTSplitManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EpochNFTSplitManager {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as EpochNFTSplitManager;
  }
}
