//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract WavePortal {
    uint256 totalWave;
    constructor() {
        console.log("this is not a driil");
    }

    function wave() public{
        totalWave += 1;
        console.log("this my guy %s has waved", msg.sender);
    }

    function getTotalWaves() public view returns (uint256){
        console.log("we  have a total of %d waves", totalWave);
        return totalWave;
    }
}
