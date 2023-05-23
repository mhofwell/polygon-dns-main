import React from "react";
import useEthConnect from "../hooks/useEthConnect";
import useWalletConnect from "../hooks/useWalletConnect";

const HomePage: React.FC = () => {
  // check ethereum, if ethereum check wallet connected,

  const { ethereum, ethConnectState, message } = useEthConnect();

  const { account } = useWalletConnect();


  return (
    <div>
      <header>
        <p>Connect your wallet to begin</p>
      </header>
      <div>
        {!ethConnectState && <p>{message}</p>}
        {ethConnectState && ethereum && <button>Connect your wallet!</button>}
      </div>
    </div>
  );
};
export default HomePage;
