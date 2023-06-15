import web3
from solcx import compile_standard, install_solc
import json

# w3 = web3.Web3(web3.HTTPProvider("http://127.0.0.1:8545"))

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

# print(compiled_sol)

with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file, indent=4)

bytecode = compiled_sol["contracts"]["GPUHub.sol"]["GPUHub"]["evm"]["bytecode"][
    "object"
]
abi = json.loads(compiled_sol["contracts"]["GPUHub.sol"]["GPUHub"]["metadata"])[
    "output"
]["abi"]

# connect to ganache
w3 = web3.Web3(web3.HTTPProvider("http://127.0.0.1:8545"))
chain_id = 1337
address = "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1"
# Remove this private key after testing and for production
private_key = "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d"

# create contract
contract_list = w3.eth.contract(abi=abi, bytecode=bytecode)
nonce = w3.eth.get_transaction_count(address)

# build txn
txn = contract_list.constructor().build_transaction(
    {
        "chainId": chain_id,
        "gasPrice": w3.eth.gas_price,
        "from": address,
        "nonce": nonce,
    }
)

# sign txn
signed_txn = w3.eth.account.sign_transaction(txn, private_key=private_key)
print("Deploying contract...")
# send txn
txn_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
print("Waiting for contract to be deployed...")
txn_receipt = w3.eth.wait_for_transaction_receipt(txn_hash)
print("Contract deployed to {0}".format(txn_receipt.contractAddress))
