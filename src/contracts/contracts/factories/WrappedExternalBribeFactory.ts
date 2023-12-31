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

export interface WrappedExternalBribeFactoryInterface extends Interface {
  getFunction(
    nameOrSignature: "createBribe" | "last_bribe" | "oldBribeToNew" | "voter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createBribe",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "last_bribe",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oldBribeToNew",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "voter", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "createBribe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "last_bribe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oldBribeToNew",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
}

export interface WrappedExternalBribeFactory extends BaseContract {
  connect(runner?: ContractRunner | null): WrappedExternalBribeFactory;
  waitForDeployment(): Promise<this>;

  interface: WrappedExternalBribeFactoryInterface;

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
    [existing_bribe: AddressLike],
    [string],
    "nonpayable"
  >;

  last_bribe: TypedContractMethod<[], [string], "view">;

  oldBribeToNew: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  voter: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createBribe"
  ): TypedContractMethod<[existing_bribe: AddressLike], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "last_bribe"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "oldBribeToNew"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "voter"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
