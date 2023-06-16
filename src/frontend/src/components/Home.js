import React from "react";

const Home = () => {

  const logo = require("../images/GPU-Hub.png");
  const metamask_logo = require("../images/MetaMask_Fox.svg.png")
  return (
    <div>
      <header className="bg-blue-300 h-20 flex flex-row justify-between items-center">
        <div className="flex items-center m-3">
          <img src={logo} alt="GPU-Hub Logo" className="h-10" />
          <span className="ml-3 font-mono font-extrabold text-2xl">
            GPU-Hub
          </span>
        </div>
        <button class="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </header>
      <div className="m-32">
        <h1 className="text-5xl font-extrabold">GPU-Hub</h1>
        <h3 className="italic mt-3 text-sm ">
          Powering Collaboration, Unleashing Potential
        </h3>
        <p className="w-1/2 mt-10 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui
          reprehenderit totam, dicta corrupti, atque architecto dolorum in
          facilis at quas blanditiis mollitia est, nobis voluptatibus natus
          soluta provident! Atque.
        </p>
        <button class="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up with Metamask{" "}
          <span>
            <img src={metamask_logo} className="h-10 inline" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
