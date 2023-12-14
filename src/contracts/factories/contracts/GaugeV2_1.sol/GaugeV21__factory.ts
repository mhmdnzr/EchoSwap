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
import type { NonPayableOverrides } from "../../../common";
import type {
  GaugeV21,
  GaugeV21Interface,
} from "../../../contracts/GaugeV2_1.sol/GaugeV21";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ve",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_distribution",
        type: "address",
      },
      {
        internalType: "address",
        name: "_internal_bribe",
        type: "address",
      },
      {
        internalType: "address",
        name: "_external_bribe",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isForPair",
        type: "bool",
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
        indexed: false,
        internalType: "uint256",
        name: "claimed0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimed1",
        type: "uint256",
      },
    ],
    name: "ClaimFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
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
    inputs: [],
    name: "DISTRIBUTION",
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
    name: "DURATION",
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
    name: "TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_VE",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "",
        type: "address",
      },
    ],
    name: "_balances",
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
    name: "_periodFinish",
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
    name: "_totalSupply",
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
        name: "account",
        type: "address",
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
    inputs: [],
    name: "claimFees",
    outputs: [
      {
        internalType: "uint256",
        name: "claimed0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
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
    inputs: [],
    name: "external_bribe",
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
    name: "fees0",
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
    name: "fees1",
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
    name: "gaugeRewarder",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "internal_bribe",
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
    name: "isForPair",
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
    inputs: [],
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
    inputs: [],
    name: "lastUpdateTime",
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
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardForDuration",
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
    name: "rewardPerToken",
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewarderPid",
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
    name: "rewards",
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
        name: "_distribution",
        type: "address",
      },
    ],
    name: "setDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gaugeRewarder",
        type: "address",
      },
    ],
    name: "setGaugeRewarder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "setRewarderPid",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
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
    name: "userRewardPerTokenPaid",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAllAndHarvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620020873803806200208783398101604081905262000034916200014a565b60016000556200004433620000db565b600280546001600160a01b03199081166001600160a01b03998a161790915560038054821697891697909717909655600480548716958816959095179094556005805486169387169390931790925562093a80600a556007805485169186169190911790556008805490931693169290921790556001805460ff60a01b1916600160a01b92151592909202919091179055620001e7565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b03811681146200014557600080fd5b919050565b600080600080600080600060e0888a0312156200016657600080fd5b62000171886200012d565b965062000181602089016200012d565b955062000191604089016200012d565b9450620001a1606089016200012d565b9350620001b1608089016200012d565b9250620001c160a089016200012d565b915060c08801518015158114620001d757600080fd5b8091505092959891949750929550565b611e9080620001f76000396000f3fe608060405234801561001057600080fd5b506004361061025d5760003560e01c806380faa57d11610146578063b6b55f25116100c3578063df136d6511610087578063df136d65146104cc578063e5748213146104d5578063ebe2b12b146104f9578063f2fde38b14610502578063f7c618c114610515578063f97d21141461052857600080fd5b8063b6b55f2514610483578063c8f33c9114610496578063cd3daf9d1461049f578063d294f093146104a7578063de5f6268146104c457600080fd5b80638da5cb5b1161010a5780638da5cb5b1461043a5780638f67b0131461044b57806393f1c442146104545780639f6d7d5b1461045d578063b66503cf1461047057600080fd5b806380faa57d146103e457806382bfefc8146103ec578063853828b6146103ff578063863e2442146104075780638b8763471461041a57600080fd5b80634c02a21c116101df57806370b15e6d116101a357806370b15e6d14610387578063715018a61461039a578063770f8571146103a25780637b0a47ee146103b55780637c91e4eb146103be5780637f699015146103d157600080fd5b80634c02a21c146103255780636946a2351461032e5780636e9852f2146103365780636ebcf6071461033e57806370a082311461035e57600080fd5b80631be05289116102265780631be05289146102e35780632e1a7d4d146102ec57806331279d3d146103015780633d18b912146103145780633eaaf86b1461031c57600080fd5b80628cc2621461026257806303fbf83a146102885780630700037d146102b35780631407c664146102d357806318160ddd146102db575b600080fd5b610275610270366004611b3f565b61053b565b6040519081526020015b60405180910390f35b60085461029b906001600160a01b031681565b6040516001600160a01b03909116815260200161027f565b6102756102c1366004611b3f565b60126020526000908152604090205481565b600b54610275565b601354610275565b610275600a5481565b6102ff6102fa366004611b5c565b6105b9565b005b6102ff61030f366004611b8b565b6105c5565b6102ff610769565b61027560135481565b61027560105481565b6102756108dd565b6102ff6108fb565b61027561034c366004611b3f565b60146020526000908152604090205481565b61027561036c366004611b3f565b6001600160a01b031660009081526014602052604090205490565b6102ff610395366004611b5c565b61091c565b6102ff610973565b60075461029b906001600160a01b031681565b610275600c5481565b60055461029b906001600160a01b031681565b6102ff6103df366004611b3f565b610985565b610275610a3b565b60045461029b906001600160a01b031681565b6102ff610a49565b60065461029b906001600160a01b031681565b610275610428366004611b3f565b60116020526000908152604090205481565b6001546001600160a01b031661029b565b61027560095481565b610275600f5481565b60035461029b906001600160a01b031681565b6102ff61047e366004611c65565b610a62565b6102ff610491366004611b5c565b610cf7565b610275600d5481565b610275610d01565b6104af610d4c565b6040805192835260208301919091520161027f565b6102ff610d71565b610275600e5481565b6001546104e990600160a01b900460ff1681565b604051901515815260200161027f565b610275600b5481565b6102ff610510366004611b3f565b610dea565b60025461029b906001600160a01b031681565b6102ff610536366004611b3f565b610e60565b6001600160a01b03811660009081526012602090815260408083205460119092528220546105b391906105ad90670de0b6b3a7640000906105a79061058890610582610d01565b90610f16565b6001600160a01b03881660009081526014602052604090205490610f29565b90610f35565b90610f41565b92915050565b6105c281610f4d565b50565b6105cd6111a5565b336105d6610d01565b600e556105e1610a3b565b600d556001600160a01b03811615610628576105fc8161053b565b6001600160a01b038216600090815260126020908152604080832093909355600e546011909152919020555b6005546001600160a01b0316331461063f57600080fd5b6001600160a01b03831660009081526012602052604090205480156106cb576001600160a01b03808516600090815260126020526040812055600254610687911685836111fe565b836001600160a01b03167fc9695243a805adb74c91f28311176c65b417e842d5699893cef56d18bfa48cba826040516106c291815260200190565b60405180910390a25b6006546001600160a01b0316156107595760065460095433600081815260146020526040908190205490516344af0fa760e01b81526001600160a01b03909416936344af0fa793610726939092909182918891600401611c91565b600060405180830381600087803b15801561074057600080fd5b505af1158015610754573d6000803e3d6000fd5b505050505b50506107656001600055565b5050565b6107716111a5565b3361077a610d01565b600e55610785610a3b565b600d556001600160a01b038116156107cc576107a08161053b565b6001600160a01b038216600090815260126020908152604080832093909355600e546011909152919020555b336000908152601260205260409020548015610841573360008181526012602052604081205560025461080b916001600160a01b0390911690836111fe565b60405181815233907fc9695243a805adb74c91f28311176c65b417e842d5699893cef56d18bfa48cba9060200160405180910390a25b6006546001600160a01b0316156108cf5760065460095433600081815260146020526040908190205490516344af0fa760e01b81526001600160a01b03909416936344af0fa79361089c939092909182918891600401611c91565b600060405180830381600087803b1580156108b657600080fd5b505af11580156108ca573d6000803e3d6000fd5b505050505b50506108db6001600055565b565b60006108f6600a54600c54610f2990919063ffffffff16565b905090565b3360009081526014602052604090205461091490610f4d565b6108db610769565b610924611266565b610932565b60405180910390fd5b600954810361096e5760405162461bcd60e51b81526020600482015260086024820152671cd85b59481c1a5960c21b6044820152606401610929565b600955565b61097b611266565b6108db60006112c0565b61098d611266565b6001600160a01b0381166109cf5760405162461bcd60e51b81526020600482015260096024820152683d32b9379030b2323960b91b6044820152606401610929565b6005546001600160a01b0390811690821603610a195760405162461bcd60e51b815260206004820152600960248201526839b0b6b29030b2323960b91b6044820152606401610929565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60006108f642600b54611312565b336000908152601460205260409020546108db90610f4d565b610a6a6111a5565b6005546001600160a01b03163314610ad75760405162461bcd60e51b815260206004820152602a60248201527f43616c6c6572206973206e6f742052657761726473446973747269627574696f6044820152691b8818dbdb9d1c9858dd60b21b6064820152608401610929565b6000610ae1610d01565b600e55610aec610a3b565b600d556001600160a01b03811615610b3357610b078161053b565b6001600160a01b038216600090815260126020908152604080832093909355600e546011909152919020555b6002546001600160a01b03848116911614610b4d57600080fd5b600554600254610b6b916001600160a01b0391821691163085611328565b600b544210610b8a57600a54610b82908390610f35565b600c55610bcd565b600b54600090610b9a9042610f16565b90506000610bb3600c5483610f2990919063ffffffff16565b600a54909150610bc7906105a78684610f41565b600c5550505b6002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610c16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3a9190611cc0565b9050610c51600a5482610f3590919063ffffffff16565b600c541115610ca25760405162461bcd60e51b815260206004820152601860248201527f50726f76696465642072657761726420746f6f206869676800000000000000006044820152606401610929565b42600d819055600a54610cb59190610f41565b600b556040518381527fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9060200160405180910390a150506107656001600055565b6105c28133611366565b6000601354600003610d145750600e5490565b6108f6610d436013546105a7670de0b6b3a7640000610d3d600c54610d3d600d54610582610a3b565b90610f29565b600e5490610f41565b600080610d576111a5565b610d5f611559565b91509150610d6d6001600055565b9091565b600480546040516370a0823160e01b815233928101929092526108db916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610dc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de49190611cc0565b33611366565b610df2611266565b6001600160a01b038116610e575760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610929565b6105c2816112c0565b610e68611266565b6001600160a01b038116610eaa5760405162461bcd60e51b81526020600482015260096024820152683d32b9379030b2323960b91b6044820152606401610929565b6006546001600160a01b0390811690821603610ef45760405162461bcd60e51b815260206004820152600960248201526839b0b6b29030b2323960b91b6044820152606401610929565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6000610f228284611cef565b9392505050565b6000610f228284611d06565b6000610f228284611d25565b6000610f228284611d47565b610f556111a5565b33610f5e610d01565b600e55610f69610a3b565b600d556001600160a01b03811615610fb057610f848161053b565b6001600160a01b038216600090815260126020908152604080832093909355600e546011909152919020555b60008211610ff45760405162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b6044820152606401610929565b6013546000906110049084610f16565b101561103f5760405162461bcd60e51b815260206004820152600a6024820152690737570706c79203c20360b41b6044820152606401610929565b336000908152601460205260409020546110895760405162461bcd60e51b815260206004820152600b60248201526a6e6f2062616c616e63657360a81b6044820152606401610929565b6013546110969083610f16565b601355336000908152601460205260409020546110b39083610f16565b336000908152601460205260409020556006546001600160a01b03161561114e57600654600954336000818152601460205260408082205490516344af0fa760e01b81526001600160a01b03909516946344af0fa79461111b94909390928392600401611c91565b600060405180830381600087803b15801561113557600080fd5b505af1158015611149573d6000803e3d6000fd5b505050505b600454611165906001600160a01b031633846111fe565b60405182815233907f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243649060200160405180910390a2506105c26001600055565b6002600054036111f75760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610929565b6002600055565b6040516001600160a01b03831660248201526044810182905261126190849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526118b8565b505050565b6001546001600160a01b031633146108db5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610929565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008183106113215781610f22565b5090919050565b6040516001600160a01b03808516602483015283166044820152606481018290526113609085906323b872dd60e01b9060840161122a565b50505050565b61136e6111a5565b80611377610d01565b600e55611382610a3b565b600d556001600160a01b038116156113c95761139d8161053b565b6001600160a01b038216600090815260126020908152604080832093909355600e546011909152919020555b600083116114195760405162461bcd60e51b815260206004820152601e60248201527f6465706f736974284761756765293a2063616e6e6f74207374616b65203000006044820152606401610929565b6001600160a01b03821660009081526014602052604090205461143c9084610f41565b6001600160a01b0383166000908152601460205260409020556013546114629084610f41565b60135560045461147d906001600160a01b0316833086611328565b6006546001600160a01b03161561150b576006546009546001600160a01b038481166000908152601460205260408082205490516344af0fa760e01b815292909416936344af0fa7936114d893909288928392600401611c91565b600060405180830381600087803b1580156114f257600080fd5b505af1158015611506573d6000803e3d6000fd5b505050505b816001600160a01b03167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c8460405161154691815260200190565b60405180910390a2506107656001600055565b6001546000908190600160a01b900460ff166115785750600091829150565b600480546040805163d294f09360e01b815281516001600160a01b0390931693849363d294f093938383019390929082900301816000875af11580156115c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e69190611d5f565b9093509150821515806115f95750600082115b156118b357600083600f5461160e9190611d47565b90506000836010546116209190611d47565b9050600080846001600160a01b0316639d63848a6040518163ffffffff1660e01b81526004016040805180830381865afa158015611662573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116869190611d83565b90925090508315611779576000600f5560075460405163095ea7b360e01b81526001600160a01b039182166004820152602481018690529083169063095ea7b3906044016020604051808303816000875af11580156116e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170d9190611dbd565b5060075460405163b66503cf60e01b81526001600160a01b038481166004830152602482018790529091169063b66503cf90604401600060405180830381600087803b15801561175c57600080fd5b505af1158015611770573d6000803e3d6000fd5b5050505061177f565b600f8490555b821561186d57600060105560075460405163095ea7b360e01b81526001600160a01b039182166004820152602481018590529082169063095ea7b3906044016020604051808303816000875af11580156117dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118019190611dbd565b5060075460405163b66503cf60e01b81526001600160a01b038381166004830152602482018690529091169063b66503cf90604401600060405180830381600087803b15801561185057600080fd5b505af1158015611864573d6000803e3d6000fd5b50505050611873565b60108390555b604080518881526020810188905233917fbc567d6cbad26368064baa0ab5a757be46aae4d70f707f9203d9d9b6c8ccbfa3910160405180910390a2505050505b509091565b600061190d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661198a9092919063ffffffff16565b805190915015611261578080602001905181019061192b9190611dbd565b6112615760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610929565b606061199984846000856119a1565b949350505050565b606082471015611a025760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610929565b600080866001600160a01b03168587604051611a1e9190611e0b565b60006040518083038185875af1925050503d8060008114611a5b576040519150601f19603f3d011682016040523d82523d6000602084013e611a60565b606091505b5091509150611a7187838387611a7c565b979650505050505050565b60608315611aeb578251600003611ae4576001600160a01b0385163b611ae45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610929565b5081611999565b6119998383815115611b005781518083602001fd5b8060405162461bcd60e51b81526004016109299190611e27565b6001600160a01b03811681146105c257600080fd5b8035611b3a81611b1a565b919050565b600060208284031215611b5157600080fd5b8135610f2281611b1a565b600060208284031215611b6e57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215611b9e57600080fd5b8235611ba981611b1a565b915060208381013567ffffffffffffffff80821115611bc757600080fd5b818601915086601f830112611bdb57600080fd5b813581811115611bed57611bed611b75565b8060051b604051601f19603f83011681018181108582111715611c1257611c12611b75565b604052918252848201925083810185019189831115611c3057600080fd5b938501935b82851015611c5557611c4685611b2f565b84529385019392850192611c35565b8096505050505050509250929050565b60008060408385031215611c7857600080fd5b8235611c8381611b1a565b946020939093013593505050565b9485526001600160a01b0393841660208601529190921660408401526060830191909152608082015260a00190565b600060208284031215611cd257600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611d0157611d01611cd9565b500390565b6000816000190483118215151615611d2057611d20611cd9565b500290565b600082611d4257634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611d5a57611d5a611cd9565b500190565b60008060408385031215611d7257600080fd5b505080516020909101519092909150565b60008060408385031215611d9657600080fd5b8251611da181611b1a565b6020840151909250611db281611b1a565b809150509250929050565b600060208284031215611dcf57600080fd5b81518015158114610f2257600080fd5b60005b83811015611dfa578181015183820152602001611de2565b838111156113605750506000910152565b60008251611e1d818460208701611ddf565b9190910192915050565b6020815260008251806020840152611e46816040850160208701611ddf565b601f01601f1916919091016040019291505056fea2646970667358221220886fe85c5256707fece21cef0f2fd5730e161ec0d80e07476da7b3db05b7aa3d64736f6c634300080d0033";

type GaugeV21ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GaugeV21ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GaugeV21__factory extends ContractFactory {
  constructor(...args: GaugeV21ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _rewardToken: AddressLike,
    _ve: AddressLike,
    _token: AddressLike,
    _distribution: AddressLike,
    _internal_bribe: AddressLike,
    _external_bribe: AddressLike,
    _isForPair: boolean,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _rewardToken,
      _ve,
      _token,
      _distribution,
      _internal_bribe,
      _external_bribe,
      _isForPair,
      overrides || {}
    );
  }
  override deploy(
    _rewardToken: AddressLike,
    _ve: AddressLike,
    _token: AddressLike,
    _distribution: AddressLike,
    _internal_bribe: AddressLike,
    _external_bribe: AddressLike,
    _isForPair: boolean,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _rewardToken,
      _ve,
      _token,
      _distribution,
      _internal_bribe,
      _external_bribe,
      _isForPair,
      overrides || {}
    ) as Promise<
      GaugeV21 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): GaugeV21__factory {
    return super.connect(runner) as GaugeV21__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GaugeV21Interface {
    return new Interface(_abi) as GaugeV21Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): GaugeV21 {
    return new Contract(address, _abi, runner) as unknown as GaugeV21;
  }
}
