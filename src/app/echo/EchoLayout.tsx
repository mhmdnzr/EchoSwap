import {ReactNode} from "react";
import styles from '@/assets/styles/css/modules/echo.module.css'
import Navbar from "@/components/shared/Navbar";
export default function EchoLayout({
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