import React from "react";
import AddGPU from "./AddGPU";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="inline-block w-1/2 mt-10">
        <h1 className="text-2xl font-extrabold">GPU-Hub Dashboard</h1>
        <div className="text-xl mt-10 p-5 ">
          Balance : <span id="balance" className="font-extrabold"> {localStorage.getItem("balance")}</span>
        </div>
        <Link to={"/addgpu"}>
        <div className="text-2xl mt-10 p-10 border-gray-300 border-2 hover:bg-gray-200 rounded-2xl">
          Add a GPU
          </div>
        </Link>
        <Link to={"/rentgpu"}>
        <div className="text-2xl mt-10 p-10 border-gray-300 border-2 hover:bg-gray-200 rounded-2xl">
          Rent a GPU
          </div>
        </Link>
        
        
      </div>
    </div>
  );
};

export default Dashboard;
