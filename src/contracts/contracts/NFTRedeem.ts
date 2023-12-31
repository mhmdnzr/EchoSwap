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
} from "../common";

export interface NFTRedeemInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "NFT"
      | "WBNB"
      | "depositRedeemAmount"
      | "owner"
      | "redeem"
      | "redeemActive"
      | "redeemAmount"
      | "renounceOwnership"
      | "setRedeemAmount"
      | "startRedeem"
      | "stopRedeem"
      | "transferOwnership"
      | "withdrawERC20"
      | "withdrawERC721"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(functionFragment: "NFT", values?: undefined): string;
  encodeFunctionData(functionFragment: "WBNB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositRedeemAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRedeemAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startRedeem",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stopRedeem",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC721",
    values: [BigNumberish[], AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "NFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WBNB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositRedeemAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRedeemAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stopRedeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC721",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface NFTRedeem extends BaseContract {
  connect(runner?: ContractRunner | null): NFTRedeem;
  waitForDeployment(): Promise<this>;

  interface: NFTRedeemInterface;

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

  NFT: TypedContractMethod<[], [string], "view">;

  WBNB: TypedContractMethod<[], [string], "view">;

  depositRedeemAmount: TypedContractMethod<
    [value: BigNumberish],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  redeem: TypedContractMethod<
    [tokenIds: BigNumberish[], to: AddressLike],
    [void],
    "nonpayable"
  >;

  redeemActive: TypedContractMethod<[], [boolean], "view">;

  redeemAmount: TypedContractMethod<[], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setRedeemAmount: TypedContractMethod<
    [_redeemAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  startRedeem: TypedContractMethod<[], [void], "nonpayable">;

  stopRedeem: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawERC20: TypedContractMethod<
    [token: AddressLike, to: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawERC721: TypedContractMethod<
    [tokenIds: BigNumberish[], to: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "NFT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WBNB"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "depositRedeemAmount"
  ): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "redeem"
  ): TypedContractMethod<
    [tokenIds: BigNumberish[], to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "redeemActive"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "redeemAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRedeemAmount"
  ): TypedContractMethod<[_redeemAmount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startRedeem"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stopRedeem"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawERC20"
  ): TypedContractMethod<
    [token: AddressLike, to: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawERC721"
  ): TypedContractMethod<
    [tokenIds: BigNumberish[], to: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
