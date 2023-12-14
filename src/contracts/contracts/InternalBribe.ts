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

export interface InternalBribeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DURATION"
      | "PRECISION"
      | "_deposit"
      | "_ve"
      | "_withdraw"
      | "balanceOf"
      | "batchRewardPerToken"
      | "batchUpdateRewardPerToken"
      | "checkpoints"
      | "earned"
      | "getPriorBalanceIndex"
      | "getPriorRewardPerToken"
      | "getPriorSupplyIndex"
      | "getReward"
      | "getRewardForOwner"
      | "isReward"
      | "lastEarn"
      | "lastTimeRewardApplicable"
      | "lastUpdateTime"
      | "left"
      | "notifyRewardAmount"
      | "numCheckpoints"
      | "periodFinish"
      | "rewardPerToken"
      | "rewardPerTokenCheckpoints"
      | "rewardPerTokenNumCheckpoints"
      | "rewardPerTokenStored"
      | "rewardRate"
      | "rewards"
      | "rewardsListLength"
      | "supplyCheckpoints"
      | "supplyNumCheckpoints"
      | "swapOutRewardToken"
      | "totalSupply"
      | "userRewardPerTokenStored"
      | "voter"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClaimRewards"
      | "Deposit"
      | "NotifyReward"
      | "Withdraw"
  ): EventFragment;

  encodeFunctionData(functionFragment: "DURATION", values?: undefined): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchRewardPerToken",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUpdateRewardPerToken",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoints",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriorBalanceIndex",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriorRewardPerToken",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriorSupplyIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardForOwner",
    values: [BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastEarn",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "left", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numCheckpoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "periodFinish",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenCheckpoints",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenNumCheckpoints",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenStored",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsListLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supplyCheckpoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supplyNumCheckpoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapOutRewardToken",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenStored",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "voter", values?: undefined): string;

  decodeFunctionResult(functionFragment: "DURATION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchUpdateRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriorBalanceIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriorRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriorSupplyIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardForOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastEarn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "left", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenNumCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardsListLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplyCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplyNumCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapOutRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
}

export namespace ClaimRewardsEvent {
  export type InputTuple = [
    from: AddressLike,
    reward: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [from: string, reward: string, amount: bigint];
  export interface OutputObject {
    from: string;
    reward: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [
    from: AddressLike,
    tokenId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [from: string, tokenId: bigint, amount: bigint];
  export interface OutputObject {
    from: string;
    tokenId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NotifyRewardEvent {
  export type InputTuple = [
    from: AddressLike,
    reward: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [from: string, reward: string, amount: bigint];
  export interface OutputObject {
    from: string;
    reward: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [
    from: AddressLike,
    tokenId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [from: string, tokenId: bigint, amount: bigint];
  export interface OutputObject {
    from: string;
    tokenId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface InternalBribe extends BaseContract {
  connect(runner?: ContractRunner | null): InternalBribe;
  waitForDeployment(): Promise<this>;

  interface: InternalBribeInterface;

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

  DURATION: TypedContractMethod<[], [bigint], "view">;

  PRECISION: TypedContractMethod<[], [bigint], "view">;

  _deposit: TypedContractMethod<
    [amount: BigNumberish, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  _ve: TypedContractMethod<[], [string], "view">;

  _withdraw: TypedContractMethod<
    [amount: BigNumberish, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  batchRewardPerToken: TypedContractMethod<
    [token: AddressLike, maxRuns: BigNumberish],
    [void],
    "nonpayable"
  >;

  batchUpdateRewardPerToken: TypedContractMethod<
    [token: AddressLike, maxRuns: BigNumberish],
    [void],
    "nonpayable"
  >;

  checkpoints: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [[bigint, bigint] & { timestamp: bigint; balanceOf: bigint }],
    "view"
  >;

  earned: TypedContractMethod<
    [token: AddressLike, tokenId: BigNumberish],
    [bigint],
    "view"
  >;

  getPriorBalanceIndex: TypedContractMethod<
    [tokenId: BigNumberish, timestamp: BigNumberish],
    [bigint],
    "view"
  >;

  getPriorRewardPerToken: TypedContractMethod<
    [token: AddressLike, timestamp: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;

  getPriorSupplyIndex: TypedContractMethod<
    [timestamp: BigNumberish],
    [bigint],
    "view"
  >;

  getReward: TypedContractMethod<
    [tokenId: BigNumberish, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;

  getRewardForOwner: TypedContractMethod<
    [tokenId: BigNumberish, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;

  isReward: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  lastEarn: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  lastTimeRewardApplicable: TypedContractMethod<
    [token: AddressLike],
    [bigint],
    "view"
  >;

  lastUpdateTime: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  left: TypedContractMethod<[token: AddressLike], [bigint], "view">;

  notifyRewardAmount: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  numCheckpoints: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  periodFinish: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  rewardPerToken: TypedContractMethod<[token: AddressLike], [bigint], "view">;

  rewardPerTokenCheckpoints: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [[bigint, bigint] & { timestamp: bigint; rewardPerToken: bigint }],
    "view"
  >;

  rewardPerTokenNumCheckpoints: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  rewardPerTokenStored: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  rewardRate: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  rewards: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  rewardsListLength: TypedContractMethod<[], [bigint], "view">;

  supplyCheckpoints: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { timestamp: bigint; supply: bigint }],
    "view"
  >;

  supplyNumCheckpoints: TypedContractMethod<[], [bigint], "view">;

  swapOutRewardToken: TypedContractMethod<
    [i: BigNumberish, oldToken: AddressLike, newToken: AddressLike],
    [void],
    "nonpayable"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  userRewardPerTokenStored: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  voter: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DURATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_deposit"
  ): TypedContractMethod<
    [amount: BigNumberish, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "_ve"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_withdraw"
  ): TypedContractMethod<
    [amount: BigNumberish, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "batchRewardPerToken"
  ): TypedContractMethod<
    [token: AddressLike, maxRuns: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "batchUpdateRewardPerToken"
  ): TypedContractMethod<
    [token: AddressLike, maxRuns: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "checkpoints"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [[bigint, bigint] & { timestamp: bigint; balanceOf: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "earned"
  ): TypedContractMethod<
    [token: AddressLike, tokenId: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriorBalanceIndex"
  ): TypedContractMethod<
    [tokenId: BigNumberish, timestamp: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriorRewardPerToken"
  ): TypedContractMethod<
    [token: AddressLike, timestamp: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriorSupplyIndex"
  ): TypedContractMethod<[timestamp: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getReward"
  ): TypedContractMethod<
    [tokenId: BigNumberish, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getRewardForOwner"
  ): TypedContractMethod<
    [tokenId: BigNumberish, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isReward"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastEarn"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "lastTimeRewardApplicable"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdateTime"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
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
    nameOrSignature: "numCheckpoints"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "periodFinish"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerToken"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenCheckpoints"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [[bigint, bigint] & { timestamp: bigint; rewardPerToken: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "rewardPerTokenNumCheckpoints"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenStored"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardRate"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewards"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "rewardsListLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "supplyCheckpoints"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { timestamp: bigint; supply: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "supplyNumCheckpoints"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "swapOutRewardToken"
  ): TypedContractMethod<
    [i: BigNumberish, oldToken: AddressLike, newToken: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "userRewardPerTokenStored"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "voter"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "ClaimRewards"
  ): TypedContractEvent<
    ClaimRewardsEvent.InputTuple,
    ClaimRewardsEvent.OutputTuple,
    ClaimRewardsEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "NotifyReward"
  ): TypedContractEvent<
    NotifyRewardEvent.InputTuple,
    NotifyRewardEvent.OutputTuple,
    NotifyRewardEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "ClaimRewards(address,address,uint256)": TypedContractEvent<
      ClaimRewardsEvent.InputTuple,
      ClaimRewardsEvent.OutputTuple,
      ClaimRewardsEvent.OutputObject
    >;
    ClaimRewards: TypedContractEvent<
      ClaimRewardsEvent.InputTuple,
      ClaimRewardsEvent.OutputTuple,
      ClaimRewardsEvent.OutputObject
    >;

    "Deposit(address,uint256,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "NotifyReward(address,address,uint256)": TypedContractEvent<
      NotifyRewardEvent.InputTuple,
      NotifyRewardEvent.OutputTuple,
      NotifyRewardEvent.OutputObject
    >;
    NotifyReward: TypedContractEvent<
      NotifyRewardEvent.InputTuple,
      NotifyRewardEvent.OutputTuple,
      NotifyRewardEvent.OutputObject
    >;

    "Withdraw(address,uint256,uint256)": TypedContractEvent<
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