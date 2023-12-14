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

export interface IRewardsDistributorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "checkpoint_token"
      | "checkpoint_total_supply"
      | "claimable"
      | "voting_escrow"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkpoint_token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoint_total_supply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimable",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voting_escrow",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "checkpoint_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkpoint_total_supply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "voting_escrow",
    data: BytesLike
  ): Result;
}

export interface IRewardsDistributor extends BaseContract {
  connect(runner?: ContractRunner | null): IRewardsDistributor;
  waitForDeployment(): Promise<this>;

  interface: IRewardsDistributorInterface;

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

  checkpoint_token: TypedContractMethod<[], [void], "nonpayable">;

  checkpoint_total_supply: TypedContractMethod<[], [void], "nonpayable">;

  claimable: TypedContractMethod<[_tokenId: BigNumberish], [bigint], "view">;

  voting_escrow: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "checkpoint_token"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkpoint_total_supply"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimable"
  ): TypedContractMethod<[_tokenId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "voting_escrow"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}