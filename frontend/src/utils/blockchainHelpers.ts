import { useState } from "react";
import ethers from "ethers";
import contractAddress from "../utils/contractHelper";
import abi from "../utils/contractABI.json";

// check if there is a wallet connection after page load

export const checkWalletConnection = async () => {
  const { ethereum } = window;
  if (!ethereum) {
    console.log("Make sure you have a browser wallet installed!");
    return;
  } else {
    console.log("Ethereum Object: ", ethereum);
  }

  const accounts = await ethereum.request({ method: "eth_accounts" });

  if (accounts.length !== 0) {
    const account = accounts[0];
    console.log("Found account: ", account);
    setAccount(account);
  }
};

export const connectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask -> https://metamask.io/");
      return;
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log("Connected", accounts[0]);
    setAccount(accounts[0]);
  } catch (error) {
    console.log(error);
  }
};

export const getEthObject = () => {
  const { ethereum } = window;
  if (ethereum) {
    return ethereum;
  } else {
    return null;
  }
};

export const getEthAccount = async (ethObject: any) => {
  const provider = new ethers.BrowserProvider(ethObject);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    abi.abi,
    signer
  );
  return contract; 
};

// connect wallet on click

// update state based on wallet connection

// show UI based on wallet connected or not