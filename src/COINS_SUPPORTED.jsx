import coinIBAT from "./assets/coinIBAT.svg";
import coinBNB from "./assets/coinBNB.svg";
import coinETH from "./assets/coinETH.png";
import coinMATIC from "./assets/chain_polygon.png";
import coinBUSD from "./assets/coinBUSD.png";
import coinUSDT from "./assets/coinUSDT.png";
import coinUSDC from "./assets/coinUSDC.png";
import coinDAI from "./assets/coinDAI.png";

export const BSC_COINS_SUPPORTED = [
  {
    symbol: "IBAT",
    name: "Battle Infinity",
    contractAddress: "0x19cd9B8e42d4EF62c3EA124110D5Cfd283CEaC43",
    imgSrc: coinIBAT,
    decimal: 9,
    ABI_allowance: [
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    ABI_approve: [
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  {
    symbol: "BNB",
    name: "Binance Smart Chain Native Token",
    contractAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    imgSrc: coinBNB,
    decimal: 18,
  },
  {
    symbol: "BUSD",
    name: "BUSD Token",
    contractAddress: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    imgSrc: coinBUSD,
    decimal: 18,
    ABI_allowance: [
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    ABI_approve: [
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    contractAddress: "0x55d398326f99059fF775485246999027B3197955",
    imgSrc: coinUSDT,
    decimal: 18,
    ABI_allowance: [
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    ABI_approve: [
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  {
    symbol: "USDC",
    name: "Binance-Peg USD Coin",
    contractAddress: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    imgSrc: coinUSDC,
    decimal: 18,
    ABI_allowance: [
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    ABI_approve: [
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  {
    symbol: "DAI",
    name: "Binance-Peg Dai Token",
    contractAddress: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    imgSrc: coinDAI,
    decimal: 18,
    ABI_allowance: [
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    ABI_approve: [
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
];

export const ETH_COINS_SUPPORTED = [
  {
    symbol: "ETH",
    name: "Ethereum Mainnet Native Token",
    imgSrc: coinETH,
    decimal: 18,
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    imgSrc: coinUSDT,
    decimal: 6,
    ABI_allowance: [
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ name: "remaining", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    ABI_approve: [
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_value", type: "uint256" },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  {
    symbol: "USDC",
    name: "USDCoin",
    contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    imgSrc: coinUSDC,
    decimal: 6,
    ABI_allowance: [
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    ABI_approve: [
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  {
    symbol: "BUSD",
    name: "Binance USD (paxos)",
    contractAddress: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    imgSrc: coinBUSD,
    decimal: 18,
    ABI_allowance: [
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    ABI_approve: [
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_value", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  {
    symbol: "DAI",
    name: "Dai Stablecoin",
    contractAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    imgSrc: coinDAI,
    decimal: 18,
    ABI_allowance: [
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    ABI_approve: [
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "usr", type: "address" },
          { internalType: "uint256", name: "wad", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
];
