import { useState } from "react";

const useEthConnect = () => {
  const [ethConnectState, setEthConnect] = useState(false);
  const { ethereum } = window;
  if (!ethereum) {
    setEthConnect(false);
    return { ethConnectState, ethereum: null, message: "Success" };
  }
  setEthConnect(true);
  return {
    ethereum,
    ethConnectState,
    message: "Please download a browser wallet to continue.",
  };
};

export default useEthConnect;
