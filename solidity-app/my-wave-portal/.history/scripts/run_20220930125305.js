

const main = async () => {
    let contractfactory = hre.ethers.getContractFactory("Wave");
    let waveContract = await contractfactory.deploy()
    await waveContract.deployed()
}

const runMain = async () => {
    try{

    }

    catch
}