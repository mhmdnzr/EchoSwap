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
import type { NonPayableOverrides } from "../../common";
import type {
  VeArtProxyUpgradeable,
  VeArtProxyUpgradeableInterface,
} from "../../contracts/VeArtProxyUpgradeable";

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
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_balanceOf",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_locked_end",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "_tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "output",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610daf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c5780638129fc1c146100665780638da5cb5b1461006e578063dd9ec1491461008e578063f2fde38b146100ae575b600080fd5b6100646100c1565b005b6100646100d5565b6033546040516001600160a01b0390911681526020015b60405180910390f35b6100a161009c366004610716565b6101eb565b6040516100859190610778565b6100646100bc3660046107ab565b610322565b6100c9610398565b6100d360006103f2565b565b600054610100900460ff16158080156100f55750600054600160ff909116105b8061010f5750303b15801561010f575060005460ff166001145b6101775760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801561019a576000805461ff0019166101001790555b6101a2610444565b80156101e8576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b606060405180610120016040528060fd8152602001610c3d60fd913990508061021386610473565b6040516020016102249291906107db565b60405160208183030381529060405290508061023f85610473565b604051602001610250929190610857565b60405160208183030381529060405290508061026b84610473565b60405160200161027c9291906108d7565b60405160208183030381529060405290508061029783610473565b6040516020016102a8929190610958565b604051602081830303815290604052905060006102f56102c787610473565b6102d08461057c565b6040516020016102e19291906109b3565b60405160208183030381529060405261057c565b9050806040516020016103089190610ac5565b604051602081830303815290604052915050949350505050565b61032a610398565b6001600160a01b03811661038f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161016e565b6101e8816103f2565b6033546001600160a01b031633146100d35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161016e565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1661046b5760405162461bcd60e51b815260040161016e90610b0a565b6100d36106e6565b60608160000361049a5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156104c457806104ae81610b6b565b91506104bd9050600a83610b9a565b915061049e565b60008167ffffffffffffffff8111156104df576104df610bae565b6040519080825280601f01601f191660200182016040528015610509576020820181803683370190505b5090505b84156105745761051e600183610bc4565b915061052b600a86610bdb565b610536906030610bef565b60f81b81838151811061054b5761054b610c07565b60200101906001600160f81b031916908160001a90535061056d600a86610b9a565b945061050d565b949350505050565b805160609060008190036105a0575050604080516020810190915260008152919050565b600060036105af836002610bef565b6105b99190610b9a565b6105c4906004610c1d565b905060006105d3826020610bef565b67ffffffffffffffff8111156105eb576105eb610bae565b6040519080825280601f01601f191660200182016040528015610615576020820181803683370190505b5090506000604051806060016040528060408152602001610d3a604091399050600181016020830160005b868110156106a1576003818a01810151603f601282901c8116860151600c83901c8216870151600684901c831688015192909316870151600891821b60ff94851601821b92841692909201901b91160160e01b835260049092019101610640565b5060038606600181146106bb57600281146106cc576106d8565b613d3d60f01b6001198301526106d8565b603d60f81b6000198301525b505050918152949350505050565b600054610100900460ff1661070d5760405162461bcd60e51b815260040161016e90610b0a565b6100d3336103f2565b6000806000806080858703121561072c57600080fd5b5050823594602084013594506040840135936060013592509050565b60005b8381101561076357818101518382015260200161074b565b83811115610772576000848401525b50505050565b6020815260008251806020840152610797816040850160208701610748565b601f01601f19169190910160400192915050565b6000602082840312156107bd57600080fd5b81356001600160a01b03811681146107d457600080fd5b9392505050565b600083516107ed818460208801610748565b6503a37b5b2b7160d51b9083019081528351610810816006840160208801610748565b7f3c2f746578743e3c7465787420783d2231302220793d2234302220636c61737360069290910191820152671e913130b9b2911f60c11b6026820152602e01949350505050565b60008351610869818460208801610748565b6903130b630b731b2a7b3160b51b908301908152835161089081600a840160208801610748565b7f3c2f746578743e3c7465787420783d2231302220793d2236302220636c617373600a9290910191820152671e913130b9b2911f60c11b602a820152603201949350505050565b600083516108e9818460208801610748565b6a03637b1b5b2b22fb2b732160ad1b908301908152835161091181600b840160208801610748565b7f3c2f746578743e3c7465787420783d2231302220793d2238302220636c617373600b9290910191820152671e913130b9b2911f60c11b602b820152603301949350505050565b6000835161096a818460208801610748565b6503b30b63ab2960d51b908301908152835161098d816006840160208801610748565b6c1e17ba32bc3a1f1e17b9bb339f60991b60069290910191820152601301949350505050565b6f7b226e616d65223a20226c6f636b202360801b815282516000906109df816010850160208801610748565b7f222c20226465736372697074696f6e223a20224563686f206c6f636b732c20636010918401918201527f616e206265207573656420746f20626f6f7374206761756765207969656c647360308201527f2c20766f7465206f6e20746f6b656e20656d697373696f6e2c20616e6420726560508201527f636569766520627269626573222c2022696d616765223a2022646174613a696d6070820152721859d94bdcdd99cade1b5b0ed8985cd94d8d0b606a1b60908201528351610aaa8160a3840160208801610748565b61227d60f01b60a3929091019182015260a501949350505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251610afd81601d850160208701610748565b91909101601d0192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600060018201610b7d57610b7d610b55565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082610ba957610ba9610b84565b500490565b634e487b7160e01b600052604160045260246000fd5b600082821015610bd657610bd6610b55565b500390565b600082610bea57610bea610b84565b500690565b60008219821115610c0257610c02610b55565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816000190483118215151615610c3757610c37610b55565b50029056fe3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f73766722207072657365727665417370656374526174696f3d22784d696e594d696e206d656574222076696577426f783d223020302033353020333530223e3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e742d66616d696c793a2073657269663b20666f6e742d73697a653a20313470783b207d3c2f7374796c653e3c726563742077696474683d223130302522206865696768743d2231303025222066696c6c3d22626c61636b22202f3e3c7465787420783d2231302220793d2232302220636c6173733d2262617365223e4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220de7f86dae927d2db039cdc4c8e7b55cd7850664a69a7e08872be31620ade0a4764736f6c634300080d0033";

type VeArtProxyUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VeArtProxyUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VeArtProxyUpgradeable__factory extends ContractFactory {
  constructor(...args: VeArtProxyUpgradeableConstructorParams) {
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
      VeArtProxyUpgradeable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): VeArtProxyUpgradeable__factory {
    return super.connect(runner) as VeArtProxyUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VeArtProxyUpgradeableInterface {
    return new Interface(_abi) as VeArtProxyUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): VeArtProxyUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as VeArtProxyUpgradeable;
  }
}
