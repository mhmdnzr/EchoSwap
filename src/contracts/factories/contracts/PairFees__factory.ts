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
import type { NonPayableOverrides } from "../../common";
import type { PairFees, PairFeesInterface } from "../../contracts/PairFees";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "claimFeesFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isTokenZero",
        type: "bool",
      },
    ],
    name: "processStakingFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toStake0",
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
    name: "toStake1",
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
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdrawStakingFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b506040516105c53803806105c583398101604081905261002f91610066565b336080526001600160a01b0391821660a0521660c052610099565b80516001600160a01b038116811461006157600080fd5b919050565b6000806040838503121561007957600080fd5b6100828361004a565b91506100906020840161004a565b90509250929050565b60805160a05160c0516104e36100e26000396000818161012c015261026001526000818160fb015261022601526000818160c60152818161016201526101ef01526104e36000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063533cf5ce1461005c5780635b3c924814610071578063651d83f91461008c5780638d4dabff14610095578063f8518b89146100a8575b600080fd5b61006f61006a36600461039c565b6100bb565b005b61007a60015481565b60405190815260200160405180910390f35b61007a60005481565b61006f6100a33660046103dd565b610157565b61006f6100b636600461040d565b6101e4565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100f057600080fd5b8115610121576101217f00000000000000000000000000000000000000000000000000000000000000008484610291565b8015610152576101527f00000000000000000000000000000000000000000000000000000000000000008483610291565b505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461018c57600080fd5b6000821180156101995750805b156101b557816000808282546101af919061042f565b90915550505b6000821180156101c3575080155b156101e05781600160008282546101da919061042f565b90915550505b5050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461021957600080fd5b600054156102535761024e7f000000000000000000000000000000000000000000000000000000000000000082600054610291565b600080555b6001541561028e576102887f000000000000000000000000000000000000000000000000000000000000000082600154610291565b60006001555b50565b6000836001600160a01b03163b116102a857600080fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916103049190610455565b6000604051808303816000865af19150503d8060008114610341576040519150601f19603f3d011682016040523d82523d6000602084013e610346565b606091505b50915091508180156103705750805115806103705750808060200190518101906103709190610490565b61037957600080fd5b5050505050565b80356001600160a01b038116811461039757600080fd5b919050565b6000806000606084860312156103b157600080fd5b6103ba84610380565b95602085013595506040909401359392505050565b801515811461028e57600080fd5b600080604083850312156103f057600080fd5b823591506020830135610402816103cf565b809150509250929050565b60006020828403121561041f57600080fd5b61042882610380565b9392505050565b6000821982111561045057634e487b7160e01b600052601160045260246000fd5b500190565b6000825160005b81811015610476576020818601810151858301520161045c565b81811115610485576000828501525b509190910192915050565b6000602082840312156104a257600080fd5b8151610428816103cf56fea2646970667358221220bc7b7ba3ed402e2260b246b969b2950543e1b823ed680664b9cd4f6bee8131dd64736f6c634300080d0033";

type PairFeesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PairFeesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PairFees__factory extends ContractFactory {
  constructor(...args: PairFeesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _token0: AddressLike,
    _token1: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_token0, _token1, overrides || {});
  }
  override deploy(
    _token0: AddressLike,
    _token1: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_token0, _token1, overrides || {}) as Promise<
      PairFees & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PairFees__factory {
    return super.connect(runner) as PairFees__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PairFeesInterface {
    return new Interface(_abi) as PairFeesInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PairFees {
    return new Contract(address, _abi, runner) as unknown as PairFees;
  }
}