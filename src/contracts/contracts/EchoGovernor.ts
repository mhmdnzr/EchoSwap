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

export interface EchoGovernorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BALLOT_TYPEHASH"
      | "COUNTING_MODE"
      | "EXTENDED_BALLOT_TYPEHASH"
      | "MAX_PROPOSAL_NUMERATOR"
      | "PROPOSAL_DENOMINATOR"
      | "castVote"
      | "castVoteBySig"
      | "castVoteWithReason"
      | "castVoteWithReasonAndParams"
      | "castVoteWithReasonAndParamsBySig"
      | "execute"
      | "getVotes"
      | "getVotesWithParams"
      | "hasVoted"
      | "hashProposal"
      | "name"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "proposalDeadline"
      | "proposalNumerator"
      | "proposalSnapshot"
      | "proposalThreshold"
      | "proposalVotes"
      | "propose"
      | "quorum"
      | "quorumDenominator"
      | "quorumNumerator"
      | "relay"
      | "setProposalNumerator"
      | "setTeam"
      | "state"
      | "supportsInterface"
      | "team"
      | "token"
      | "updateQuorumNumerator"
      | "version"
      | "votingDelay"
      | "votingPeriod"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ProposalCanceled"
      | "ProposalCreated"
      | "ProposalExecuted"
      | "QuorumNumeratorUpdated"
      | "VoteCast"
      | "VoteCastWithParams"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BALLOT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COUNTING_MODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXTENDED_BALLOT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_PROPOSAL_NUMERATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROPOSAL_DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteBySig",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteWithReason",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteWithReasonAndParams",
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteWithReasonAndParamsBySig",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      BytesLike,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotesWithParams",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasVoted",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hashProposal",
    values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalDeadline",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalSnapshot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalVotes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [AddressLike[], BigNumberish[], BytesLike[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "quorum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quorumDenominator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quorumNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relay",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setProposalNumerator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTeam",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "team", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateQuorumNumerator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "votingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriod",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BALLOT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COUNTING_MODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXTENDED_BALLOT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_PROPOSAL_NUMERATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROPOSAL_DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "castVoteBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "castVoteWithReason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "castVoteWithReasonAndParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "castVoteWithReasonAndParamsBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVotesWithParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quorumDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quorumNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProposalNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTeam", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "team", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateQuorumNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPeriod",
    data: BytesLike
  ): Result;
}

export namespace ProposalCanceledEvent {
  export type InputTuple = [proposalId: BigNumberish];
  export type OutputTuple = [proposalId: bigint];
  export interface OutputObject {
    proposalId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalCreatedEvent {
  export type InputTuple = [
    proposalId: BigNumberish,
    proposer: AddressLike,
    targets: AddressLike[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    startBlock: BigNumberish,
    endBlock: BigNumberish,
    description: string
  ];
  export type OutputTuple = [
    proposalId: bigint,
    proposer: string,
    targets: string[],
    values: bigint[],
    signatures: string[],
    calldatas: string[],
    startBlock: bigint,
    endBlock: bigint,
    description: string
  ];
  export interface OutputObject {
    proposalId: bigint;
    proposer: string;
    targets: string[];
    values: bigint[];
    signatures: string[];
    calldatas: string[];
    startBlock: bigint;
    endBlock: bigint;
    description: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalExecutedEvent {
  export type InputTuple = [proposalId: BigNumberish];
  export type OutputTuple = [proposalId: bigint];
  export interface OutputObject {
    proposalId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuorumNumeratorUpdatedEvent {
  export type InputTuple = [
    oldQuorumNumerator: BigNumberish,
    newQuorumNumerator: BigNumberish
  ];
  export type OutputTuple = [
    oldQuorumNumerator: bigint,
    newQuorumNumerator: bigint
  ];
  export interface OutputObject {
    oldQuorumNumerator: bigint;
    newQuorumNumerator: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteCastEvent {
  export type InputTuple = [
    voter: AddressLike,
    proposalId: BigNumberish,
    support: BigNumberish,
    weight: BigNumberish,
    reason: string
  ];
  export type OutputTuple = [
    voter: string,
    proposalId: bigint,
    support: bigint,
    weight: bigint,
    reason: string
  ];
  export interface OutputObject {
    voter: string;
    proposalId: bigint;
    support: bigint;
    weight: bigint;
    reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteCastWithParamsEvent {
  export type InputTuple = [
    voter: AddressLike,
    proposalId: BigNumberish,
    support: BigNumberish,
    weight: BigNumberish,
    reason: string,
    params: BytesLike
  ];
  export type OutputTuple = [
    voter: string,
    proposalId: bigint,
    support: bigint,
    weight: bigint,
    reason: string,
    params: string
  ];
  export interface OutputObject {
    voter: string;
    proposalId: bigint;
    support: bigint;
    weight: bigint;
    reason: string;
    params: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface EchoGovernor extends BaseContract {
  connect(runner?: ContractRunner | null): EchoGovernor;
  waitForDeployment(): Promise<this>;

  interface: EchoGovernorInterface;

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

  BALLOT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  COUNTING_MODE: TypedContractMethod<[], [string], "view">;

  EXTENDED_BALLOT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  MAX_PROPOSAL_NUMERATOR: TypedContractMethod<[], [bigint], "view">;

  PROPOSAL_DENOMINATOR: TypedContractMethod<[], [bigint], "view">;

  castVote: TypedContractMethod<
    [proposalId: BigNumberish, support: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  castVoteBySig: TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  castVoteWithReason: TypedContractMethod<
    [proposalId: BigNumberish, support: BigNumberish, reason: string],
    [bigint],
    "nonpayable"
  >;

  castVoteWithReasonAndParams: TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      reason: string,
      params: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  castVoteWithReasonAndParamsBySig: TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      reason: string,
      params: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  execute: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "payable"
  >;

  getVotes: TypedContractMethod<
    [account: AddressLike, blockTimestamp: BigNumberish],
    [bigint],
    "view"
  >;

  getVotesWithParams: TypedContractMethod<
    [account: AddressLike, blockTimestamp: BigNumberish, params: BytesLike],
    [bigint],
    "view"
  >;

  hasVoted: TypedContractMethod<
    [proposalId: BigNumberish, account: AddressLike],
    [boolean],
    "view"
  >;

  hashProposal: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "view"
  >;

  name: TypedContractMethod<[], [string], "view">;

  onERC1155BatchReceived: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC1155Received: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;

  proposalDeadline: TypedContractMethod<
    [proposalId: BigNumberish],
    [bigint],
    "view"
  >;

  proposalNumerator: TypedContractMethod<[], [bigint], "view">;

  proposalSnapshot: TypedContractMethod<
    [proposalId: BigNumberish],
    [bigint],
    "view"
  >;

  proposalThreshold: TypedContractMethod<[], [bigint], "view">;

  proposalVotes: TypedContractMethod<
    [proposalId: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        againstVotes: bigint;
        forVotes: bigint;
        abstainVotes: bigint;
      }
    ],
    "view"
  >;

  propose: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      description: string
    ],
    [bigint],
    "nonpayable"
  >;

  quorum: TypedContractMethod<[blockTimestamp: BigNumberish], [bigint], "view">;

  quorumDenominator: TypedContractMethod<[], [bigint], "view">;

  quorumNumerator: TypedContractMethod<[], [bigint], "view">;

  relay: TypedContractMethod<
    [target: AddressLike, value: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  setProposalNumerator: TypedContractMethod<
    [numerator: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTeam: TypedContractMethod<[newTeam: AddressLike], [void], "nonpayable">;

  state: TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  team: TypedContractMethod<[], [string], "view">;

  token: TypedContractMethod<[], [string], "view">;

  updateQuorumNumerator: TypedContractMethod<
    [newQuorumNumerator: BigNumberish],
    [void],
    "nonpayable"
  >;

  version: TypedContractMethod<[], [string], "view">;

  votingDelay: TypedContractMethod<[], [bigint], "view">;

  votingPeriod: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BALLOT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "COUNTING_MODE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "EXTENDED_BALLOT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MAX_PROPOSAL_NUMERATOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PROPOSAL_DENOMINATOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "castVote"
  ): TypedContractMethod<
    [proposalId: BigNumberish, support: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteBySig"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteWithReason"
  ): TypedContractMethod<
    [proposalId: BigNumberish, support: BigNumberish, reason: string],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteWithReasonAndParams"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      reason: string,
      params: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteWithReasonAndParamsBySig"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      reason: string,
      params: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getVotes"
  ): TypedContractMethod<
    [account: AddressLike, blockTimestamp: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVotesWithParams"
  ): TypedContractMethod<
    [account: AddressLike, blockTimestamp: BigNumberish, params: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasVoted"
  ): TypedContractMethod<
    [proposalId: BigNumberish, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashProposal"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "proposalDeadline"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalNumerator"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalSnapshot"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalThreshold"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalVotes"
  ): TypedContractMethod<
    [proposalId: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        againstVotes: bigint;
        forVotes: bigint;
        abstainVotes: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "propose"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      description: string
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "quorum"
  ): TypedContractMethod<[blockTimestamp: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "quorumDenominator"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "quorumNumerator"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "relay"
  ): TypedContractMethod<
    [target: AddressLike, value: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setProposalNumerator"
  ): TypedContractMethod<[numerator: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setTeam"
  ): TypedContractMethod<[newTeam: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "state"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "team"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "updateQuorumNumerator"
  ): TypedContractMethod<
    [newQuorumNumerator: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "votingDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "votingPeriod"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "ProposalCanceled"
  ): TypedContractEvent<
    ProposalCanceledEvent.InputTuple,
    ProposalCanceledEvent.OutputTuple,
    ProposalCanceledEvent.OutputObject
  >;
  getEvent(
    key: "ProposalCreated"
  ): TypedContractEvent<
    ProposalCreatedEvent.InputTuple,
    ProposalCreatedEvent.OutputTuple,
    ProposalCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProposalExecuted"
  ): TypedContractEvent<
    ProposalExecutedEvent.InputTuple,
    ProposalExecutedEvent.OutputTuple,
    ProposalExecutedEvent.OutputObject
  >;
  getEvent(
    key: "QuorumNumeratorUpdated"
  ): TypedContractEvent<
    QuorumNumeratorUpdatedEvent.InputTuple,
    QuorumNumeratorUpdatedEvent.OutputTuple,
    QuorumNumeratorUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "VoteCast"
  ): TypedContractEvent<
    VoteCastEvent.InputTuple,
    VoteCastEvent.OutputTuple,
    VoteCastEvent.OutputObject
  >;
  getEvent(
    key: "VoteCastWithParams"
  ): TypedContractEvent<
    VoteCastWithParamsEvent.InputTuple,
    VoteCastWithParamsEvent.OutputTuple,
    VoteCastWithParamsEvent.OutputObject
  >;

  filters: {
    "ProposalCanceled(uint256)": TypedContractEvent<
      ProposalCanceledEvent.InputTuple,
      ProposalCanceledEvent.OutputTuple,
      ProposalCanceledEvent.OutputObject
    >;
    ProposalCanceled: TypedContractEvent<
      ProposalCanceledEvent.InputTuple,
      ProposalCanceledEvent.OutputTuple,
      ProposalCanceledEvent.OutputObject
    >;

    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;
    ProposalCreated: TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;

    "ProposalExecuted(uint256)": TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;
    ProposalExecuted: TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;

    "QuorumNumeratorUpdated(uint256,uint256)": TypedContractEvent<
      QuorumNumeratorUpdatedEvent.InputTuple,
      QuorumNumeratorUpdatedEvent.OutputTuple,
      QuorumNumeratorUpdatedEvent.OutputObject
    >;
    QuorumNumeratorUpdated: TypedContractEvent<
      QuorumNumeratorUpdatedEvent.InputTuple,
      QuorumNumeratorUpdatedEvent.OutputTuple,
      QuorumNumeratorUpdatedEvent.OutputObject
    >;

    "VoteCast(address,uint256,uint8,uint256,string)": TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;
    VoteCast: TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;

    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)": TypedContractEvent<
      VoteCastWithParamsEvent.InputTuple,
      VoteCastWithParamsEvent.OutputTuple,
      VoteCastWithParamsEvent.OutputObject
    >;
    VoteCastWithParams: TypedContractEvent<
      VoteCastWithParamsEvent.InputTuple,
      VoteCastWithParamsEvent.OutputTuple,
      VoteCastWithParamsEvent.OutputObject
    >;
  };
}
