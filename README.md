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

1. Start a local development blockchain: `ganache`
2. Compile and deploy the smart contracts: `truffle migrate`
3. Start the backend server: `python src/server/app.py`