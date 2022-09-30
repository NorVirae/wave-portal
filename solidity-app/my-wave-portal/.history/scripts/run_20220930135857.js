

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners()
    const contractfactory = await hre.ethers.getContractFactory("Wave");
    const waveContract = await contractfactory.deploy();
    await waveContract.deployed();
    console.log( "contract was deployed by ", owner.address," and was deployed to ", waveContract.address )

    await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();

    await waveTxn.wait()

    let secondTxn = await waveContract.connect(randomPerson).wave()
    await secondTxn.wait()

    await waveContract.getTotalWaves();
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