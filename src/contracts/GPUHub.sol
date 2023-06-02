// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GPUHub {
    struct GPUListing {
        address provider;
        string gpuModel;
        uint256 capacity;
        bool isAvailable;
    }

    struct GPURequest {
        address requester;
        string gpuModel;
        uint256 duration;
        bool isFulfilled;
    }

}