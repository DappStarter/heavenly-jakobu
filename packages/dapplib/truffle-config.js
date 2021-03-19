require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'half climb frown skull traffic develop remember equip hidden kitchen outer general'; 
let testAccounts = [
"0x2328a29949127b683e2d67ba7299aa69db6a53fbe547e1428bf0bf0929417f05",
"0x2d01463ebbc9bced3814b22a20b2c16e2e2fcb14ffbe03f2e8c741a3d5187d62",
"0xdd772fbe4ca5366bb703f8c2c712320be37054d44e7f6561ecdce3b1e24c701a",
"0x7f99c5d750a1b352e972e6dcc1f7d15421d1079a0e39b484b49708c0c39b8c6e",
"0x4432c7b69d3f740c47e16721dd38ab7268cff1eda06c02af840157befdd12810",
"0xbbbc898dda80b3816c398a2398391adb3c3358afc2c2feeb51252d7f7dc25a6a",
"0xfd01f465baeb4dfd93a8b8fc4763c8934e665ebf40b19a4ecf5d56ca8a3b0756",
"0x6abfb0846ac413f258d825582f8720c713cb939d37a97e29736bb8b33991ad96",
"0x3a522b34051a58cd3c349bf5ad202d639f0bec2ae1d5fa8a4defcfcf545840e3",
"0xd036a7f2dfcbf03cda0af7528591c15af71a395785506f3a6633d2458d1a0fb6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

