/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ExternalBribe,
  ExternalBribeInterface,
} from "../../contracts/ExternalBribe";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_allowedRewardTokens",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reward",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimRewards",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reward",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NotifyReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "_deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "_ve",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "_withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceOf",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "earned",
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
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getEpochStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getPriorBalanceIndex",
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
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getPriorSupplyIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getRewardForOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isReward",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lastEarn",
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
        name: "token",
        type: "address",
      },
    ],
    name: "lastTimeRewardApplicable",
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
        name: "token",
        type: "address",
      },
    ],
    name: "left",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "numCheckpoints",
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
        name: "",
        type: "address",
      },
    ],
    name: "periodFinish",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewards",
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
    name: "rewardsListLength",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "supplyCheckpoints",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "supplyNumCheckpoints",
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
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "oldToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "newToken",
        type: "address",
      },
    ],
    name: "swapOutRewardToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenRewardsPerEpoch",
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
    name: "totalSupply",
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
    name: "voter",
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
] as const;

const _bytecode =
  "0x60c06040526001600b553480156200001657600080fd5b5060405162001e8338038062001e838339810160408190526200003991620001f8565b6001600160a01b038216608081905260408051638dd598fb60e01b81529051638dd598fb916004808201926020929091908290030181865afa15801562000084573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000aa9190620002e1565b6001600160a01b031660a05260005b8151811015620001bc5760006001600160a01b0316828281518110620000e357620000e362000306565b60200260200101516001600160a01b031614620001a75760016006600084848151811062000115576200011562000306565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff02191690831515021790555060058282815181106200016b576200016b62000306565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790555b80620001b3816200031c565b915050620000b9565b50505062000344565b80516001600160a01b0381168114620001dd57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200020c57600080fd5b6200021783620001c5565b602084810151919350906001600160401b03808211156200023757600080fd5b818601915086601f8301126200024c57600080fd5b815181811115620002615762000261620001e2565b8060051b604051601f19603f83011681018181108582111715620002895762000289620001e2565b604052918252848201925083810185019189831115620002a857600080fd5b938501935b82851015620002d157620002c185620001c5565b84529385019392850192620002ad565b8096505050505050509250929050565b600060208284031215620002f457600080fd5b620002ff82620001c5565b9392505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016200033d57634e487b7160e01b600052601160045260246000fd5b5060010190565b60805160a051611ae86200039b600039600081816102d90152818161089b01528181610cda015261125c0152600081816101da01528181610a6e01528181610c9701528181610ed5015261116f0152611ae86000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80639cc7f708116100de578063e688639611610097578063f301af4211610071578063f301af4214610416578063f320772314610429578063f5f8d3651461043c578063f7412baf1461044f57600080fd5b8063e6886396146103da578063e8111a12146103e2578063f25e55a5146103eb57600080fd5b80639cc7f7081461034e5780639e2bf22c1461036e578063a28d4c9c14610381578063a7852afa14610394578063b66503cf146103a7578063da09d19d146103ba57600080fd5b8063505897931161014b5780638dd598fb116101255780638dd598fb146102d457806392777b29146102fb5780639418f9391461032657806399bcc0521461033b57600080fd5b8063505897931461028e578063638634ee146102ae57806376f4be36146102c157600080fd5b80630175e23b1461019357806318160ddd146101b95780633e491d47146101c257806346c96aac146101d557806349dcc204146102145780634d5ce0381461025b575b600080fd5b6101a66101a1366004611792565b610476565b6040519081526020015b60405180910390f35b6101a660005481565b6101a66101d03660046117d3565b6104b8565b6101fc7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101b0565b6102466102223660046117ff565b60076020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101b0565b61027e610269366004611821565b60066020526000908152604090205460ff1681565b60405190151581526020016101b0565b6101a661029c366004611792565b60086020526000908152604090205481565b6101a66102bc366004611821565b610741565b6101a66102cf366004611792565b610765565b6101fc7f000000000000000000000000000000000000000000000000000000000000000081565b6101a66103093660046117d3565b600260209081526000928352604080842090915290825290205481565b61033961033436600461183e565b610899565b005b6101a6610349366004611821565b610a2a565b6101a661035c366004611792565b60016020526000908152604090205481565b61033961037c3660046117ff565b610a63565b6101a661038f3660046117ff565b610b33565b6103396103a2366004611896565b610c78565b6103396103b53660046117d3565b610e78565b6101a66103c8366004611821565b60036020526000908152604090205481565b6005546101a6565b6101a6600a5481565b6101a66103f93660046117d3565b600460209081526000928352604080842090915290825290205481565b6101fc610424366004611792565b61113a565b6103396104373660046117ff565b611164565b61033961044a366004611896565b61122c565b61024661045d366004611792565b6009602052600090815260409020805460019091015482565b60008061048283611400565b9050600061049362093a808361197d565b90508084106104ae576104a98262093a8061197d565b6104b0565b815b949350505050565b6001600160a01b0382166000908152600460209081526040808320848452825280832054600890925282205482036104f457600091505061073b565b60006105008483610b33565b6000858152600860205260408120549192509061051f90600190611995565b90506000610540604051806040016040528060008152602001600081525090565b61054985611400565b81526001831561065a57845b610560600186611995565b81116106585760008981526007602090815260408083208484528252808320815180830190925280548083526001909101549282019290925291906105a490611400565b85519091508111156105c25760208501516105bf908761197d565b95505b808552600960006105d96102cf62093a808561197d565b815260200190815260200160002060010154935083600260008e6001600160a01b03166001600160a01b03168152602001908152602001600020600083815260200190815260200160002054836020015161063491906119ac565b61063e91906119e1565b602086015250819050610650816119f5565b915050610555565b505b600088815260076020908152604080832087845282528083208151808301909252805480835260019091015492820192909252919061069890611400565b905060006106a962093a808361197d565b90508042111561072f57600960006106c083610765565b815260200190815260200160002060010154600260008e6001600160a01b03166001600160a01b03168152602001908152602001600020600084815260200190815260200160002054846020015161071891906119ac565b61072291906119e1565b61072c908761197d565b95505b50939750505050505050505b92915050565b6001600160a01b03811660009081526003602052604081205461073b904290611419565b600a5460009080820361077b5750600092915050565b826009600061078b600185611995565b815260200190815260200160002060000154116107b4576107ad600182611995565b9392505050565b6000805260096020527fec8156718a8372b1db44bb411437d0870f3e3790d4a08526d024ce1b0b668f6b548310156107ef5750600092915050565b6000806107fd600184611995565b90505b8181111561089157600060026108168484611995565b61082091906119e1565b61082a9083611995565b60008181526009602090815260409182902082518084019093528054808452600190910154918301919091529192509087900361086b575095945050505050565b805187111561087c5781935061088a565b610887600183611995565b92505b5050610800565b509392505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166385f2aef26040518163ffffffff1660e01b81526004016020604051808303816000875af11580156108f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091d9190611a0e565b6001600160a01b0316336001600160a01b03161461096e5760405162461bcd60e51b81526020600482015260096024820152686f6e6c79207465616d60b81b60448201526064015b60405180910390fd5b816001600160a01b03166005848154811061098b5761098b611a2b565b6000918252602090912001546001600160a01b0316146109aa57600080fd5b6001600160a01b03808316600090815260066020526040808220805460ff19908116909155928416825290208054909116600117905560058054829190859081106109f7576109f7611a2b565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550505050565b600080610a3642610476565b6001600160a01b039093166000908152600260209081526040808320958352949052929092205492915050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a9857600080fd5b81600080828254610aa99190611995565b909155505060008181526001602052604081208054849290610acc908490611995565b9091555050600081815260016020526040902054610aeb90829061142f565b610af3611508565b604080518281526020810184905233917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b56891015b60405180910390a25050565b600082815260086020526040812054808203610b5357600091505061073b565b60008481526007602052604081208491610b6e600185611995565b81526020019081526020016000206000015411610b9857610b90600182611995565b91505061073b565b6000848152600760209081526040808320838052909152902054831015610bc357600091505061073b565b600080610bd1600184611995565b90505b81811115610c6f5760006002610bea8484611995565b610bf491906119e1565b610bfe9083611995565b6000888152600760209081526040808320848452825291829020825180840190935280548084526001909101549183019190915291925090879003610c495750935061073b92505050565b8051871115610c5a57819350610c68565b610c65600183611995565b92505b5050610bd4565b50949350505050565b600b54600114610c8757600080fd5b6002600b55336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610cc157600080fd5b6040516331a9108f60e11b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015610d29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4d9190611a0e565b905060005b8251811015610e6d576000610d80848381518110610d7257610d72611a2b565b6020026020010151866104b8565b90504260046000868581518110610d9957610d99611a2b565b6020908102919091018101516001600160a01b0316825281810192909252604090810160009081208982529092529020558015610df457610df4848381518110610de557610de5611a2b565b602002602001015184836115ab565b838281518110610e0657610e06611a2b565b60200260200101516001600160a01b0316836001600160a01b03167f9aa05b3d70a9e3e2f004f039648839560576334fb45c81f91b6db03ad9e2efc983604051610e5291815260200190565b60405180910390a35080610e65816119f5565b915050610d52565b50506001600b555050565b600b54600114610e8757600080fd5b6002600b5580610e9657600080fd5b6001600160a01b03821660009081526006602052604090205460ff16610fde57604051633af32abf60e01b81526001600160a01b0383811660048301527f00000000000000000000000000000000000000000000000000000000000000001690633af32abf90602401602060405180830381865afa158015610f1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f409190611a41565b610f8c5760405162461bcd60e51b815260206004820181905260248201527f627269626520746f6b656e73206d7573742062652077686974656c69737465646044820152606401610965565b600554601011610fde5760405162461bcd60e51b815260206004820152601760248201527f746f6f206d616e79207265776172647320746f6b656e730000000000000000006044820152606401610965565b6000610fe942610476565b6001600160a01b038416600090815260026020908152604080832084845290915290205490915061101c8433308661169a565b611026838261197d565b6001600160a01b038516600090815260026020908152604080832086845290915290205561105762093a808361197d565b6001600160a01b03851660009081526003602090815260408083209390935560069052205460ff166110e9576001600160a01b0384166000818152600660205260408120805460ff191660019081179091556005805491820181559091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b03191690911790555b60408051838152602081018590526001600160a01b0386169133917f52977ea98a2220a03ee9ba5cb003ada08d394ea10155483c95dc2dc77a7eb24b910160405180910390a350506001600b555050565b6005818154811061114a57600080fd5b6000918252602090912001546001600160a01b0316905081565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461119957600080fd5b816000808282546111aa919061197d565b9091555050600081815260016020526040812080548492906111cd90849061197d565b90915550506000818152600160205260409020546111ec90829061142f565b6111f4611508565b604080518281526020810184905233917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159101610b27565b600b5460011461123b57600080fd5b6002600b5560405163430c208160e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063430c208190604401602060405180830381865afa1580156112ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cf9190611a41565b6112d857600080fd5b60005b81518110156113f65760006113098383815181106112fb576112fb611a2b565b6020026020010151856104b8565b9050426004600085858151811061132257611322611a2b565b6020908102919091018101516001600160a01b031682528181019290925260409081016000908120888252909252902055801561137d5761137d83838151811061136e5761136e611a2b565b602002602001015133836115ab565b82828151811061138f5761138f611a2b565b60200260200101516001600160a01b0316336001600160a01b03167f9aa05b3d70a9e3e2f004f039648839560576334fb45c81f91b6db03ad9e2efc9836040516113db91815260200190565b60405180910390a350806113ee816119f5565b9150506112db565b50506001600b5550565b600061140f62093a8083611a63565b61073b9083611995565b600081831061142857816107ad565b5090919050565b60008281526008602052604090205442908015801590611479575060008481526007602052604081208391611465600185611995565b815260200190815260200160002060000154145b156114b25760008481526007602052604081208491611499600185611995565b8152602081019190915260400160002060010155611502565b60408051808201825283815260208082018681526000888152600783528481208682529092529290209051815590516001918201556114f290829061197d565b6000858152600860205260409020555b50505050565b600a5442811580159061153a57508060096000611526600186611995565b815260200190815260200160002060000154145b1561156b57600054600960006001856115539190611995565b81526020810191909152604001600020600101555050565b604080518082018252828152600080546020808401918252868352600990529290209051815590516001918201556115a490839061197d565b600a555050565b6000836001600160a01b03163b116115c257600080fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161161e9190611a77565b6000604051808303816000865af19150503d806000811461165b576040519150601f19603f3d011682016040523d82523d6000602084013e611660565b606091505b509150915081801561168a57508051158061168a57508080602001905181019061168a9190611a41565b61169357600080fd5b5050505050565b6000846001600160a01b03163b116116b157600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916117159190611a77565b6000604051808303816000865af19150503d8060008114611752576040519150601f19603f3d011682016040523d82523d6000602084013e611757565b606091505b50915091508180156117815750805115806117815750808060200190518101906117819190611a41565b61178a57600080fd5b505050505050565b6000602082840312156117a457600080fd5b5035919050565b6001600160a01b03811681146117c057600080fd5b50565b80356117ce816117ab565b919050565b600080604083850312156117e657600080fd5b82356117f1816117ab565b946020939093013593505050565b6000806040838503121561181257600080fd5b50508035926020909101359150565b60006020828403121561183357600080fd5b81356107ad816117ab565b60008060006060848603121561185357600080fd5b833592506020840135611865816117ab565b91506040840135611875816117ab565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156118a957600080fd5b8235915060208084013567ffffffffffffffff808211156118c957600080fd5b818601915086601f8301126118dd57600080fd5b8135818111156118ef576118ef611880565b8060051b604051601f19603f8301168101818110858211171561191457611914611880565b60405291825284820192508381018501918983111561193257600080fd5b938501935b8285101561195757611948856117c3565b84529385019392850192611937565b8096505050505050509250929050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561199057611990611967565b500190565b6000828210156119a7576119a7611967565b500390565b60008160001904831182151516156119c6576119c6611967565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826119f0576119f06119cb565b500490565b600060018201611a0757611a07611967565b5060010190565b600060208284031215611a2057600080fd5b81516107ad816117ab565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611a5357600080fd5b815180151581146107ad57600080fd5b600082611a7257611a726119cb565b500690565b6000825160005b81811015611a985760208186018101518583015201611a7e565b81811115611aa7576000828501525b50919091019291505056fea26469706673582212209365794a9edd52765b7abfa997284c3d002dd3c784a749aeac1853978ecf578b64736f6c634300080d0033";

type ExternalBribeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExternalBribeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExternalBribe__factory extends ContractFactory {
  constructor(...args: ExternalBribeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _voter: AddressLike,
    _allowedRewardTokens: AddressLike[],
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _voter,
      _allowedRewardTokens,
      overrides || {}
    );
  }
  override deploy(
    _voter: AddressLike,
    _allowedRewardTokens: AddressLike[],
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _voter,
      _allowedRewardTokens,
      overrides || {}
    ) as Promise<
      ExternalBribe & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ExternalBribe__factory {
    return super.connect(runner) as ExternalBribe__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExternalBribeInterface {
    return new Interface(_abi) as ExternalBribeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ExternalBribe {
    return new Contract(address, _abi, runner) as unknown as ExternalBribe;
  }
}
