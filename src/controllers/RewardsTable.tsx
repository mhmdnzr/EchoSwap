import React, {useEffect, useState} from 'react';
import Table from "@/components/layouts/Table";
import {RewardsData} from '@/data/RewardsData'
import styles from "@/assets/styles/css/modules/table.module.css";
import {IRebase, ISyncTokens} from "@/views/Rewards"
import Image from "next/image";
import {IPairBribe} from "@/interfaces/IPairBribe";
import {formatEther} from "viem";

interface IRewardsTable {
    bribesRows: ISyncTokens[],
    rebaseRows: IRebase[],
    pairBribes: IPairBribe[]
}

const RewardsTable = ({rebaseRows, bribesRows, pairBribes}: IRewardsTable) => {
    const columns = RewardsData.heads
    const [selectedClaim, setSelectedClaim] = useState<string>('0')


    function veEchoHandler(_tokenId: string) {
        setSelectedClaim(_tokenId)
    }

    return (
        <>
            <Table trClassName="w-full flex justify-between" theadClassName="hidden md:flex md:justify-between"
                   cols={columns}>
                {
                    bribesRows.length == 0 ? <div className={"flex flex-row gap-2"}>

                        <Image loading='lazy'
                            data-src={"/static/img/icon/yellowInfo.svg"}
                            className={'lazyload'}
                            src={"/static/img/icon/yellowInfo.svg"}
                            alt={"warning icon to connect wallet"}
                            width={25}
                            height={25}
                        />
                        <div className={styles.content} style={{color: "#FF9D00"}}>
                            No row to show
                        </div>
                    </div> : bribesRows.map((row, index: number) => {

                        return <tr key={index}
                                   className={'!border border-b-white rounded overflow-hidden my-2 md:!border-none flex flex-wrap w-full justify-between content-center md:items-center'}>
                            <td className="flex w-full md:w-auto items-center justify-between">
                                <div className={'flex flex-row items-center gap-0'}>
                                    <div className="avatar-group -space-x-6">
                                        <div className={`avatar border-none ${styles.avatarIcon}`}>
                                            <div className="w-12">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="32" height="32" fill="black"/>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M8.72599 4H4V28H8.72599V4ZM12.6183 7.86154V14.1908H23.5168V17.6092H12.6183V24.4462H24.6675V28H28V4H24.4983V7.86154H12.6183Z"
                                                          fill="white"/>
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
                                    <div className="flex flex-col">
                                        <div>

                                            <span key={index}
                                                  className={styles.token_name}>{row.dataArray[0].symbol} / {row.dataArray[1].symbol}</span>
                                        </div>
                                        <span className={styles.details}>Fees + Bribes</span>
                                    </div>
                                </div>
                            </td>
                            <td className="flex w-1/2 flex-wrap md:w-auto items-center justify-between">
                                <span className="md:hidden w-full">Your Position : </span>
                                <div className="flex flex-col w-full ">
                                    <span className={styles.token_name}>0%</span>
                                    <span className={styles.details}>position details</span>
                                </div>
                            </td>
                            <td className="flex w-1/2 flex-wrap md:w-auto items-center justify-between">
                                <span className="md:hidden w-full">  Reward : </span>
                                <div className="flex   w-full md:justify-center items-center gap-2">
                                    {/*{pairBribes[index]?.amounts.map(data => (<span key={index}*/}
                                    {/*                                               className={styles.token_name}>${formatEther(data).toString()}</span>))}*/}

                                    {
                                        // @ts-ignore
                                        pairBribes?.amounts.map((amount , indexAmount) => (
                                            <span key={indexAmount} className={styles.token_name}>${formatEther(amount).toString()}</span>
                                        ))
                                    
                                    }

                                    <div className="tooltip tooltip-right" data-tip={
                                        pairBribes[index]?.symbols.map(item => item + "\n")
                                    }>
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
                                </div>
                            </td>
                            <td className="flex w-full md:w-auto items-center justify-between">
                                <button
                                    className={`btn  !w-full btn-outline btn-neutral border-primary rounded min-h-0 h-9 ${styles.button}`}>Claim
                                </button>
                            </td>
                        </tr>
                    })
                }

                {rebaseRows.map((row: IRebase, index: number) => {
                    return <tr key={index}
                               className={'!border border-b-white rounded overflow-hidden my-2 md:!border-none flex flex-wrap w-full justify-between content-center md:items-center'}>
                        <td className="flex w-full md:w-auto items-center justify-between">
                            <div className={'flex flex-row items-center gap-0'}>
                                <div className="avatar-group -space-x-6">
                                    <div className={`avatar border-none ${styles.avatarIcon}`}>
                                        <div className="w-12">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" fill="black"/>
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M8.72599 4H4V28H8.72599V4ZM12.6183 7.86154V14.1908H23.5168V17.6092H12.6183V24.4462H24.6675V28H28V4H24.4983V7.86154H12.6183Z"
                                                      fill="white"/>
                                            </svg>

                                        </div>
                                    </div>

                                    <div className={`avatar border-none ${styles.avatarIcon}`}>
                                        <div className="w-7"></div>
                                    </div>

                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        <span className={styles.token_name}>veEcho #{row.nftId}</span>
                                    </div>
                                    <span className={styles.details}>Rebase</span>
                                </div>
                            </div>
                        </td>
                        <td className="flex w-1/2 flex-wrap md:w-auto items-center justify-between">
                            <span className="md:hidden w-full">Your Position : </span>
                            <div className="flex flex-col w-full ">
                                <span className={styles.details}>veEcho</span>
                            </div>
                        </td>
                        <td className="flex w-1/2 flex-wrap md:w-auto items-center justify-between">
                            <span className="md:hidden w-full">  Reward : </span>
                            <div className="flex flex-row  w-full md:justify-center items-center gap-2">
                                <span className={styles.token_name}>${row.rebase.toString()}</span>
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
                        <td className="flex w-full md:w-auto items-center justify-between">
                            <button
                                onClick={() => veEchoHandler(row.nftId)}
                                className={`btn  !w-full btn-outline btn-neutral border-primary rounded min-h-0 h-9 ${styles.button}`}>Claim
                            </button>
                        </td>
                    </tr>
                })}
            </Table>
        </>
    );
};

export default RewardsTable;