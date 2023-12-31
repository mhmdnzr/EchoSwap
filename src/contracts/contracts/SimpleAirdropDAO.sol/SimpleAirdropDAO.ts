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

export interface SimpleAirdropDAOInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "amountPerUser"
      | "distributeAirdrop"
      | "echo"
      | "owner"
      | "pushUser"
      | "secondOwner"
      | "setAmountPerUser"
      | "setOwner"
      | "setOwner2"
      | "users"
      | "ve"
      | "withdrawERC20"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Deposit" | "VestingUpdate"): EventFragment;

  encodeFunctionData(
    functionFragment: "amountPerUser",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributeAirdrop",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "echo", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pushUser",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "secondOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAmountPerUser",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner2",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "users", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "ve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "amountPerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "echo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "secondOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAmountPerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20",
    data: BytesLike
  ): Result;
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

export namespace VestingUpdateEvent {
  export type InputTuple = [
    balance: BigNumberish,
    vesting_period: BigNumberish,
    tokenPerSec: BigNumberish
  ];
  export type OutputTuple = [
    balance: bigint,
    vesting_period: bigint,
    tokenPerSec: bigint
  ];
  export interface OutputObject {
    balance: bigint;
    vesting_period: bigint;
    tokenPerSec: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SimpleAirdropDAO extends BaseContract {
  connect(runner?: ContractRunner | null): SimpleAirdropDAO;
  waitForDeployment(): Promise<this>;

  interface: SimpleAirdropDAOInterface;

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

  amountPerUser: TypedContractMethod<[], [bigint], "view">;

  distributeAirdrop: TypedContractMethod<[], [void], "nonpayable">;

  echo: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pushUser: TypedContractMethod<[_users: AddressLike[]], [void], "nonpayable">;

  secondOwner: TypedContractMethod<[], [string], "view">;

  setAmountPerUser: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  setOwner2: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  users: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  ve: TypedContractMethod<[], [string], "view">;

  withdrawERC20: TypedContractMethod<
    [_token: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "amountPerUser"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "distributeAirdrop"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "echo"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pushUser"
  ): TypedContractMethod<[_users: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "secondOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setAmountPerUser"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner2"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "users"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(nameOrSignature: "ve"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawERC20"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "VestingUpdate"
  ): TypedContractEvent<
    VestingUpdateEvent.InputTuple,
    VestingUpdateEvent.OutputTuple,
    VestingUpdateEvent.OutputObject
  >;

  filters: {
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

    "VestingUpdate(uint256,uint256,uint256)": TypedContractEvent<
      VestingUpdateEvent.InputTuple,
      VestingUpdateEvent.OutputTuple,
      VestingUpdateEvent.OutputObject
    >;
    VestingUpdate: TypedContractEvent<
      VestingUpdateEvent.InputTuple,
      VestingUpdateEvent.OutputTuple,
      VestingUpdateEvent.OutputObject
    >;
  };
}
