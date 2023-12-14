/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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
} from "../../common";

export interface IBribeFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createBribe"
      | "createExternalBribe"
      | "createInternalBribe"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createBribe",
    values: [AddressLike, AddressLike, AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createExternalBribe",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createInternalBribe",
    values: [AddressLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "createBribe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createExternalBribe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createInternalBribe",
    data: BytesLike
  ): Result;
}

export interface IBribeFactory extends BaseContract {
  connect(runner?: ContractRunner | null): IBribeFactory;
  waitForDeployment(): Promise<this>;

  interface: IBribeFactoryInterface;

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

  createBribe: TypedContractMethod<
    [
      _owner: AddressLike,
      _token0: AddressLike,
      _token1: AddressLike,
      _type: string
    ],
    [string],
    "nonpayable"
  >;

  createExternalBribe: TypedContractMethod<
    [arg0: AddressLike[]],
    [string],
    "nonpayable"
  >;

  createInternalBribe: TypedContractMethod<
    [arg0: AddressLike[]],
    [string],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createBribe"
  ): TypedContractMethod<
    [
      _owner: AddressLike,
      _token0: AddressLike,
      _token1: AddressLike,
      _type: string
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createExternalBribe"
  ): TypedContractMethod<[arg0: AddressLike[]], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "createInternalBribe"
  ): TypedContractMethod<[arg0: AddressLike[]], [string], "nonpayable">;

  filters: {};
}
