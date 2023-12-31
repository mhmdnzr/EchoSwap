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
} from "../../common";

export interface AirdropClaimTheNFTInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "LOCK_PERIOD"
      | "PRECISION"
      | "VE_SHARE"
      | "claim"
      | "deposit"
      | "depositors"
      | "init"
      | "merkle"
      | "owner"
      | "setDepositor"
      | "setMerkleTreeContract"
      | "setOwner"
      | "setVeShare"
      | "token"
      | "tokenPerSec"
      | "totalAirdrop"
      | "ve"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Claim" | "Deposit" | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "LOCK_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(functionFragment: "VE_SHARE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositors",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "init", values?: undefined): string;
  encodeFunctionData(functionFragment: "merkle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDepositor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMerkleTreeContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setVeShare",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenPerSec",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAirdrop",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "LOCK_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VE_SHARE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDepositor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleTreeContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setVeShare", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenPerSec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace ClaimEvent {
  export type InputTuple = [
    _who: AddressLike,
    _to: AddressLike,
    _totalAmount: BigNumberish,
    veAmount: BigNumberish,
    _tokenId: BigNumberish,
    _when: BigNumberish
  ];
  export type OutputTuple = [
    _who: string,
    _to: string,
    _totalAmount: bigint,
    veAmount: bigint,
    _tokenId: bigint,
    _when: bigint
  ];
  export interface OutputObject {
    _who: string;
    _to: string;
    _totalAmount: bigint;
    veAmount: bigint;
    _tokenId: bigint;
    _when: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AirdropClaimTheNFT extends BaseContract {
  connect(runner?: ContractRunner | null): AirdropClaimTheNFT;
  waitForDeployment(): Promise<this>;

  interface: AirdropClaimTheNFTInterface;

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

  LOCK_PERIOD: TypedContractMethod<[], [bigint], "view">;

  PRECISION: TypedContractMethod<[], [bigint], "view">;

  VE_SHARE: TypedContractMethod<[], [bigint], "view">;

  claim: TypedContractMethod<
    [_who: AddressLike, _amount: BigNumberish, _to: AddressLike],
    [boolean],
    "nonpayable"
  >;

  deposit: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  depositors: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  init: TypedContractMethod<[], [boolean], "view">;

  merkle: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  setDepositor: TypedContractMethod<
    [depositor: AddressLike],
    [void],
    "nonpayable"
  >;

  setMerkleTreeContract: TypedContractMethod<
    [_merkle: AddressLike],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  setVeShare: TypedContractMethod<[_share: BigNumberish], [void], "nonpayable">;

  token: TypedContractMethod<[], [string], "view">;

  tokenPerSec: TypedContractMethod<[], [bigint], "view">;

  totalAirdrop: TypedContractMethod<[], [bigint], "view">;

  ve: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<
    [amount: BigNumberish, _token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "LOCK_PERIOD"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "VE_SHARE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<
    [_who: AddressLike, _amount: BigNumberish, _to: AddressLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "depositors"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "init"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "merkle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setDepositor"
  ): TypedContractMethod<[depositor: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMerkleTreeContract"
  ): TypedContractMethod<[_merkle: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVeShare"
  ): TypedContractMethod<[_share: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenPerSec"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalAirdrop"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(nameOrSignature: "ve"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [amount: BigNumberish, _token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Claim"
  ): TypedContractEvent<
    ClaimEvent.InputTuple,
    ClaimEvent.OutputTuple,
    ClaimEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "Claim(address,address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;
    Claim: TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;

    "Deposit(uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "Withdraw(uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
  };
}
