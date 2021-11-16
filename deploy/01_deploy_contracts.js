module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy("NotableToken", { from: deployer });
}
