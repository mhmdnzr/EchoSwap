"use client";

import {store} from "@/store/store";
import {Provider} from "react-redux";
import {ReactNode} from "react";
import {darkTheme, getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {Chain, configureChains, createConfig, WagmiConfig} from "wagmi";
import { publicProvider } from 'wagmi/providers/public'


export function Providers({children}: { children: ReactNode }) {
    const zkSyncTestnet: Chain = {
        id: 280,
        name: 'zkSync Era Testnet',
        network: 'zkSync Era Testnet',
        nativeCurrency: {
            decimals: 18,
            name: 'etherium',
            symbol: 'ETH',
        },
        rpcUrls: {
            public: {http: ['https://testnet.era.zksync.dev']},
            default: {http: ['https://testnet.era.zksync.dev']},
        },
        blockExplorers: {
            default: {name: 'zksync testnet', url: 'https://goerli.explorer.zksync.io/'},
        },
    }
    const opBNB: Chain = {
        id: 5611,
        name: 'opBNB Testnet',
        network: 'opBNB Testnet',
        nativeCurrency: {
            decimals: 18,
            name: 'test BNB',
            symbol: 'tBNB',
        },
        rpcUrls: {
            public: {http: ['https://opbnb-testnet-rpc.bnbchain.org']},
            default: {http: ['https://opbnb-testnet-rpc.bnbchain.org']},
        },
        blockExplorers: {
            default: {name: 'opbnbscan testnet', url: 'http://opbnbscan.com/'},
        },

    }
    const {chains, publicClient, webSocketPublicClient} = configureChains(
        [
            opBNB, zkSyncTestnet,
            ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [zkSyncTestnet] : []),
        ],
        [publicProvider()]
    );
    const {connectors} = getDefaultWallets({
        appName: 'Echoswap',
        projectId: 'e798cef35d6a24a5ddf135ca3b9d57d7',
        chains,
    });

    const wagmiConfig = createConfig({
        autoConnect: true,
        connectors,
        publicClient,
        webSocketPublicClient,
    });
    const AppInfo = {
        appName: 'Echoswap',
    };
    return <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
            chains={chains}
            appInfo={AppInfo}
            theme={darkTheme({
                accentColor: '#FFFFFF',
                accentColorForeground: '#000000',
                overlayBlur: 'small',
                borderRadius: 'none'
            })}
            modalSize="compact">
            <Provider store={store}>{children}</Provider>
        </RainbowKitProvider>
    </WagmiConfig>;
}