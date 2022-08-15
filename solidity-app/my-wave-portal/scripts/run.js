

const main = async () => {
    
    const [owner, randomPerson] = await hre.ethers.getSigners()
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract =  await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("deployed to ", waveContract.address);
    console.log("contract deployed by ", owner.address);

    let waveCount = await waveContract.getTotalWaves();
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson).wave();
    console.log("wave innitiated by ", randomPerson.address)

    waveCount = await waveContract.getTotalWaves();
    
    console.log( " new Wave count ", waveCount);

    
} 

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    }catch(err){
        console.log(err);
        process.exit(1);
    }

}

runMain()