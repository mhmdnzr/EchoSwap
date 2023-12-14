/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDibs,
  IDibsInterface,
} from "../../../contracts/interfaces/IDibs";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_totalFees",
        type: "uint256",
      },
    ],
    name: "findTotalRewardFor",
    outputs: [
      {
        internalType: "uint256",
        name: "_referralFeeAmount",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "parentCode",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "totalFees",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVolume",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "reward",
    outputs: [
      {
        internalType: "uint256",
        name: "referralFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDibs__factory {
  static readonly abi = _abi;
  static createInterface(): IDibsInterface {
    return new Interface(_abi) as IDibsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IDibs {
    return new Contract(address, _abi, runner) as unknown as IDibs;
  }
}
