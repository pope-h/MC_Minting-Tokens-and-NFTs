import { percentAmount, generateSigner, signerIdentity, createSignerFromKeypair } from '@metaplex-foundation/umi'
import { TokenStandard, createAndMint } from '@metaplex-foundation/mpl-token-metadata'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import  "@solana/web3.js";
import secret from './guideSecret.json';

const umi = createUmi('https://api.devnet.solana.com/'); //Replace with your QuickNode RPC Endpoint

const userWallet = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secret));
const userWalletSigner = createSignerFromKeypair(umi, userWallet);

const metadata = {
    name: "Pope Zombie Token",
    symbol: "PZT",
    uri: "https://ipfs.io/ipfs/bafybeiclbmtydqja2tskwur6xvrdfutd6t7f4bqyy6fnysszc4mtjem344/0",
};

const mint = generateSigner(umi);
umi.use(signerIdentity(userWalletSigner));
umi.use(mplCandyMachine())

createAndMint(umi, {
    mint,
    authority: umi.identity,
    name: metadata.name,
    symbol: metadata.symbol,
    uri: metadata.uri,
    sellerFeeBasisPoints: percentAmount(0),
    decimals: 8,
    amount: 1000000_00000000,
    tokenOwner: userWallet.publicKey,
    tokenStandard: TokenStandard.Fungible,
    }).sendAndConfirm(umi).then(() => {
    console.log("Successfully minted 1 million tokens (", mint.publicKey, ")");
});

// 8X6T7AN9nCB7NJyuvsZeS56Foo2qkQexMrbbnPUJjV5W

// PZT: ASPgDsnWZp3BHMHY3CEBK8iTNq642xsTBUQJdKf1e9DL