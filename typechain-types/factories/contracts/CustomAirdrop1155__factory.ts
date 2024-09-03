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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  CustomAirdrop1155,
  CustomAirdrop1155Interface,
} from "../../contracts/CustomAirdrop1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "airdropName",
        type: "string",
      },
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAirdropAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expirationDate",
        type: "uint256",
      },
      {
        internalType: "enum AirdropType",
        name: "airdropType",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "allowedAddress",
        type: "address",
      },
    ],
    name: "AddressAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "disallowedAddress",
        type: "address",
      },
    ],
    name: "AddressDisallowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
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
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "allowAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "allowAddresses",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "disallowAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "disallowAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAirdropAmountLeft",
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
    name: "getAirdropInfo",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "airdropName",
            type: "string",
          },
          {
            internalType: "address",
            name: "airdropAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "totalAirdropAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "airdropAmountLeft",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationDate",
            type: "uint256",
          },
          {
            internalType: "enum AirdropType",
            name: "airdropType",
            type: "uint8",
          },
        ],
        internalType: "struct AirdropInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
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
    name: "getClaimAmount",
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
    name: "getExpirationDate",
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
    name: "getTotalAirdropAmount",
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
    name: "hasBalanceToClaim",
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
    name: "hasBeenTotallyClaimed",
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
        name: "_address",
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
    name: "hasExpired",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "isAllowed",
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
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
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
  "0x60806040523480156200001157600080fd5b50604051620024da380380620024da83398181016040528101906200003791906200048f565b86600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a4919062000588565b60405180910390fd5b620000be816200017060201b60201c565b5085600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508760079081620001119190620007e6565b50846006819055508360028190555083600381905550826004819055508160058190555080600860006101000a81548160ff021916908360018111156200015d576200015c620008cd565b5b02179055505050505050505050620008fc565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200029d8262000252565b810181811067ffffffffffffffff82111715620002bf57620002be62000263565b5b80604052505050565b6000620002d462000234565b9050620002e2828262000292565b919050565b600067ffffffffffffffff82111562000305576200030462000263565b5b620003108262000252565b9050602081019050919050565b60005b838110156200033d57808201518184015260208101905062000320565b60008484015250505050565b6000620003606200035a84620002e7565b620002c8565b9050828152602081018484840111156200037f576200037e6200024d565b5b6200038c8482856200031d565b509392505050565b600082601f830112620003ac57620003ab62000248565b5b8151620003be84826020860162000349565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003f482620003c7565b9050919050565b6200040681620003e7565b81146200041257600080fd5b50565b6000815190506200042681620003fb565b92915050565b6000819050919050565b62000441816200042c565b81146200044d57600080fd5b50565b600081519050620004618162000436565b92915050565b600281106200047557600080fd5b50565b600081519050620004898162000467565b92915050565b600080600080600080600080610100898b031215620004b357620004b26200023e565b5b600089015167ffffffffffffffff811115620004d457620004d362000243565b5b620004e28b828c0162000394565b9850506020620004f58b828c0162000415565b9750506040620005088b828c0162000415565b96505060606200051b8b828c0162000450565b95505060806200052e8b828c0162000450565b94505060a0620005418b828c0162000450565b93505060c0620005548b828c0162000450565b92505060e0620005678b828c0162000478565b9150509295985092959890939650565b6200058281620003e7565b82525050565b60006020820190506200059f600083018462000577565b92915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005f857607f821691505b6020821081036200060e576200060d620005b0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006787fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000639565b62000684868362000639565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006c7620006c1620006bb846200042c565b6200069c565b6200042c565b9050919050565b6000819050919050565b620006e383620006a6565b620006fb620006f282620006ce565b84845462000646565b825550505050565b600090565b6200071262000703565b6200071f818484620006d8565b505050565b5b8181101562000747576200073b60008262000708565b60018101905062000725565b5050565b601f8211156200079657620007608162000614565b6200076b8462000629565b810160208510156200077b578190505b620007936200078a8562000629565b83018262000724565b50505b505050565b600082821c905092915050565b6000620007bb600019846008026200079b565b1980831691505092915050565b6000620007d68383620007a8565b9150826002028217905092915050565b620007f182620005a5565b67ffffffffffffffff8111156200080d576200080c62000263565b5b620008198254620005df565b620008268282856200074b565b600060209050601f8311600181146200085e576000841562000849578287015190505b620008558582620007c8565b865550620008c5565b601f1984166200086e8662000614565b60005b82811015620008985784890151825560018201915060208501945060208101905062000871565b86831015620008b85784890151620008b4601f891682620007a8565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b611bce806200090c6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806373b2e80e116100ad578063b7c58d7a11610071578063b7c58d7a146102e9578063babcc53914610305578063cd61a60914610335578063f23a6e6114610353578063f2fde38b146103835761012c565b806373b2e80e146102435780638da5cb5b1461027357806390e64d13146102915780639592a2cd146102af578063a9f7d0b2146102cd5761012c565b80633d13f874116100f45780633d13f874146101c357806343f367c8146101df5780635edf7d8b146101fd57806371127ed21461021b578063715018a6146102395761012c565b806301cb54c01461013157806308af4d881461014f57806312065fe01461016b57806332f08873146101895780633863b1f5146101a7575b600080fd5b61013961039f565b6040516101469190610f76565b60405180910390f35b61016960048036038101906101649190611003565b61044a565b005b6101736104e4565b6040516101809190611049565b60405180910390f35b61019161058a565b60405161019e9190611225565b60405180910390f35b6101c160048036038101906101bc919061138f565b610693565b005b6101dd60048036038101906101d8919061145f565b610781565b005b6101e7610a3c565b6040516101f49190611049565b60405180910390f35b610205610a46565b6040516102129190611049565b60405180910390f35b610223610a50565b6040516102309190611049565b60405180910390f35b610241610a5a565b005b61025d60048036038101906102589190611003565b610a6e565b60405161026a9190610f76565b60405180910390f35b61027b610ac4565b60405161028891906114e2565b60405180910390f35b610299610aed565b6040516102a69190610f76565b60405180910390f35b6102b7610af9565b6040516102c49190610f76565b60405180910390f35b6102e760048036038101906102e2919061138f565b610b07565b005b61030360048036038101906102fe9190611003565b610bf5565b005b61031f600480360381019061031a9190611003565b610c8f565b60405161032c9190610f76565b60405180910390f35b61033d610ce5565b60405161034a9190611049565b60405180910390f35b61036d600480360381019061036891906115b2565b610cef565b60405161037a9190611684565b60405180910390f35b61039d60048036038101906103989190611003565b610d1d565b005b6000600454600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662fdd58e306006546040518363ffffffff1660e01b815260040161040292919061169f565b602060405180830381865afa15801561041f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044391906116dd565b1015905090565b610452610da3565b6001600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f5d20d7597e8195aa92d4ad63482761cfbbe7c4afdef190f27182702924c9af77816040516104d991906114e2565b60405180910390a150565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662fdd58e306006546040518363ffffffff1660e01b815260040161054492919061169f565b602060405180830381865afa158015610561573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058591906116dd565b905090565b610592610ef6565b6040518060e00160405280600780546105aa90611739565b80601f01602080910402602001604051908101604052809291908181526020018280546105d690611739565b80156106235780601f106105f857610100808354040283529160200191610623565b820191906000526020600020905b81548152906001019060200180831161060657829003601f168201915b505050505081526020013073ffffffffffffffffffffffffffffffffffffffff1681526020016002548152602001600354815260200160045481526020016005548152602001600860009054906101000a900460ff16600181111561068b5761068a611112565b5b815250905090565b61069b610da3565b60005b815181101561077d576001600960008484815181106106c0576106bf61176a565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f5d20d7597e8195aa92d4ad63482761cfbbe7c4afdef190f27182702924c9af7782828151811061074d5761074c61176a565b5b602002602001015160405161076291906114e2565b60405180910390a18080610775906117c8565b91505061069e565b5050565b610789610da3565b61079284610c8f565b6107d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c890611893565b60405180910390fd5b6107d9610aed565b15610819576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610810906118ff565b60405180910390fd5b61082284610a6e565b15610862576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085990611991565b60405180910390fd5b61086a610af9565b156108aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a190611a23565b60405180910390fd5b6108b261039f565b6108f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e890611ab5565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a30866006546004546040518563ffffffff1660e01b81526004016109569493929190611b0c565b600060405180830381600087803b15801561097057600080fd5b505af1158015610984573d6000803e3d6000fd5b505050506004546003600082825461099c9190611b64565b925050819055506001600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d484600454604051610a2e92919061169f565b60405180910390a150505050565b6000600254905090565b6000600554905090565b6000600454905090565b610a62610da3565b610a6c6000610e2a565b565b6000600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60004260055410905090565b600060045460035410905090565b610b0f610da3565b60005b8151811015610bf157600060096000848481518110610b3457610b3361176a565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f5f1b0fa787087c297cc2ee3a7641860058ab750c330ac3ea5d6d5b9b777f353d828281518110610bc157610bc061176a565b5b6020026020010151604051610bd691906114e2565b60405180910390a18080610be9906117c8565b915050610b12565b5050565b610bfd610da3565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f5f1b0fa787087c297cc2ee3a7641860058ab750c330ac3ea5d6d5b9b777f353d81604051610c8491906114e2565b60405180910390a150565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600354905090565b60007ff23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf97905095945050505050565b610d25610da3565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d975760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610d8e91906114e2565b60405180910390fd5b610da081610e2a565b50565b610dab610eee565b73ffffffffffffffffffffffffffffffffffffffff16610dc9610ac4565b73ffffffffffffffffffffffffffffffffffffffff1614610e2857610dec610eee565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610e1f91906114e2565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6040518060e0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000815260200160006001811115610f5557610f54611112565b5b81525090565b60008115159050919050565b610f7081610f5b565b82525050565b6000602082019050610f8b6000830184610f67565b92915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fd082610fa5565b9050919050565b610fe081610fc5565b8114610feb57600080fd5b50565b600081359050610ffd81610fd7565b92915050565b60006020828403121561101957611018610f9b565b5b600061102784828501610fee565b91505092915050565b6000819050919050565b61104381611030565b82525050565b600060208201905061105e600083018461103a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561109e578082015181840152602081019050611083565b60008484015250505050565b6000601f19601f8301169050919050565b60006110c682611064565b6110d0818561106f565b93506110e0818560208601611080565b6110e9816110aa565b840191505092915050565b6110fd81610fc5565b82525050565b61110c81611030565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6002811061115257611151611112565b5b50565b600081905061116382611141565b919050565b600061117382611155565b9050919050565b61118381611168565b82525050565b600060e08301600083015184820360008601526111a682826110bb565b91505060208301516111bb60208601826110f4565b5060408301516111ce6040860182611103565b5060608301516111e16060860182611103565b5060808301516111f46080860182611103565b5060a083015161120760a0860182611103565b5060c083015161121a60c086018261117a565b508091505092915050565b6000602082019050818103600083015261123f8184611189565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611284826110aa565b810181811067ffffffffffffffff821117156112a3576112a261124c565b5b80604052505050565b60006112b6610f91565b90506112c2828261127b565b919050565b600067ffffffffffffffff8211156112e2576112e161124c565b5b602082029050602081019050919050565b600080fd5b600061130b611306846112c7565b6112ac565b9050808382526020820190506020840283018581111561132e5761132d6112f3565b5b835b8181101561135757806113438882610fee565b845260208401935050602081019050611330565b5050509392505050565b600082601f83011261137657611375611247565b5b81356113868482602086016112f8565b91505092915050565b6000602082840312156113a5576113a4610f9b565b5b600082013567ffffffffffffffff8111156113c3576113c2610fa0565b5b6113cf84828501611361565b91505092915050565b6113e181611030565b81146113ec57600080fd5b50565b6000813590506113fe816113d8565b92915050565b600080fd5b60008083601f84011261141f5761141e611247565b5b8235905067ffffffffffffffff81111561143c5761143b611404565b5b602083019150836020820283011115611458576114576112f3565b5b9250929050565b6000806000806060858703121561147957611478610f9b565b5b600061148787828801610fee565b9450506020611498878288016113ef565b935050604085013567ffffffffffffffff8111156114b9576114b8610fa0565b5b6114c587828801611409565b925092505092959194509250565b6114dc81610fc5565b82525050565b60006020820190506114f760008301846114d3565b92915050565b600080fd5b600067ffffffffffffffff82111561151d5761151c61124c565b5b611526826110aa565b9050602081019050919050565b82818337600083830152505050565b600061155561155084611502565b6112ac565b905082815260208101848484011115611571576115706114fd565b5b61157c848285611533565b509392505050565b600082601f83011261159957611598611247565b5b81356115a9848260208601611542565b91505092915050565b600080600080600060a086880312156115ce576115cd610f9b565b5b60006115dc88828901610fee565b95505060206115ed88828901610fee565b94505060406115fe888289016113ef565b935050606061160f888289016113ef565b925050608086013567ffffffffffffffff8111156116305761162f610fa0565b5b61163c88828901611584565b9150509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61167e81611649565b82525050565b60006020820190506116996000830184611675565b92915050565b60006040820190506116b460008301856114d3565b6116c1602083018461103a565b9392505050565b6000815190506116d7816113d8565b92915050565b6000602082840312156116f3576116f2610f9b565b5b6000611701848285016116c8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061175157607f821691505b6020821081036117645761176361170a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117d382611030565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361180557611804611799565b5b600182019050919050565b600082825260208201905092915050565b7f41646472657373206e6f7420616c6c6f77656420746f20636c61696d2074686960008201527f732061697264726f700000000000000000000000000000000000000000000000602082015250565b600061187d602983611810565b915061188882611821565b604082019050919050565b600060208201905081810360008301526118ac81611870565b9050919050565b7f41697264726f7020616c726561647920657870697265642e0000000000000000600082015250565b60006118e9601883611810565b91506118f4826118b3565b602082019050919050565b60006020820190508181036000830152611918816118dc565b9050919050565b7f4164647265737320616c726561647920636c61696d656420746869732061697260008201527f64726f702e000000000000000000000000000000000000000000000000000000602082015250565b600061197b602583611810565b91506119868261191f565b604082019050919050565b600060208201905081810360008301526119aa8161196e565b9050919050565b7f41697264726f7020686173206265656e20746f74616c6c7920636c61696d656460008201527f20616c72656164792e0000000000000000000000000000000000000000000000602082015250565b6000611a0d602983611810565b9150611a18826119b1565b604082019050919050565b60006020820190508181036000830152611a3c81611a00565b9050919050565b7f41697264726f7020636f6e74726163742068617320696e73756666696369656e60008201527f7420746f6b656e2062616c616e63652e00000000000000000000000000000000602082015250565b6000611a9f603083611810565b9150611aaa82611a43565b604082019050919050565b60006020820190508181036000830152611ace81611a92565b9050919050565b600082825260208201905092915050565b50565b6000611af6600083611ad5565b9150611b0182611ae6565b600082019050919050565b600060a082019050611b2160008301876114d3565b611b2e60208301866114d3565b611b3b604083018561103a565b611b48606083018461103a565b8181036080830152611b5981611ae9565b905095945050505050565b6000611b6f82611030565b9150611b7a83611030565b9250828203905081811115611b9257611b91611799565b5b9291505056fea2646970667358221220e5209c6972d3c744f3c3932be49ae0de2ff66239b835bf44dbd287f1e46974a064736f6c63430008140033";

type CustomAirdrop1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CustomAirdrop1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CustomAirdrop1155__factory extends ContractFactory {
  constructor(...args: CustomAirdrop1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    airdropName: string,
    initialOwner: AddressLike,
    tokenAddress: AddressLike,
    tokenId: BigNumberish,
    totalAirdropAmount: BigNumberish,
    claimAmount: BigNumberish,
    expirationDate: BigNumberish,
    airdropType: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      airdropName,
      initialOwner,
      tokenAddress,
      tokenId,
      totalAirdropAmount,
      claimAmount,
      expirationDate,
      airdropType,
      overrides || {}
    );
  }
  override deploy(
    airdropName: string,
    initialOwner: AddressLike,
    tokenAddress: AddressLike,
    tokenId: BigNumberish,
    totalAirdropAmount: BigNumberish,
    claimAmount: BigNumberish,
    expirationDate: BigNumberish,
    airdropType: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      airdropName,
      initialOwner,
      tokenAddress,
      tokenId,
      totalAirdropAmount,
      claimAmount,
      expirationDate,
      airdropType,
      overrides || {}
    ) as Promise<
      CustomAirdrop1155 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CustomAirdrop1155__factory {
    return super.connect(runner) as CustomAirdrop1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CustomAirdrop1155Interface {
    return new Interface(_abi) as CustomAirdrop1155Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CustomAirdrop1155 {
    return new Contract(address, _abi, runner) as unknown as CustomAirdrop1155;
  }
}
