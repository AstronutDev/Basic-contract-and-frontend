import type { NextPage } from "next";
import { BigNumber, ethers, Signer } from "ethers";
import {
  JsonRpcProvider,
  JsonRpcSigner,
  Web3Provider,
  AlchemyProvider,
} from "@ethersproject/providers";
import { abi } from "../aftifacts/abi.json";
import { address } from "../aftifacts/address.json";
import { useState } from "react";
import { Greeter } from "../typechain-types/Greeter";
import { Wallet } from "@ethersproject/wallet";
import { text } from "node:stream/consumers";

let provider: JsonRpcProvider;
let signer: JsonRpcSigner;
let greetContract: Greeter;

const Home: NextPage = () => {
  const [addressWallet, setAddressWallet] = useState("0x");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const connect = async () => {
    // access metamask
    provider = new ethers.providers.Web3Provider((window as any).ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();

    //custome
    // const url = process.env.ALCHEMY_URL
    // provider = new ethers.providers.JsonRpcProvider(url);

    //custom by alchemy
    // AlchemyProvider('network', 'api_key')
    // const url = new ethers.providers.AlchemyProvider(
    //   "rinkeby",
    //   process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
    // );
    // const wallet = new ethers.Wallet(
    //   process.env.NEXT_PUBLIC_PRIVATE_KEY!,
    //   provider
    // );
    // signer = wallet.connect(provider);

    setAddressWallet(await signer.getAddress());

    greetContract = new ethers.Contract(address, abi, signer) as Greeter;
  };

  const getMessage = async () => {
    // if (greetContract == undefined) {
    //   setStatus("please connect");
    // } else {
    //   console.log(`signer address =>`, await signer.getAddress());

    //   console.log(greetContract);
    //   console.log("greetContract", greetContract.address);
    //   // console.log("greeter", await greetContract.greet());
    // }

    await connect();
    setStatus(await greetContract.greet());
  };

  const handleDonate = async () => {
    if (!greetContract) {
      await connect();
    }
    const tx = await greetContract.donate({
      value: ethers.utils.parseEther("0.11"),
    });
    await tx.wait();
    console.log("donate success");
  };

  const handleBalance = async () => {
    if (!greetContract) {
      await connect();
    }
    console.log(`contract balance:`, +(await greetContract.balance()));
  };

  const setGreet = async () => {
    if (greetContract == undefined) {
      setStatus("please connect");
    } else {
      const tx = await greetContract.connect(signer).setGreeting(message);
      await tx.wait();
      await getMessage();
      setStatus("write to block successfuly");
    }
  };

  return (
    <>
      <div>
        <h1>{addressWallet}</h1>
        <div>
          <button onClick={() => connect()}>connect</button>
        </div>
        <div>status: {status}</div>
        <div>
          <button onClick={() => getMessage()}>get message</button>
        </div>
        <div>
          <input type="text" onChange={(e) => setMessage(e.target.value)} />
          <button onClick={() => setGreet()}>set greet</button>
        </div>
        <hr />
        <h1>Payment</h1>
        <button onClick={(e) => handleDonate()}>Donate</button>
        <button onClick={(e) => handleBalance()}>Balance </button>
      </div>
    </>
  );
};

export default Home;
