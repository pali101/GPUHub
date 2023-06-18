from flask import Flask, request, jsonify
import web3
from solcx import compile_standard, install_solc
import json
from flask_cors import CORS


nonce = 0


def create_gpu_listing(contract_instance, prev_nonce, gpumodel, gpu_capacity, price):
    global nonce
    nonce = prev_nonce
    gpuhub = contract_instance
    tx = gpuhub.functions.createGPUListing(
        gpumodel, gpu_capacity, price
    ).build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price + 100000,
            "from": address,
            "nonce": nonce + 1,
        }
    )
    tx_create = w3.eth.account.sign_transaction(tx, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(tx_create.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    nonce += 1
    return tx_receipt


def update_gpu_listing(
    contract_instance, prev_nonce, listing_id, gpumodel, gpu_capacity, price
):
    global nonce
    nonce = prev_nonce
    gpuhub = contract_instance
    tx = gpuhub.functions.updateGPUListing(
        listing_id, gpumodel, gpu_capacity, price
    ).build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price + 100000,
            "from": address,
            "nonce": nonce + 1,
        }
    )
    tx_create = w3.eth.account.sign_transaction(tx, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(tx_create.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    nonce += 1
    return tx_receipt


# Fulfill GPU listing - mark GPU as unavailable - currently in use
def fulfill_gpu_request(contract_instance, prev_nonce, listing_id):
    global nonce
    nonce = prev_nonce
    gpuhub = contract_instance
    tx = gpuhub.functions.fulfillGPURequest(listing_id).build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price + 100000,
            "from": address,
            "nonce": nonce + 1,
        }
    )
    tx_create = w3.eth.account.sign_transaction(tx, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(tx_create.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    nonce += 1
    return tx_receipt


# Fulfill GPU listing - mark GPU as available
def fulfilled_gpu_listing(contract_instance, prev_nonce, listing_id):
    global nonce
    nonce = prev_nonce
    gpuhub = contract_instance
    tx = gpuhub.functions.fulfilledGPURequest(listing_id).build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price + 100000,
            "from": address,
            "nonce": nonce + 1,
        }
    )
    tx_create = w3.eth.account.sign_transaction(tx, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(tx_create.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    nonce += 1
    return tx_receipt


# Get listing count
def get_listing_count(contract_instance):
    gpuhub = contract_instance
    get_listing_count = gpuhub.functions.getListingCount().call()
    return get_listing_count


# Get GPU listing by ID
def get_gpu_listing_by_id(contract, listing_id):
    gpuhub = contract
    get_gpu_listing = gpuhub.functions.getGPUListing(listing_id).call()
    # get_gpu_listing = contract_list.functions.getGPUListing(listing_id).call()
    return get_gpu_listing


app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/addgpu", methods=["POST"])
def AddGPU():
    # Call Smart Contract function - createGPUListing(string gpuModel, uint256 capacity, uint256 price) to add GPU to the marketplace list
    gpu_model = request.json["gpuModel"]
    capacity = request.json["capacity"]
    price = request.json["price"]
    tx_receipt = create_gpu_listing(gpuhub, nonce, gpu_model, capacity, price)
    # print(tx_receipt)
    response = {"success": True, "message": "GPU listing added successfully"}
    return jsonify(response)


@app.route("/getgpudetailsbyid", methods=["POST"])
def GetGPUDetailsFromList():
    # Call Smart Contract function - getGPUList(listingID) to get GPU info for a particular Listing ID in the marketplace
    listing_id = request.json["listingID"]
    gpu_listing = get_gpu_listing_by_id(gpuhub, listing_id)
    return jsonify(gpu_listing)


@app.route("/fulfillrequest", methods=["POST"])
def FulfilRequest():
    listing_id = request.json["listingID"]
    tx_receipt = fulfill_gpu_request(gpuhub, nonce, listing_id)
    response = {
        "success": True,
        "message": "GPU listing fulfil successfully - isAvailable set to false",
    }
    return jsonify(response)


@app.route("/fulfilledrequest", methods=["POST"])
def FulfilledRequest():
    listing_id = request.json["listingID"]
    tx_receipt = fulfilled_gpu_listing(gpuhub, nonce, listing_id)
    response = {
        "success": True,
        "message": "GPU listing fulfilled successfully - isAvailable set to true",
    }
    return jsonify(response)


@app.route("/getgpulist", methods=["POST"])
def GetGPUList():
    gpu_list = []
    max_listings = 100  # Later fetch this from the contract
    max_price = request.json["maxPrice"]
    min_capacity = request.json["minCapacity"]
    # Call Smart Contract function - getGPUList() iteratively to get all GPU info in the marketplace until listingCount is reached, if isAvailable is true then add to list
    for i in range(0, max_listings):
        gpu_listing = get_gpu_listing_by_id(gpuhub, i)
        if gpu_listing[1] == "":
            break
        if (
            gpu_listing[4]
            and gpu_listing[3] <= max_price
            and gpu_listing[2] >= min_capacity
        ):
            gpu_listing.append(i)
            gpu_list.append(gpu_listing)
    return gpu_list


@app.route("/getlistingcount", methods=["GET"])
def GetListingCount():
    listing_count = get_listing_count(gpuhub)
    return jsonify(listing_count)


if __name__ == "__main__":
    w3 = web3.Web3(web3.HTTPProvider("http://127.0.0.1:8545"))

    # Deploy the contract
    with open("../../contracts/GPUHub.sol", "r") as contract_file:
        contract_data = contract_file.read()

    install_solc("0.8.0")
    compiled_sol = compile_standard(
        {
            "language": "Solidity",
            "sources": {"GPUHub.sol": {"content": contract_data}},
            "settings": {
                "outputSelection": {
                    "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
                }
            },
        },
        solc_version="0.8.0",
    )

    with open("compiled_code.json", "w") as file:
        json.dump(compiled_sol, file, indent=4)

    bytecode = compiled_sol["contracts"]["GPUHub.sol"]["GPUHub"]["evm"]["bytecode"][
        "object"
    ]
    abi = json.loads(compiled_sol["contracts"]["GPUHub.sol"]["GPUHub"]["metadata"])[
        "output"
    ]["abi"]

    chain_id = 1337
    address = "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1"
    private_key = "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d"

    contract_list = w3.eth.contract(abi=abi, bytecode=bytecode)
    nonce = w3.eth.get_transaction_count(address)

    txn = contract_list.constructor().build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price + 12000,
            "from": address,
            "nonce": nonce,
        }
    )

    signed_txn = w3.eth.account.sign_transaction(txn, private_key=private_key)
    print("Deploying contract...")
    txn_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    print("Waiting for contract to be deployed...")
    txn_receipt = w3.eth.wait_for_transaction_receipt(txn_hash)
    contract_address = txn_receipt.contractAddress
    print("Contract deployed to {0}".format(contract_address))

    gpuhub = w3.eth.contract(address=contract_address, abi=abi)
    tx = gpuhub.functions.createGPUListing("RTX-3080", 24, 100).build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price,
            "from": address,
            "nonce": nonce + 1,
        }
    )
    nonce += 1
    tx_create = w3.eth.account.sign_transaction(tx, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(tx_create.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    # print(gpuhub.functions.getGPUListing(0).call())
    tx_receipt = create_gpu_listing(gpuhub, nonce, "RTX-2080", 128, 3750)
    create_gpu_listing(gpuhub, nonce, "RTX-3080", 256, 7500)
    create_gpu_listing(gpuhub, nonce, "RTX-3090", 128, 5000)
    create_gpu_listing(gpuhub, nonce, "GTX 1660", 4, 1200)
    create_gpu_listing(gpuhub, nonce, "RX 580", 8, 750)
    create_gpu_listing(gpuhub, nonce, "RX 5700 XT", 12, 1250)
    create_gpu_listing(gpuhub, nonce, "GTX 1660 Ti", 16, 1500)
    create_gpu_listing(gpuhub, nonce, "RTX-2080", 24, 2500)
    create_gpu_listing(gpuhub, nonce, "RTX-480", 16, 1250)
    create_gpu_listing(gpuhub, nonce, "RTX-3090", 128, 7500)
    # print(get_gpu_listing_by_id(gpuhub, 1))
    # print(gpuhub.functions.getGPUListing(2).call())
    app.run(debug=True)
