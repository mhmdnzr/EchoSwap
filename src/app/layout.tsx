import '@/assets/styles/css/font-importer.css'
import './globals.css'
import type {Metadata} from 'next'
import {ReactNode} from "react";
import {Providers} from "@/store/Provider";

import '@rainbow-me/rainbowkit/styles.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

export const metadata: Metadata = {
    title: 'Echo Swap',
    description: 'EchoSwap is the first community-owned concentrated liquidity marketplace driving ve(3,3) concept on @zksync. It drived the solidly concept of redistributing fees and token emissions to multiple roles with the features of staking, bribing and vote-escrowed tokens etc, involving community into the protocol to expand DeFi mission.',
}
export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {


    return (
        <html lang="en">
        <body className="overflow-x-hidden">
        <meta name="application-name" content="Echo App"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
        <meta name="apple-mobile-web-app-title" content="Echo App"/>
        <meta name="description" content="Best Echo App in the world"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
        <meta name="msapplication-TileColor" content="#2B5797"/>
        <meta name="msapplication-tap-highlight" content="no"/>
        <meta name="theme-color" content="#000000"/>

        {/* <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
            <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />*/}

        <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="mask-icon" href="/echo.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/echo.svg"/>
        <meta name="twitter:card" content="summary"/>
        {/*<meta name="twitter:url" content="https://yourdomain.com" />*/}
        <meta name="twitter:title" content="Echo App"/>
        <meta name="twitter:description" content="Best Echo App in the world"/>
        {/*<meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />*/}
        <meta name="twitter:creator" content="@WeconomyNetwork"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Echo App"/>
        <meta property="og:description" content="Best Echo App in the world"/>
        <meta property="og:site_name" content="Echo App"/>
        {/*<meta property="og:url" content="https://yourdomain.com" />*/}
        {/*<meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />*/}

        {/* <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />*/}
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
