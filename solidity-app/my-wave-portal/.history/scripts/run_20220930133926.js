

const main = async () => {
    const contractfactory = await hre.ethers.getContractFactory("Wave");
    console.log(contractfactory)
    const waveContract = await contractfactory.deploy();
    await waveContract.deployed();
    console.log(waveContract.address)

    const waveTxn 
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

runMain()