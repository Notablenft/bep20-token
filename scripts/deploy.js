const hre = require("hardhat");

function tokens(n) {
  return ethers.utils.parseEther(n);
}

async function main() {
  const owner = process.env.OWNER;
  const whitelister = process.env.WHITELISTER;

  const NotableToken = await hre.ethers.getContractFactory("NotableToken");
  const notableToken = await NotableToken.deploy();

  await notableToken.deployed();

  await notableToken.transfer(owner, tokens('100000000'));
  await notableToken.transferOwnership(owner);
  await notableToken.transferWhitelister(whitelister);
  
  console.log("NotableToken deployed to:", notableToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
