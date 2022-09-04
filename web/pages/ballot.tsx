import { JsonRpcSigner } from "@ethersproject/providers";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import { Ballot3 } from "../typechain-types";
import { getSigner } from "../utils/provider";
import { address } from "../aftifacts/address.json";
import { abi } from "../aftifacts/abi.json";

let ballotContract: Ballot3;

const Ballot = () => {
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [user, setUser] = useState<string>("");
  const [isConnect, setIsConnect] = useState<boolean>(false);

  // useEffect(() => {
  //   const getSignerEffect = async () => {
  //     if (window.ethereum) {
  //       const res = await getSigner();
  //       if (res) {
  //         setSigner(res);
  //       }
  //     }
  //   };

  useEffect(() => {
    connect();
    window.ethereum.on("connect", connect);
    window.ethereum.on("accountsChanged", connect);
    window.ethereum.on("chainChanged", reload);

    return () => {
      window.ethereum.removeListener("connect", connect);
      window.ethereum.removeListener("accountsChanged", connect);
      window.ethereum.on("chainChanged", reload);
    };
  }, [signer]);

  function reload() {
    return window.location.reload();
  }

  const connect = async () => {
    if (signer) {
      try {
        setUser(await signer.getAddress());
        ballotContract = new ethers.Contract(address, abi, signer) as Ballot3;
      } catch (error) {
        setUser("");
        setSigner(undefined);
      }
    } else {
      if (window.ethereum) {
        const res = await getSigner();
        if (res) {
          setSigner(res);
        }
      }
    }
  };

  return (
    <>
      <div>
        <Nav connect={connect} user={user} />
      </div>
    </>
  );
};
export default Ballot;
