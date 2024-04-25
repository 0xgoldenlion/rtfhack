import { Chain } from "wagmi";

export const rtf: Chain = {
  name: "RTF Network",
  id: 22999,
  network: "RTF Network",
  nativeCurrency: {
    name: "RTF",
    symbol: "RTF",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.rtfight.com"],
    },
    public: {
      http: ["https://rpc-testnet.rtfight.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://network.rtfight.com/",
    },
  },
};


