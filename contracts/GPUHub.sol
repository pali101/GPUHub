// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GPUHub {
    struct GPUListing {
        address provider;
        string gpuModel;
        uint256 capacity;
        uint256 price; // In wei per minute
        bool isAvailable;
    }

    // struct GPURequest {
    //     address requester;
    //     string gpuModel;
    //     uint256 duration; // In minutes
    //     bool isAccepted;
    //     bool isFulfilled;
    // }

    mapping(uint256 => GPUListing) public gpuListings;
    // mapping(uint256 => GPURequest) public gpuRequests;

    uint256 public listingCount;
    uint256 public requestCount;

    event GPUListingCreated(
        uint256 listingId,
        address provider,
        string gpuModel,
        uint256 capacity,
        uint256 price 
    );

    // event GPURequestCreated(
    //     uint256 requestId,
    //     address requester,
    //     string gpuModel,
    //     uint256 duration
    // );

    /**
     * @dev Create a new GPU listing.
     * @param _gpuModel The GPU model.
     * @param _capacity The capacity of the GPU.
     * @param _price The price of the GPU per minute.
     */

    function createGPUListing(string memory _gpuModel, uint256 _capacity, uint256 _price) external {
        require(_capacity > 0, "Capacity must be greater than 0");
        gpuListings[listingCount] = GPUListing(
            msg.sender,
            _gpuModel,
            _capacity,
            _price,
            true
        );
        emit GPUListingCreated(listingCount, msg.sender, _gpuModel, _capacity, _price);
        listingCount++;
    }

    // /**
    //  * @dev Submit a GPU request.
    //  * @param _gpuModel The GPU model.
    //  * @param _duration The duration of GPU usage.
    //  */

    // function submitGPURequest(string memory _gpuModel, uint256 _duration) external {
    //     require(_duration > 0, "Duration must be greater than 0");
    //     gpuRequests[requestCount] = GPURequest(
    //         msg.sender,
    //         _gpuModel,
    //         _duration,
    //         false,
    //         false
    //     );
    //     emit GPURequestCreated(requestCount, msg.sender, _gpuModel, _duration);
    //     requestCount++;
    // }

    /**
     * @dev Get the details of a GPU listing.
     * @param _listingId The ID of the GPU listing.
     * @return The provider address, GPU model, capacity, and availability.
     */
     function getGPUListing(uint256 _listingId) external view returns (address, string memory, uint256, uint256, bool) {
         GPUListing memory listing = gpuListings[_listingId];
         return (listing.provider, listing.gpuModel, listing.capacity, listing.price, listing.isAvailable);
     }

    // /**
    //  * @dev Get the details of a GPU request.
    //  * @param _requestId The ID of the GPU request.
    //  * @return The requester address, GPU model, duration, and fulfillment status.
    //  */
    //  function getGPURequest(uint256 _requestId) external view returns (address, string memory, uint256, bool, bool) {
    //     GPURequest memory request = gpuRequests[_requestId];
    //     return (request.requester, request.gpuModel, request.duration, request.isAccepted,request.isFulfilled);
    //  }
}