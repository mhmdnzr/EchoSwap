/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface MerkleTreeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_init"
      | "airdropClaim"
      | "claim"
      | "hasClaimed"
      | "info"
      | "init"
      | "isFnftOwner"
      | "merkleRoot"
      | "oldMerkle_1"
      | "oldMerkle_2"
      | "owner"
      | "ownersToFnft"
      | "setFNFTOwners"
      | "setMerkleRoot"
      | "setOwner"
      | "setUserClaimed"
      | "swFnftToOwner"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "ClaimSet"): EventFragment;

  encodeFunctionData(functionFragment: "_init", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "airdropClaim",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [AddressLike, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "hasClaimed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "info", values?: undefined): string;
  encodeFunctionData(functionFragment: "init", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isFnftOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oldMerkle_1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oldMerkle_2",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownersToFnft",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFNFTOwners",
    values: [AddressLike[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setMerkleRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserClaimed",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "swFnftToOwner",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "_init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "airdropClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isFnftOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oldMerkle_1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oldMerkle_2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownersToFnft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFNFTOwners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUserClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swFnftToOwner",
    data: BytesLike
  ): Result;
}

export namespace ClaimSetEvent {
  export type InputTuple = [
    who: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [who: string, to: string, amount: bigint];
  export interface OutputObject {
    who: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MerkleTree extends BaseContract {
  connect(runner?: ContractRunner | null): MerkleTree;
  waitForDeployment(): Promise<this>;

  interface: MerkleTreeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  _init: TypedContractMethod<[], [void], "nonpayable">;

  airdropClaim: TypedContractMethod<[], [string], "view">;

  claim: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish, proof: BytesLike[]],
    [void],
    "nonpayable"
  >;

  hasClaimed: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  info: TypedContractMethod<[], [string], "view">;

  init: TypedContractMethod<[], [boolean], "view">;

  isFnftOwner: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  merkleRoot: TypedContractMethod<[], [string], "view">;

  oldMerkle_1: TypedContractMethod<[], [string], "view">;

  oldMerkle_2: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  ownersToFnft: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  setFNFTOwners: TypedContractMethod<
    [owners: AddressLike[], smartWallet: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setMerkleRoot: TypedContractMethod<
    [_merkleRoot: BytesLike],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  setUserClaimed: TypedContractMethod<
    [users: AddressLike[]],
    [void],
    "nonpayable"
  >;

  swFnftToOwner: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_init"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "airdropClaim"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish, proof: BytesLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasClaimed"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "info"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "init"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isFnftOwner"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "merkleRoot"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "oldMerkle_1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "oldMerkle_2"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ownersToFnft"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "setFNFTOwners"
  ): TypedContractMethod<
    [owners: AddressLike[], smartWallet: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMerkleRoot"
  ): TypedContractMethod<[_merkleRoot: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setUserClaimed"
  ): TypedContractMethod<[users: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "swFnftToOwner"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;

  getEvent(
    key: "ClaimSet"
  ): TypedContractEvent<
    ClaimSetEvent.InputTuple,
    ClaimSetEvent.OutputTuple,
    ClaimSetEvent.OutputObject
  >;

  filters: {
    "ClaimSet(address,address,uint256)": TypedContractEvent<
      ClaimSetEvent.InputTuple,
      ClaimSetEvent.OutputTuple,
      ClaimSetEvent.OutputObject
    >;
    ClaimSet: TypedContractEvent<
      ClaimSetEvent.InputTuple,
      ClaimSetEvent.OutputTuple,
      ClaimSetEvent.OutputObject
    >;
  };
}
