# Metaplex Candy Machine Reference UI
# Solana Candy Machine Frontend

This project is a simple frontend application for interacting with a Solana Candy Machine. It demonstrates the basic syntax and functionality of React and Solana's web3.js library, providing a user interface for managing Candy Machine operations.

## Description

The application is built with React and leverages the `@solana/web3.js` library for interacting with the Solana blockchain. It includes a theme provider for styling and wallet adapters for connecting to various Solana wallets. The application is designed to be easy to use, with a focus on simplicity and clarity.

## Getting Started

To set up a minting site using the Candy Machine UI provided by Metaplex, follow these steps:

1. **Clone the Candy Machine UI Repository**:
   From your project directory, open your terminal and enter the following commands:
```bash
   git clone [https://github.com/metaplex-foundation/candy-machine-ui](https://github.com/metaplex-foundation/candy-machine-ui) ./candy-machine-ui/
   cd candy-machine-ui
```

2. **Configure Environment Variables**:
   Rename the `.env.example` file to `.env` and update the values inside to match your setup:
    - REACT_APP_CANDY_MACHINE_ID=<YOUR_CANDY_MACHINE_PUBKEY> 
    - REACT_APP_SOLANA_NETWORK=devnet 
    - REACT_APP_SOLANA_RPC_HOST=<YOUR_QUICKNODE_DEVNET_ENDPOINT>
   If you're unsure of your Candy Machine ID, you can find it in the `cache.json` file under the `program.candyMachine` field.

3. **Install Dependencies and Start the Application**:
   With the environment variables configured, run the following commands from the `candy-machine-ui` directory:
    - yarn install
    - yarn start
   This will launch the application in your browser at `localhost:3000`.

## Minting an NFT

1. **Connect Your Wallet**:
   Ensure your Phantom Wallet is set to `devnet` and not `mainnet`. Connect your wallet to the application.

2. **Ensure You Have Devnet SOL**:
   You'll need devnet SOL in your Phantom wallet to mint an NFT. If you don't have any, you can airdrop some to your wallet using the Solana CLI with the following command:
   ```bash
        solana airdrop 1 YOUR_PHANTOM_WALLET_ADDRESS ```

3. **Mint Your NFT**:
   Once connected and ready, click the "Mint" button to mint your NFT.

## Troubleshooting

- If you encounter a "Mint Failed" error, it's likely due to insufficient funds. Ensure your wallet has enough devnet SOL and try again.
- After minting, it may take a moment for Phantom to render the NFT in your wallet.

## Authors

- **Metacrafter Team**
- **Ekarika Nsemeke**

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
