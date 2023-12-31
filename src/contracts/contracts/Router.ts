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

export declare namespace Router {
  export type RouteStruct = {
    from: AddressLike;
    to: AddressLike;
    stable: boolean;
  };

  export type RouteStructOutput = [
    from: string,
    to: string,
    stable: boolean
  ] & { from: string; to: string; stable: boolean };
}

export interface RouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addLiquidity"
      | "addLiquidityETH"
      | "factory"
      | "getAmountOut"
      | "getAmountsOut"
      | "getReserves"
      | "isPair"
      | "pairFor"
      | "quoteAddLiquidity"
      | "quoteRemoveLiquidity"
      | "removeLiquidity"
      | "removeLiquidityETH"
      | "removeLiquidityETHWithPermit"
      | "removeLiquidityWithPermit"
      | "sortTokens"
      | "swapExactETHForTokens"
      | "swapExactTokensForETH"
      | "swapExactTokensForTokens"
      | "swapExactTokensForTokensSimple"
      | "weth"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      AddressLike,
      AddressLike,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityETH",
    values: [
      AddressLike,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [BigNumberish, Router.RouteStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values: [AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "isPair", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "pairFor",
    values: [AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteAddLiquidity",
    values: [AddressLike, AddressLike, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteRemoveLiquidity",
    values: [AddressLike, AddressLike, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [
      AddressLike,
      AddressLike,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityETH",
    values: [
      AddressLike,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityETHWithPermit",
    values: [
      AddressLike,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      boolean,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityWithPermit",
    values: [
      AddressLike,
      AddressLike,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      boolean,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sortTokens",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactETHForTokens",
    values: [BigNumberish, Router.RouteStruct[], AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForETH",
    values: [
      BigNumberish,
      BigNumberish,
      Router.RouteStruct[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      BigNumberish,
      BigNumberish,
      Router.RouteStruct[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokensSimple",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      boolean,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteAddLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteRemoveLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityETHWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sortTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactETHForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokensSimple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
}

export namespace SwapEvent {
  export type InputTuple = [
    sender: AddressLike,
    amount0In: BigNumberish,
    _tokenIn: AddressLike,
    to: AddressLike
  ];
  export type OutputTuple = [
    sender: string,
    amount0In: bigint,
    _tokenIn: string,
    to: string
  ];
  export interface OutputObject {
    sender: string;
    amount0In: bigint;
    _tokenIn: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Router extends BaseContract {
  connect(runner?: ContractRunner | null): Router;
  waitForDeployment(): Promise<this>;

  interface: RouterInterface;

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

  addLiquidity: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountA: bigint;
        amountB: bigint;
        liquidity: bigint;
      }
    ],
    "nonpayable"
  >;

  addLiquidityETH: TypedContractMethod<
    [
      token: AddressLike,
      stable: boolean,
      amountTokenDesired: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountToken: bigint;
        amountETH: bigint;
        liquidity: bigint;
      }
    ],
    "payable"
  >;

  factory: TypedContractMethod<[], [string], "view">;

  getAmountOut: TypedContractMethod<
    [amountIn: BigNumberish, tokenIn: AddressLike, tokenOut: AddressLike],
    [[bigint, boolean] & { amount: bigint; stable: boolean }],
    "view"
  >;

  getAmountsOut: TypedContractMethod<
    [amountIn: BigNumberish, routes: Router.RouteStruct[]],
    [bigint[]],
    "view"
  >;

  getReserves: TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, stable: boolean],
    [[bigint, bigint] & { reserveA: bigint; reserveB: bigint }],
    "view"
  >;

  isPair: TypedContractMethod<[pair: AddressLike], [boolean], "view">;

  pairFor: TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, stable: boolean],
    [string],
    "view"
  >;

  quoteAddLiquidity: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountA: bigint;
        amountB: bigint;
        liquidity: bigint;
      }
    ],
    "view"
  >;

  quoteRemoveLiquidity: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      liquidity: BigNumberish
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "view"
  >;

  removeLiquidity: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;

  removeLiquidityETH: TypedContractMethod<
    [
      token: AddressLike,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountToken: bigint; amountETH: bigint }],
    "nonpayable"
  >;

  removeLiquidityETHWithPermit: TypedContractMethod<
    [
      token: AddressLike,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [[bigint, bigint] & { amountToken: bigint; amountETH: bigint }],
    "nonpayable"
  >;

  removeLiquidityWithPermit: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;

  sortTokens: TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike],
    [[string, string] & { token0: string; token1: string }],
    "view"
  >;

  swapExactETHForTokens: TypedContractMethod<
    [
      amountOutMin: BigNumberish,
      routes: Router.RouteStruct[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;

  swapExactTokensForETH: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: Router.RouteStruct[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapExactTokensForTokens: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: Router.RouteStruct[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapExactTokensForTokensSimple: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: AddressLike,
      tokenTo: AddressLike,
      stable: boolean,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  weth: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountA: bigint;
        amountB: bigint;
        liquidity: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addLiquidityETH"
  ): TypedContractMethod<
    [
      token: AddressLike,
      stable: boolean,
      amountTokenDesired: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountToken: bigint;
        amountETH: bigint;
        liquidity: bigint;
      }
    ],
    "payable"
  >;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAmountOut"
  ): TypedContractMethod<
    [amountIn: BigNumberish, tokenIn: AddressLike, tokenOut: AddressLike],
    [[bigint, boolean] & { amount: bigint; stable: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAmountsOut"
  ): TypedContractMethod<
    [amountIn: BigNumberish, routes: Router.RouteStruct[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReserves"
  ): TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, stable: boolean],
    [[bigint, bigint] & { reserveA: bigint; reserveB: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "isPair"
  ): TypedContractMethod<[pair: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "pairFor"
  ): TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, stable: boolean],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "quoteAddLiquidity"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountA: bigint;
        amountB: bigint;
        liquidity: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "quoteRemoveLiquidity"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      liquidity: BigNumberish
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityETH"
  ): TypedContractMethod<
    [
      token: AddressLike,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountToken: bigint; amountETH: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityETHWithPermit"
  ): TypedContractMethod<
    [
      token: AddressLike,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [[bigint, bigint] & { amountToken: bigint; amountETH: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityWithPermit"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sortTokens"
  ): TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike],
    [[string, string] & { token0: string; token1: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "swapExactETHForTokens"
  ): TypedContractMethod<
    [
      amountOutMin: BigNumberish,
      routes: Router.RouteStruct[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForETH"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: Router.RouteStruct[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForTokens"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: Router.RouteStruct[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForTokensSimple"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: AddressLike,
      tokenTo: AddressLike,
      stable: boolean,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "weth"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Swap"
  ): TypedContractEvent<
    SwapEvent.InputTuple,
    SwapEvent.OutputTuple,
    SwapEvent.OutputObject
  >;

  filters: {
    "Swap(address,uint256,address,address)": TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
    Swap: TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
  };
}
