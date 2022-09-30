

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners()
    const contractfactory = await hre.ethers.getContractFactory("Wave");
    console.log(contractfactory)
    const waveContract = await contractfactory.deploy();
    await waveContract.deployed();
    TASK_COMPILE_SOLIDITY_HANDLE_COMPILATION_JOBS_FAILURES.
    console.log(waveContract.address)

    await waveContract.getTotalwaves();

    let waveTxn = await 
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