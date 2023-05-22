import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import path from "path";
import { HttpNetworkAccountsUserConfig } from "hardhat/types";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Interface to load raw env variables
interface ENV {
  MUMBAI_STAGING_URL: string | undefined;
  ACCOUNTS_ARRAY: HttpNetworkAccountsUserConfig;
}

// Interface for our sanitized network config vars
interface BlockchainNetworkConfig {
  MUMBAI_STAGING_URL: string;
  ACCOUNTS_ARRAY: HttpNetworkAccountsUserConfig;
}

// Loading process.env as ENV interface
const getBlockchainNetworkConfig = (): ENV => {
  return {
    MUMBAI_STAGING_URL: process.env.STAGING_QUICKNODE_KEY,
    ACCOUNTS_ARRAY: [process.env.PRIVATE_KEY!],
  };
};

// Checking config for any k:v pairs we're missing
const getSanitzedConfig = (configData: ENV): BlockchainNetworkConfig => {
  for (const [key, value] of Object.entries(configData)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return configData as BlockchainNetworkConfig;
};

const configData = getBlockchainNetworkConfig();
const sanitizedConfig = getSanitzedConfig(configData);

// Exporting blockchain network variables 
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: sanitizedConfig.MUMBAI_STAGING_URL,
      accounts: sanitizedConfig.ACCOUNTS_ARRAY,
    },
  },
};

export default config;

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
export const contract = getContractAddress();
