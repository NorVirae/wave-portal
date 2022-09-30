

const main = async () => {
    const [owner, randomPerson, anotherPerson] = await hre.ethers.getSigners()
    const contractfactory = await hre.ethers.getContractFactory("Wave");
    const waveContract = await contractfactory.deploy();
    await waveContract.deployed();
    console.log( "contract was deployed by ", owner.address," and was deployed to ", waveContract.address )

    await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave("Hey i was the first to wave");

    await waveTxn.wait()

    let secondTxn = await waveContract.connect(randomPerson).wave("hallo wonderfuil people")
    await secondTxn.wait()

    let thirdTxn = await waveContract.connect(anotherPerson).wave("Halo am john")
    await thirdTxn.wait()


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