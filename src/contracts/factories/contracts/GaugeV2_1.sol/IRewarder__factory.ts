/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRewarder,
  IRewarderInterface,
} from "../../../contracts/GaugeV2_1.sol/IRewarder";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newLpAmount",
        type: "uint256",
      },
    ],
    name: "onReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRewarder__factory {
  static readonly abi = _abi;
  static createInterface(): IRewarderInterface {
    return new Interface(_abi) as IRewarderInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IRewarder {
    return new Contract(address, _abi, runner) as unknown as IRewarder;
  }
}
