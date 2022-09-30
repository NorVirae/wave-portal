//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "hardhat/console.sol";


contract Wave{


    event NewWave(address indexed waver, uint256 timestamp, string message);


    struct Wave{
        address waver;
        uint256 timestamp;
        string message;

    }

    Wave[] wave;

    constructor (){
        console.log("This contract has been deployed.");
    }

    function wave(string _message) public{
        wave.push(Wave(msg.sender, _))
        totalWaves += 1;
        console.log("This man with the address has waved ", msg.sender );
    }

    function getTotalWaves() public view returns (uint256){
        console.log(totalWaves, "Total Wave");
        return totalWaves;
    }
}