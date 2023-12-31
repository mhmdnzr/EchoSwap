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
} from "../../common";

export interface IGaugeDistributionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "TOKEN"
      | "balanceOf"
      | "claimFees"
      | "earned"
      | "getReward"
      | "internal_bribe"
      | "isForPair"
      | "left"
      | "notifyRewardAmount"
      | "rewardRate"
      | "totalSupply"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "internal_bribe",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isForPair", values?: undefined): string;
  encodeFunctionData(functionFragment: "left", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "internal_bribe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isForPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "left", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
}

export interface IGaugeDistribution extends BaseContract {
  connect(runner?: ContractRunner | null): IGaugeDistribution;
  waitForDeployment(): Promise<this>;

  interface: IGaugeDistributionInterface;

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

  TOKEN: TypedContractMethod<[], [string], "view">;

  balanceOf: TypedContractMethod<[_account: AddressLike], [bigint], "view">;

  claimFees: TypedContractMethod<
    [],
    [[bigint, bigint] & { claimed0: bigint; claimed1: bigint }],
    "nonpayable"
  >;

  earned: TypedContractMethod<
    [token: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;

  getReward: TypedContractMethod<
    [account: AddressLike, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;

  internal_bribe: TypedContractMethod<[], [string], "view">;

  isForPair: TypedContractMethod<[], [boolean], "view">;

  left: TypedContractMethod<[token: AddressLike], [bigint], "view">;

  notifyRewardAmount: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  rewardRate: TypedContractMethod<[_pair: AddressLike], [bigint], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "TOKEN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimFees"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { claimed0: bigint; claimed1: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "earned"
  ): TypedContractMethod<
    [token: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReward"
  ): TypedContractMethod<
    [account: AddressLike, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "internal_bribe"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isForPair"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "left"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "notifyRewardAmount"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardRate"
  ): TypedContractMethod<[_pair: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
