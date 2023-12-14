/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRoyalties,
  IRoyaltiesInterface,
} from "../../../contracts/NFTSalesSplitter.sol/IRoyalties";

const _abi = [
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
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRoyalties__factory {
  static readonly abi = _abi;
  static createInterface(): IRoyaltiesInterface {
    return new Interface(_abi) as IRoyaltiesInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IRoyalties {
    return new Contract(address, _abi, runner) as unknown as IRoyalties;
  }
}
