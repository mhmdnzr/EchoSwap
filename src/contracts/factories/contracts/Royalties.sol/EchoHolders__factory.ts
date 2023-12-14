/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  EchoHolders,
  EchoHoldersInterface,
} from "../../../contracts/Royalties.sol/EchoHolders";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "originalMinters",
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
    name: "reservedAmount",
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
] as const;

export class EchoHolders__factory {
  static readonly abi = _abi;
  static createInterface(): EchoHoldersInterface {
    return new Interface(_abi) as EchoHoldersInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): EchoHolders {
    return new Contract(address, _abi, runner) as unknown as EchoHolders;
  }
}
