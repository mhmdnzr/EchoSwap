/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMasterchef,
  IMasterchefInterface,
} from "../../../contracts/interfaces/IMasterchef";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDistributionRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMasterchef__factory {
  static readonly abi = _abi;
  static createInterface(): IMasterchefInterface {
    return new Interface(_abi) as IMasterchefInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IMasterchef {
    return new Contract(address, _abi, runner) as unknown as IMasterchef;
  }
}