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

    /**
     * @dev Create a new GPU listing.
     * @param _gpuModel The GPU model.
     * @param _capacity The capacity of the GPU.
     */

    function createGPUListing(string memory _gpuModel, uint256 _capacity) external {
        require(_capacity > 0, "Capacity must be greater than 0");
        gpuListings[listingCount] = GPUListing(
            msg.sender,
            _gpuModel,
            _capacity,
            true
        );
        emit GPUListingCreated(listingCount, msg.sender, _gpuModel, _capacity);
        listingCount++;
    }
}