import { readContract } from "@wagmi/core";
import { READ_ABI } from "abi/readabi";
import { WRITE_ABI } from "abi/writeabi";
import { CLONE_X_CA, CHRONOKEY_CA } from "config/constants";
import { config } from "config/wagmiconfig";

export const UseEligibilityCheck = async (address: string | undefined) => {
  if (!address) throw new Error("Wallet not connected.");

  const tokens = await readContract(config, {
    abi: READ_ABI,
    address: CLONE_X_CA,
    functionName: "tokensOfOwner",
    args: [address],
  }) as number[];

  let tokenCount = 0;

  for (const token of tokens) {
    try {
      if (token === 0) continue;

      await readContract(config, {
        abi: WRITE_ABI,
        address: CHRONOKEY_CA,
        functionName: "ownerOf",
        args: [token],
      });
    } catch (error) {
      tokenCount++;
      console.log(error);
    }
  }

  return tokenCount;
};
