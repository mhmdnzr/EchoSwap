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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface PancakeMigratorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "migrate"
      | "pairFactory"
      | "pcFactory"
      | "pcRouter"
      | "thRouter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "migrate",
    values: [AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "pairFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pcFactory", values?: undefined): string;
  encodeFunctionData(functionFragment: "pcRouter", values?: undefined): string;
  encodeFunctionData(functionFragment: "thRouter", values?: undefined): string;

  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pairFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pcFactory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pcRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "thRouter", data: BytesLike): Result;
}

export interface PancakeMigrator extends BaseContract {
  connect(runner?: ContractRunner | null): PancakeMigrator;
  waitForDeployment(): Promise<this>;

  interface: PancakeMigratorInterface;

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

  migrate: TypedContractMethod<
    [_lp: AddressLike, _amount: BigNumberish, stable: boolean],
    [void],
    "nonpayable"
  >;

  pairFactory: TypedContractMethod<[], [string], "view">;

  pcFactory: TypedContractMethod<[], [string], "view">;

  pcRouter: TypedContractMethod<[], [string], "view">;

  thRouter: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "migrate"
  ): TypedContractMethod<
    [_lp: AddressLike, _amount: BigNumberish, stable: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pairFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pcFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pcRouter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "thRouter"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}