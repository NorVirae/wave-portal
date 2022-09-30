

const main = () => {
    let contractfactory = hre.ethers.getContractFactory("Wave");
    let waveContract = await contractfactory.deploy()
}