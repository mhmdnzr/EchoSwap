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

export declare namespace IVotingEscrow {
  export type LockedBalanceStruct = { amount: BigNumberish; end: BigNumberish };

  export type LockedBalanceStructOutput = [amount: bigint, end: bigint] & {
    amount: bigint;
    end: bigint;
  };

  export type PointStruct = {
    bias: BigNumberish;
    slope: BigNumberish;
    ts: BigNumberish;
    blk: BigNumberish;
  };

  export type PointStructOutput = [
    bias: bigint,
    slope: bigint,
    ts: bigint,
    blk: bigint
  ] & { bias: bigint; slope: bigint; ts: bigint; blk: bigint };
}

export interface IVotingEscrowInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "abstain"
      | "attach"
      | "attachments"
      | "balanceOf"
      | "balanceOfNFT"
      | "checkpoint"
      | "create_lock_for"
      | "decimals"
      | "deposit_for"
      | "detach"
      | "epoch"
      | "isApprovedOrOwner"
      | "locked"
      | "ownerOf"
      | "point_history"
      | "supply"
      | "team"
      | "token"
      | "tokenOfOwnerByIndex"
      | "totalSupply"
      | "transferFrom"
      | "user_point_epoch"
      | "user_point_history"
      | "voted"
      | "voting"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "abstain",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "attach",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "attachments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "create_lock_for",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit_for",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "detach",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isApprovedOrOwner",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "locked",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "point_history",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "supply", values?: undefined): string;
  encodeFunctionData(functionFragment: "team", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "user_point_epoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "user_point_history",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "voted", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "voting",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "abstain", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "attach", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "attachments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "create_lock_for",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit_for",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "detach", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedOrOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "point_history",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "team", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_point_epoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_point_history",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "voted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voting", data: BytesLike): Result;
}

// @ts-ignore
export interface IVotingEscrow extends BaseContract {
  connect(runner?: ContractRunner | null): IVotingEscrow;
  waitForDeployment(): Promise<this>;

  interface: IVotingEscrowInterface;

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

  abstain: TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;

  attach: TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;

  attachments: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  balanceOf: TypedContractMethod<[_owner: AddressLike], [bigint], "view">;

  balanceOfNFT: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  checkpoint: TypedContractMethod<[], [void], "nonpayable">;

  create_lock_for: TypedContractMethod<
    [_value: BigNumberish, _lock_duration: BigNumberish, _to: AddressLike],
    [bigint],
    "nonpayable"
  >;

  decimals: TypedContractMethod<[], [bigint], "view">;

  deposit_for: TypedContractMethod<
    [tokenId: BigNumberish, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  detach: TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;

  epoch: TypedContractMethod<[], [bigint], "view">;

  isApprovedOrOwner: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "view"
  >;

  locked: TypedContractMethod<
    [id: BigNumberish],
    [IVotingEscrow.LockedBalanceStructOutput],
    "view"
  >;

  ownerOf: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  point_history: TypedContractMethod<
    [loc: BigNumberish],
    [IVotingEscrow.PointStructOutput],
    "view"
  >;

  supply: TypedContractMethod<[], [bigint], "view">;

  team: TypedContractMethod<[], [string], "nonpayable">;

  token: TypedContractMethod<[], [string], "view">;

  tokenOfOwnerByIndex: TypedContractMethod<
    [_owner: AddressLike, _tokenIndex: BigNumberish],
    [bigint],
    "view"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferFrom: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [void],
    "nonpayable"
  >;

  user_point_epoch: TypedContractMethod<
    [tokenId: BigNumberish],
    [bigint],
    "view"
  >;

  user_point_history: TypedContractMethod<
    [tokenId: BigNumberish, loc: BigNumberish],
    [IVotingEscrow.PointStructOutput],
    "view"
  >;

  voted: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

  voting: TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "abstain"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "attach"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "attachments"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[_owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "balanceOfNFT"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "checkpoint"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "create_lock_for"
  ): TypedContractMethod<
    [_value: BigNumberish, _lock_duration: BigNumberish, _to: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit_for"
  ): TypedContractMethod<
    [tokenId: BigNumberish, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "detach"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "epoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isApprovedOrOwner"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "locked"
  ): TypedContractMethod<
    [id: BigNumberish],
    [IVotingEscrow.LockedBalanceStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "ownerOf"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "point_history"
  ): TypedContractMethod<
    [loc: BigNumberish],
    [IVotingEscrow.PointStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "supply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "team"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenOfOwnerByIndex"
  ): TypedContractMethod<
    [_owner: AddressLike, _tokenIndex: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "user_point_epoch"
  ): TypedContractMethod<[tokenId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "user_point_history"
  ): TypedContractMethod<
    [tokenId: BigNumberish, loc: BigNumberish],
    [IVotingEscrow.PointStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "voted"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "voting"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;

  filters: {};
}
