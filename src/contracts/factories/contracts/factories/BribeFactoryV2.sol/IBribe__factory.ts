/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBribe,
  IBribeInterface,
} from "../../../../contracts/factories/BribeFactoryV2.sol/IBribe";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBribe__factory {
  static readonly abi = _abi;
  static createInterface(): IBribeInterface {
    return new Interface(_abi) as IBribeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IBribe {
    return new Contract(address, _abi, runner) as unknown as IBribe;
  }
}
