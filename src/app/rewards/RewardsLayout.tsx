import {ReactNode} from "react";
import Navbar from "@/components/shared/Navbar";
import styles from "@/assets/styles/css/modules/rewards.module.css";

export default function RewardsLayout({
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