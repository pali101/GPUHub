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

    mapping(uint256 => GPUListing) public gpuListings;
    mapping(uint256 => GPURequest) public gpuRequests;

    uint256 public listingCount;
    uint256 public requestCount;

    event GPUListingCreated(
        uint256 listingId,
        address provider,
        string gpuModel,
        uint256 capacity
    );

    event GPURequestCreated(
        uint256 requestId,
        address requester,
        string gpuModel,
        uint256 duration
    );
}