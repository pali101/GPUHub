// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/GPUHub.sol";

contract GPUHubTest {
    GPUHub gpuHub;

    function beforeEach() public {
        gpuHub = new GPUHub();
    }

    // function testCreateGPUListing() public {
    //     uint256 listingId = 0;
    //     string memory gpuModel = "RTX 3080";
    //     uint256 capacity = 8;

    //     gpuHub.createGPUListing(gpuModel, capacity);

    //     (address provider, string memory actualGpuModel, uint256 actualCapacity, bool isAvailable) = gpuHub.getGPUListing(listingId);

    //     Assert.equal(provider, address(this), "Incorrect provider address");
    //     Assert.equal(actualGpuModel, gpuModel, "Incorrect GPU model");
    //     Assert.equal(actualCapacity, capacity, "Incorrect capacity");
    //     Assert.equal(isAvailable, true, "Incorrect availability");
    // }

    // function testSubmitGPURequest() public {
    //     uint256 requestId = 0;
    //     string memory gpuModel = "RTX 3080";
    //     uint256 duration = 24;

    //     gpuHub.submitGPURequest(gpuModel, duration);

    //     (address requester, string memory actualGpuModel, uint256 actualDuration, bool isFulfilled) = gpuHub.getGPURequest(requestId);

    //     Assert.equal(requester, address(this), "Incorrect requester address");
    //     Assert.equal(actualGpuModel, gpuModel, "Incorrect GPU model");
    //     Assert.equal(actualDuration, duration, "Incorrect duration");
    //     Assert.equal(isFulfilled, false, "Incorrect fulfillment status");
    // }
}
