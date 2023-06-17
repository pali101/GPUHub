import React from "react";
import { Navbar } from "./Navbar";

const AddGPU = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-1/2 inline-block">
        <h1 className="text-5xl mt-4">Add GPU</h1>
        <div class="m-10">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            GPU Model
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="GPU Model"
          />
        </div>
        <div class="m-10">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
           GPU Capacity (GB)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="GPU Capacity (GB)"
          />
        </div>
        <div class="m-10">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Price per Minute (WEI)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Price per Minute (WEI)"
          />
        </div>
        
        <div class="flex items-center justify-end">
          <button
            class="m-10  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add GPU
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default AddGPU;
