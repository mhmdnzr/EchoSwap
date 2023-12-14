'use client'
import React, {memo, useEffect, useState} from 'react';
import Image from 'next/image';
import styles from '@/assets/styles/css/modules/poolcomponent.module.css'
import {useAccount} from "wagmi";
import {ILiquidityUser} from '@/interfaces/ILiquidityUser'
import Token01 from "@/components/extras/Token01";
import {ITokenItems} from "@/interfaces/ITokenItems";
import {useTokenBalances} from "@/contracts/hooks/useTokensList"


interface IPool {
    isLoading: boolean;
    fetchAllPairs: ILiquidityUser[];
    handlePool: (pool: ILiquidityUser) => void;
    updateModal: (e: boolean) => void;
}

const Pool = ({isLoading, handlePool, updateModal, fetchAllPairs}: IPool) => {
    /*TODO: please develop props to get all balance for search implementation*/
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [poolTab, setPoolTab] = useState<string>("selectPool")
    const [poolIndex, setPoolIndex] = useState<number>(0)
    const {address, isConnecting, isDisconnected} = useAccount()
    const [tokensBalance, setTokensBalance] = useState<ITokenItems[]>([])
    const [token, setToken] = useState<ITokenItems>()
    const {balances, initial, isLoading: isLoadingToken} = useTokenBalances(address as `0x${string}`);
    const handleToken = (tokenA: ITokenItems) => {
        setToken(tokenA);
    };

    useEffect(() => {
        if (balances && !isLoadingToken) {
            setTokensBalance(balances);
        }
    }, [balances, isLoadingToken]);

    // useEffect((): void => setFilter(SearchToken(balances, searchQuery)), [balances, searchQuery])

    return (
        <div className={`${styles.pool} p-4`}>
            <div className={'flex flex-row items-center justify-between pb-7'}>
                <span className={styles.select}>select a pool</span>
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
            {poolTab === 'selectPool' &&
            <>
            { isLoading ?
                <div className="h-fit overflow-hidden">
                        <div className={`overflow-y-auto scrollbar w-full ${styles.token_height}`}>
                            <span className="loading loading-bars loading-lg" />
                        </div>
                    </div>:
                    <>

                    <div className={'pb-7'}>
                        <div className="relative text-gray-600 focus-within:text-gray-400">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path
                                  d="M14.8528 14.1434L11.7651 11.0555C12.7031 9.95239 13.2128 8.56934 13.2128 7.10685C13.2128 5.47515 12.5777 3.94166 11.4246 2.78839C10.2714 1.63514 8.73801 1 7.10642 1C5.47483 1 3.94145 1.63514 2.78826 2.78839C1.63509 3.94164 1 5.47515 1 7.10685C1 8.73856 1.63509 10.272 2.78826 11.4253C3.94143 12.5786 5.47483 13.2137 7.10642 13.2137C8.5688 13.2137 9.95385 12.7019 11.0548 11.7659L14.1425 14.8537C14.2406 14.9519 14.3681 15 14.4976 15C14.6271 15 14.7546 14.952 14.8527 14.8537C15.0491 14.6574 15.0491 14.3398 14.8527 14.1434H14.8528ZM3.49858 10.7171C1.50768 8.72601 1.50768 5.48768 3.49858 3.49874C4.46164 2.53561 5.74435 2.00285 7.10852 2.00285C8.47269 2.00285 9.75331 2.53351 10.7185 3.49874C12.7094 5.48979 12.7094 8.72811 10.7185 10.7171C8.72547 12.706 5.4874 12.706 3.49858 10.7171Z"
                                  fill="#7E7E7E"/>
                         </svg>
                        </button>
                      </span>
                            <input type="search" name="q" placeholder="Search by name,symbol or address"
                                   className="pl-10 input input-bordered rounded-none w-full "/>
                        </div>
                    </div>
                    <div className={'pb-2.5'}>
                        <p className={styles.pool_name}>POOL NAME</p>
                    </div>
                    <div className={'flex flex-col pb-7'}>
                        <div className="h-fit overflow-hidden">
                            <div className="overflow-y-auto scrollbar w-full max-h-96">
                                <div className={'flex flex-col gap-5 pb-7'}>
                                    {fetchAllPairs?.map((data: ILiquidityUser, index: number) => {
                                        return <button onClick={() => {
                                            handlePool(data);

                                        }} key={index}>
                                            <div className={'flex flex-row items-center gap-0'}
                                                 onClick={() => {
                                                     setPoolIndex(index);
                                                     setPoolTab('Bribe')
                                                 }}>
                                                <div className="avatar-group -space-x-6">
                                                    <div className={`avatar border-none ${styles.avatarIcon}`}>
                                                        <div className="w-12">
                                                            <Image loading='lazy'
                                                                data-src={`/static/img/icon/tokens/${data.token0_symbol}.svg`}
                                                                className={'lazyload'}
                                                                src={`/static/img/icon/tokens/${data.token0_symbol}.svg`}
                                                                alt={data.token0_symbol}
                                                                width={36} height={36}/>
                                                        </div>
                                                    </div>
                                                    <div className={`avatar border-none ${styles.avatarIcon}`}>
                                                        <div className="w-12">
                                                            <Image loading='lazy'
                                                                data-src={`/static/img/icon/tokens/${data.token1_symbol}.svg`}
                                                                className={'lazyload'}
                                                                src={`/static/img/icon/tokens/${data.token1_symbol}.svg`}
                                                                alt={data.token0_symbol}
                                                                width={36} height={36}/>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="flex flex-col">
                                                    <div>
                                                        <span
                                                            className={styles.token_name}> {data.token0_symbol} </span>
                                                        <span className={styles.token_slash}> / </span>
                                                        <span className={styles.token_name}>{data.token1_symbol}</span>
                                                    </div>
                                                    <span
                                                        className={styles.details}> {data.stable ? 'Stable' : 'Volatile'} </span>
                                                </div>
                                            </div>
                                        </button>
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </>
              }
            
            </>
                }
            {poolTab === 'Bribe' &&
                <Token01 updateModal={(e) => updateModal(e)} filter_button={true} balances={tokensBalance}
                         setPoolTab={(e: string) => setPoolTab(e)} selectedPool={fetchAllPairs[poolIndex]}
                         isLoading={isLoading} handleToken={handleToken}/>}

        </div>
    );
};

export default memo(Pool);