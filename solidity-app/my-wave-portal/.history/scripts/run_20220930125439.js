

const main = async () => {
    let contractfactory = hre.ethers.getContractFactory("Wave");
    let waveContract = await contractfactory.deploy()
    await waveContract.deployed();
}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }

    catch(err){
        console.log(err);
        process.exit(1);
    }
}