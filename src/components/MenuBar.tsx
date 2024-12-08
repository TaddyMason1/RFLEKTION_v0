"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../app/styles/cyberpunk.css"

const MenuBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px", // Adjusted padding for both sides
        background: "rgba(0, 0, 0)",
        color: "#fff",
        zIndex: 1000,
        boxSizing: "border-box", // Ensures padding is included in width calculation
      }}
    >
      {/* Left: RFLEKTION */}
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>RFLEKTION</div>

      {/* Right: Customized RainbowKit Connect Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <ConnectButton
          label="Verify"
          accountStatus="full"
        />
      </div>
    </div>
  );
};

export default MenuBar;
