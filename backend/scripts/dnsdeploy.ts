import { ethers } from "hardhat";

const main = async () => {
  const [owner, testDummy] = await ethers.getSigners();
  const Contract = await ethers.getContractFactory("DnsContract");
  const DnsContract = await Contract.deploy();
  await DnsContract.deployed();

  console.log("Contract owner: ", owner.address);
  console.log("Contract deployed to: ", DnsContract.address);
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
