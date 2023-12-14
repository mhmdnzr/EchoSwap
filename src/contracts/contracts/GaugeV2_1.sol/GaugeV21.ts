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

export interface GaugeV21Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "DISTRIBUTION"
      | "DURATION"
      | "TOKEN"
      | "_VE"
      | "_balances"
      | "_periodFinish"
      | "_totalSupply"
      | "balanceOf"
      | "claimFees"
      | "deposit"
      | "depositAll"
      | "earned"
      | "external_bribe"
      | "fees0"
      | "fees1"
      | "gaugeRewarder"
      | "getReward(address,address[])"
      | "getReward()"
      | "internal_bribe"
      | "isForPair"
      | "lastTimeRewardApplicable"
      | "lastUpdateTime"
      | "notifyRewardAmount"
      | "owner"
      | "periodFinish"
      | "renounceOwnership"
      | "rewardForDuration"
      | "rewardPerToken"
      | "rewardPerTokenStored"
      | "rewardRate"
      | "rewardToken"
      | "rewarderPid"
      | "rewards"
      | "setDistribution"
      | "setGaugeRewarder"
      | "setRewarderPid"
      | "totalSupply"
      | "transferOwnership"
      | "userRewardPerTokenPaid"
      | "withdraw"
      | "withdrawAll"
      | "withdrawAllAndHarvest"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClaimFees"
      | "Deposit"
      | "Harvest"
      | "OwnershipTransferred"
      | "RewardAdded"
      | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DISTRIBUTION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "DURATION", values?: undefined): string;
  encodeFunctionData(functionFragment: "TOKEN", values?: undefined): string;
  encodeFunctionData(functionFragment: "_VE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_periodFinish",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAll",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "earned", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "external_bribe",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fees0", values?: undefined): string;
  encodeFunctionData(functionFragment: "fees1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gaugeRewarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReward(address,address[])",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getReward()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "internal_bribe",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isForPair", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "periodFinish",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardForDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewarderPid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDistribution",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setGaugeRewarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewarderPid",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenPaid",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllAndHarvest",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "DURATION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_VE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "external_bribe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fees0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fees1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gaugeRewarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReward(address,address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReward()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "internal_bribe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isForPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardForDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewarderPid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGaugeRewarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewarderPid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllAndHarvest",
    data: BytesLike
  ): Result;
}

export namespace ClaimFeesEvent {
  export type InputTuple = [
    from: AddressLike,
    claimed0: BigNumberish,
    claimed1: BigNumberish
  ];
  export type OutputTuple = [from: string, claimed0: bigint, claimed1: bigint];
  export interface OutputObject {
    from: string;
    claimed0: bigint;
    claimed1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HarvestEvent {
  export type InputTuple = [user: AddressLike, reward: BigNumberish];
  export type OutputTuple = [user: string, reward: bigint];
  export interface OutputObject {
    user: string;
    reward: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace RewardAddedEvent {
  export type InputTuple = [reward: BigNumberish];
  export type OutputTuple = [reward: bigint];
  export interface OutputObject {
    reward: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GaugeV21 extends BaseContract {
  connect(runner?: ContractRunner | null): GaugeV21;
  waitForDeployment(): Promise<this>;

  interface: GaugeV21Interface;

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

  DISTRIBUTION: TypedContractMethod<[], [string], "view">;

  DURATION: TypedContractMethod<[], [bigint], "view">;

  TOKEN: TypedContractMethod<[], [string], "view">;

  _VE: TypedContractMethod<[], [string], "view">;

  _balances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  _periodFinish: TypedContractMethod<[], [bigint], "view">;

  _totalSupply: TypedContractMethod<[], [bigint], "view">;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  claimFees: TypedContractMethod<
    [],
    [[bigint, bigint] & { claimed0: bigint; claimed1: bigint }],
    "nonpayable"
  >;

  deposit: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  depositAll: TypedContractMethod<[], [void], "nonpayable">;

  earned: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  external_bribe: TypedContractMethod<[], [string], "view">;

  fees0: TypedContractMethod<[], [bigint], "view">;

  fees1: TypedContractMethod<[], [bigint], "view">;

  gaugeRewarder: TypedContractMethod<[], [string], "view">;

  "getReward(address,address[])": TypedContractMethod<
    [_account: AddressLike, _tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;

  "getReward()": TypedContractMethod<[], [void], "nonpayable">;

  internal_bribe: TypedContractMethod<[], [string], "view">;

  isForPair: TypedContractMethod<[], [boolean], "view">;

  lastTimeRewardApplicable: TypedContractMethod<[], [bigint], "view">;

  lastUpdateTime: TypedContractMethod<[], [bigint], "view">;

  notifyRewardAmount: TypedContractMethod<
    [token: AddressLike, reward: BigNumberish],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  periodFinish: TypedContractMethod<[], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  rewardForDuration: TypedContractMethod<[], [bigint], "view">;

  rewardPerToken: TypedContractMethod<[], [bigint], "view">;

  rewardPerTokenStored: TypedContractMethod<[], [bigint], "view">;

  rewardRate: TypedContractMethod<[], [bigint], "view">;

  rewardToken: TypedContractMethod<[], [string], "view">;

  rewarderPid: TypedContractMethod<[], [bigint], "view">;

  rewards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  setDistribution: TypedContractMethod<
    [_distribution: AddressLike],
    [void],
    "nonpayable"
  >;

  setGaugeRewarder: TypedContractMethod<
    [_gaugeRewarder: AddressLike],
    [void],
    "nonpayable"
  >;

  setRewarderPid: TypedContractMethod<
    [_pid: BigNumberish],
    [void],
    "nonpayable"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  userRewardPerTokenPaid: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  withdraw: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  withdrawAll: TypedContractMethod<[], [void], "nonpayable">;

  withdrawAllAndHarvest: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DISTRIBUTION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DURATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "TOKEN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_VE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_balances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "_periodFinish"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimFees"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { claimed0: bigint; claimed1: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "depositAll"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "earned"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "external_bribe"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fees0"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fees1"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "gaugeRewarder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getReward(address,address[])"
  ): TypedContractMethod<
    [_account: AddressLike, _tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getReward()"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "internal_bribe"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isForPair"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastTimeRewardApplicable"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdateTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "notifyRewardAmount"
  ): TypedContractMethod<
    [token: AddressLike, reward: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "periodFinish"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardForDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerToken"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenStored"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewarderPid"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setDistribution"
  ): TypedContractMethod<[_distribution: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setGaugeRewarder"
  ): TypedContractMethod<[_gaugeRewarder: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRewarderPid"
  ): TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "userRewardPerTokenPaid"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawAll"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawAllAndHarvest"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "ClaimFees"
  ): TypedContractEvent<
    ClaimFeesEvent.InputTuple,
    ClaimFeesEvent.OutputTuple,
    ClaimFeesEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "Harvest"
  ): TypedContractEvent<
    HarvestEvent.InputTuple,
    HarvestEvent.OutputTuple,
    HarvestEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RewardAdded"
  ): TypedContractEvent<
    RewardAddedEvent.InputTuple,
    RewardAddedEvent.OutputTuple,
    RewardAddedEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "ClaimFees(address,uint256,uint256)": TypedContractEvent<
      ClaimFeesEvent.InputTuple,
      ClaimFeesEvent.OutputTuple,
      ClaimFeesEvent.OutputObject
    >;
    ClaimFees: TypedContractEvent<
      ClaimFeesEvent.InputTuple,
      ClaimFeesEvent.OutputTuple,
      ClaimFeesEvent.OutputObject
    >;

    "Deposit(address,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "Harvest(address,uint256)": TypedContractEvent<
      HarvestEvent.InputTuple,
      HarvestEvent.OutputTuple,
      HarvestEvent.OutputObject
    >;
    Harvest: TypedContractEvent<
      HarvestEvent.InputTuple,
      HarvestEvent.OutputTuple,
      HarvestEvent.OutputObject
    >;

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

    "RewardAdded(uint256)": TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;
    RewardAdded: TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;

    "Withdraw(address,uint256)": TypedContractEvent<
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