/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  PairAPI,
  PairAPIInterface,
} from "../../../../contracts/APIHelper/PairAPIV2.sol/PairAPI";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "Owner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldVoter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newVoter",
        type: "address",
      },
    ],
    name: "Voter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldWBF",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newWBF",
        type: "address",
      },
    ],
    name: "WBF",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_EPOCHS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_PAIRS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_REWARDS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WEEK",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amounts",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offset",
        type: "uint256",
      },
    ],
    name: "getAllPair",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pair_address",
            type: "address",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "stable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "total_supply",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "string",
            name: "token0_symbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "token0_decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimable0",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "string",
            name: "token1_symbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "token1_decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve1",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimable1",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "gauge",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gauge_total_supply",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "fee",
            type: "address",
          },
          {
            internalType: "address",
            name: "bribe",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "emissions",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "emissions_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "emissions_token_decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_lp_balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_token0_balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_token1_balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_gauge_balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_gauge_earned",
            type: "uint256",
          },
        ],
        internalType: "struct PairAPI.pairInfo[]",
        name: "Pairs",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "getPair",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pair_address",
            type: "address",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "stable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "total_supply",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "string",
            name: "token0_symbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "token0_decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimable0",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "string",
            name: "token1_symbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "token1_decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve1",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimable1",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "gauge",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gauge_total_supply",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "fee",
            type: "address",
          },
          {
            internalType: "address",
            name: "bribe",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "emissions",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "emissions_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "emissions_token_decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_lp_balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_token0_balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_token1_balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_gauge_balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account_gauge_earned",
            type: "uint256",
          },
        ],
        internalType: "struct PairAPI.pairInfo",
        name: "_pairInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amounts",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offset",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
    ],
    name: "getPairBribe",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "epochTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalVotes",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "pair",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
            ],
            internalType: "struct PairAPI.tokenBribe[]",
            name: "bribes",
            type: "tuple[]",
          },
        ],
        internalType: "struct PairAPI.pairBribeEpoch[]",
        name: "_pairEpoch",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "left",
    outputs: [
      {
        internalType: "uint256",
        name: "_rewPerEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pairFactory",
    outputs: [
      {
        internalType: "contract IPairFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
    ],
    name: "setVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "voter",
    outputs: [
      {
        internalType: "contract IVoter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wBribeFactory",
    outputs: [
      {
        internalType: "contract IWrappedBribeFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061289f806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063996cf23311610097578063e14f870d11610066578063e14f870d1461021b578063e6a4390514610234578063f4359ce514610254578063fb5478b31461025e57600080fd5b8063996cf233146101d7578063abcf3d6a146101e0578063c4d66de814610200578063c8b72f8f1461021357600080fd5b80634bc2a657116100d35780634bc2a6571461017d5780636180c3f91461019057806365ca6b23146101b15780638da5cb5b146101c457600080fd5b806313af4035146101055780632495a5991461011a578063404cba501461014a57806346c96aac1461016a575b600080fd5b6101186101133660046121ab565b610266565b005b60035461012d906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61015d6101583660046121c8565b61034d565b604051610141919061225d565b60015461012d906001600160a01b031681565b61011861018b3660046121ab565b6106f7565b6101a361019e366004612362565b610948565b604051908152602001610141565b60025461012d906001600160a01b031681565b60045461012d906001600160a01b031681565b6101a36103e881565b6101f36101ee36600461239b565b610b1a565b6040516101419190612589565b61011861020e3660046121ab565b610d0e565b6101a360c881565b60005461012d906201000090046001600160a01b031681565b610247610242366004612362565b610fa3565b60405161014191906125eb565b6101a362093a8081565b6101a3601081565b6004546001600160a01b031633146102b15760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b60448201526064015b60405180910390fd5b6001600160a01b0381166102f25760405162461bcd60e51b81526020600482015260086024820152673d32b937a0b2323960c11b60448201526064016102a8565b600480546001600160a01b0319166001600160a01b0383169081179091556040805133815260208101929092527fc53ee02035d465398c0648e0bca1462281006a266ec38c7192bce1c24e0b64a3910160405180910390a150565b606060c88411156103925760405162461bcd60e51b815260206004820152600f60248201526e746f6f206d616e792065706f63687360881b60448201526064016102a8565b8367ffffffffffffffff8111156103ab576103ab6125fe565b60405190808252806020026020018201604052801561041057816020015b6103fd6040518060800160405280600081526020016000815260200160006001600160a01b03168152602001606081525090565b8152602001906001900390816103c95790505b5060015460405163b9a09fd560e01b81526001600160a01b0385811660048301529293506000929091169063b9a09fd590602401602060405180830381865afa158015610461573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104859190612614565b60015460405163ae21c4cb60e01b81526001600160a01b0380841660048301529293506000929091169063ae21c4cb90602401602060405180830381865afa1580156104d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f99190612614565b90506001600160a01b0381166000036105135750506106f0565b6000816001600160a01b03166355288eea6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610553573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105779190612631565b905080600003610589575050506106f0565b6000865b6105978989612660565b8110156106ea57604051630981b24d60e41b8152600481018490526001600160a01b0385169063981b24d090602401602060405180830381865afa1580156105e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106079190612631565b915082866106158a84612678565b815181106106255761062561268f565b602090810291909101015152868661063d8a84612678565b8151811061064d5761064d61268f565b60209081029190910101516001600160a01b0390911660409091015281866106758a84612678565b815181106106855761068561268f565b6020026020010151602001818152505061069f8385610fb5565b866106aa8a84612678565b815181106106ba576106ba61268f565b6020908102919091010151606001526106d662093a8084612660565b9250806106e2816126a5565b91505061058d565b50505050505b9392505050565b6004546001600160a01b0316331461073d5760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b60448201526064016102a8565b6001600160a01b03811661077e5760405162461bcd60e51b81526020600482015260086024820152673d32b937a0b2323960c11b60448201526064016102a8565b600180546001600160a01b038381166001600160a01b0319831681179093556040805163c45a015560e01b8152905191909216929163c45a01559160048083019260209291908290030181865afa1580156107dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108019190612614565b6000805462010000600160b01b031916620100006001600160a01b039384160217905560015460408051638dd598fb60e01b815290519190921691638dd598fb9160048083019260209291908290030181865afa158015610866573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088a9190612614565b6001600160a01b031663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108eb9190612614565b600380546001600160a01b0319166001600160a01b0392831617905560408051838316815291841660208301527f710c23d7ab8af94af228e05f80f3472774722958ef63a866cdb227de1b2a8f2c91015b60405180910390a15050565b60015460405163b9a09fd560e01b81526001600160a01b038481166004830152600092839291169063b9a09fd590602401602060405180830381865afa158015610996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ba9190612614565b600154604051637572079360e11b81526001600160a01b0380841660048301529293506000929091169063eae40f2690602401602060405180830381865afa158015610a0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2e9190612614565b90506000816001600160a01b031663a4a3e0356040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a949190612631565b604051631c0ba43160e11b81526001600160a01b03878116600483015260248201839052919250600091841690633817486290604401606060405180830381865afa158015610ae7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0b91906126be565b60200151979650505050505050565b60606103e8831115610b5e5760405162461bcd60e51b815260206004820152600d60248201526c3a37b79036b0b73c903830b4b960991b60448201526064016102a8565b8267ffffffffffffffff811115610b7757610b776125fe565b604051908082528060200260200182016040528015610bb057816020015b610b9d612081565b815260200190600190039081610b955790505b509050600082905060008060029054906101000a90046001600160a01b03166001600160a01b031663574f2ba36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c309190612631565b905060005b610c3f8686612660565b831015610d0457828214610d0457600054604051631e3dd18b60e01b815260048101859052620100009091046001600160a01b031690631e3dd18b90602401602060405180830381865afa158015610c9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbf9190612614565b9050610ccb8188611577565b84610cd68786612678565b81518110610ce657610ce661268f565b60200260200101819052508280610cfc906126a5565b935050610c35565b5050509392505050565b600054610100900460ff1615808015610d2e5750600054600160ff909116105b80610d485750303b158015610d48575060005460ff166001145b610dab5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102a8565b6000805460ff191660011790558015610dce576000805461ff0019166101001790555b600480546001600160a01b031990811633178255600180546001600160a01b0386169216821790556040805163c45a015560e01b81529051919263c45a01559282820192602092908290030181865afa158015610e2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e539190612614565b6000805462010000600160b01b031916620100006001600160a01b039384160217905560015460408051638dd598fb60e01b815290519190921691638dd598fb9160048083019260209291908290030181865afa158015610eb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edc9190612614565b6001600160a01b031663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3d9190612614565b600380546001600160a01b0319166001600160a01b03929092169190911790558015610f9f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200161093c565b5050565b610fab612081565b6106f08383611577565b606060008290506000816001600160a01b031663e68863966040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ffc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110209190612631565b90508067ffffffffffffffff81111561103b5761103b6125fe565b60405190808252806020026020018201604052801561108c57816020015b60408051608081018252600080825260208083018290529282015260608082015282526000199092019101816110595790505b509250600080805b8383101561156c57604051637bb7bed160e01b8152600481018490526001600160a01b03861690637bb7bed190602401602060405180830381865afa1580156110e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111059190612614565b90506001600160a01b03811673f0308d005717858756acaa6b3dcd4d0de4a1ca541461149657604051631c0ba43160e11b81526001600160a01b038281166004830152602482018a905260009190871690633817486290604401606060405180830381865afa15801561117c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a091906126be565b602081015193509050821561132157818785815181106111c2576111c261268f565b6020026020010151600001906001600160a01b031690816001600160a01b031681525050816001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015611224573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261124c919081019061271a565b87858151811061125e5761125e61268f565b602002602001015160600181905250816001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cf91906127c7565b8785815181106112e1576112e161268f565b60200260200101516020019060ff16908160ff16815250508287858151811061130c5761130c61268f565b60200260200101516040018181525050611490565b818785815181106113345761133461268f565b6020026020010151600001906001600160a01b031690816001600160a01b031681525050816001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015611396573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113be919081019061271a565b8785815181106113d0576113d061268f565b602002602001015160600181905250816001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561141d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144191906127c7565b8785815181106114535761145361268f565b60200260200101516020019060ff16908160ff1681525050600087858151811061147f5761147f61268f565b602002602001015160400181815250505b5061155a565b808684815181106114a9576114a961268f565b6020026020010151600001906001600160a01b031690816001600160a01b03168152505060405180604001604052806002815260200161060f60f31b8152508684815181106114fa576114fa61268f565b602002602001015160600181905250600086848151811061151d5761151d61268f565b60200260200101516020019060ff16908160ff168152505060008684815181106115495761154961268f565b602002602001015160400181815250505b82611564816126a5565b935050611094565b505050505092915050565b61157f612081565b6000839050600080600080846001600160a01b0316639d63848a6040518163ffffffff1660e01b81526004016040805180830381865afa1580156115c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115eb91906127ea565b8094508195505050846001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015611631573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116559190612819565b5060015460405163b9a09fd560e01b81526001600160a01b038c81166004830152939550919350600092169063b9a09fd590602401602060405180830381865afa1580156116a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116cb9190612614565b905060008080806001600160a01b0385161561189f576001600160a01b038c16156117cd576040516370a0823160e01b81526001600160a01b038d811660048301528616906370a0823190602401602060405180830381865afa158015611736573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061175a9190612631565b6040516246613160e11b81526001600160a01b038e8116600483015291955090861690628cc26290602401602060405180830381865afa1580156117a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c69190612631565b92506117d6565b60009350600092505b846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611814573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118389190612631565b9150846001600160a01b0316637b0a47ee6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611878573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189c9190612631565b90505b6001600160a01b03808e168c52604080516395d89b4160e01b81529051918c16916395d89b41916004808201926000929091908290030181865afa1580156118eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611913919081019061271a565b8b60200181905250896001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015611959573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611981919081019061271a565b8b60400181905250896001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119eb91906127c7565b60ff168b6060018181525050896001600160a01b03166309047bdd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a599190612847565b151560808c0152604080516318160ddd60e01b815290516001600160a01b038c16916318160ddd9160048083019260209291908290030181865afa158015611aa5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac99190612631565b60a08c01526001600160a01b03891660c08c018190526040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa158015611b1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b3e91906127c7565b60ff168b610100018181525050886001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015611b89573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611bb1919081019061271a565b60e08c01526101208b018790526040516326ad4fc560e11b81526001600160a01b038d811660048301528b1690634d5a9f8a90602401602060405180830381865afa158015611c04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c289190612631565b6101408c01526001600160a01b0388166101608c018190526040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa158015611c7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c9f91906127c7565b60ff168b6101a0018181525050876001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015611cea573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611d12919081019061271a565b6101808c01526101c08b0186905260405163a1ac4d1360e01b81526001600160a01b038d811660048301528b169063a1ac4d1390602401602060405180830381865afa158015611d66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d8a9190612631565b6101e08c01526001600160a01b038086166102008d01526102208c018390526102808c01829052600354166102a08c018190526040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa158015611df8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e1c91906127c7565b60ff166102c08c0152600154604051637572079360e11b81526001600160a01b0387811660048301529091169063eae40f2690602401602060405180830381865afa158015611e6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e939190612614565b6001600160a01b039081166102408d015260015460405163ae21c4cb60e01b8152878316600482015291169063ae21c4cb90602401602060405180830381865afa158015611ee5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f099190612614565b6001600160a01b039081166102608d01526040516370a0823160e01b81528d82166004820152908e16906370a0823190602401602060405180830381865afa158015611f59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f7d9190612631565b6102e08c01526040516370a0823160e01b81526001600160a01b038d811660048301528a16906370a0823190602401602060405180830381865afa158015611fc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fed9190612631565b6103008c01526040516370a0823160e01b81526001600160a01b038d811660048301528916906370a0823190602401602060405180830381865afa158015612039573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061205d9190612631565b6103208c015250506103408901919091526103608801525094979650505050505050565b60405180610380016040528060006001600160a01b031681526020016060815260200160608152602001600081526020016000151581526020016000815260200160006001600160a01b031681526020016060815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016060815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6001600160a01b03811681146121a857600080fd5b50565b6000602082840312156121bd57600080fd5b81356106f081612193565b6000806000606084860312156121dd57600080fd5b833592506020840135915060408401356121f681612193565b809150509250925092565b60005b8381101561221c578181015183820152602001612204565b8381111561222b576000848401525b50505050565b60008151808452612249816020860160208601612201565b601f01601f19169290920160200192915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561235457603f198984030185528151805184528781015188850152868101516001600160a01b039081168886015260609182015160808387018190528151908701819052908a019260a0600583901b880181019391929088019060005b8181101561233b57898603609f1901835286518051851687528e81015160ff168f8801528d8101518e880152850151608086880181905261232890880182612231565b978f0197965050918d01916001016122e5565b505050978a019750909450505090860190600101612284565b509098975050505050505050565b6000806040838503121561237557600080fd5b823561238081612193565b9150602083013561239081612193565b809150509250929050565b6000806000606084860312156123b057600080fd5b83356123bb81612193565b95602085013595506040909401359392505050565b80516001600160a01b03168252600061038060208301518160208601526123f982860182612231565b915050604083015184820360408601526124138282612231565b915050606083015160608501526080830151612433608086018215159052565b5060a083015160a085015260c083015161245860c08601826001600160a01b03169052565b5060e083015184820360e08601526124708282612231565b610100858101519087015261012080860151908701526101408086015190870152610160808601516001600160a01b031690870152610180808601518783038289015291935091506124c28382612231565b6101a086810151908801526101c080870151908801526101e08087015190880152610200808701516001600160a01b03908116918901919091526102208088015190890152610240808801518216908901526102608088015182169089015261028080880151908901526102a080880151909116908801526102c080870151908801526102e0808701519088015261030080870151908801526103208087015190880152610340808701519088015261036095860151959096019490945250929392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156125de57603f198886030184526125cc8583516123d0565b945092850192908501906001016125b0565b5092979650505050505050565b6020815260006106f060208301846123d0565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561262657600080fd5b81516106f081612193565b60006020828403121561264357600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156126735761267361264a565b500190565b60008282101561268a5761268a61264a565b500390565b634e487b7160e01b600052603260045260246000fd5b6000600182016126b7576126b761264a565b5060010190565b6000606082840312156126d057600080fd5b6040516060810181811067ffffffffffffffff821117156126f3576126f36125fe565b80604052508251815260208301516020820152604083015160408201528091505092915050565b60006020828403121561272c57600080fd5b815167ffffffffffffffff8082111561274457600080fd5b818401915084601f83011261275857600080fd5b81518181111561276a5761276a6125fe565b604051601f8201601f19908116603f01168101908382118183101715612792576127926125fe565b816040528281528760208487010111156127ab57600080fd5b6127bc836020830160208801612201565b979650505050505050565b6000602082840312156127d957600080fd5b815160ff811681146106f057600080fd5b600080604083850312156127fd57600080fd5b825161280881612193565b602084015190925061239081612193565b60008060006060848603121561282e57600080fd5b8351925060208401519150604084015190509250925092565b60006020828403121561285957600080fd5b815180151581146106f057600080fdfea2646970667358221220b85863faad637ed87f67e105a1ae6ff258ee335d86094477ff856aa354628cbc64736f6c634300080d0033";

type PairAPIConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PairAPIConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PairAPI__factory extends ContractFactory {
  constructor(...args: PairAPIConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PairAPI & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PairAPI__factory {
    return super.connect(runner) as PairAPI__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PairAPIInterface {
    return new Interface(_abi) as PairAPIInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PairAPI {
    return new Contract(address, _abi, runner) as unknown as PairAPI;
  }
}