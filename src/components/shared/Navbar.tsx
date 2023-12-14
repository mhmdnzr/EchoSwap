'use client'
import React, {useState} from 'react';
import {INavbarItems, NavbarData} from "@/data/NavbarData";
import Link from "next/link";
import styles from '@/assets/styles/css/modules/navbar.module.css'
import {usePathname} from "next/navigation";
import ConnectWalletButton from './ConnectWalletButton'

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const path: string = usePathname()

    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">

                <Link href={'/'} className="btn btn-ghost normal-case text-xl hover:bg-transparent">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M4.72599 0H0V24H4.72599V0ZM8.6183 3.86154V10.1908H19.5168V13.6092H8.6183V20.4462H20.6675V24H24V0H20.4983V3.86154H8.6183Z"
                                  fill="white"/>
                        </svg>
                    </div>

                    <span className={styles.nav_echoswap}>EchoSwap</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        NavbarData.map((data: INavbarItems, index: number) => {
                            const isActive: boolean = data.link === path
                            return (
                                <li key={index} className={'ml-2 mx-2'}>
                                    <Link
                                        passHref
                                        href={data.link}
                                        className={`${isActive ? "border rounded-none font-bold" : "text-accent"} ${styles.nav_items}`}
                                    >{data.title}</Link>
                                </li>)
                        })
                    }
                </ul>
            </div>
            <div className="navbar-end md:px-4 space-x-2 ">
                <ConnectWalletButton/>
                <div className="dropdown">
                    <input id="my-drawer-4" type="checkbox" checked={open} className="drawer-toggle"/>
                    <div className="flex flex-col items-center justify-center drawer-content">

                        <label onClick={() => setOpen(true)} htmlFor="my-drawer-4" tabIndex={0}
                               className="btn btn-ghost ms-3 lg:hidden">
                            <svg style={{
                                transform: "rotate(180deg)"
                            }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side z-10">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul tabIndex={0}
                            className="menu flex h-screen md:h-screen flex-wrap overflow-x-hidden overflow-y-scroll p-4 w-full bg-base-100 text-base-content px-10">
                            <div className='flex flex-row w-full justify-between pb-7 pt-11'>
                                <div></div>
                                <button onClick={() => setOpen(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M13.8592 12L23.6309 2.22956C24.123 1.73743 24.123 0.92123 23.6309 0.429107L23.5828 0.381095C23.0907 -0.111028 22.2744 -0.111028 21.7822 0.381095L11.9985 10.1635L2.22684 0.369092C1.73465 -0.123031 0.918344 -0.123031 0.42616 0.369092L0.378142 0.429107C-0.126047 0.92123 -0.126047 1.73743 0.378142 2.22956L10.1498 12L0.378142 21.7824C-0.114043 22.2746 -0.114043 23.0908 0.378142 23.5829L0.42616 23.6309C0.918344 24.123 1.73465 24.123 2.22684 23.6309L11.9985 13.8605L21.7702 23.6309C22.2623 24.123 23.0787 24.123 23.5708 23.6309L23.6189 23.5829C24.111 23.0908 24.111 22.2746 23.6189 21.7824L13.8592 12Z"
                                            fill="#7E7E7E"/>
                                    </svg>
                                </button>
                            </div>

                            {
                                NavbarData.map((data: INavbarItems, index: number) => {
                                    const isActive: boolean = data.link === path
                                    return (<li className="w-full" key={index}><Link
                                        className={`${styles.a_tag} ${isActive && 'border border-primary bg-primary bg-opacity-10 rounded-none'}`}
                                        href={data.link}>{data.title}</Link></li>)
                                })
                            }
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;