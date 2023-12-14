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

export interface BribeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "TYPE"
      | "WEEK"
      | "_deposit"
      | "_totalSupply"
      | "_withdraw"
      | "addReward"
      | "addRewardToken"
      | "balanceOf"
      | "balanceOfAt"
      | "bribeFactory"
      | "earned"
      | "firstBribeTimestamp"
      | "getEpochStart"
      | "getNextEpochStart"
      | "getReward"
      | "getRewardForOwner"
      | "isRewardToken"
      | "minter"
      | "notifyRewardAmount"
      | "owner"
      | "recoverERC20"
      | "rewardData"
      | "rewardPerToken"
      | "rewardTokens"
      | "rewardsListLength"
      | "setMinter"
      | "setOwner"
      | "setVoter"
      | "totalSupply"
      | "totalSupplyAt"
      | "userRewardPerTokenPaid"
      | "userTimestamp"
      | "ve"
      | "voter"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Recovered"
      | "RewardAdded"
      | "RewardPaid"
      | "Staked"
      | "Withdrawn"
  ): EventFragment;

  encodeFunctionData(functionFragment: "TYPE", values?: undefined): string;
  encodeFunctionData(functionFragment: "WEEK", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_totalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addRewardToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bribeFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "firstBribeTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEpochStart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextEpochStart",
    values?: undefined
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
    functionFragment: "isRewardToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardData",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsListLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMinter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setVoter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenPaid",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userTimestamp",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "ve", values?: undefined): string;
  encodeFunctionData(functionFragment: "voter", values?: undefined): string;

  decodeFunctionResult(functionFragment: "TYPE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WEEK", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bribeFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "firstBribeTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEpochStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextEpochStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardForOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsListLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setVoter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
}

export namespace RecoveredEvent {
  export type InputTuple = [token: AddressLike, amount: BigNumberish];
  export type OutputTuple = [token: string, amount: bigint];
  export interface OutputObject {
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardAddedEvent {
  export type InputTuple = [
    rewardToken: AddressLike,
    reward: BigNumberish,
    startTimestamp: BigNumberish
  ];
  export type OutputTuple = [
    rewardToken: string,
    reward: bigint,
    startTimestamp: bigint
  ];
  export interface OutputObject {
    rewardToken: string;
    reward: bigint;
    startTimestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPaidEvent {
  export type InputTuple = [
    user: AddressLike,
    rewardsToken: AddressLike,
    reward: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    rewardsToken: string,
    reward: bigint
  ];
  export interface OutputObject {
    user: string;
    rewardsToken: string;
    reward: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakedEvent {
  export type InputTuple = [tokenId: BigNumberish, amount: BigNumberish];
  export type OutputTuple = [tokenId: bigint, amount: bigint];
  export interface OutputObject {
    tokenId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [tokenId: BigNumberish, amount: BigNumberish];
  export type OutputTuple = [tokenId: bigint, amount: bigint];
  export interface OutputObject {
    tokenId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Bribe extends BaseContract {
  connect(runner?: ContractRunner | null): Bribe;
  waitForDeployment(): Promise<this>;

  interface: BribeInterface;

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

  TYPE: TypedContractMethod<[], [string], "view">;

  WEEK: TypedContractMethod<[], [bigint], "view">;

  _deposit: TypedContractMethod<
    [amount: BigNumberish, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  _totalSupply: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  _withdraw: TypedContractMethod<
    [amount: BigNumberish, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  addReward: TypedContractMethod<
    [_rewardsToken: AddressLike],
    [void],
    "nonpayable"
  >;

  addRewardToken: TypedContractMethod<
    [_token: AddressLike],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[tokenId: BigNumberish], [bigint], "view">;

  balanceOfAt: TypedContractMethod<
    [tokenId: BigNumberish, _timestamp: BigNumberish],
    [bigint],
    "view"
  >;

  bribeFactory: TypedContractMethod<[], [string], "view">;

  earned: TypedContractMethod<
    [tokenId: BigNumberish, _rewardToken: AddressLike],
    [bigint],
    "view"
  >;

  firstBribeTimestamp: TypedContractMethod<[], [bigint], "view">;

  getEpochStart: TypedContractMethod<[], [bigint], "view">;

  getNextEpochStart: TypedContractMethod<[], [bigint], "view">;

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

  isRewardToken: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  minter: TypedContractMethod<[], [string], "view">;

  notifyRewardAmount: TypedContractMethod<
    [_rewardsToken: AddressLike, reward: BigNumberish],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  recoverERC20: TypedContractMethod<
    [tokenAddress: AddressLike, tokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  rewardData: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        periodFinish: bigint;
        rewardsPerEpoch: bigint;
        lastUpdateTime: bigint;
      }
    ],
    "view"
  >;

  rewardPerToken: TypedContractMethod<
    [_rewardsToken: AddressLike, _timestmap: BigNumberish],
    [bigint],
    "view"
  >;

  rewardTokens: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  rewardsListLength: TypedContractMethod<[], [bigint], "view">;

  setMinter: TypedContractMethod<[_minter: AddressLike], [void], "nonpayable">;

  setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  setVoter: TypedContractMethod<[_Voter: AddressLike], [void], "nonpayable">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  totalSupplyAt: TypedContractMethod<
    [_timestamp: BigNumberish],
    [bigint],
    "view"
  >;

  userRewardPerTokenPaid: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;

  userTimestamp: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;

  ve: TypedContractMethod<[], [string], "view">;

  voter: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "TYPE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WEEK"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_deposit"
  ): TypedContractMethod<
    [amount: BigNumberish, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "_totalSupply"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "_withdraw"
  ): TypedContractMethod<
    [amount: BigNumberish, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addReward"
  ): TypedContractMethod<[_rewardsToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addRewardToken"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[tokenId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "balanceOfAt"
  ): TypedContractMethod<
    [tokenId: BigNumberish, _timestamp: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "bribeFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "earned"
  ): TypedContractMethod<
    [tokenId: BigNumberish, _rewardToken: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "firstBribeTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getEpochStart"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getNextEpochStart"
  ): TypedContractMethod<[], [bigint], "view">;
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
    nameOrSignature: "isRewardToken"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "minter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "notifyRewardAmount"
  ): TypedContractMethod<
    [_rewardsToken: AddressLike, reward: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "recoverERC20"
  ): TypedContractMethod<
    [tokenAddress: AddressLike, tokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardData"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        periodFinish: bigint;
        rewardsPerEpoch: bigint;
        lastUpdateTime: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "rewardPerToken"
  ): TypedContractMethod<
    [_rewardsToken: AddressLike, _timestmap: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "rewardTokens"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "rewardsListLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setMinter"
  ): TypedContractMethod<[_minter: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVoter"
  ): TypedContractMethod<[_Voter: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupplyAt"
  ): TypedContractMethod<[_timestamp: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "userRewardPerTokenPaid"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "userTimestamp"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(nameOrSignature: "ve"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "voter"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Recovered"
  ): TypedContractEvent<
    RecoveredEvent.InputTuple,
    RecoveredEvent.OutputTuple,
    RecoveredEvent.OutputObject
  >;
  getEvent(
    key: "RewardAdded"
  ): TypedContractEvent<
    RewardAddedEvent.InputTuple,
    RewardAddedEvent.OutputTuple,
    RewardAddedEvent.OutputObject
  >;
  getEvent(
    key: "RewardPaid"
  ): TypedContractEvent<
    RewardPaidEvent.InputTuple,
    RewardPaidEvent.OutputTuple,
    RewardPaidEvent.OutputObject
  >;
  getEvent(
    key: "Staked"
  ): TypedContractEvent<
    StakedEvent.InputTuple,
    StakedEvent.OutputTuple,
    StakedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "Recovered(address,uint256)": TypedContractEvent<
      RecoveredEvent.InputTuple,
      RecoveredEvent.OutputTuple,
      RecoveredEvent.OutputObject
    >;
    Recovered: TypedContractEvent<
      RecoveredEvent.InputTuple,
      RecoveredEvent.OutputTuple,
      RecoveredEvent.OutputObject
    >;

    "RewardAdded(address,uint256,uint256)": TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;
    RewardAdded: TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;

    "RewardPaid(address,address,uint256)": TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;
    RewardPaid: TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;

    "Staked(uint256,uint256)": TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;
    Staked: TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;

    "Withdrawn(uint256,uint256)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
  };
}
