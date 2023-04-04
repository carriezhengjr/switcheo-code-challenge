// Referenced from https://docs.ethers.org/v6/getting-started/

import { ethers } from 'ethers';

// Connects to the Ethereum network using RPC.
// The RPC endpoint is taken from https://docs.bnbchain.org/docs/rpc
const provider = new ethers.JsonRpcProvider('https://bsc-dataseed.binance.org');

// Connects to the $SWTH Token Contract.
const swthTokenContractAddress = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';
// Gets the account balance
const swthTokenContractAbi = [
    "function balanceOf(address: string) view returns (uint)"
];
// Creates the Contract object.
const swthTokenContract = new ethers.Contract(swthTokenContractAddress, swthTokenContractAbi, provider);

// Stores the addresses to look up.
const addresses: string[] = [
    '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392',
];

// Retrieve the balances and outputs the results.
async function retrieveBalances() {
    for (const address of addresses) {
        // Gets the balance of the address.
        const balance = await swthTokenContract.balanceOf(address);
        // Formats the amount for displaying to the user with 8 decimal places as stated on https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c
        console.log(`${address} ${ethers.formatUnits(balance, 8)}`);
    }
}

retrieveBalances();
