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

export interface MinterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_TEAM_RATE"
      | "_echo"
      | "_rewards_distributor"
      | "_ve"
      | "_voter"
      | "acceptTeam"
      | "active_period"
      | "calculate_emission"
      | "calculate_rebase"
      | "check"
      | "circulating_emission"
      | "circulating_supply"
      | "initialize"
      | "isFirstMint"
      | "pendingTeam"
      | "period"
      | "setEmission"
      | "setRebase"
      | "setTeam"
      | "setTeamRate"
      | "setVoter"
      | "team"
      | "teamRate"
      | "update_period"
      | "weekly"
      | "weekly_emission"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;

  encodeFunctionData(
    functionFragment: "MAX_TEAM_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_echo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_rewards_distributor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
  encodeFunctionData(functionFragment: "_voter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptTeam",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "active_period",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculate_emission",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculate_rebase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "check", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "circulating_emission",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "circulating_supply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isFirstMint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingTeam",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "period", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setEmission",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRebase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTeam",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTeamRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setVoter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "team", values?: undefined): string;
  encodeFunctionData(functionFragment: "teamRate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "update_period",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "weekly", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "weekly_emission",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_TEAM_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_echo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_rewards_distributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_voter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "acceptTeam", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "active_period",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculate_emission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculate_rebase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "check", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "circulating_emission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "circulating_supply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isFirstMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingTeam",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "period", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setEmission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRebase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTeam", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTeamRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVoter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "team", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "teamRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "update_period",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weekly", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "weekly_emission",
    data: BytesLike
  ): Result;
}

export namespace MintEvent {
  export type InputTuple = [
    sender: AddressLike,
    weekly: BigNumberish,
    circulating_supply: BigNumberish,
    circulating_emission: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    weekly: bigint,
    circulating_supply: bigint,
    circulating_emission: bigint
  ];
  export interface OutputObject {
    sender: string;
    weekly: bigint;
    circulating_supply: bigint;
    circulating_emission: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Minter extends BaseContract {
  connect(runner?: ContractRunner | null): Minter;
  waitForDeployment(): Promise<this>;

  interface: MinterInterface;

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

  MAX_TEAM_RATE: TypedContractMethod<[], [bigint], "view">;

  _echo: TypedContractMethod<[], [string], "view">;

  _rewards_distributor: TypedContractMethod<[], [string], "view">;

  _ve: TypedContractMethod<[], [string], "view">;

  _voter: TypedContractMethod<[], [string], "view">;

  acceptTeam: TypedContractMethod<[], [void], "nonpayable">;

  active_period: TypedContractMethod<[], [bigint], "view">;

  calculate_emission: TypedContractMethod<[], [bigint], "view">;

  calculate_rebase: TypedContractMethod<
    [_weeklyMint: BigNumberish],
    [bigint],
    "view"
  >;

  check: TypedContractMethod<[], [boolean], "view">;

  circulating_emission: TypedContractMethod<[], [bigint], "view">;

  circulating_supply: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [claimants: AddressLike[], amounts: BigNumberish[], max: BigNumberish],
    [void],
    "nonpayable"
  >;

  isFirstMint: TypedContractMethod<[], [boolean], "view">;

  pendingTeam: TypedContractMethod<[], [string], "view">;

  period: TypedContractMethod<[], [bigint], "view">;

  setEmission: TypedContractMethod<
    [_emission: BigNumberish],
    [void],
    "nonpayable"
  >;

  setRebase: TypedContractMethod<[_rebase: BigNumberish], [void], "nonpayable">;

  setTeam: TypedContractMethod<[_team: AddressLike], [void], "nonpayable">;

  setTeamRate: TypedContractMethod<
    [_teamRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setVoter: TypedContractMethod<[__voter: AddressLike], [void], "nonpayable">;

  team: TypedContractMethod<[], [string], "view">;

  teamRate: TypedContractMethod<[], [bigint], "view">;

  update_period: TypedContractMethod<[], [bigint], "nonpayable">;

  weekly: TypedContractMethod<[], [bigint], "view">;

  weekly_emission: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_TEAM_RATE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_echo"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_rewards_distributor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_ve"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_voter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "acceptTeam"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "active_period"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calculate_emission"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calculate_rebase"
  ): TypedContractMethod<[_weeklyMint: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "check"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "circulating_emission"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "circulating_supply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [claimants: AddressLike[], amounts: BigNumberish[], max: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isFirstMint"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "pendingTeam"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "period"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setEmission"
  ): TypedContractMethod<[_emission: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRebase"
  ): TypedContractMethod<[_rebase: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setTeam"
  ): TypedContractMethod<[_team: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setTeamRate"
  ): TypedContractMethod<[_teamRate: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVoter"
  ): TypedContractMethod<[__voter: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "team"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "teamRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "update_period"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "weekly"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "weekly_emission"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Mint"
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;

  filters: {
    "Mint(address,uint256,uint256,uint256)": TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
  };
}