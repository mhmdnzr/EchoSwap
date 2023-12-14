/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITarget,
  ITargetInterface,
} from "../../../../contracts/chainlink/EpochNFTSplitManager.sol/ITarget";

const _abi = [
  {
    inputs: [],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ITarget__factory {
  static readonly abi = _abi;
  static createInterface(): ITargetInterface {
    return new Interface(_abi) as ITargetInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ITarget {
    return new Contract(address, _abi, runner) as unknown as ITarget;
  }
}