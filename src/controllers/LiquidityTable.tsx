'use client'
import React, {ReactNode, useRef, useState} from 'react';
import Table from "@/components/layouts/Table";
import styles from "@/assets/styles/css/modules/table.module.css";
import Image from "next/image";
import ManageLpStaking from "@/components/extras/ManageLpStaking";
import {ILiquidityData} from "@/interfaces/ILiquidityData";
import {formatEther} from 'viem';
import Modal from "@/components/layouts/Modal";

const LiquidityTable = (props: ILiquidityData) => {
        const pageList: (10 | 20 | 30 | 40)[] = [10, 20, 30, 40]
        const [itemsPerPage, setItemsPerPage] = useState<10 | 20 | 30 | 40>(10)
        const [poolIndex, setPoolIndex] = useState<number>(0)
        const [open, setOpen] = useState<boolean>(false)
        const [statusGuide, setStatusGuide] = useState<string>("GUIDE")
        const columns = props.heads
        const rows = props.data
        const details = useRef<any>()
        const [currentPage, setCurrentPage] = useState<number>(1);

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

        const totalItems = rows.length;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const handleClick = (page: number): void => {
            setCurrentPage(page);
        };

        const nextPage = (): void => {
            if (currentPage < pageNumbers.length) {
                setCurrentPage(currentPage + 1);
            }
        };

        const prevPage = (): void => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        };

        function calculateAPR(myStakedBalance: bigint, totalStakedInGauge: bigint) {
            if (totalStakedInGauge === BigInt(0)) {
                return 0
            }
            const periodInDays = 7 // week
            const totalRewardsForPeriod = 100
            const daysInYear = 365;
            const myProportion = parseFloat((myStakedBalance / totalStakedInGauge).toString());
            const myRewards = myProportion * totalRewardsForPeriod;
            const annualizedRewards = (myRewards / periodInDays) * daysInYear;
            return annualizedRewards.toFixed(2)
        }

        return (
            <>
                {props.data.length === 0 ?
                    <div className="h-fit overflow-hidden">
                        <div className={`overflow-y-auto scrollbar w-full ${styles.token_height}`}>
                            <span className="loading loading-bars loading-lg"/>
                        </div>
                    </div> :

                    <Table cols={columns}>
                        {
                            currentItems.map((row, index: number) => {
                                return <tr key={index} className={'border-none'}>
                                    <td>
                                        <div className={'flex flex-row items-center gap-0'}>
                                            <div className="avatar-group -space-x-6">
                                                <div className={`avatar border-none ${styles.avatarIcon}`}>
                                                    <div className="w-12">
                                                        <Image loading='lazy'
                                                               data-src={`/static/img/icon/tokens/${row.token0_symbol}.svg`}
                                                               className={'lazyload'}
                                                               src={`/static/img/icon/tokens/${row.token0_symbol}.svg`}
                                                               alt={row.token0_symbol}
                                                               width={12}
                                                               height={12}/>
                                                    </div>
                                                </div>
                                                <div className={`avatar border-none ${styles.avatarIcon}`}>
                                                    <div className="w-12">
                                                        <Image loading='lazy'
                                                               data-src={`/static/img/icon/tokens/${row.token1_symbol}.svg`}
                                                               className={'lazyload'}
                                                               src={`/static/img/icon/tokens/${row.token1_symbol}.svg`}
                                                               alt={row.token1_symbol}
                                                               width={12}
                                                               height={12}/>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="flex flex-col">
                                                <div>
                                                    <span className={styles.token_name}>{row.symbol}</span>
                                                </div>
                                                <span
                                                    className={styles.details}>{row.stable === true ? 'Stable' : 'Volatile'}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-col">
                                            <span
                                                className={styles.token_name}> {calculateAPR(row.account_gauge_balance, row.gauge_total_supply)} %  </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row justify-center items-center gap-2">
                                        <span
                                            className={styles.token_name}>{parseFloat(formatEther(row.gauge_total_supply)).toFixed(4)}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16"
                                                 fill="none">
                                                <path
                                                    d="M7.99988 14.2229C11.4298 14.2229 14.2203 11.4325 14.2203 8.00256C14.2203 4.57263 11.4298 1.78218 7.99988 1.78218C4.56997 1.78218 1.77951 4.57263 1.77951 8.00256C1.77951 11.4325 4.56998 14.2229 7.99988 14.2229ZM7.99988 15.0005C4.14133 15.0005 1.00195 11.8611 1.00195 8.00256C1.00195 4.14399 4.14133 1.00463 7.99988 1.00463C11.8584 1.00463 14.9978 4.14399 14.9978 8.00256C14.9978 11.8611 11.8584 15.0005 7.99988 15.0005Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M4.40918 8.00247C4.40918 7.81509 4.48362 7.63539 4.61611 7.50289C4.74861 7.37039 4.92831 7.29596 5.11569 7.29596C5.30307 7.29596 5.48278 7.37039 5.61527 7.50289C5.74777 7.63539 5.82221 7.81509 5.82221 8.00247C5.82221 8.18985 5.74777 8.36955 5.61527 8.50205C5.48278 8.63455 5.30307 8.70898 5.11569 8.70898C4.92831 8.70898 4.74861 8.63455 4.61611 8.50205C4.48362 8.36955 4.40918 8.18985 4.40918 8.00247Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M7.29297 8.00247C7.29297 7.81509 7.3674 7.63539 7.4999 7.50289C7.6324 7.37039 7.8121 7.29596 7.99948 7.29596C8.18686 7.29596 8.36656 7.37039 8.49906 7.50289C8.63156 7.63539 8.70599 7.81509 8.70599 8.00247C8.70599 8.18985 8.63156 8.36955 8.49906 8.50205C8.36656 8.63455 8.18686 8.70898 7.99948 8.70898C7.8121 8.70898 7.6324 8.63455 7.4999 8.50205C7.3674 8.36955 7.29297 8.18985 7.29297 8.00247Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M10.1777 8.00247C10.1777 7.81509 10.2522 7.63539 10.3847 7.50289C10.5172 7.37039 10.6969 7.29596 10.8842 7.29596C11.0716 7.29596 11.2513 7.37039 11.3838 7.50289C11.5163 7.63539 11.5908 7.81509 11.5908 8.00247C11.5908 8.18985 11.5163 8.36955 11.3838 8.50205C11.2513 8.63455 11.0716 8.70898 10.8842 8.70898C10.6969 8.70898 10.5172 8.63455 10.3847 8.50205C10.2522 8.36955 10.1777 8.18985 10.1777 8.00247Z"
                                                    fill="#EAECEF"/>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row justify-center items-center gap-2">
                                        <span
                                            className={styles.token_name}>{parseFloat(formatEther(row.account_gauge_balance)).toFixed(4)}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16"
                                                 fill="none">
                                                <path
                                                    d="M7.99988 14.2229C11.4298 14.2229 14.2203 11.4325 14.2203 8.00256C14.2203 4.57263 11.4298 1.78218 7.99988 1.78218C4.56997 1.78218 1.77951 4.57263 1.77951 8.00256C1.77951 11.4325 4.56998 14.2229 7.99988 14.2229ZM7.99988 15.0005C4.14133 15.0005 1.00195 11.8611 1.00195 8.00256C1.00195 4.14399 4.14133 1.00463 7.99988 1.00463C11.8584 1.00463 14.9978 4.14399 14.9978 8.00256C14.9978 11.8611 11.8584 15.0005 7.99988 15.0005Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M4.40918 8.00247C4.40918 7.81509 4.48362 7.63539 4.61611 7.50289C4.74861 7.37039 4.92831 7.29596 5.11569 7.29596C5.30307 7.29596 5.48278 7.37039 5.61527 7.50289C5.74777 7.63539 5.82221 7.81509 5.82221 8.00247C5.82221 8.18985 5.74777 8.36955 5.61527 8.50205C5.48278 8.63455 5.30307 8.70898 5.11569 8.70898C4.92831 8.70898 4.74861 8.63455 4.61611 8.50205C4.48362 8.36955 4.40918 8.18985 4.40918 8.00247Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M7.29297 8.00247C7.29297 7.81509 7.3674 7.63539 7.4999 7.50289C7.6324 7.37039 7.8121 7.29596 7.99948 7.29596C8.18686 7.29596 8.36656 7.37039 8.49906 7.50289C8.63156 7.63539 8.70599 7.81509 8.70599 8.00247C8.70599 8.18985 8.63156 8.36955 8.49906 8.50205C8.36656 8.63455 8.18686 8.70898 7.99948 8.70898C7.8121 8.70898 7.6324 8.63455 7.4999 8.50205C7.3674 8.36955 7.29297 8.18985 7.29297 8.00247Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M10.1777 8.00247C10.1777 7.81509 10.2522 7.63539 10.3847 7.50289C10.5172 7.37039 10.6969 7.29596 10.8842 7.29596C11.0716 7.29596 11.2513 7.37039 11.3838 7.50289C11.5163 7.63539 11.5908 7.81509 11.5908 8.00247C11.5908 8.18985 11.5163 8.36955 11.3838 8.50205C11.2513 8.63455 11.0716 8.70898 10.8842 8.70898C10.6969 8.70898 10.5172 8.63455 10.3847 8.50205C10.2522 8.36955 10.1777 8.18985 10.1777 8.00247Z"
                                                    fill="#EAECEF"/>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row justify-center items-center gap-2">
                                            <div className='flex flex-col'>
                                                <span
                                                    className={styles.token_name}>{parseFloat(formatEther(row.account_lp_balance)).toFixed(4)}</span>
                                                {/* <span className={styles.token_name}>{parseFloat(formatEther(row.account_token1_balance)).toFixed(4)}</span> */}
                                            </div>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16"
                                                 fill="none">
                                                <path
                                                    d="M7.99988 14.2229C11.4298 14.2229 14.2203 11.4325 14.2203 8.00256C14.2203 4.57263 11.4298 1.78218 7.99988 1.78218C4.56997 1.78218 1.77951 4.57263 1.77951 8.00256C1.77951 11.4325 4.56998 14.2229 7.99988 14.2229ZM7.99988 15.0005C4.14133 15.0005 1.00195 11.8611 1.00195 8.00256C1.00195 4.14399 4.14133 1.00463 7.99988 1.00463C11.8584 1.00463 14.9978 4.14399 14.9978 8.00256C14.9978 11.8611 11.8584 15.0005 7.99988 15.0005Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M4.40918 8.00247C4.40918 7.81509 4.48362 7.63539 4.61611 7.50289C4.74861 7.37039 4.92831 7.29596 5.11569 7.29596C5.30307 7.29596 5.48278 7.37039 5.61527 7.50289C5.74777 7.63539 5.82221 7.81509 5.82221 8.00247C5.82221 8.18985 5.74777 8.36955 5.61527 8.50205C5.48278 8.63455 5.30307 8.70898 5.11569 8.70898C4.92831 8.70898 4.74861 8.63455 4.61611 8.50205C4.48362 8.36955 4.40918 8.18985 4.40918 8.00247Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M7.29297 8.00247C7.29297 7.81509 7.3674 7.63539 7.4999 7.50289C7.6324 7.37039 7.8121 7.29596 7.99948 7.29596C8.18686 7.29596 8.36656 7.37039 8.49906 7.50289C8.63156 7.63539 8.70599 7.81509 8.70599 8.00247C8.70599 8.18985 8.63156 8.36955 8.49906 8.50205C8.36656 8.63455 8.18686 8.70898 7.99948 8.70898C7.8121 8.70898 7.6324 8.63455 7.4999 8.50205C7.3674 8.36955 7.29297 8.18985 7.29297 8.00247Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M10.1777 8.00247C10.1777 7.81509 10.2522 7.63539 10.3847 7.50289C10.5172 7.37039 10.6969 7.29596 10.8842 7.29596C11.0716 7.29596 11.2513 7.37039 11.3838 7.50289C11.5163 7.63539 11.5908 7.81509 11.5908 8.00247C11.5908 8.18985 11.5163 8.36955 11.3838 8.50205C11.2513 8.63455 11.0716 8.70898 10.8842 8.70898C10.6969 8.70898 10.5172 8.63455 10.3847 8.50205C10.2522 8.36955 10.1777 8.18985 10.1777 8.00247Z"
                                                    fill="#EAECEF"/>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row justify-center items-center gap-2">
                                        <span
                                            className={styles.token_name}>{parseFloat(formatEther(row.account_gauge_earned)).toFixed(4)}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16"
                                                 fill="none">
                                                <path
                                                    d="M7.99988 14.2229C11.4298 14.2229 14.2203 11.4325 14.2203 8.00256C14.2203 4.57263 11.4298 1.78218 7.99988 1.78218C4.56997 1.78218 1.77951 4.57263 1.77951 8.00256C1.77951 11.4325 4.56998 14.2229 7.99988 14.2229ZM7.99988 15.0005C4.14133 15.0005 1.00195 11.8611 1.00195 8.00256C1.00195 4.14399 4.14133 1.00463 7.99988 1.00463C11.8584 1.00463 14.9978 4.14399 14.9978 8.00256C14.9978 11.8611 11.8584 15.0005 7.99988 15.0005Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M4.40918 8.00247C4.40918 7.81509 4.48362 7.63539 4.61611 7.50289C4.74861 7.37039 4.92831 7.29596 5.11569 7.29596C5.30307 7.29596 5.48278 7.37039 5.61527 7.50289C5.74777 7.63539 5.82221 7.81509 5.82221 8.00247C5.82221 8.18985 5.74777 8.36955 5.61527 8.50205C5.48278 8.63455 5.30307 8.70898 5.11569 8.70898C4.92831 8.70898 4.74861 8.63455 4.61611 8.50205C4.48362 8.36955 4.40918 8.18985 4.40918 8.00247Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M7.29297 8.00247C7.29297 7.81509 7.3674 7.63539 7.4999 7.50289C7.6324 7.37039 7.8121 7.29596 7.99948 7.29596C8.18686 7.29596 8.36656 7.37039 8.49906 7.50289C8.63156 7.63539 8.70599 7.81509 8.70599 8.00247C8.70599 8.18985 8.63156 8.36955 8.49906 8.50205C8.36656 8.63455 8.18686 8.70898 7.99948 8.70898C7.8121 8.70898 7.6324 8.63455 7.4999 8.50205C7.3674 8.36955 7.29297 8.18985 7.29297 8.00247Z"
                                                    fill="#EAECEF"/>
                                                <path
                                                    d="M10.1777 8.00247C10.1777 7.81509 10.2522 7.63539 10.3847 7.50289C10.5172 7.37039 10.6969 7.29596 10.8842 7.29596C11.0716 7.29596 11.2513 7.37039 11.3838 7.50289C11.5163 7.63539 11.5908 7.81509 11.5908 8.00247C11.5908 8.18985 11.5163 8.36955 11.3838 8.50205C11.2513 8.63455 11.0716 8.70898 10.8842 8.70898C10.6969 8.70898 10.5172 8.63455 10.3847 8.50205C10.2522 8.36955 10.1777 8.18985 10.1777 8.00247Z"
                                                    fill="#EAECEF"/>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        {/* <div className="flex flex-row gap-2.5">
                                        <button
                                            onClick={() => setOpen(true)}
                                            className={`btn btn-outline btn-neutral border-accent rounded-none min-h-0 h-9 ${styles.button}`}>
                                            Manage
                                        </button>
                                        <button
                                            className={`btn btn-neutral rounded-none min-h-0 h-9 border-transparent colo ${styles.button}`}>
                                            Claim Earnings
                                        </button>
                                    </div> */}
                                        <Modal id={'echo_nft'} className={'hidden md:block'} open={open}
                                               setOpen={() => setOpen(false)}>
                                            <div className='flex flex-row flex-wrap gap-2.5'>
                                                <button
                                                    onClick={() => {
                                                        setOpen(true);
                                                        setPoolIndex(index)
                                                    }}
                                                    className={`btn btn-neutral bg-transparent border-transparent animation rounded-none px-6 min-h-0 h-9 pt-2 pb-2 ${styles.button} ${styles.management_button}`}>
                                                    manage
                                                </button>
                                                <button
                                                    disabled={row.account_gauge_earned === BigInt(0)}
                                                    className={`btn btn-neutral bg-transparent animation rounded-none border border-primary px-6 min-h-0 h-9 pt-2 pb-2 ${styles.button} ${styles.management_button}`}>
                                                    Claim Earnings
                                                </button>
                                            </div>

                                            <ManageLpStaking lp={rows[poolIndex]}
                                                             updateModal={(e) => setOpen(e)}/>
                                        </Modal>
                                    </td>
                                </tr>
                            })
                        }
                    </Table>
                }
                <div className={'pt-8'}>
                    <div className="flex flex-row justify-end items-center gap-2">

                        <details ref={details} className="dropdown dropdown-top w-full md:w-auto">
                            <summary
                                className={`btn rounded-none bg-transparent border-transparent ${styles.btn_show_rows_cases}`}>
                                Show：{itemsPerPage} Rows
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8"
                                     fill="none">
                                    <path
                                        d="M5.86603 7.5C5.48113 8.16667 4.51887 8.16667 4.13397 7.5L0.669874 1.5C0.284974 0.833333 0.7661 -8.94676e-07 1.5359 -8.27378e-07L8.4641 -2.21695e-07C9.2339 -1.54397e-07 9.71503 0.833333 9.33013 1.5L5.86603 7.5Z"
                                        fill="#D9D9D9"/>
                                </svg>
                            </summary>

                            <ul className="p-2 border-accent menu dropdown-content z-[1] bg-neutral">
                                {pageList.map((page, index) => {
                                    return <li key={index} onClick={(e) => {
                                        details?.current?.removeAttribute("open")
                                        setItemsPerPage(page)
                                    }}>
                                        <button
                                            className='flex flex-row justify-between'>
                                            <span>{page} Rows</span>
                                        </button>
                                    </li>
                                })}

                            </ul>
                        </details>


                        <span className={styles.number_in_page}>
                            {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of {totalItems}
                    </span>

                        <div className="join">
                            <button
                                onClick={prevPage}
                                className="px-3 rounded-none min-h-0 h-9 join-item btn bg-transparent btn-primary border-transparent">
                                <svg style={{
                                    transform: "rotate(180deg)"
                                }} xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0.0741618 0.0732368C-0.0247206 0.170886 -0.0247206 0.329468 0.0741618 0.427117L3.68936 3.99951L0.0741618 7.57269C-0.0247206 7.67034 -0.0247206 7.82892 0.0741618 7.92657C0.173044 8.02422 0.333354 8.02422 0.432236 7.92657L4.22647 4.17684C4.32536 4.07919 4.32536 3.92061 4.22647 3.82296L0.431487 0.0732368C0.333354 -0.0244123 0.173044 -0.0244123 0.0741618 0.0732368Z"
                                          fill="#EAECEF"/>
                                </svg>
                            </button>
                            {pageNumbers.map(page => (
                                <>
                                    <button
                                        key={page} onClick={() => handleClick(page)}
                                        className={`px-3 rounded-none min-h-0 h-9 join-item btn btn-primary ${page == 1 ? 'bg-opacity-10 border border-primary' : 'bg-transparent border-transparent'}`}>{page}
                                    </button>
                                </>
                            ))}
                            <button
                                onClick={nextPage}
                                className="px-3 rounded-none min-h-0 h-9 join-item btn bg-transparent btn-primary border-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0.0741618 0.0732368C-0.0247206 0.170886 -0.0247206 0.329468 0.0741618 0.427117L3.68936 3.99951L0.0741618 7.57269C-0.0247206 7.67034 -0.0247206 7.82892 0.0741618 7.92657C0.173044 8.02422 0.333354 8.02422 0.432236 7.92657L4.22647 4.17684C4.32536 4.07919 4.32536 3.92061 4.22647 3.82296L0.431487 0.0732368C0.333354 -0.0244123 0.173044 -0.0244123 0.0741618 0.0732368Z"
                                          fill="#EAECEF"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/*<Modal id={'manage-modal'} className={'w-full'} open={open}*/}
                {/*       setOpen={() => setOpen(false)}>*/}
                {/*    <button onClick={() => setOpen(true)}*/}
                {/*            className="btn btn-neutral border-none bg-dark  min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row flex-nowrap justify-start gap-2">*/}
                {/*    </button>*/}
                {/*    <section className="w-full bg-black flex flex-wrap p-5 overflow-hidden">*/}
                {/*        <div className="w-full mt-3 text-white  flex justify-between items-center flex-wrap">*/}
                {/*            Manage Toke/Token1 LP (Volatile)*/}
                {/*            <button*/}
                {/*                onClick={() => setOpen(false)}*/}
                {/*                className="bg-stone-800 rounded-md p-1">*/}
                {/*                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"*/}
                {/*                     fill="none">*/}
                {/*                    <path fill-rule="evenodd" clip-rule="evenodd"*/}
                {/*                          d="M12.9156 4.02674C13.176 3.76639 13.176 3.34428 12.9156 3.08393C12.6553 2.82358 12.2332 2.82358 11.9728 3.08393L7.99989 7.05687L4.02696 3.08393C3.76661 2.82358 3.3445 2.82358 3.08415 3.08393C2.8238 3.34428 2.8238 3.76639 3.08415 4.02674L7.05708 7.99967L3.08393 11.9728C2.82358 12.2332 2.82358 12.6553 3.08393 12.9156C3.34428 13.176 3.76639 13.176 4.02674 12.9156L7.99989 8.94248L11.973 12.9156C12.2334 13.176 12.6555 13.176 12.9158 12.9156C13.1762 12.6553 13.1762 12.2332 12.9158 11.9728L8.9427 7.99967L12.9156 4.02674Z"*/}
                {/*                          fill="#858E9B"/>*/}
                {/*                </svg>*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*        {*/}
                {/*            statusGuide === "GUIDE" && <Guide setStatus={setStatusGuide}/>*/}
                {/*        }*/}
                {/*        {*/}
                {/*            statusGuide === "CREATE" && <CreateGuide setOpen={setOpen} setStatus={setStatusGuide}/>*/}
                {/*        }*/}
                {/*        {*/}
                {/*            statusGuide === "APPROVE" && <Final />*/}
                {/*        }*/}
                {/*        {*/}
                {/*            statusGuide === "FINAL" && <Final />*/}
                {/*        }*/}

                {/*    </section>*/}
                {/*</Modal>*/}
            </>
        );
    }
;

// @ts-ignore
const Guide = ({setStatus}): ReactNode => (
    <>
        <div className="mt-5 flex flex-wrap w-full">
            <div className="w-full p-3 flex bg-yellow-500 bg-opacity-10 text-amber-600 ">
                <div className="w-1/12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6.5C12.5523 6.5 13 6.94772 13 7.5V12.5C13 13.0523 12.5523 13.5 12 13.5C11.4477 13.5 11 13.0523 11 12.5V7.5C11 6.94772 11.4477 6.5 12 6.5ZM12 15.5C12.5523 15.5 13 15.9477 13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5Z"
                              fill="#FF9D00"/>
                    </svg>
                </div>
                <p className="w-10/12 text-xs">
                    The pool must create gauge which can be used for staking and voting.
                </p>
            </div>
        </div>
        <div className="my-5 w-full flex flex-wrap justify-center">
            <button
                onClick={() => setStatus("CREATE")}
                className={`mt-14 md:mt-0 btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 w-auto ${styles.add_remove_liquidity_btn}`}>
                Create Gauge
            </button>
        </div>
    </>
)
// @ts-ignore
const CreateGuide = ({setStatus, setOpen}): ReactNode => {
    const [stake, setStake] = useState<string>("stake")

    return (
        <>
            <div className="mt-5 flex flex-wrap justify-center w-full">
                <button
                    onClick={() => setStake("stake")}
                    className={`mt-14 w-1/2 md:mt-0 btn hover:bg-transparent rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 ${styles.add_remove_liquidity_btn} ${stake === "stake" && 'btn-primary   border border-primary'}`}>Stake
                </button>
                <button
                    onClick={() => setStake("Unstake")}
                    className={`mt-14 w-1/2 md:mt-0 btn  hover:bg-transparent  rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 ${styles.add_remove_liquidity_btn} ${stake === "Unstake" && 'btn-primary   border border-primary'}`}>
                    Unstake
                </button>
            </div>
            <div className="w-full">
                <div className={'border border-white p-1 mt-5 flex flex-col'}>
                    <div className={'flex flex-row justify-between items-center'}>
                        <div>
                            <p className={styles.balance}>Balance: 20,390</p>
                        </div>
                        <div className={'flex flex-row gap-2'}>
                            <div>
                                <button
                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                    25%
                                </button>
                            </div>
                            <div>
                                <button
                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                    50%
                                </button>
                            </div>
                            <div>
                                <button
                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                    75%
                                </button>
                            </div>
                            <div>
                                <button
                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                    MAX
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap justify-between items-center mt-3">
                        <div className={'flex w-2/3 items-center'}>
                            <div className="avatar-group -space-x-6">
                                <div className={`avatar border-none ${styles.avatarIcon}`}>
                                    <div className="w-12">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="ethereum-eth-logo" clipPath="url(#clip0_595_88149)">
                                                <path id="Vector"
                                                      d="M0 10C0 7.34783 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34783 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10H0Z"
                                                      fill="#607AE3"/>
                                                <path id="Vector_2"
                                                      d="M9.99999 17.1866L9.90332 16.86V7.35664L9.99999 7.25998L14.41 9.86664L9.99999 17.1866Z"
                                                      fill="#BCC5EE"/>
                                                <path id="Vector_3"
                                                      d="M10 17.1866L5.58667 9.86664L10 7.25998V11.8733V17.1866Z"
                                                      fill="#F7F7F7"/>
                                                <path id="Vector_4"
                                                      d="M10 6.42336L9.94336 6.3567V2.97337L10 2.81337L14.4134 9.03003L10 6.42336Z"
                                                      fill="#BCC5EE"/>
                                                <path id="Vector_5"
                                                      d="M10 2.81337V6.42336L5.58667 9.03003L10 2.81337Z"
                                                      fill="#F7F7F7"/>
                                                <path id="Vector_6"
                                                      d="M10 7.25996L14.41 9.86662L10 11.8733V7.25996Z"
                                                      fill="#7D93E7"/>
                                                <path id="Vector_7"
                                                      d="M5.58667 9.86662L10 7.25996V11.8733L5.58667 9.86662Z"
                                                      fill="#BCC5EE"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_595_88149">
                                                    <rect width="20" height="20" fill="white"
                                                          transform="matrix(1 0 0 -1 0 20)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`avatar border-none ${styles.avatarIcon}`}>
                                    <div className="w-12">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="material-symbols:generating-tokens-rounded"
                                               clipPath="url(#clip0_595_88135)">
                                                <path id="Vector"
                                                      d="M10.5 20C7.70833 20 5.34375 19.0313 3.40625 17.0938C1.46875 15.1563 0.5 12.7917 0.5 10C0.5 7.20833 1.46875 4.84375 3.40625 2.90625C5.34375 0.96875 7.70833 0 10.5 0C13.2917 0 15.6562 0.96875 17.5938 2.90625C19.5312 4.84375 20.5 7.20833 20.5 10C20.5 12.7917 19.5312 15.1563 17.5938 17.0938C15.6562 19.0313 13.2917 20 10.5 20ZM10.5 14.375C10.8542 14.375 11.1513 14.2554 11.3913 14.0163C11.6313 13.7771 11.7508 13.48 11.75 13.125V8.125H13.3125C13.5833 8.125 13.8071 8.03625 13.9837 7.85875C14.1604 7.68125 14.2492 7.4575 14.25 7.1875C14.25 6.91667 14.1612 6.69292 13.9837 6.51625C13.8062 6.33958 13.5825 6.25083 13.3125 6.25H7.6875C7.41667 6.25 7.19292 6.33875 7.01625 6.51625C6.83958 6.69375 6.75083 6.9175 6.75 7.1875C6.75 7.45833 6.83875 7.68208 7.01625 7.85875C7.19375 8.03542 7.4175 8.12417 7.6875 8.125H9.25V13.125C9.25 13.4792 9.37 13.7763 9.61 14.0163C9.85 14.2563 10.1467 14.3758 10.5 14.375Z"
                                                      fill="#1EE3CF"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_595_88135">
                                                    <rect width="20" height="20" fill="white"
                                                          transform="translate(0.5)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                            <span className={styles.title}>token0/token1</span>
                        </div>
                        <div className="w-1/3 flex">
                            <input type="number" defaultValue="0"
                                   className="p-1 w-full rounded bg-black text-end focus:outline-0 focus:border-stone-700  "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex flex-wrap justify-between w-full">
                <button
                    onClick={() => setStatus("APPROVE")}
                    className={`mt-14 w-2/5 md:mt-0 btn hover:bg-transparent rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 border border-primary btn-primary  shadow-3xl  ${styles.add_remove_liquidity_btn} `}>
                    Stake LP
                </button>
                <button
                    onClick={() => setOpen(false)}
                    className={`mt-14 w-2/5 mx-1 md:mt-0 btn  hover:bg-transparent  rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 border border-primary  shadow-3xl  ${styles.add_remove_liquidity_btn} `}>
                    Cancel
                </button>
            </div>
        </>
    )
}

const Approve = (): ReactNode => (
    <>
        <div className="mt-5 flex p-3 flex-wrap w-full">

            <div className="w-full flex flex-wrap  ">
                <div className="w-full  border-b flex items-center py-4 justify-between">
                    <span>Approve  Token0</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M8.00002 16C3.58885 16 0 12.4111 0 8.00002C0 3.58884 3.58885 0 8.00002 0C12.4111 0 16 3.58885 16 8.00002C16 12.4111 12.4111 16 8.00002 16Z"
                            fill="#03A66D"/>
                        <path
                            d="M12.6387 4.91862C12.4141 4.69647 11.9009 4.57634 11.6797 4.79998L6.87994 9.60026L4.32035 7.04023C4.09916 6.81268 3.63872 7.00799 3.41413 7.22768C3.18754 7.44842 3.18267 7.80975 3.40338 8.03533L6.45319 11.1476C6.45417 11.1491 6.45613 11.1491 6.45753 11.1506C6.45903 11.1525 6.45903 11.1535 6.461 11.1555C6.49614 11.1906 6.54253 11.2131 6.58403 11.237C6.60647 11.2497 6.62408 11.2687 6.64655 11.2771C6.7149 11.3058 6.78911 11.3185 6.86235 11.3185C6.93462 11.3185 7.00788 11.3039 7.07723 11.2771C7.0992 11.2673 7.11529 11.2482 7.13773 11.2384C7.17923 11.2145 7.22564 11.1935 7.26079 11.1569C7.26274 11.1555 7.26274 11.1535 7.26373 11.1525C7.26567 11.1506 7.26718 11.1506 7.26862 11.1491L12.6436 5.72331C12.8658 5.50113 12.8624 5.14078 12.6387 4.91862Z"
                            fill="white"/>
                    </svg>
                </div>
                <div className="w-full  border-b flex items-center py-4 justify-between">
                    <span>Approve  Token1</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333Z"
                              fill="url(#paint0_angular_3209_5663)"/>
                        <path
                            d="M13.8445 9.15619C14.4823 9.15619 14.9995 8.63908 14.9995 8.00119C14.9995 7.3633 14.4823 6.84619 13.8445 6.84619C13.2066 6.84619 12.6895 7.3633 12.6895 8.00119C12.6895 8.63908 13.2066 9.15619 13.8445 9.15619Z"
                            fill="#1C60F3"/>
                        <defs>
                            <radialGradient id="paint0_angular_3209_5663" cx="0" cy="0" r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(8 8) rotate(-23.9625) scale(6.8942 6.92085)">
                                <stop offset="0.921737" stop-color="#005AFC" stop-opacity="0"/>
                                <stop offset="0.944115" stop-color="#005AFC"/>
                                <stop offset="0.989583" stop-color="#005AFC"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className="w-full  border-b flex items-center py-4 justify-between">
                    <span>Deposit token in the pool</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1Z"
                            fill="#F53F3F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10.1638 5.35739L10.6587 5.85237C10.8149 6.00858 10.8149 6.26184 10.6587 6.41805L9.06728 8.00923L10.6587 9.60061C10.8149 9.75682 10.8149 10.0101 10.6587 10.1663L10.1638 10.6613C10.0076 10.8175 9.75429 10.8175 9.59808 10.6613L8.00628 9.06923L6.4161 10.6607C6.25989 10.8169 6.00662 10.8169 5.85041 10.6607L5.35544 10.1657C5.19923 10.0095 5.19923 9.75624 5.35544 9.60003L6.94528 8.00923L5.35544 6.41863C5.19923 6.26242 5.19923 6.00915 5.35544 5.85294L5.85041 5.35797C6.00662 5.20176 6.25989 5.20176 6.4161 5.35797L8.00628 6.94823L9.59808 5.35739C9.75429 5.20118 10.0076 5.20118 10.1638 5.35739Z"
                              fill="white"/>
                    </svg>
                </div>
                <div className="w-full  border-b flex items-center py-4 justify-between">
                    <span>Approve Token0/Token1</span>
                </div>
                <div className="w-full  border-b flex items-center py-4 justify-between">
                    <span>Create gauge</span>
                </div>
                <div className="w-full  flex items-center py-4 justify-between">
                    <span>Stake LP token in the gauge</span>
                </div>
            </div>


        </div>
    </>
)

const Final = (): ReactNode => (
    <div className="justify-center w-full flex flex-wrap">
        <div className="mt-5 flex justify-center flex-wrap w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="152" height="152" viewBox="0 0 152 152" fill="none">
                <g clip-path="url(#clip0_3209_5397)">
                    <path
                        d="M76 150C116.869 150 150 116.869 150 76C150 35.1309 116.869 2 76 2C35.1309 2 2 35.1309 2 76C2 116.869 35.1309 150 76 150Z"
                        stroke="url(#paint0_radial_3209_5397)" stroke-width="4"/>
                    <mask id="mask0_3209_5397" maskUnits="userSpaceOnUse" x="46" y="45" width="70" height="70">
                        <path d="M116 45H46V115H116V45Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_3209_5397)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M106.396 60.4378C107.535 61.5768 107.535 63.4235 106.396 64.5626L74.3124 96.6459C73.1734 97.7848 71.3267 97.7848 70.1876 96.6459L55.6043 82.0626C54.4652 80.9235 54.4652 79.0768 55.6043 77.9378C56.7433 76.7987 58.59 76.7987 59.7291 77.9378L72.25 90.4587L102.271 60.4378C103.41 59.2987 105.257 59.2987 106.396 60.4378Z"
                              fill="#4C1CAC"/>
                    </g>
                </g>
                <defs>
                    <radialGradient id="paint0_radial_3209_5397" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(96.0256 50.8933) rotate(-149.676) scale(108.928)">
                        <stop offset="0.504001" stop-color="#1F69FF"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </radialGradient>
                    <clipPath id="clip0_3209_5397">
                        <rect width="152" height="152" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div className="w-2/3 my-4 flex flex-wrap justify-center">
            <div className="w-full text-center font-bold">
                NFT minted successfully
            </div>
            <p className="w-full text-center mt-3 ">
                Transaction has been confirmed by the blockchain
            </p>

        </div>
        <div className="my-5 w-full flex flex-wrap justify-center">
            <button
                className={`mt-14 md:mt-0 btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 w-full ${styles.add_remove_liquidity_btn}`}>
                Swap
            </button>
            <button
                className={`mt-14 md:mt-0 bg-transparent  hover:bg-transparent  text-blue-600 rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 w-full ${styles.add_remove_liquidity_btn}`}>
                View on Block Explorer
            </button>
        </div>
    </div>
)

export default LiquidityTable;