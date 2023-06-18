import React, { useState } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const Navigate = useNavigate();
  const logo = require("../images/GPU-Hub.png");
  const metamask_logo = require("../images/MetaMask_Fox.svg.png");

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          getAccountBalance(result[0]);
          alert("Wallet Connected Succqessfully");
          Navigate("/dashboard");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    localStorage.setItem("account", newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.formatEther(balance));
        localStorage.setItem("balance", ethers.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <div>
      <header className="bg-gray-200 h-20 flex flex-row justify-between items-center">
        <div className="flex items-center m-3">
          <img src={logo} alt="GPU-Hub Logo" className="h-14" />
          <span className="ml-3 font-mono font-extrabold text-2xl">
            GPU-Hub
          </span>
        </div>
        {/* <button class="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button> */}
      </header>
      <div className="m-32">
        <h1 className="text-5xl font-extrabold">GPU-Hub</h1>
        <h3 className="italic mt-3 text-sm ">
          Powering Collaboration, Unleashing Potential
        </h3>
        <p className="w-1/2 mt-10 m-auto">
        Empowering GPU Computing. Share, Collaborate, Innovate. Harness the Power of GPUs, Accelerate Workflows. Revolutionize Resource Sharing, Drive Breakthroughs. Unleash the Potential of GPU Technology for Limitless Possibilities.
        </p>
        <button class="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={connectWalletHandler}>
          Connect with Metamask{" "}
          <span>
            <img src={metamask_logo} className="h-10 inline" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
