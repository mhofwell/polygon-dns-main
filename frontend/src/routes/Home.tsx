import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractAddress from "../utils/contractHelper";
import abi from "../utils/contractABI.json";

const HomePage: React.FC = () => {
  // check ethereum object in the browser after page load

  const [account, setAccount] = useState(null);
  let { ethereum } = window;

  // check if there is a wallet connection after page load

  const checkWalletConnection = async () => {
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

  const connectWallet = async () => {
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

  const getEthObject = () => {
    const { ethereum } = window;
    if (ethereum) {
      return ethereum;
    } else {
      return null;
    }
  };

  const ethObject = getEthObject();

  const getEthAccount = async (ethObject: any) => {
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

  useEffect(() => {
    checkWalletConnection();
  }, []);

  return (
    <div>
      <header>
        {!account && (
          <div>
            <p>Connect your wallet to begin</p>
            <button onClick={connectWallet}>Connect Wallet</button>
          </div>
        )}
        {account && <p>Connected!</p>}
      </header>
      <div></div>
    </div>
  );
};

export default HomePage;
