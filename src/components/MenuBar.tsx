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
        height: "75px",
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
    <div style={{ fontSize: "25px", fontWeight: "bold" }}>RFLEKTION</div>
      {/*
      <header>
       <a
        href="https://etherscan.io/address/0x1162e72D0C17b637f868b81b597bce7D3245ed4E#code" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
        fontSize: "25px",
        fontWeight: "bolder",
        transition: 'opacity 0.3s',
        color: "white",
        textAlign: "center",
        alignContent: "inherit",
        position: "relative",
        }}
        
        onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
        onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
        onClick={(e) => (e.currentTarget.style.opacity = '0.9')}
        >
          CA
        </a>
        </header>
        */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <ConnectButton
          label="Connect"
          accountStatus="avatar"
          showBalance={false}
          chainStatus="icon"
        />
      </div>
      {/*Removed CountdownTimer.tsx element here!!!!! */}
    </div>
  );
};

export default MenuBar;
