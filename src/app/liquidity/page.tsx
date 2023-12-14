import React from 'react';
import {Metadata} from "next";
import LiqLayout from "@/app/liquidity/LiqLayout";
import Liquidity from "@/views/Liquidity";

export const metadata: Metadata = {
    title: 'Liquidity',
    description: 'Generated by create next app',
}

const Page = () => {
    return (
        <LiqLayout>
            <Liquidity/>
        </LiqLayout>
    );
};

export default Page;