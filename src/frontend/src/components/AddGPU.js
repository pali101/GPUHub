import React, { useState } from "react";
import { Navbar } from "./Navbar";

const AddGPU = () => {
    const [gpuModel, setGpuModel] = useState("")
    const [gpuCapacity, setGpuCapacity] = useState("")
    const [pricePerMinute, setPricePerMinute] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!gpuModel || !gpuCapacity || !pricePerMinute) {
            alert("Please fill all the details")
            return
        }
        if(gpuCapacity <= 0){
            alert("GPU Capacity should be a number greater than 0")
            return
        }
        if(pricePerMinute <= 0){
            alert("Price per minute should be a number greater than 0")
            return
        }
        const data = {
            gpuModel,
            "capacity":gpuCapacity,
            "price":pricePerMinute
        }
        const response = await fetch("http://localhost:5000/addgpu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const res = await response.json()
        console.log(res)
        // if (res.status === "success") {
        //     alert("GPU added successfully")
        // }
        // else {
        //     alert("Error adding GPU")
        // }
        

    }
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
            value={gpuModel}
            onChange={e => setGpuModel(e.target.value)}
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
            value={gpuCapacity}
            onChange={e => setGpuCapacity(e.target.value)}
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
            value={pricePerMinute}
            onChange={e => setPricePerMinute(e.target.value)}
          />
        </div>
        
        <div class="flex items-center justify-end">
          <button
            class="m-10  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Add GPU
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default AddGPU;
