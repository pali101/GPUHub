import React, { useState } from "react";
import { Navbar } from "./Navbar";

const RentGPU = () => {
  const [gpuCapacity, setGpuCapacity] = useState();
  const [maxPricePerMinute, setMaxPricePerMinute] = useState();
  // const [duration, setDuration] = useState();
  const [gpuList, setGpuList] = useState([]);

  const handleRequestGPU = async () => {
    if (!gpuCapacity || !maxPricePerMinute) {
      alert("Please fill all the fields");
      return;
    }
    if (gpuCapacity <= 0 || maxPricePerMinute <= 0) {
      alert("Please enter valid values");
      return;
    }
    const data = {
      minCapacity: parseInt(gpuCapacity),
      maxPrice: parseInt(maxPricePerMinute),
      // duration: parseInt(duration),
    };
    const response = await fetch("http://localhost:5000/getgpulist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
    setGpuList(res);
  };
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl mt-4 ml-44">Rent GPU</h1>
      <div className="flex ml-64 justify-between">
        {" "}
        {/* outer block */}
        <div className="flex flex-col ml-5">
          <h2 className="text-2xl font-extrabold mt-10 text-left ml-5">Available GPUs </h2>
          <div>
            {gpuList.length > 0 ? (
              <div className="flex flex-wrap">
                {gpuList.map((gpu) => (
                  <div className="flex flex-col px-8 py-2 border-gray-200 border-2 rounded-md m-5">
                    <div className="flex flex-col items-start">
                      <table>
                        <tr>
                          <td className="text-left">
                            {" "}
                            <label className="text-xl">GPU Model</label>
                          </td>
                          <td className="text-left pr-2">
                            {" "}
                            <span className="text-xl font-bold">
                              : {gpu[1]}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left pr-2">
                            <label className="text-xl">Price per Minute</label>
                          </td>
                          <td className="text-left pr-2">
                            {" "}
                            <span className="text-xl font-bold">
                              : {gpu[3]} WEI
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left pr-2">
                            {" "}
                            <label className="text-xl">Capacity</label>
                          </td>
                          <td className="text-left pr-2">
                            {" "}
                            <span className="text-xl font-bold">
                              : {gpu[2]} GB
                            </span>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="flex justify-center">
                      <button
                        class="m-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleRequestGPU}
                      >
                        Rent GPU
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>No GPUs available</div>
            )}
          </div>
        </div>
        <div className="w-1/4 flex flex-col border-l-2 mt-7">
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
              value={gpuCapacity}
              onChange={(e) => setGpuCapacity(e.target.value)}
            />
          </div>
          {/* <div class="m-4">
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
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div> */}
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
              value={maxPricePerMinute}
              onChange={(e) => setMaxPricePerMinute(e.target.value)}
            />
          </div>

          <div class="flex items-center justify-center">
            <button
              class="m-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRequestGPU}
            >
              Search GPUs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentGPU;
