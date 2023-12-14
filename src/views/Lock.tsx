"use client";
import React, {memo, useState} from "react";
import styles from "@/assets/styles/css/modules/lock.module.css";
import Link from "next/link";
import Modal from "@/components/layouts/Modal";
import useLockHook, {initialNFTValues, IVeNFTData} from "@/contracts/hooks/useLock";
import {useAccount} from "wagmi";
import {formatEther} from "viem";
import useTimeStamp from "@/hooks/useBlockChainTimeStamp";
import useUnixConvertor from "@/hooks/useUnixConvertor";
import CreateNewLock from "@/components/extras/CreateNewLock";
import ManageLock from "@/components/extras/ManageLock";
import Image from "next/image";


const Lock = () => {
    const test_address = process.env.TEAMO_WALLET!;
    const {address, isConnecting, isDisconnected} = useAccount();
    const lockData = useLockHook(address!);
    const [open, setOpen] = useState<boolean>(false);
    const [openManageModal, setOpenManageModal] = useState<boolean>(false);
    const [showDetail, setShowDetail] = useState<number | null>();
    const [selectedNFT, setSelectNFT] = useState<IVeNFTData>(initialNFTValues);

    const WalletConnecting = () => {
        return (
            <React.Fragment>
                <div className={"flex flex-row gap-2"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image loading='lazy'
                           data-src={"/static/img/icon/yellowInfo.svg"}
                           className={'lazyload'}
                           src={"/static/img/icon/yellowInfo.svg"}
                           alt={"warning icon to connect wallet"}
                           width={25}
                           height={25}
                    />
                    <div className={styles.content} style={{color: "#FF9D00"}}>
                        Please connect your wallet first
                    </div>
                </div>
            </React.Fragment>
        );
    };

    const DataComponent = () => {
        const ExpireHandler = (lockEnd: number): number => {
            // Convert Unix timestamp to milliseconds
            let timestampInMillis = (Number(lockEnd) * 1000) - new Date().getTime();
            console.log({lockEnd, timestampInMillis})
            const {
                data: timestampData,
                isError: isTimestampError,
                isLoading: isTimestampLoad,
            } = useTimeStamp();
            const {day} = useUnixConvertor(timestampData);

            // Calculate the difference in milliseconds
            let differenceInMillis = timestampInMillis - timestampData;

            // Convert milliseconds to days
            let days = differenceInMillis / (1000 * 60 * 60 * 24);

            // Round the days to an integer value
            let roundedDays = Math.floor(days);

            return roundedDays;
        };

        function VoteHandler(nftId: number): string {
            let sum: bigint = BigInt(0)
            let percent = BigInt(0)
            const nft = lockData.VeNFTBalance.filter(obj => obj.id === nftId)[0]
            nft.votes.map(data => {
                sum += data.weight
            })
            percent = (sum / nft.voting_amount) * BigInt(100)
            return percent.toString()
        }

        return (
            <React.Fragment>
                {lockData.isLoading ? (
                    <div className="flex flex-row items-center justify-between">
                        <div className="loading loading-bars loading-lg"></div>
                    </div>
                ) : (
                    lockData.VeNFTBalance.length === 0 ? <div className={"flex flex-row gap-2"}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <Image loading='lazy'
                                   data-src={"/static/img/icon/yellowInfo.svg"}
                                   className={'lazyload'}
                                   src={"/static/img/icon/yellowInfo.svg"}
                                   alt={"warning icon to connect wallet"}
                                   width={25}
                                   height={25}
                            />
                            <div className={styles.content} style={{color: "#FF9D00"}}>
                                No positions found
                            </div>
                        </div> :
                        lockData.VeNFTBalance.map((data: IVeNFTData, index: number) => {
                            return (
                                <div
                                    className="flex flex-wrap p-2 border border-stone-200 rounded  md:border-none items-stretch justify-between"
                                    key={index}
                                >
                                    <div
                                        className={
                                            "flex w-full md:w-1/12 flex-row justify-between items-start pt-2"
                                        }
                                    >
                                        <div className="w-auto">
                                            <Image loading='lazy'
                                                   data-src={"/static/images/zohal.png"}
                                                   className={'lazyload'}
                                                   src={"/static/images/zohal.png"}
                                                   alt={"veNFT image"}
                                                   width={50}
                                                   height={50}
                                            />
                                        </div>
                                        <div className={"flex flex-wrap px-2  w-auto"}>
                                            <div className={`${styles.after_image_title} w-full`}>
                                                {data.tokenSymbol}
                                            </div>
                                            <div className={`${styles.after_image_value} w-full`}>
                                                # {data.id.toString()}
                                            </div>
                                        </div>
                                        <div className="md:hidden w-7/12  flex justify-end text-xs">
                                            <svg
                                                onClick={() => {
                                                    showDetail === index
                                                        ? setShowDetail(null)
                                                        : setShowDetail(index);
                                                }}
                                                className={`${
                                                    showDetail === index ? "rotate-180" : "rotate-0"
                                                }`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="26"
                                                height="26"
                                                viewBox="0 0 36 36"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.07507 13.8093C5.61984 13.1852 6.5674 13.1208 7.19152 13.6656L18.002 23.1015L28.8125 13.6656C29.4366 13.1208 30.3842 13.1852 30.9289 13.8093C31.4737 14.4334 31.4094 15.381 30.7853 15.9257L18.9884 26.2226C18.4233 26.7158 17.5807 26.7158 17.0156 26.2226L5.21877 15.9257C4.59465 15.381 4.53031 14.4334 5.07507 13.8093Z"
                                                    fill="#707A8A"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-start justify-between w-1/2 md:w-1/12 py-2">
                                        <div className="w-full text-xs text-stone-500">
                                            Rebase APR
                                        </div>
                                        <div className={styles.other_row_value}>
                                            {data.rebase_amount.toString()}%
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-wrap overflow-hidden items-start justify-between w-1/2 md:w-2/12 py-2">
                                        <div className="w-full text-xs text-stone-500">
                                            Locked Amount
                                        </div>
                                        <div className={`${styles.other_row_value} !text-xs `}>
                                            {Math.floor(parseFloat(formatEther(data.amount)))} ECHO
                                        </div>
                                    </div>
                                    <div className="hidden md:flex flex-wrap items-start w-1/2  md:w-2/12 py-2">
                                        <div className="w-full text-xs text-stone-500">
                                            Lock Expire
                                        </div>
                                        <div className={styles.other_row_value}>
                                            Expires in {ExpireHandler(data.lockEnd)} days
                                        </div>
                                    </div>
                                    <div className="hidden md:flex  flex-wrap items-start w-1/2  md:w-1/12 py-2">
                                        <div className="w-full text-xs text-stone-500">
                                            Votes Used
                                        </div>
                                        <div className={styles.other_row_value}>
                                            {data.voted ? VoteHandler(data.id) : 0}%
                                        </div>
                                    </div>
                                    <div
                                        className="hidden md:flex  flex-wrap items-start justify-between w-full md:w-3/12 py-2">
                                        <div className="w-full text-xs text-stone-500">
                                            Voting Amount
                                        </div>
                                        <div className={styles.other_row_value}>
                                            {parseFloat(formatEther(data.voting_amount)).toFixed(6)} veECHO
                                        </div>
                                    </div>
                                    <div className="hidden md:flex  items-center  md:w-1/12 ">
                                        <div className="flex flex-row">
                                            <button
                                                className={`btn btn-neutral border border-primary px-5 rounded-none min-h-0 h-9 hover:bg-primary hover:bg-opacity-10 hover:border-primary ${styles.veNFT_button}`}
                                            >
                                                vote
                                            </button>
                                            <div className="w-full md:w-auto  md:mt-0   ">
                                                <Modal
                                                    id={"choose_pool"}
                                                    className={"w-full"}
                                                    open={openManageModal}
                                                    setOpen={() => setOpenManageModal(false)}
                                                >
                                                    <button
                                                        onClick={() => {
                                                            setSelectNFT(data)
                                                            console.log(data)
                                                            setOpenManageModal(true)
                                                        }}
                                                        className={`btn btn-neutral rounded-none px-5 min-h-0 h-9 hover:bg-primary hover:bg-opacity-10 hover:border-primary ${styles.veNFT_button}`}
                                                    >
                                                        <div>manage</div>
                                                    </button>
                                                    <ManageLock
                                                        data={selectedNFT}
                                                        updateModal={(e) => setOpenManageModal(e)}
                                                    />
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>
                                    {showDetail === index && (
                                        <>
                                            <div className="flex flex-wrap items-center w-1/2  md:w-auto py-2">
                                                <div className="md:hidden w-full">Lock Expire</div>
                                                <div className={styles.other_row_value}>
                                                    Expires in {ExpireHandler(data.lockEnd)} days
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap items-center w-1/2  md:w-auto py-2">
                                                <div className="md:hidden w-full">Votes Used</div>
                                                <div className={styles.other_row_value}>
                                                    {data.votes.length}%
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-wrap items-center justify-between w-full md:w-auto py-2">
                                                <div className="md:hidden w-full">Voting Amount</div>
                                                <div className={styles.other_row_value}>
                                                    {formatEther(data.voting_amount).toString()} veECHO hdah
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex flex-row">
                                                    <button
                                                        className={`btn btn-neutral border border-primary px-5 rounded-none min-h-0 h-9 hover:bg-primary hover:bg-opacity-10 hover:border-primary ${styles.veNFT_button}`}
                                                    >
                                                        vote
                                                    </button>
                                                    <div className="w-full md:w-auto  md:mt-0   ">
                                                        <Modal
                                                            id={"manage_NFT"}
                                                            className={"w-full"}
                                                            open={openManageModal}
                                                            setOpen={() => setOpenManageModal(false)}
                                                        >
                                                            <button
                                                                onClick={() => setOpenManageModal(true)}
                                                                className={`btn btn-neutral rounded-none px-5 min-h-0 h-9 hover:bg-primary hover:bg-opacity-10 hover:border-primary ${styles.veNFT_button}`}
                                                            >
                                                                <div>manage</div>
                                                            </button>
                                                            <ManageLock
                                                                data={data}
                                                                updateModal={(e) => setOpenManageModal(e)}
                                                            />
                                                        </Modal>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {/*-----*/}
                                </div>
                            );
                        })
                )}
            </React.Fragment>
        );
    };
    memo(DataComponent)
    return (
        <div className={"pt-20 md:px-20 px-8"}>
            <div className={"flex flex-wrap items-center justify-between"}>
                <div className="w-full md:w-auto">
                    <h1 className={`${styles.title} `}>lock</h1>
                    <div className="flex flex-row justify-between">
                        <div className={styles.content}>
                            Lock ECHO into veECHO to earn and govern. Vote with veECHO to earn
                            bribes
                            <br/>
                            and trading fees. veECHO can be transferred, merged and split. You
                            can hold
                            <br/>
                            multiple positions.
                            <Link className={styles.learn_more}
                                  href={"https://docs.echoswap.xyz/echoswap/terminology-kno"}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-auto mt-3 md:mt-0   ">
                    <Modal
                        id={"choose_pool"}
                        className={"w-full"}
                        open={open}
                        setOpen={() => setOpen(false)}
                    >
                        <button
                            disabled={!address}
                            onClick={() => setOpen(true)}
                            className={`disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.35568 1.16947C8.46367 0.888431 7.51004 0.959024 6.66358 1.3657C5.81891 1.77151 5.14227 2.48175 4.73794 3.36109C4.51254 3.85129 4.44045 4.44516 4.4143 5.00608C4.39562 5.4067 4.39961 5.84098 4.4034 6.25424C4.40343 6.25838 4.40347 6.26254 4.40351 6.26667H3.66683C2.93045 6.26667 2.3335 6.86362 2.3335 7.6V13.6C2.3335 14.3364 2.93045 14.9333 3.66683 14.9333H12.3335C13.0699 14.9333 13.6668 14.3364 13.6668 13.6V7.6C13.6668 6.86362 13.0699 6.26667 12.3335 6.26667H12.057C12.054 5.69363 12.042 5.12933 11.994 4.62161C11.9345 3.99026 11.813 3.35236 11.5158 2.87553C11.0066 2.05881 10.2461 1.45001 9.35568 1.16947ZM10.857 6.26667C10.8539 5.7072 10.8423 5.18987 10.7994 4.73436C10.7429 4.13576 10.6386 3.7368 10.4974 3.51038C10.1298 2.92059 9.59511 2.50305 8.99509 2.31401C8.39663 2.12546 7.75758 2.1714 7.18324 2.44734C6.6071 2.72414 6.12364 3.21989 5.82821 3.86241C5.70372 4.13314 5.63764 4.5334 5.613 5.06196C5.59595 5.42756 5.59947 5.8071 5.60316 6.20517C5.60335 6.22562 5.60354 6.24612 5.60373 6.26667H10.857ZM3.66683 7.46667H12.3335C12.4071 7.46667 12.4668 7.52637 12.4668 7.6V13.6C12.4668 13.6736 12.4071 13.7333 12.3335 13.7333H3.66683C3.59319 13.7333 3.5335 13.6736 3.5335 13.6V7.6C3.5335 7.52637 3.59319 7.46667 3.66683 7.46667Z"
                                    fill="white"
                                />
                                <path
                                    d="M8.32893 10.878C8.71971 10.742 9.00016 10.3704 9.00016 9.93333C9.00016 9.38104 8.55245 8.93333 8.00016 8.93333C7.44788 8.93333 7.00016 9.38104 7.00016 9.93333C7.00016 10.3704 7.28061 10.742 7.6714 10.878C7.66839 10.896 7.66683 10.9145 7.66683 10.9333V11.9333C7.66683 12.1174 7.81607 12.2667 8.00016 12.2667C8.18426 12.2667 8.3335 12.1174 8.3335 11.9333V10.9333C8.3335 10.9145 8.33193 10.896 8.32893 10.878Z"
                                    fill="white"
                                />
                            </svg>
                            <div>create lock</div>
                        </button>
                        <CreateNewLock updateModal={(e) => setOpen(e)}/>
                    </Modal>
                </div>
            </div>

            <div className="flex flex-col gap-16 pt-10 pb-10">
                {address ? <DataComponent/> : <WalletConnecting/>}
            </div>
        </div>
    );
};

export default Lock;
