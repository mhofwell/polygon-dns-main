import dotenv from "dotenv";
import path from "path";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Interface for the contract
interface CONTRACT {
  CONTRACT_ADDRESS: string | undefined;
}

const getContractAddress = (): CONTRACT => {
  if (!process.env.CONTRACT_ADDRESS) {
    throw new Error("Missing contract address!");
  }

  return {
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  };
};

// exporting the contract
const contract = getContractAddress();
export default contract;
