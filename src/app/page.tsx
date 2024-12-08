"use client";

import { useAccount } from "wagmi";
import PageBlocker from "../components/PageBlocker";
import MintChronokey from "../components/MintChronoKey";
import BackgroundAnimation from "../components/BackgroundAnimation";
import MenuBar from "components/MenuBar";

export default function Home() {
  const { isConnected } = useAccount(); // Check if the user is connected

  return (
    <>
      {/* Background Animation */}
      <BackgroundAnimation />
      <MenuBar/>
      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          paddingTop: "80px", // Avoid content being hidden under other fixed components
        }}
      >
        {!isConnected ? (
          // Page Blocker when the wallet is not connected
          <PageBlocker />
        ) : (
          // Show Mint Button when connected
          <MintChronokey />
        )}
      </div>
    </>
  );
}
