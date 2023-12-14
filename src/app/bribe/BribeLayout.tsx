import {ReactNode} from "react";
import styles from '@/assets/styles/css/modules/bribe.module.css'
import Navbar from "@/components/shared/Navbar";
export default function BribeLayout({
                                        children,
                                    }: {
    children: ReactNode
}) {
    return (
        <>
            <main className={styles.main}>
                <Navbar/>
                {children}
            </main>
        </>
    )
}