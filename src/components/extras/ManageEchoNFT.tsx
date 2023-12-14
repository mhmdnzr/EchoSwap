'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from "@/assets/styles/css/modules/echo.module.css";
import useEchoHook from "@/contracts/hooks/useEcho";
import {useAccount, useNetwork} from "wagmi";
import {CONTRACT_ADDRESSES} from "@/constants";

const ManageEchoNFT = ({updateModal, staked, unStaked}: {
    staked: bigint[],
    unStaked: string[],
    updateModal: (e: boolean) => void,
}) => {

    const {chain} = useNetwork();
    const contractList = CONTRACT_ADDRESSES[chain!?.id as number]
    const {address} = useAccount();
    const {stake, approval, isApproveForAll} = useEchoHook(address!)
    const [stakeTab, setStakeTab] = useState<boolean>(true)
    const [nftSelected, setNftSelected] = useState<bigint[]>([])
    const details = useRef<any>()
    const [isApproved, setApproved] = useState<boolean>(false)

    useEffect((): void => {
        // @ts-ignore
        isApproveForAll(contractList?.MaterChef).then(isApproved => {
                setApproved(isApproved!)
                console.log(isApproved)
                // setApproved(true) // for testing approve
            }
        )
    }, [address]);


    function stakeHandler(_nftIds: bigint[]): void {
        stake(_nftIds).then(r => console.log(r))
    }

    function approveHandler(): void {
        // @ts-ignore
        approval(contractList.MaterChef, true).then(r => console.log(r))
    }

    return (
        <div className={`w-full md:w-96 p-4 shadow-3xl ${styles.manage_echonft_main}`}>
            <div className={'flex flex-row items-center justify-between pb-5'}>
                <span className={styles.manage_echonft_title}>Manage EchoNFT</span>
                <button
                    onClick={() => updateModal(false)}
                    className={'btn btn-neutral hover:bg-transparent hover:border-none p-0 border-none min-h-0 h-5'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.9156 4.02674C13.176 3.76639 13.176 3.34428 12.9156 3.08393C12.6553 2.82358 12.2332 2.82358 11.9728 3.08393L7.99989 7.05687L4.02696 3.08393C3.76661 2.82358 3.3445 2.82358 3.08415 3.08393C2.8238 3.34428 2.8238 3.76639 3.08415 4.02674L7.05708 7.99967L3.08393 11.9728C2.82358 12.2332 2.82358 12.6553 3.08393 12.9156C3.34428 13.176 3.76639 13.176 4.02674 12.9156L7.99989 8.94248L11.973 12.9156C12.2334 13.176 12.6555 13.176 12.9158 12.9156C13.1762 12.6553 13.1762 12.2332 12.9158 11.9728L8.9427 7.99967L12.9156 4.02674Z"
                              fill="#7E7E7E"/>
                    </svg>
                </button>
            </div>
            <div className='w-full pb-8'>
                <button
                    onClick={() => setStakeTab(true)}
                    className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${stakeTab ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                    Stake
                </button>
                <button
                    onClick={() => setStakeTab(false)}
                    className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${!stakeTab ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                    Unstake
                </button>
            </div>
            <div className="flex flex-row justify-between items-center pb-2">
                <p className={styles.manage_echonft_selectnft}>Select Your EchoNFTs</p>
                <button
                    onClick={() => setNftSelected([])}
                    className={`btn bg-transparent border-transparent rounded-none text-primary min-h-0 h-7 ${styles.button} ${styles.manage_echonft_clearall_button}`}>Clear
                    all
                </button>
            </div>
            <details ref={details} className="dropdown mb-10 mt-5 md:mt-0 w-full">
                <summary
                    className="min-h-0 h-11 btn btn-neutral rounded-none border border-accent w-100 flex flex-row justify-between border-1 border-accent-content/2 hover:border-primary hover:bg-secondary">
                    <span className={styles.manage_echonft_nft_dropdown}>{
                        nftSelected.length === 0 ? 'Select' : nftSelected.map(data => {
                            return <>{data.toString()},</>
                        })
                    }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                         fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.25602 6.13729C2.49814 5.85991 2.91928 5.83131 3.19667 6.07343L8.00133 10.2672L12.806 6.07343C13.0834 5.83131 13.5045 5.8599 13.7466 6.13729C13.9887 6.41468 13.9602 6.83582 13.6828 7.07794L8.43972 11.6543C8.18857 11.8735 7.81409 11.8735 7.56294 11.6543L2.31989 7.07794C2.0425 6.83582 2.01391 6.41468 2.25602 6.13729Z"
                              fill="#7E7E7E"/>
                    </svg>
                </summary>

                <ul className="p-2 border h-24 flex flex-wrap overflow-x-hidden overflow-y-scroll border-accent  dropdown-content z-[1] bg-neutral shadow-3xl w-full">
                    {stakeTab ? staked.map((data, index: number) => {
                        return <li key={index}
                                   className={`${styles.manage_echonft_nft_items} w-full flex flex-wrap hover:cursor-pointer`}
                                   onClick={() => {
                                       if (!nftSelected.includes(data)) {
                                           setNftSelected(prev => [...prev, data])
                                       } else {
                                           setNftSelected(  nftSelected.filter((item) => item !== data  ))
                                       }
                                       details?.current?.removeAttribute("open")
                                   }}
                        >
                            <div className='flex flex-row w-full justify-between'>
                                <span>NFT #{data.toString()}</span>
                                <span> EchoNFT</span>
                            </div>
                        </li>
                    }) : unStaked.map((data, index: number) => {
                        return <li key={index} className={`${styles.manage_echonft_nft_items} w-full flex flex-wrap `}>
                            <div className='flex flex-row w-full justify-between'>
                                <span>NFT#{data}</span>
                                <span> veECHO</span>
                            </div>
                        </li>
                    })}
                </ul>
            </details>


            {/*TODO: choose once time*/}
            {
                !stakeTab ? <button
                    className={`btn btn-primary w-full animation rounded-none border-primary ${styles.manage_echonft_stake_active}`}>
                    UnStake Nft
                </button> : (isApproved ? <button
                    onClick={() => approveHandler()}
                    disabled={nftSelected.length === 0}
                    className={`disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.manage_echonft_stake_deactive}`}>Approve
                </button> : <button
                    onClick={() => stakeHandler(nftSelected)}
                    disabled={nftSelected.length === 0}
                    className={`disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.manage_echonft_stake_deactive}`}>Select
                    EchoNFT
                </button>)
            }

            {/*<button*/}
            {/*    className={`btn btn-primary w-full animation rounded-none border-primary ${styles.manage_echonft_stake_active}`}>Stake*/}
            {/*    Nft*/}
            {/*</button>*/}
        </div>
    );
};

export default ManageEchoNFT;