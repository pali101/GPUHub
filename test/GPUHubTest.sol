// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/GPUHub.sol";

contract GPUHubTest {
    GPUHub gpuHub;

    function beforeEach() public {
        gpuHub = new GPUHub();
    }

    function testCreateGPUListing() public {
        uint256 listingId = 0;
        string memory gpuModel = "RTX 3080";
        uint256 capacity = 8;
        uint256 price = 10;

        gpuHub.createGPUListing(gpuModel, capacity, price);

        (address provider, string memory actualGpuModel, uint256 actualCapacity, uint256 actualPrice, bool isAvailable) = gpuHub.getGPUListing(listingId);

        Assert.equal(provider, address(this), "Incorrect provider address");
        Assert.equal(actualGpuModel, gpuModel, "Incorrect GPU model");
        Assert.equal(actualCapacity, capacity, "Incorrect capacity");
        Assert.equal(actualPrice, price, "Incorrect price");
        Assert.equal(isAvailable, true, "Incorrect availability");
    }

    function testGetGPUListing() public {
        uint256 listingId = 0;
        string memory gpuModel = "RTX 3080";
        uint256 capacity = 8;
        uint256 price = 10;

        gpuHub.createGPUListing(gpuModel, capacity, price);

        (address provider, string memory actualGpuModel, uint256 actualCapacity, uint256 actualPrice, bool isAvailable) = gpuHub.getGPUListing(listingId);

        Assert.equal(provider, address(this), "Incorrect provider address");
        Assert.equal(actualGpuModel, gpuModel, "Incorrect GPU model");
        Assert.equal(actualCapacity, capacity, "Incorrect capacity");
        Assert.equal(actualPrice, price, "Incorrect price");
        Assert.equal(isAvailable, true, "Incorrect availability");
    }
}
