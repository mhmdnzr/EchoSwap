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

export declare namespace Pair {
  export type ObservationStruct = {
    timestamp: BigNumberish;
    reserve0Cumulative: BigNumberish;
    reserve1Cumulative: BigNumberish;
  };

  export type ObservationStructOutput = [
    timestamp: bigint,
    reserve0Cumulative: bigint,
    reserve1Cumulative: bigint
  ] & {
    timestamp: bigint;
    reserve0Cumulative: bigint;
    reserve1Cumulative: bigint;
  };
}

export interface PairInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "allowance"
      | "approve"
      | "balanceOf"
      | "blockTimestampLast"
      | "burn"
      | "claimFees"
      | "claimStakingFees"
      | "claimable0"
      | "claimable1"
      | "current"
      | "currentCumulativePrices"
      | "decimals"
      | "fees"
      | "getAmountOut"
      | "getReserves"
      | "index0"
      | "index1"
      | "isStable"
      | "lastObservation"
      | "metadata"
      | "mint"
      | "name"
      | "nonces"
      | "observationLength"
      | "observations"
      | "permit"
      | "prices"
      | "quote"
      | "reserve0"
      | "reserve0CumulativeLast"
      | "reserve1"
      | "reserve1CumulativeLast"
      | "sample"
      | "skim"
      | "stable"
      | "supplyIndex0"
      | "supplyIndex1"
      | "swap"
      | "symbol"
      | "sync"
      | "token0"
      | "token1"
      | "tokens"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "Burn"
      | "Claim"
      | "Fees"
      | "Mint"
      | "Swap"
      | "Sync"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "blockTimestampLast",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimStakingFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimable0",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable1",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "current",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentCumulativePrices",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "fees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "index0", values?: undefined): string;
  encodeFunctionData(functionFragment: "index1", values?: undefined): string;
  encodeFunctionData(functionFragment: "isStable", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastObservation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "metadata", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "observationLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "observations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "prices",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quote",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "reserve0", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reserve0CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "reserve1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reserve1CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sample",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "skim", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "stable", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supplyIndex0",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supplyIndex1",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [BigNumberish, BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "sync", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokens", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blockTimestampLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimStakingFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimable0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimable1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "current", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentCumulativePrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "index0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "index1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isStable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastObservation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "observationLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "observations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reserve0", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reserve0CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reserve1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reserve1CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sample", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supplyIndex0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplyIndex1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, amount: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnEvent {
  export type InputTuple = [
    sender: AddressLike,
    amount0: BigNumberish,
    amount1: BigNumberish,
    to: AddressLike
  ];
  export type OutputTuple = [
    sender: string,
    amount0: bigint,
    amount1: bigint,
    to: string
  ];
  export interface OutputObject {
    sender: string;
    amount0: bigint;
    amount1: bigint;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimEvent {
  export type InputTuple = [
    sender: AddressLike,
    recipient: AddressLike,
    amount0: BigNumberish,
    amount1: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    recipient: string,
    amount0: bigint,
    amount1: bigint
  ];
  export interface OutputObject {
    sender: string;
    recipient: string;
    amount0: bigint;
    amount1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesEvent {
  export type InputTuple = [
    sender: AddressLike,
    amount0: BigNumberish,
    amount1: BigNumberish
  ];
  export type OutputTuple = [sender: string, amount0: bigint, amount1: bigint];
  export interface OutputObject {
    sender: string;
    amount0: bigint;
    amount1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintEvent {
  export type InputTuple = [
    sender: AddressLike,
    amount0: BigNumberish,
    amount1: BigNumberish
  ];
  export type OutputTuple = [sender: string, amount0: bigint, amount1: bigint];
  export interface OutputObject {
    sender: string;
    amount0: bigint;
    amount1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwapEvent {
  export type InputTuple = [
    sender: AddressLike,
    amount0In: BigNumberish,
    amount1In: BigNumberish,
    amount0Out: BigNumberish,
    amount1Out: BigNumberish,
    to: AddressLike
  ];
  export type OutputTuple = [
    sender: string,
    amount0In: bigint,
    amount1In: bigint,
    amount0Out: bigint,
    amount1Out: bigint,
    to: string
  ];
  export interface OutputObject {
    sender: string;
    amount0In: bigint;
    amount1In: bigint;
    amount0Out: bigint;
    amount1Out: bigint;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SyncEvent {
  export type InputTuple = [reserve0: BigNumberish, reserve1: BigNumberish];
  export type OutputTuple = [reserve0: bigint, reserve1: bigint];
  export interface OutputObject {
    reserve0: bigint;
    reserve1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, amount: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Pair extends BaseContract {
  connect(runner?: ContractRunner | null): Pair;
  waitForDeployment(): Promise<this>;

  interface: PairInterface;

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

  allowance: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  blockTimestampLast: TypedContractMethod<[], [bigint], "view">;

  burn: TypedContractMethod<
    [to: AddressLike],
    [[bigint, bigint] & { amount0: bigint; amount1: bigint }],
    "nonpayable"
  >;

  claimFees: TypedContractMethod<
    [],
    [[bigint, bigint] & { claimed0: bigint; claimed1: bigint }],
    "nonpayable"
  >;

  claimStakingFees: TypedContractMethod<[], [void], "nonpayable">;

  claimable0: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  claimable1: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  current: TypedContractMethod<
    [tokenIn: AddressLike, amountIn: BigNumberish],
    [bigint],
    "view"
  >;

  currentCumulativePrices: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        reserve0Cumulative: bigint;
        reserve1Cumulative: bigint;
        blockTimestamp: bigint;
      }
    ],
    "view"
  >;

  decimals: TypedContractMethod<[], [bigint], "view">;

  fees: TypedContractMethod<[], [string], "view">;

  getAmountOut: TypedContractMethod<
    [amountIn: BigNumberish, tokenIn: AddressLike],
    [bigint],
    "view"
  >;

  getReserves: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _reserve0: bigint;
        _reserve1: bigint;
        _blockTimestampLast: bigint;
      }
    ],
    "view"
  >;

  index0: TypedContractMethod<[], [bigint], "view">;

  index1: TypedContractMethod<[], [bigint], "view">;

  isStable: TypedContractMethod<[], [boolean], "view">;

  lastObservation: TypedContractMethod<
    [],
    [Pair.ObservationStructOutput],
    "view"
  >;

  metadata: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, boolean, string, string] & {
        dec0: bigint;
        dec1: bigint;
        r0: bigint;
        r1: bigint;
        st: boolean;
        t0: string;
        t1: string;
      }
    ],
    "view"
  >;

  mint: TypedContractMethod<[to: AddressLike], [bigint], "nonpayable">;

  name: TypedContractMethod<[], [string], "view">;

  nonces: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  observationLength: TypedContractMethod<[], [bigint], "view">;

  observations: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        timestamp: bigint;
        reserve0Cumulative: bigint;
        reserve1Cumulative: bigint;
      }
    ],
    "view"
  >;

  permit: TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  prices: TypedContractMethod<
    [tokenIn: AddressLike, amountIn: BigNumberish, points: BigNumberish],
    [bigint[]],
    "view"
  >;

  quote: TypedContractMethod<
    [tokenIn: AddressLike, amountIn: BigNumberish, granularity: BigNumberish],
    [bigint],
    "view"
  >;

  reserve0: TypedContractMethod<[], [bigint], "view">;

  reserve0CumulativeLast: TypedContractMethod<[], [bigint], "view">;

  reserve1: TypedContractMethod<[], [bigint], "view">;

  reserve1CumulativeLast: TypedContractMethod<[], [bigint], "view">;

  sample: TypedContractMethod<
    [
      tokenIn: AddressLike,
      amountIn: BigNumberish,
      points: BigNumberish,
      window: BigNumberish
    ],
    [bigint[]],
    "view"
  >;

  skim: TypedContractMethod<[to: AddressLike], [void], "nonpayable">;

  stable: TypedContractMethod<[], [boolean], "view">;

  supplyIndex0: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  supplyIndex1: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  swap: TypedContractMethod<
    [
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  sync: TypedContractMethod<[], [void], "nonpayable">;

  token0: TypedContractMethod<[], [string], "view">;

  token1: TypedContractMethod<[], [string], "view">;

  tokens: TypedContractMethod<[], [[string, string]], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [dst: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [src: AddressLike, dst: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "blockTimestampLast"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [to: AddressLike],
    [[bigint, bigint] & { amount0: bigint; amount1: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimFees"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { claimed0: bigint; claimed1: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimStakingFees"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimable0"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimable1"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "current"
  ): TypedContractMethod<
    [tokenIn: AddressLike, amountIn: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "currentCumulativePrices"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        reserve0Cumulative: bigint;
        reserve1Cumulative: bigint;
        blockTimestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fees"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAmountOut"
  ): TypedContractMethod<
    [amountIn: BigNumberish, tokenIn: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReserves"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _reserve0: bigint;
        _reserve1: bigint;
        _blockTimestampLast: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "index0"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "index1"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isStable"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastObservation"
  ): TypedContractMethod<[], [Pair.ObservationStructOutput], "view">;
  getFunction(
    nameOrSignature: "metadata"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, boolean, string, string] & {
        dec0: bigint;
        dec1: bigint;
        r0: bigint;
        r1: bigint;
        st: boolean;
        t0: string;
        t1: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<[to: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "observationLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "observations"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        timestamp: bigint;
        reserve0Cumulative: bigint;
        reserve1Cumulative: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "permit"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "prices"
  ): TypedContractMethod<
    [tokenIn: AddressLike, amountIn: BigNumberish, points: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "quote"
  ): TypedContractMethod<
    [tokenIn: AddressLike, amountIn: BigNumberish, granularity: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "reserve0"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "reserve0CumulativeLast"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "reserve1"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "reserve1CumulativeLast"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sample"
  ): TypedContractMethod<
    [
      tokenIn: AddressLike,
      amountIn: BigNumberish,
      points: BigNumberish,
      window: BigNumberish
    ],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "skim"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stable"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "supplyIndex0"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "supplyIndex1"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sync"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "token0"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "token1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokens"
  ): TypedContractMethod<[], [[string, string]], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [dst: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [src: AddressLike, dst: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Burn"
  ): TypedContractEvent<
    BurnEvent.InputTuple,
    BurnEvent.OutputTuple,
    BurnEvent.OutputObject
  >;
  getEvent(
    key: "Claim"
  ): TypedContractEvent<
    ClaimEvent.InputTuple,
    ClaimEvent.OutputTuple,
    ClaimEvent.OutputObject
  >;
  getEvent(
    key: "Fees"
  ): TypedContractEvent<
    FeesEvent.InputTuple,
    FeesEvent.OutputTuple,
    FeesEvent.OutputObject
  >;
  getEvent(
    key: "Mint"
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;
  getEvent(
    key: "Swap"
  ): TypedContractEvent<
    SwapEvent.InputTuple,
    SwapEvent.OutputTuple,
    SwapEvent.OutputObject
  >;
  getEvent(
    key: "Sync"
  ): TypedContractEvent<
    SyncEvent.InputTuple,
    SyncEvent.OutputTuple,
    SyncEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "Burn(address,uint256,uint256,address)": TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;
    Burn: TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;

    "Claim(address,address,uint256,uint256)": TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;
    Claim: TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;

    "Fees(address,uint256,uint256)": TypedContractEvent<
      FeesEvent.InputTuple,
      FeesEvent.OutputTuple,
      FeesEvent.OutputObject
    >;
    Fees: TypedContractEvent<
      FeesEvent.InputTuple,
      FeesEvent.OutputTuple,
      FeesEvent.OutputObject
    >;

    "Mint(address,uint256,uint256)": TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;

    "Swap(address,uint256,uint256,uint256,uint256,address)": TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
    Swap: TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;

    "Sync(uint256,uint256)": TypedContractEvent<
      SyncEvent.InputTuple,
      SyncEvent.OutputTuple,
      SyncEvent.OutputObject
    >;
    Sync: TypedContractEvent<
      SyncEvent.InputTuple,
      SyncEvent.OutputTuple,
      SyncEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}