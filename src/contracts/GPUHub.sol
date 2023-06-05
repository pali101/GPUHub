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

    /**
     * @dev Submit a GPU request.
     * @param _gpuModel The GPU model.
     * @param _duration The duration of GPU usage.
     */

    function submitGPURequest(string memory _gpuModel, uint256 _duration) external {
        require(_duration > 0, "Duration must be greater than 0");
        gpuRequests[requestCount] = GPURequest(
            msg.sender,
            _gpuModel,
            _duration,
            false
        );
        emit GPURequestCreated(requestCount, msg.sender, _gpuModel, _duration);
        requestCount++;
    }

}