"use client";

import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { useTheme } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={theme === "dark" ? darkTheme() : lightTheme()}
        coolMode
        chains={wagmiConfig.chains}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
} 