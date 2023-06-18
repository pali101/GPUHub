# GPUHub

GPUHub is a decentralized GPU resource sharing platform built on the Ethereum blockchain. It allows users to share their GPU resources and enables others to request and utilize those resources for their computational needs.

## Features

- Share GPU Resources: GPU owners can create listings and offer their spare GPU resources for others to use.
- Request GPU Resources: Users in need of GPU power can browse available listings and submit requests.
- Transparent and Secure: All transactions and interactions are executed on the Ethereum blockchain, ensuring transparency and immutability.
- Incentive Mechanism: GPU providers are rewarded with payment in ETH for sharing their GPU resources.
- Decentralized Governance: GPUHub is governed by the consensus of its participants, ensuring fairness and community-driven decision-making.

## Getting Started

### Prerequisites

- Python
- Truffle
- Ganache (for local development)

### Installation

1. Clone the repository: `git clone https://github.com/pali101/GPUHub.git`
2. sudo `npm install ganache --global`
3. Install dependencies: `pip install -r src/server/requirements.txt`
### Usage

1. Start a local development blockchain: `ganache --deterministic`
2. Compile and deploy the smart contracts: `truffle migrate`
3. Start the backend server: `python src/server/app.py`

## Available API Endpoints

### Add GPU Listing

- **Endpoint:** `POST /addgpu`
- **Description:** Add a GPU listing to the marketplace.
- **Request Body:**
  ```json
  {
    "gpuModel": "string",
    "capacity": "integer",
    "price": "integer"
  }
    ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "GPU listing added successfully"
  }
  ```

### Get GPU Details by ID
  - **Endpoint:** `POST /getgpudetailsbyid`
    - **Description:** Get the details of a GPU listing by its ID.
    - **Request Body:**
      ```json
      {
        "listingID": "integer"
      }
    - **Response** Details of the GPU listing.

### Fulfill GPU Request
- **Endpoint**: `POST /fulfillrequest`
- **Description**: Fulfill a GPU request by marking it as unavailable.
- **Request Body:**
  ```json
  {
    "listingID": "integer"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "GPU listing fulfilled successfully - isAvailable set to false"
  }
  ```

### Mark Fulfilled GPU Listing as Available
- **Endpoint**: `POST /fulfilledrequest`
- **Description**: Mark a fulfilled GPU listing as available again.
- **Request Body:**
  ```json
  {
    "listingID": "integer"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "GPU listing fulfilled successfully - isAvailable set to true"
  }
  ```

### Get GPU List
- **Endpoint**: `GET /getgpulist`
- **Description**: Get a list of all available GPU listings based on price and capacity.
- **Request Body**:
    ```json
    {
        "maxPrice": "integer",
        "minCapacity": "integer"
    }
    ```
- **Response**: List of available filtered GPU listings.

## Future Work

Here are some potential areas for future development and improvement:
1. **Notifications and Real-Time Updates**: Implement a notification system to keep users informed about important events. Real-time updates can enhance user engagement and provide a seamless experience.

2. **Advanced Search and Filtering**: Enhance the search and filtering capabilities in the user interface. Allow users to search for specific GPU models, filter listings by capacity or price, and sort the results based on different criteria. This will make it easier for users to find the GPU listings that meet their requirements.

3. **Payment Integration**: {
  "success": true,
  "message": "GPU listing added successfully"
}
Implement a payment mechanism to handle the transfer of funds between the requester and provider. This will ensure secure and automated payments for GPU usage.

4. **Reputation System**: Develop a reputation system for providers and requesters, allowing users to rate and provide feedback on their experiences. This will build trust within the community and promote high-quality services.

5. **Time-Based Pricing**: Extend the contract to support different pricing models, such as hourly or daily rates, in addition to the current per-minute pricing. This will offer more flexibility for providers and accommodate different usage scenarios.

6. **Analytics and Reporting**: Integrate analytics and reporting features into the user interface. Provide users with insights and statistics on their GPU usage, earnings, and performance. This information can help users make informed decisions and optimize their GPU rental experience.

Contributions from the community are highly appreciated. If you have any ideas, bug fixes, or improvements, please feel free to open issues and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

The MIT License is a permissive open-source license that allows you to use, modify, and distribute the code, both commercially and non-commercially. It provides a balance between granting users the freedom to use the software and protecting the developers' rights.

For more information, please see the [LICENSE](LICENSE) file.

