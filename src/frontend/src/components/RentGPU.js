import React from "react";
import { Navbar } from "./Navbar";

const RentGPU = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl mt-4">Rent GPU</h1>
      <div className="flex ml-64">
        <div className="flex flex-col">
          <h2>Available GPUs </h2>
          <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas excepturi vel eaque architecto nobis quis alias porro aperiam, quo commodi?</p></div>
        </div>
        <div className="w-1/4 flex flex-col border-l-2">
          <div class="m-4">
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
          <div class="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Duration (Minutes)
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Duration (Minutes)"
            />
          </div>
          <div class="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Maximum Price per Minute (WEI)
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder=" WEI"
            />
          </div>

          <div class="flex items-center justify-end">
            <button
              class="m-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Request GPUs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentGPU;
