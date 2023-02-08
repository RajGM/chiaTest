import { Wallet } from 'chia-js';

const wallet = new Wallet({
    protocol: 'http',
    hostname: "172.17.0.2",
    port: 8444
});

async function testme() {
    const mnemonic = await wallet.generateMnemonic();

    console.log(mnemonic);
}

testme();