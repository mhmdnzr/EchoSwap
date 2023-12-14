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
  MerkleTreeC98,
  MerkleTreeC98Interface,
} from "../../../../contracts/MerkleTree/MerkleTreeC98.sol/MerkleTreeC98";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "AlreadyClaimed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amnt",
        type: "uint256",
      },
    ],
    name: "NotInMerkle",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
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
    name: "hasClaimed",
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
    name: "info",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isFnftOwner",
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
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        name: "",
        type: "address",
      },
    ],
    name: "ownersToFnft",
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
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    name: "setMerkleRoot",
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
        name: "",
        type: "address",
      },
    ],
    name: "swFnftToOwner",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0604052601c60808190527f4d65726b6c65547265652065636f73797374656d2041697264726f700000000060a0908152620000409160089190620000cb565b503480156200004e57600080fd5b50600180546001600160a01b031990811633179091557f20de494178ee4881284548d60cc672d5c2db95382fd9cf19c25d26d7efa8a7c760005560038054821673f4c8e32eadec4bfe97e0f595add0f4450a863a111790556002805490911673fbbf371c9b0b994eebfcc977cef603f7f31c070d179055620001ad565b828054620000d99062000171565b90600052602060002090601f016020900481019282620000fd576000855562000148565b82601f106200011857805160ff191683800117855562000148565b8280016001018555821562000148579182015b82811115620001485782518255916020019190600101906200012b565b50620001569291506200015a565b5090565b5b808211156200015657600081556001016200015b565b600181811c908216806200018657607f821691505b602082108103620001a757634e487b7160e01b600052602260045260246000fd5b50919050565b610d1b80620001bd6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80637cb647591161008c578063e1c7392a11610066578063e1c7392a1461021e578063e8071ef714610232578063f4f3b20014610255578063fc0c546a1461026857600080fd5b80637cb64759146101cf5780638da5cb5b146101e2578063d2734905146101f557600080fd5b80632eb4a7ab116100c85780632eb4a7ab1461015d578063370158ea146101745780633d13f8741461018957806373b2e80e1461019c57600080fd5b80630bcda918146100ef57806313af4035146101355780631f8507161461014a575b600080fd5b6101186100fd366004610ad3565b6006602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610148610143366004610ad3565b61027b565b005b600254610118906001600160a01b031681565b61016660005481565b60405190815260200161012c565b61017c6102e3565b60405161012c9190610b1e565b610148610197366004610b51565b610371565b6101bf6101aa366004610ad3565b60046020526000908152604090205460ff1681565b604051901515815260200161012c565b6101486101dd366004610bdb565b610642565b600154610118906001600160a01b031681565b610118610203366004610ad3565b6005602052600090815260409020546001600160a01b031681565b6003546101bf90600160a01b900460ff1681565b6101bf610240366004610ad3565b60076020526000908152604090205460ff1681565b610148610263366004610ad3565b6106a7565b600354610118906001600160a01b031681565b6001546001600160a01b031633146102ae5760405162461bcd60e51b81526004016102a590610bf4565b60405180910390fd5b6001600160a01b0381166102c157600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600880546102f090610c17565b80601f016020809104026020016040519081016040528092919081815260200182805461031c90610c17565b80156103695780601f1061033e57610100808354040283529160200191610369565b820191906000526020600020905b81548152906001019060200180831161034c57829003601f168201915b505050505081565b3360008181526004602052604090205460ff16156103ad57604051632058b6db60e01b81526001600160a01b03821660048201526024016102a5565b6040516bffffffffffffffffffffffff19606083901b16602082015260348101859052600090605401604051602081830303815290604052805190602001209050600061042f85858080602002602001604051908101604052809392919081815260200183836020028082843760009201829052505492508691506107699050565b9050806104615760405163057365dd60e31b81526001600160a01b0384166004820152602481018790526044016102a5565b60035460025460405163095ea7b360e01b81526001600160a01b0391821660048201526000602482015291169063095ea7b3906044016020604051808303816000875af11580156104b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104da9190610c51565b5060035460025460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905291169063095ea7b3906044016020604051808303816000875af1158015610530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105549190610c51565b5060025460405163d4e54c3b60e01b8152600481018890526303bfc40060248201526001600160a01b0389811660448301529091169063d4e54c3b906064016020604051808303816000875af11580156105b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d69190610c73565b506001600160a01b0380841660008181526004602052604090819020805460ff1916600117905551918916917fdc2005f113f1c2ccd6bd35df2a16954f0ff4e029277b9d76ea10b0b3b29ae96490610631908a815260200190565b60405180910390a350505050505050565b6001546001600160a01b0316331461066c5760405162461bcd60e51b81526004016102a590610bf4565b806106a25760405162461bcd60e51b81526020600482015260066024820152650726f6f7420360d41b60448201526064016102a5565b600055565b6001546001600160a01b031633146106d15760405162461bcd60e51b81526004016102a590610bf4565b6001600160a01b0381166106e457600080fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561072b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074f9190610c73565b90506107656001600160a01b038316338361077f565b5050565b60008261077685846107d6565b14949350505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526107d1908490610823565b505050565b600081815b845181101561081b57610807828683815181106107fa576107fa610c8c565b60200260200101516108f5565b91508061081381610ca2565b9150506107db565b509392505050565b6000610878826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166109279092919063ffffffff16565b8051909150156107d157808060200190518101906108969190610c51565b6107d15760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102a5565b6000818310610911576000828152602084905260409020610920565b60008381526020839052604090205b9392505050565b6060610936848460008561093e565b949350505050565b60608247101561099f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102a5565b600080866001600160a01b031685876040516109bb9190610cc9565b60006040518083038185875af1925050503d80600081146109f8576040519150601f19603f3d011682016040523d82523d6000602084013e6109fd565b606091505b5091509150610a0e87838387610a19565b979650505050505050565b60608315610a88578251600003610a81576001600160a01b0385163b610a815760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102a5565b5081610936565b6109368383815115610a9d5781518083602001fd5b8060405162461bcd60e51b81526004016102a59190610b1e565b80356001600160a01b0381168114610ace57600080fd5b919050565b600060208284031215610ae557600080fd5b61092082610ab7565b60005b83811015610b09578181015183820152602001610af1565b83811115610b18576000848401525b50505050565b6020815260008251806020840152610b3d816040850160208701610aee565b601f01601f19169190910160400192915050565b60008060008060608587031215610b6757600080fd5b610b7085610ab7565b935060208501359250604085013567ffffffffffffffff80821115610b9457600080fd5b818701915087601f830112610ba857600080fd5b813581811115610bb757600080fd5b8860208260051b8501011115610bcc57600080fd5b95989497505060200194505050565b600060208284031215610bed57600080fd5b5035919050565b6020808252600990820152683737ba1037bbb732b960b91b604082015260600190565b600181811c90821680610c2b57607f821691505b602082108103610c4b57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610c6357600080fd5b8151801515811461092057600080fd5b600060208284031215610c8557600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b600060018201610cc257634e487b7160e01b600052601160045260246000fd5b5060010190565b60008251610cdb818460208701610aee565b919091019291505056fea264697066735822122067e01ad2231c082ee7c3fed4996226dfdeacd5ee5fca51ac9bc83e3d9f9a5fe064736f6c634300080d0033";

type MerkleTreeC98ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleTreeC98ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleTreeC98__factory extends ContractFactory {
  constructor(...args: MerkleTreeC98ConstructorParams) {
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
      MerkleTreeC98 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MerkleTreeC98__factory {
    return super.connect(runner) as MerkleTreeC98__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleTreeC98Interface {
    return new Interface(_abi) as MerkleTreeC98Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MerkleTreeC98 {
    return new Contract(address, _abi, runner) as unknown as MerkleTreeC98;
  }
}