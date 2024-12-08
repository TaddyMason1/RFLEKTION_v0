import { writeContract } from "@wagmi/core";
import { WRITE_ABI } from "abi/writeabi";
import { CHRONOKEY_CA } from "config/constants";
import { config } from "../config/wagmiconfig"
import { Address } from "viem";

export const UseMint = async (address: Address | undefined) => {
  if (!address) throw new Error("Wallet not connected.");

  const tx = await writeContract(config, {
    abi: WRITE_ABI,
    address: CHRONOKEY_CA,
    functionName: "mint",
    account: address,
  });

  return tx;
};
