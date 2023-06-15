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

print(compiled_sol)

with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file, indent=4)
