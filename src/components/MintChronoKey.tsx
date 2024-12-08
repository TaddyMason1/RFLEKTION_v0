import React, { useState } from "react";
import { useAccount } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../config/wagmiconfig";
import { UseEligibilityCheck } from "hooks/useEligibilityCheck";
import { UseMint } from "hooks/useMint";
import "../app/styles/cyberpunk.css";

const queryClient = new QueryClient();

const MintChronokey: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [eligibility, setEligibility] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [buttonText, setButtonText] = useState("Check eligibility");
  const [customMessage, setCustomMessage] = useState<React.ReactNode | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Define state for tracking minting success
  const [isMintingSuccessful, setIsMintingSuccessful] = useState(false);

  const handleEligibilityCheck = async () => {
    if (!isConnected || !address) {
      setError("Please connect your wallet.");
      return;
    }
    setIsProcessing(true);
    setError(null);

    try {
      const tokenCount = await UseEligibilityCheck(address);
      setEligibility(tokenCount);

      if (tokenCount === 0) {
        setCustomMessage(
          <span style={{ fontSize: "25px", color: "red", padding: "50px" }}>
            Sorry, you do not qualify.
          </span>
        );
        setButtonText("Not eligible");
      } else {
        setCustomMessage(
          <span style={{ fontSize: "25px", color: "white", padding: "50px" }}>
            You qualify to mint {tokenCount} ChronoKeys.
          </span>
        );
        setButtonText("Mint chronokeys");
      }
    } catch (err) {
      console.error("Eligibility check failed:", err);
      setError("Failed to check eligibility.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleMint = async () => {
    if (!isConnected || !address || eligibility === 0) return;

    setIsProcessing(true);  // Start processing
    setError(null);  // Clear previous errors
    setIsMintingSuccessful(false);  // Reset minting success state

    try {
      const tx = await UseMint(address);  // Attempt to mint
      setCustomMessage(
        <span style={{ fontSize: "30px", color: "white", padding: "50px", textWrap: "wrap"}}>
          Mint successful! Transaction hash: {tx}
        </span>
      );
      setButtonText("Welcome");
      setIsMintingSuccessful(true);  // Minting was successful
    } catch (err) {
      console.error("Minting failed:", err);
      setError("Failed to mint NFT. Please refresh your page and try again!");  // Show error message if minting fails
      setIsMintingSuccessful(false);  // Minting failed, user can try again
    } finally {
      setIsProcessing(false);  // Stop the "Processing..." state
      setEligibility(0); 
      
      
 // Reset eligibility to 0 after minting attempt
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {customMessage && <p>{customMessage}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button
            className="cyber-button bg-white fg-black"
            onClick={buttonText === "Check eligibility" ? handleEligibilityCheck : handleMint}
            disabled={!isConnected || isProcessing || buttonText === "Not eligible" || isMintingSuccessful}
            style={{
              padding: "10px 20px",
              backgroundColor: isMintingSuccessful ? "#ccc" : (buttonText === "Not eligible" ? "#ccc" : "#4caf50"),
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: buttonText === "Not eligible" || isMintingSuccessful ? "not-allowed" : "pointer",
              opacity: isProcessing ? 0.5 : 1,
            }}
          >
            {isProcessing ? "Processing..." : buttonText}
            <span className="glitchtext">ALMOST THERE</span>
            <span className="tag">R25</span>
          </button>
        </div>
      </WagmiProvider>
    </QueryClientProvider>
  );
};

export default MintChronokey;
