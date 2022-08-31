import { useEffect, useState } from "react";

const Login = () => {
  const [account, setAccount] = useState("");
  const [network, setNetwork] = useState("");

  useEffect(() => {
    handleAccountChanged();
    handleswitchNetwork();
  }, []);

  const connect = async () => {
    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });

    const account: string = accounts[0];
    setAccount(account);
  };

  const handleAccountChanged = async () => {
    await (window as any).ethereum.on(
      "accountsChanged",
      (newAccount: string) => {
        setAccount(newAccount);
      }
    );
  };

  const onAddToken = async () => {
    try {
      const result = await (window as any).ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: "0xFC6be5A35A3063B57B6aCf8f9782f66bdf2fcb27",
            symbol: "XDAI",
            decimals: 18,
            image:
              "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png",
          },
        },
      });
      if (result) {
        console.log("DAI successfully add to wallet");
      } else {
        throw new Error("something error");
      }
    } catch (error) {
      throw error;
    }
  };

  const onAddNetwork = async () => {
    try {
      await (window as any).ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x60",
            chainName: "BKC",
            rpcUrls: ["https://rpc.bitkubchain.io"],
            nativeCurrency: {
              name: "Bitkub token",
              symbol: "KUB", // 2-6 characters long
              decimals: 18,
            },
            blockExplorerUrls: ["https://bkcscan.com"],
          },
        ],
      });
    } catch (addError) {
      throw addError;
    }
  };

  const nameNetworks: { [key: string]: string } = {
    "1": "ETH mainnet",
    "4": "Rinkeby testnet",
    "3": "Ropsten testnet",
    "5": "Goerli testnet",
    "96": "KUB chain",
  };

  const handleswitchNetwork = async () => {
    await (window as any).ethereum.on("chainChanged", (chainId: string) => {
      const selectNetwork = nameNetworks[+chainId];
      setNetwork(selectNetwork);
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={(e) => connect()}>login</button>
        </div>
        Account: {account}
        <div>
          <button onClick={(e) => onAddToken()}>add token</button>
        </div>
        <div>
          Network: {network}
          <br />
          <button onClick={(e) => onAddNetwork()}>add network</button>
        </div>
      </div>
    </>
  );
};

export default Login;
