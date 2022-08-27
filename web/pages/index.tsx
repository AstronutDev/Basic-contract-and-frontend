import type { NextPage } from "next";
import { BigNumber, ethers, Signer } from "ethers";
import {
  JsonRpcProvider,
  JsonRpcSigner,
  Web3Provider,
} from "@ethersproject/providers";
import { abi } from "../aftifacts/abi.json";
import { address } from "../aftifacts/address.json";
import { useState } from "react";
import { Greeter } from "../typechain-types/Greeter";

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
    setAddressWallet(await signer.getAddress());

    //custome

    greetContract = new ethers.Contract(address, abi, signer) as Greeter;
  };

  const getMessage = async () => {
    if (greetContract == undefined) {
      setStatus("please connect");
    } else {
      console.log(`signer address =>`, await signer.getAddress());

      console.log(greetContract);
      console.log("greetContract", greetContract.address);
      setStatus(await greetContract.greet());
      // console.log("greeter", await greetContract.greet());
    }
  };

  const setGreet = async () => {
    if (greetContract == undefined) {
      setStatus("please connect");
    } else {
      console.log(`message`, message);

      const tx = await greetContract.connect(signer).setGreeting(message);
      await tx.wait();
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
      </div>
    </>
  );
};

export default Home;
