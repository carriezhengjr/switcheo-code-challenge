// Referenced from https://docs.soliditylang.org/en/v0.8.19/introduction-to-smart-contracts.html

// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

// Imports interface for ERC-20 token standard to call `balanceOf()` on a token contract.
// Retrieves the balance of a specified account for a given token contract address.
interface IERC20 {
    function balanceOf(address account) external view returns (uint);
}

// This is a utility EVM contract with a function to retrieve all token balances given a wallet address and the token contract addresses.
contract TokenBalanceRetriever {
    struct TokenBalance {
        address token;
        uint balance;
    }

    // Takes a wallet address and an array of token contract addresses.
    // Returns an array of token balances.
    function retrieveBalances(address wallet, address[] memory tokens) public view returns (TokenBalance[] memory) {
        // Declares a dynamic array having same length as tokens array to store balances of each token.
        TokenBalance[] memory balances = new TokenBalance[](tokens.length);
        for (uint i = 0; i < tokens.length; i++) {
            balances[i] = TokenBalance({
                token: tokens[i],
                balance: IERC20(tokens[i]).balanceOf(wallet)
            });
        }
        return balances;
    }
}
