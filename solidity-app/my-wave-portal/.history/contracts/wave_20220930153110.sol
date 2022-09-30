//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "hardhat/console.sol";


contract Wave{

    uint256 totalWaves;
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
        totalWaves += 1;
        wave.push(Wave(msg.sender, block.timestamp, _message));
        console.log("This man with the address has waved ", msg.sender );

        emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllWaves

    function getTotalWaves() public view returns (uint256){
        console.log(totalWaves, "Total Wave");
        return totalWaves;
    }
}