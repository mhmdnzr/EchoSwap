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
  AirdropClaimTest,
  AirdropClaimTestInterface,
} from "../../../contracts/TestContract/AirdropClaimTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ve",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
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
    name: "DISTRIBUTION_PERIOD",
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
    name: "INIT_SHARE",
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
    name: "LINEAR_DISTRO",
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
    name: "PRECISION",
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
    name: "VESTED_SHARE",
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
    name: "_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "claimable",
    outputs: [
      {
        internalType: "uint256",
        name: "_claimable",
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
    name: "deposit",
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
    name: "depositors",
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
    name: "info2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "init",
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
    name: "merkle",
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
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
    ],
    name: "setDepositor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_merkle",
        type: "address",
      },
    ],
    name: "setMerkleTreeContract",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_who",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setUserInfo",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTimestamp",
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
    name: "token",
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
    name: "tokenPerSec",
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
    name: "totalAirdrop",
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
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenPerSec",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
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
    name: "usersFlag",
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
    name: "ve",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0604052601960808190527f41697264726f70436c61696d20544553542041697264726f700000000000000060a09081526200004091600a9190620000b3565b503480156200004e57600080fd5b50604051620017f3380380620017f3833981016040819052620000719162000176565b6001600055600680546001600160a01b03199081163317909155600980546001600160a01b0394851690831617905560078054929093169116179055620001ea565b828054620000c190620001ae565b90600052602060002090601f016020900481019282620000e5576000855562000130565b82601f106200010057805160ff191683800117855562000130565b8280016001018555821562000130579182015b828111156200013057825182559160200191906001019062000113565b506200013e92915062000142565b5090565b5b808211156200013e576000815560010162000143565b80516001600160a01b03811681146200017157600080fd5b919050565b600080604083850312156200018a57600080fd5b620001958362000159565b9150620001a56020840162000159565b90509250929050565b600181811c90821680620001c357607f821691505b602082108103620001e457634e487b7160e01b600052602260045260246000fd5b50919050565b6115f980620001fa6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c8063b349b973116100de578063d5a703b511610097578063e900ea7c11610071578063e900ea7c146103ad578063eed75f6d146103b6578063f2c098b7146103d9578063fc0c546a146103ec57600080fd5b8063d5a703b514610384578063e1c7392a14610397578063e6fd48bc146103a457600080fd5b8063b349b97314610332578063b460af941461033a578063b6b55f251461034d578063c584b9b514610360578063cb3a644014610373578063d402e5831461037b57600080fd5b806350fd1f3e1161014b5780638da5cb5b116101255780638da5cb5b1461026e578063a87430ba14610281578063aaf5eb681461031f578063b092deb11461032857600080fd5b806350fd1f3e146102475780635ce97dbb146102505780636b7f18bb1461025957600080fd5b806306ad05ab1461019357806306e6712c146101a857806313af4035146101e05780631f850716146101f3578063402914f51461021e5780634e71d92d1461023f575b600080fd5b6101a66101a136600461137e565b6103ff565b005b6101cb6101b636600461137e565b600c6020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6101a66101ee36600461137e565b610467565b600754610206906001600160a01b031681565b6040516001600160a01b0390911681526020016101d7565b61023161022c36600461137e565b6104c6565b6040519081526020016101d7565b6101a6610678565b61023160045481565b61023160055481565b610261610922565b6040516101d791906113c5565b600654610206906001600160a01b031681565b6102db61028f36600461137e565b600b60205260009081526040902080546001820154600283015460038401546004850154600586015460068701546007909701549596949593949293919290916001600160a01b031688565b604080519889526020890197909752958701949094526060860192909252608085015260a084015260c08301526001600160a01b031660e0820152610100016101d7565b6102316103e881565b610231621baf8081565b6101a66109b0565b6101a66103483660046113f8565b6109fc565b6101a661035b366004611434565b610a95565b600854610206906001600160a01b031681565b61023160fa81565b61023160025481565b6101cb61039236600461144d565b610b40565b6001546101cb9060ff1681565b61023160035481565b6102316101f481565b6101cb6103c436600461137e565b600d6020526000908152604090205460ff1681565b6101a66103e736600461137e565b610f8d565b600954610206906001600160a01b031681565b6006546001600160a01b031633146104325760405162461bcd60e51b815260040161042990611489565b60405180910390fd5b6001600160a01b03811661044557600080fd5b600880546001600160a01b0319166001600160a01b0392909216919091179055565b6006546001600160a01b031633146104915760405162461bcd60e51b815260040161042990611489565b6001600160a01b0381166104a457600080fd5b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600c602052604081205460ff166104eb57600080fd5b6001600160a01b038083166000908152600b602090815260409182902082516101008101845281548152600182015492810192909252600281015492820192909252600380830154606083015260048301546080830152600583015460a0830152600683015460c083015260079092015490921660e08301525461057390621baf80906114c2565b8160a0015111156105ba5760405162461bcd60e51b81526020600482015260116024820152701d1a5b594e8818db185a5b595908185b1b607a1b6044820152606401610429565b805160c082015111156106035760405162461bcd60e51b8152602060048201526011602482015270185b5b9d0e8818db185a5b595908185b1b607a1b6044820152606401610429565b600354429061061690621baf80906114c2565b81111561063157621baf8060035461062e91906114c2565b90505b60008260a001518261064391906114da565b90506000811161065257600080fd5b6103e883608001518261066591906114f1565b61066f9190611510565b95945050505050565b610680611001565b336000908152600c602052604090205460ff1661069c57600080fd5b336000908152600b602090815260409182902082516101008101845281548152600182015492810192909252600281015492820192909252600380830154606083015260048301546080830152600583015460a0830152600683015460c08301526007909201546001600160a01b031660e0820152905461072190621baf80906114c2565b8160a0015111156107685760405162461bcd60e51b81526020600482015260116024820152701d1a5b594e8818db185a5b595908185b1b607a1b6044820152606401610429565b805160c082015111156107b15760405162461bcd60e51b8152602060048201526011602482015270185b5b9d0e8818db185a5b595908185b1b607a1b6044820152606401610429565b60e081015160035442906107c990621baf80906114c2565b8111156107e457621baf806003546107e191906114c2565b90505b60008360a00151826107f691906114da565b90506000811161080557600080fd5b60006103e885608001518361081a91906114f1565b6108249190611510565b60a0860184905260c08601805191925082916108419083906114c2565b905250845160c0860151111561088d5760405162461bcd60e51b815260206004820152601160248201527018db185a5b5959080f881d1bdd105b5b9d607a1b6044820152606401610429565b336000908152600b602090815260409182902087518155908701516001820155908601516002820155606086015160038201556080860151600482015560a0860151600582015560c0860151600682015560e0860151600790910180546001600160a01b0319166001600160a01b039283161790556009546109119116858361105a565b50505050506109206001600055565b565b600a805461092f90611532565b80601f016020809104026020016040519081016040528092919081815260200182805461095b90611532565b80156109a85780601f1061097d576101008083540402835291602001916109a8565b820191906000526020600020905b81548152906001019060200180831161098b57829003601f168201915b505050505081565b6006546001600160a01b031633146109da5760405162461bcd60e51b815260040161042990611489565b60015460ff16156109ea57600080fd5b6001805460ff19168117905542600355565b336000908152600d602052604090205460ff16151560011480610a2957506006546001600160a01b031633145b610a3257600080fd5b610a466001600160a01b038316828561105a565b8260056000828254610a5891906114da565b90915550506040518381527f5b6b431d4476a211bb7d41c20d1aab9ae2321deee0d20be3d9fc9b1093fa6e3d9060200160405180910390a1505050565b336000908152600d602052604090205460ff16151560011480610ac257506006546001600160a01b031633145b610acb57600080fd5b60015460ff1615610adb57600080fd5b600954610af3906001600160a01b03163330846110c2565b8060056000828254610b0591906114c2565b90915550506040518181527f4d6ce1e535dbade1c23defba91e23b8f791ce5edc0cc320257a2b364e4e384269060200160405180910390a150565b6008546000906001600160a01b03163314610b6d5760405162461bcd60e51b815260040161042990611489565b610b75611001565b6001600160a01b038416610bb45760405162461bcd60e51b815260206004820152600660248201526506164647220360d41b6044820152606401610429565b6001600160a01b038316610bf35760405162461bcd60e51b815260206004820152600660248201526506164647220360d41b6044820152606401610429565b60008211610c2c5760405162461bcd60e51b81526020600482015260066024820152650616d6e7420360d41b6044820152606401610429565b6001600160a01b0384166000908152600c602052604090205460ff1615610c7d5760405162461bcd60e51b815260206004820152600560248201526421666c616760d81b6044820152606401610429565b60015460ff16610cba5760405162461bcd60e51b81526020600482015260086024820152671b9bdd081a5b9a5d60c21b6044820152606401610429565b60006103e8610ccb6101f4856114f1565b610cd59190611510565b905060006103e8610ce760fa866114f1565b610cf19190611510565b9050806000621baf80610d066103e8846114f1565b610d109190611510565b9050600060405180610100016040528088815260200185815260200186815260200184815260200183815260200160035481526020018686610d5291906114c2565b81526001600160a01b038a81166020928301528b81166000908152600b835260408082208551815585850151600180830191909155868301516002830155606087015160038301556080870151600483015560a0870151600583015560c0870151600683015560e0870151600790920180546001600160a01b03191692861692909217909155600c9094529020805460ff1916909217909155600954919250610dfd9116898661105a565b60095460075460405163095ea7b360e01b81526001600160a01b0391821660048201526000602482015291169063095ea7b3906044016020604051808303816000875af1158015610e52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e76919061156c565b5060095460075460405163095ea7b360e01b81526001600160a01b0391821660048201526024810188905291169063095ea7b3906044016020604051808303816000875af1158015610ecc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef0919061156c565b5060075460405163d4e54c3b60e01b8152600481018790526303bfc40060248201526001600160a01b038b811660448301529091169063d4e54c3b906064016020604051808303816000875af1158015610f4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f72919061158e565b50600195505050505050610f866001600055565b9392505050565b6006546001600160a01b03163314610fb75760405162461bcd60e51b815260040161042990611489565b6001600160a01b0381166000908152600d602052604090205460ff1615610fdd57600080fd5b6001600160a01b03166000908152600d60205260409020805460ff19166001179055565b6002600054036110535760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610429565b6002600055565b6040516001600160a01b0383166024820152604481018290526110bd90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611100565b505050565b6040516001600160a01b03808516602483015283166044820152606481018290526110fa9085906323b872dd60e01b90608401611086565b50505050565b6000611155826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111d29092919063ffffffff16565b8051909150156110bd5780806020019051810190611173919061156c565b6110bd5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610429565b60606111e184846000856111e9565b949350505050565b60608247101561124a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610429565b600080866001600160a01b0316858760405161126691906115a7565b60006040518083038185875af1925050503d80600081146112a3576040519150601f19603f3d011682016040523d82523d6000602084013e6112a8565b606091505b50915091506112b9878383876112c4565b979650505050505050565b6060831561133357825160000361132c576001600160a01b0385163b61132c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610429565b50816111e1565b6111e183838151156113485781518083602001fd5b8060405162461bcd60e51b815260040161042991906113c5565b80356001600160a01b038116811461137957600080fd5b919050565b60006020828403121561139057600080fd5b610f8682611362565b60005b838110156113b457818101518382015260200161139c565b838111156110fa5750506000910152565b60208152600082518060208401526113e4816040850160208701611399565b601f01601f19169190910160400192915050565b60008060006060848603121561140d57600080fd5b8335925061141d60208501611362565b915061142b60408501611362565b90509250925092565b60006020828403121561144657600080fd5b5035919050565b60008060006060848603121561146257600080fd5b61146b84611362565b925061147960208501611362565b9150604084013590509250925092565b6020808252600990820152683737ba1037bbb732b960b91b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082198211156114d5576114d56114ac565b500190565b6000828210156114ec576114ec6114ac565b500390565b600081600019048311821515161561150b5761150b6114ac565b500290565b60008261152d57634e487b7160e01b600052601260045260246000fd5b500490565b600181811c9082168061154657607f821691505b60208210810361156657634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561157e57600080fd5b81518015158114610f8657600080fd5b6000602082840312156115a057600080fd5b5051919050565b600082516115b9818460208701611399565b919091019291505056fea26469706673582212203126029c55a6627f0371ad1407daca32feacf1a117211c0bd84f49776142a67a64736f6c634300080d0033";

type AirdropClaimTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AirdropClaimTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AirdropClaimTest__factory extends ContractFactory {
  constructor(...args: AirdropClaimTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _token: AddressLike,
    _ve: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_token, _ve, overrides || {});
  }
  override deploy(
    _token: AddressLike,
    _ve: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_token, _ve, overrides || {}) as Promise<
      AirdropClaimTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AirdropClaimTest__factory {
    return super.connect(runner) as AirdropClaimTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AirdropClaimTestInterface {
    return new Interface(_abi) as AirdropClaimTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AirdropClaimTest {
    return new Contract(address, _abi, runner) as unknown as AirdropClaimTest;
  }
}