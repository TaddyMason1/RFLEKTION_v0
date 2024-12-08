// src/app/layout.tsx
"use client";  // This tells Next.js to treat this as a client-side component

import "@rainbow-me/rainbowkit/styles.css";
import { WagmiProvider, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrumSepolia } from "wagmi/chains";
import Head from "next/head";
import Home from "./page";  // Import Home component

// Query Client Initialization
const queryClient = new QueryClient();

// Set up Wagmi client config
const config = getDefaultConfig({
  appName: "RFLEKTION",
  projectId: process.env.REOWN_ID || "e79e46c63d3230119def1d367797711d",
  chains: [arbitrumSepolia],
  transports: {
    [arbitrumSepolia.id]: http(),
  },
});

export default function RootLayout() {
  return (
    <html lang="en">
      <Head>
        <title>RFLEKTION</title>
        <meta name="description" content="Don't RFLEKT on what once was, the future awaits you..." />
        
        {/* Open Graph (og) Tags for Facebook, LinkedIn, etc. */}
        <meta property="og:title" content="RFLEKTION" />
        <meta property="og:description" content="Don't RFLEKT on what once was, the future awaits you..." />
        <meta property="og:image" content="https://sapphire-familiar-armadillo-416.mypinata.cloud/ipfs/bafkreibh6jnx7eghf7f3jtyk7xq4dbsm2wctc7nnkeicltyawdkweoowlm" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="RFLEKTION preview image" />
        <meta property="og:url" content="https://www.rflektion.com/" />

        {/* Twitter Card Tags for Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RFLEKTION" />
        <meta name="twitter:description" content="Don't RFLEKT on what once was, the future awaits you..." />
        <meta name="twitter:image" content="https://sapphire-familiar-armadillo-416.mypinata.cloud/ipfs/bafkreibh6jnx7eghf7f3jtyk7xq4dbsm2wctc7nnkeicltyawdkweoowlm" />
      </Head>
      <body>
        <WagmiProvider reconnectOnMount={false} config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider theme={darkTheme()}>
              <Home /> {/* Hardcoding Home component */}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
