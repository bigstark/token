contract('Ganache-cli', async (accounts) => {
    it('should creates correctly number of accounts', async () => {
        assert.equal(accounts.length, 50);
    });

    it('should give correctly amount of eth', async () => {
        assert.equal(web3.eth.getBalance(accounts[1]).c, 10000000000);
    });
})
