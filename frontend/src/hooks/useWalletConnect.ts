import { useState } from "react";
import useEthConnect from "./useEthConnect";

const useWalletConnect = async () => {
  const [account, setAccount] = useState("");
  const [error, setError] = useState(false);
  const [ethConnectState, setEthConnect] = useState(false);
  let ethereum: any | null;

  const useEthConnect = () => {
    const { ethereum } = window;
    if (!ethereum) {
      setEthConnect(false);
      return;
    }
    setEthConnect(true);
    return {
      ethereum,
    };
  };

  try {
    const ethereum: any | null = useEthConnect();

    const userAccounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log("Connected", userAccounts[0]);

    setAccount(userAccounts[0]);
  } catch (error: any) {
    setError(error.message);
  }

  return {
    account,
    error,
    ethereum,
    ethConnectState,
  };
};

export default useWalletConnect;
