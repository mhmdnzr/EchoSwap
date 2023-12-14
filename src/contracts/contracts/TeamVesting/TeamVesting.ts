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

export interface TeamVestingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CLIFF"
      | "LINEAR"
      | "PRECISION"
      | "claimCliff"
      | "claimDistribution"
      | "deposit"
      | "depositors"
      | "hasCliff"
      | "isTeam"
      | "owner"
      | "registerUsers"
      | "setDepositor"
      | "setOwner"
      | "startTimestamp"
      | "teamCount"
      | "token"
      | "totalSupply"
      | "userAmount"
      | "userLastTimestamp"
      | "withdraw()"
      | "withdraw(uint256,address,address)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "CLIFF", values?: undefined): string;
  encodeFunctionData(functionFragment: "LINEAR", values?: undefined): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimCliff",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositors",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasCliff",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isTeam", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerUsers",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "startTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "teamCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userLastTimestamp",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(uint256,address,address)",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "CLIFF", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LINEAR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimCliff", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasCliff", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isTeam", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "teamCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userLastTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(uint256,address,address)",
    data: BytesLike
  ): Result;
}

export interface TeamVesting extends BaseContract {
  connect(runner?: ContractRunner | null): TeamVesting;
  waitForDeployment(): Promise<this>;

  interface: TeamVestingInterface;

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

  CLIFF: TypedContractMethod<[], [bigint], "view">;

  LINEAR: TypedContractMethod<[], [bigint], "view">;

  PRECISION: TypedContractMethod<[], [bigint], "view">;

  claimCliff: TypedContractMethod<[], [void], "nonpayable">;

  claimDistribution: TypedContractMethod<[], [void], "nonpayable">;

  deposit: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  depositors: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  hasCliff: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isTeam: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  registerUsers: TypedContractMethod<
    [_users: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setDepositor: TypedContractMethod<
    [depositor: AddressLike],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  startTimestamp: TypedContractMethod<[], [bigint], "view">;

  teamCount: TypedContractMethod<[], [bigint], "view">;

  token: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  userAmount: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  userLastTimestamp: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  "withdraw()": TypedContractMethod<[], [void], "nonpayable">;

  "withdraw(uint256,address,address)": TypedContractMethod<
    [amount: BigNumberish, _token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CLIFF"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LINEAR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimCliff"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimDistribution"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "depositors"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "hasCliff"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isTeam"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registerUsers"
  ): TypedContractMethod<[_users: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDepositor"
  ): TypedContractMethod<[depositor: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "teamCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "userAmount"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "userLastTimestamp"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw()"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw(uint256,address,address)"
  ): TypedContractMethod<
    [amount: BigNumberish, _token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}