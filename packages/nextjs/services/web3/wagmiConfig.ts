import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";
import { createConfig } from "wagmi";

const monadTestnet = {
  id: 1_337,
  name: "Monad Testnet",
  network: "monad-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Monad",
    symbol: "MONAD",
  },
  rpcUrls: {
    public: { http: ["https://rpc.monad.xyz/testnet"] },
    default: { http: ["https://rpc.monad.xyz/testnet"] },
  },
  blockExplorers: {
    default: { name: "MonadScan", url: "https://explorer.monad.xyz/testnet" },
  },
  testnet: true,
} as const;

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

export const wagmiConfig = createConfig(
  getDefaultConfig({
    appName: "PT-Nads POAPs",
    projectId,
    chains: [monadTestnet, mainnet, sepolia],
    ssr: true,
  }),
); 