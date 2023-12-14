import SwapLayout from "@/app/swap/SwapLayout";
import dynamic from "next/dynamic";

const NoSSRSwap = dynamic(() => import("@/views/Swap"), {ssr: false})

export default function Home() {
    return (
        <SwapLayout>
            <NoSSRSwap/>
        </SwapLayout>
    )
}
