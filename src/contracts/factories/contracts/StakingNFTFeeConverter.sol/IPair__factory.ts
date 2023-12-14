/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPair,
  IPairInterface,
} from "../../../contracts/StakingNFTFeeConverter.sol/IPair";

const _abi = [
  {
    inputs: [],
    name: "claimStakingFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
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
    name: "token1",
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
] as const;

export class IPair__factory {
  static readonly abi = _abi;
  static createInterface(): IPairInterface {
    return new Interface(_abi) as IPairInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IPair {
    return new Contract(address, _abi, runner) as unknown as IPair;
  }
}
