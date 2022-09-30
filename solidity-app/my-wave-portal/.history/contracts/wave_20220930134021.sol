//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "hardhat/console.sol";


contract Wave{

    uint256 totalWaves;
    constructor (){
        console.log("This contract has been deployed.");
    }

    function wave() public{
        totalWaves += 1;
        console.log("This man with the address has waved " + msg.sender );
    }

    function getTotalWaves() public view returns (uint256){
        console.log(totalWaves, "Total Wave");
        return totalWaves;
    }
}