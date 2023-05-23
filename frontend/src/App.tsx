import React, { useState, useEffect } from "react";
import logo from ".//assets/logo.svg";
import "./App.css";
import contract from "../contract.config";
import { ethers } from "ethers";

// To fix this warning, and corresponding compile error, add this declaration at the top level of your file, after imports.
const CONTRACT_ADDRESS = contract.CONTRACT_ADDRESS;

const App = () => {
  // check out react hooks and saving state in axios or something
  const [account, setAccount] = useState("");
  const [ethObjectExists, setEthExists] = useState(false);

  // investigate useCallback
  const checkEthObjectExists = () => {
    const { ethereum } = window;
    if (ethereum) {
      setEthExists(true);
    }
  };

  useEffect(() => {
    checkEthObjectExists();
  }, []);

  const connectWallet = async (ethereum: any) => {
    try {
      if (!ethObjectExists) {
        setEthExists(false);
        throw new Error(
          "Please download a browswer wallet to interact with the blockchain."
        );
      }

      const userAccounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", userAccounts[0]);

      setAccount(userAccounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkWalletConnection = async () => {};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
