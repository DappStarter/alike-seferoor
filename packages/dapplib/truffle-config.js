require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strong razor office purity hunt knee metal gauge'; 
let testAccounts = [
"0x4c7e53e5aad217cbba27bf755c6f0a0219dfadedebcf73b21a92602910114b7a",
"0x5db015328419430570ec74813e18017cff8194eda3c73440071030507b3617bf",
"0x34ca233aac3bc85fea48d29ea83b5b7d8c43d165d8eca7c90c95fe8bcee0d2ae",
"0x34041deb5f42c03591ad0df0d0d568db4853d8eef01ebcaf14a6e66f66ef91e6",
"0xef5cc7ffcc0f01e57ad22d65befa34367875713deb900829a43a42136bf6011d",
"0xe4ddd0e154a09569eb0a9a9f14b08c8c14e9b282a8192ec1e9cfd64a54dc77fb",
"0xe9264474b6ec13955b77dbd7e7a3bebdcd876bd464f81f3e93980f7cae339bb0",
"0x6b8560dd62b3000ecba1bb9281926bca26652430737fd63f91987510179cbedb",
"0xf439c501618de70384412dd619d5816b8e3f226446ae3d81ddca2fda721a1e1a",
"0x1ba9337a5de546281dfc661f886f96d399a0df818484192046de27a3c5e591b1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
