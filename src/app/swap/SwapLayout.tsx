import {ReactNode} from "react";
import Navbar from "@/components/shared/Navbar";

export default function SwapLayout({
                                        children,
                                    }: {
    children: ReactNode
}) {
    return (
        <>
            <main>
                <Navbar/>
                {children}
            </main>
        </>
    )
}