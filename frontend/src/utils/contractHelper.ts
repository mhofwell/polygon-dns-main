import dotenv from "dotenv";
import path from "path";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const getContractAddress = () => {
  if (!process.env.CONTRACT_ADDRESS) {
    throw new Error("Missing contract address!");
  }
  const contractAddress = process.env.CONTRACT_ADDRESS;

  return contractAddress;
};

// exporting the contract
const contractAddress = getContractAddress();
export default contractAddress;
