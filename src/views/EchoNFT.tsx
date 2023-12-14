'use client'
import React, {useEffect, useState} from 'react';
import styles from '@/assets/styles/css/modules/echo.module.css'
import Modal from "@/components/layouts/Modal";
import ManageEchoNFT from "@/components/extras/ManageEchoNFT";
import Link from "next/link";
import useEchoHook from "@/contracts/hooks/useEcho";
import {useAccount} from "wagmi";
import {formatEther} from "viem";

const address = '0x1Ce32739c33Eecb06dfaaCa0E42bd04E56CCbF0d' as `0x${string}`
const EchoNFT = () => {
    const {address} = useAccount();
    const [open1, setOpen1] = useState<boolean>(false)
    const [open2, setOpen2] = useState<boolean>(false)
    const [open3, setOpen3] = useState<boolean>(false)
    const data = useEchoHook(address!)
    const [APR, setAPR] = useState<string>('0')
    const [totalClaim, setTotalClaim] = useState<bigint>(BigInt(0))
    const[test,setTest]=useState<string>('')


    useEffect(() => {
        const APR = formatEther(BigInt(parseFloat(data.rewardsPerSecond.toString()) * 7 * 24 * 60 * 60))
        setAPR(APR);

        setTest(formatEther(data.pendingReward))
    }, [data])


    useEffect(() => {
        console.log(data.tokensOfOwner)
    }, [data])
    return (
        <div className='pt-16 md:px-20 px-8'>
            <div className="flex flex-row flex-wrap justify-between">
                <div className='flex flex-col'>
                    <h1 className={styles.title}>Stake Your <span className={styles.title_mobile}>EchoNFT</span></h1>
                    <h1 className={styles.title_2}>for Passive Income</h1>
                </div>

                <div className='block md:hidden pt-4 pb-16'><p className={styles.content}>Stake your EchoNFT for weekly
                    trading fees and royalties.</p></div>

                <div className='flex flex-row flex-wrap gap-3 text-left'>
                    <div
                        className='md:pt-3 md:px-5 md:pb-5 pt-5 pb-5 px-6 border-0.5 border-accent flex flex-row items-center justify-between md:flex-col gap-2.5 w-full md:w-auto'>
                        <p className={styles.box_title}>Total EchoNFT Staked</p>
                        <p className={styles.box_content}>
                            {data.isLoading ? <span
                                className="loading loading-bars loading-lg"></span> : data.balanceOf.toString()}<span>/{data.total_supply.toString()}</span>
                        </p>
                    </div>
                    <div
                        className='md:pt-3 md:px-5 md:pb-5 pt-5 pb-5 px-6 border-0.5 border-accent flex flex-row items-center justify-between md:flex-col gap-2.5 w-full md:w-auto'>
                        <p className={styles.box_title}>Floor Price APR</p>
                        <span className={styles.box_content}>{data.isLoading ?
                            <span
                                className="loading loading-bars loading-lg"></span> : APR}</span>
                    </div>
                    <div
                        className='md:pt-3 md:px-5 md:pb-5 pt-5 pb-5 px-6 border-0.5 border-accent flex flex-row items-center justify-between md:flex-col gap-2.5 w-full md:w-auto'>
                        <p className={styles.box_title}>Last Week&apos;s Earnings</p>
                        <span className={styles.box_content}>$0</span>
                    </div>

                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-between pt-5 items-center">
                <div className='hidden md:block'><p className={styles.content}>Stake your EchoNFT for weekly trading
                    fees and royalties.</p></div>
                <Link href='https://echoswap.xyz'>
                    <button
                        className={`btn bg-transparent border-transparent rounded-none animation ${styles.buy_nft_button} ${styles.button}`}>Buy
                        EchoNFT on Element
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M9.59833 5.61977C9.31358 5.33501 9.31358 4.87333 9.59833 4.58857C9.88309 4.30381 10.3448 4.30381 10.6295 4.58857L14.2754 8.2344C14.5601 8.51916 14.5601 8.98084 14.2754 9.2656L10.6295 12.9114C10.3448 13.1962 9.88309 13.1962 9.59833 12.9114C9.31358 12.6267 9.31358 12.165 9.59833 11.8802L11.9994 9.47917L2.73893 9.47917C2.33622 9.47917 2.00977 9.15271 2.00977 8.75C2.00977 8.34729 2.33623 8.02083 2.73893 8.02083L11.9994 8.02083L9.59833 5.61977Z"
                                fill="#1E69FF"/>
                        </svg>
                    </button>
                </Link>
            </div>

            <p className={`pt-16 pb-6 ${styles.stake_nft_title}`}>Stake EchoNFT</p>
            <div className="md:flex md:flex-wrap grid grid-cols-2 gap-8 md:gap-0 flex-wrap justify-between md:pl-8">
                <div className='flex flex-col md:w-1/4  text-left'>
                    <span className={styles.head_stake}>My Stake</span>
                    <span className={styles.content_stake}>{data.isLoading ?
                        <span
                            className="loading loading-bars loading-lg"></span> : data.balanceOf.toString()} EchoNFTs</span>
                </div>
                <div className='flex flex-col md:w-1/4  md:text-right'>
                    <span className={styles.head_stake}>EchoNFTs in your wallet</span>
                    <span className={styles.content_stake}>{data.isLoading ?
                        <span
                            className="loading loading-bars loading-lg"></span> : data.balanceOf.toString()} EchoNFTs</span>
                </div>
                <div className='flex flex-col md:w-1/4  md:text-right'>
                    <span className={styles.head_stake}>Claimable Fees</span>
                    <span className={styles.content_stake}>{test} ECHO</span>
                </div>
                <div className='flex flex-col  text-right md:hidden'></div>

                <Modal id={'echo_nft'} className={'hidden md:flex md:w-1/4 md:justify-end'} open={open1}
                       setOpen={() => setOpen1(false)}>
                    <div className='flex flex-row flex-wrap gap-2.5'>
                        <button
                            onClick={() => setOpen1(true)}
                            className={`btn btn-neutral bg-transparent border-transparent animation rounded-none px-6 min-h-0 h-9 pt-2 pb-2 ${styles.button} ${styles.management_button}`}>
                            manage
                        </button>
                        <button
                            onClick={() => setOpen1(true)}
                            className={`btn btn-neutral bg-transparent animation rounded-none border border-primary px-6 min-h-0 h-9 pt-2 pb-2 ${styles.button} ${styles.management_button}`}>Claim
                            Fees
                        </button>
                    </div>

                    <ManageEchoNFT staked={data.tokensOfOwner} unStaked={data.unStakedTokenIds}
                                   updateModal={(e) => setOpen1(e)}/>
                </Modal>

                <Modal id={'echo_nft_claim'} className={'block md:hidden'} open={open2} setOpen={() => setOpen2(false)}>
                    <button
                        onClick={() => setOpen2(true)}
                        className={`btn btn-neutral bg-transparent animation rounded-none border border-primary px-6 min-h-0 h-9 pt-2 pb-2 ${styles.button} ${styles.management_button}`}>Claim
                        Fees
                    </button>
                    <ManageEchoNFT staked={data.tokensOfOwner} unStaked={data.unStakedTokenIds}
                                   updateModal={(e) => setOpen2(e)}/>
                </Modal>
                <Modal id={'echo_nft_mng'} className={'block md:hidden'} open={open3} setOpen={() => setOpen3(false)}>
                    <button
                        onClick={() => setOpen3(true)}
                        className={`btn btn-neutral bg-transparent border-transparent animation rounded-none px-6 min-h-0 h-9 pt-2 pb-2 ${styles.button} ${styles.management_button}`}>
                        manage
                    </button>
                    <ManageEchoNFT staked={data.tokensOfOwner} unStaked={data.unStakedTokenIds}
                                   updateModal={(e) => setOpen3(e)}/>
                </Modal>


            </div>
            <p className={`pt-16 pb-6 ${styles.stake_nft_title}`}>Claim EchoNFT Minter Royalties</p>
            <div className="md:flex  grid grid-cols-2 gap-8 md:gap-0 flex-wrap  items-center justify-between md:pl-8">
                <div className='flex flex-col md:w-7/12 text-left'>
                    <span className={`${styles.echo_nft_content} hidden md:block`}>The royalty charged from secondary sales is 3%, 2% goes to a pool to which the original
                        <br/>
                        minters have a claim to — forever, while 1% goes to EchoNFT staking pool</span>

                    <span className={`${styles.echo_nft_content} block md:hidden`}>
                        The royalty charged from secondary sales is...
                        <Link className={styles.learn_more} href={'/'}> Learn More</Link>
                    </span>
                </div>

                <div className='flex flex-col md:w-2/12 md:text-right'>
                    <span className={styles.head_stake}>Claimable Fees</span>
                    <span className={styles.content_stake}>$0</span>
                </div>
                <div className='md:block md:text-end md:w-3/12 hidden'>
                    <button
                        className={`btn btn-neutral bg-transparent animation rounded-none border border-primary px-6 min-h-0 h-9 pt-2 pb-2 ${styles.button} ${styles.management_button}`}>NOT
                        ORIGINAL MINTER
                    </button>
                </div>


            </div>
            <div className='md:hidden block pt-8'>
                <button
                    onClick={() => console.log(data.claimableFees)}
                    className={`btn btn-neutral bg-transparent animation rounded-none border border-primary px-6 min-h-0 h-9 pt-2 pb-2 ${styles.button} ${styles.management_button} w-full`}>
                    Claim Fees
                </button>
            </div>
            <p className={`pt-16 pb-6 ${styles.stake_nft_title}`}>Airdrop for holders</p>
            <div
                className="md:flex md:flex-row grid grid-cols-2 gap-8 md:gap-0 flex-wrap grid grid-cols-2 gap-8 md:gap-0 items-center justify-between md:pl-8 md:pb-44">
                <div className='flex flex-col md:w-7/12 text-left'>
                    <span className={styles.echo_nft_content}>Guarantees you a EchoSwap fair launch airdrop.</span>
                </div>

                <div className='flex flex-col md:w-2/12 md:text-right'>
                    <span className={styles.head_stake}>Claimable Fees</span>
                    <span className={styles.content_stake}>$0</span>
                </div>
                <div className='hidden md:flex md:w-3/12 justify-end'>
                    <button
                        className={`btn btn-neutral bg-transparent animation rounded-none border border-primary px-6 min-h-0 h-9 pt-2 pb-2 ${styles.button} ${styles.management_button}`}>Claim
                    </button>
                </div>
            </div>
            <div className='block md:hidden pt-8 pb-16'>
                <button
                    className={`btn btn-neutral bg-transparent animation rounded-none border w-full border-primary px-6 min-h-0 h-9 ${styles.button} ${styles.management_button}`}>Claim
                </button>
            </div>
        </div>
    );
};

export default EchoNFT;