"use client";

import "../app/styles/cyberpunk.css";

const PageBlocker = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.99)", // Semi-transparent black
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ marginBottom: "20px", fontSize: "30px"}}>ACCESS RESTRICTED.</h1>
        <p style= {{ fontSize: "30px" }}>VERIFY BY CONNECTING WALLET.</p>
        <div style={{ marginTop: "20px" }}>
        </div>
      </div>
    </div>
  );
};

export default PageBlocker;
