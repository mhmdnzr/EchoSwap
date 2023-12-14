"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import styles from '@/assets/styles/css/modules/liquidity.module.css'
import LiquidityTable from "@/controllers/LiquidityTable";
import Modal from "@/components/layouts/Modal";
import ManageLiquidity from "@/components/extras/ManageLiquidity";
import LiquidityMobileCard from "@/components/layouts/LiquidityMobileCard";
import { ILiquidityData } from "@/interfaces/ILiquidityData";
import useAddLiquidity from '@/contracts/hooks/useAddLiquidity'
import { useAccount } from 'wagmi'
import { ILiquidityUser } from '@/interfaces/ILiquidityUser'
import MobileFilter from "@/components/extras/MobileFilter";
import { useNetworkInfo } from '@/contracts/hooks/useNetworkInfo';


const Liquidity = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [openFilter, setOpenFilter] = useState<boolean>(false)
    const { chainId: chain, isSupported } = useNetworkInfo();
    const [chainId, setChainId] = useState<number>(5611);
    const [selectedButton, setSelectedButton] = useState('all');
    const [filteredPools, setFilteredPools] = useState<ILiquidityUser[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        if (chain) {
            setChainId(chain)
        }
    }, [chain]);
    const columns =  ['Name', 'ARP', 'Total Staked', 'My Staked', 'My Pool', 'Earnings']

    const [liquidityPoolsBalance, setLiquidityPoolsBalance] = useState<ILiquidityUser[]>([])
    const [allPools, setAllPools] = useState<ILiquidityUser[]>([])
    const [showStakedOnly, setShowStakedOnly] = useState<boolean>(false);

    const [liquidityData, setLiquidityData] = useState<ILiquidityData>({
        heads: ['Name', 'ARP', 'Total Staked', 'My Staked', 'My Pool', 'Earnings'],
        data: [], // Start with an empty array
        liquidityPoolsBalance: []
    });
    const { isLoadingLiquidity, liquidityBalance, liquidityPools, allPairs, fetchLiquidityPools } = useAddLiquidity()
    const { address, isConnecting, isDisconnected } = useAccount()

    // filter functions
    function filterStableTrue(data: ILiquidityUser[]): ILiquidityUser[] {
        return data.filter(item => item.stable === true);
    }

    function filterStableFalse(data: ILiquidityUser[]): ILiquidityUser[] {
        return data.filter(item => item.stable === false);
    }

    function filterNonZeroBribe(data: ILiquidityUser[]): ILiquidityUser[] {
        const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
        return data.filter(item => item.bribe !== NULL_ADDRESS && item.account_gauge_balance !== BigInt(0));
    }
    function filteredData(data: ILiquidityUser[]): ILiquidityUser[] {
        return data.filter(item => {
            const symbolMatch = item.symbol && item.symbol.toLowerCase().includes(searchTerm.toLowerCase());
            const nameMatch = item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase());
            return symbolMatch || nameMatch;
        });
    }
    useEffect(() => {
        if(address){
             fetchLiquidityPools(address as `0x${string}`);
        }
       
    }, [address, isDisconnected ]);
    useEffect(() => {
        if (!isLoadingLiquidity && liquidityPools && liquidityBalance && allPairs) {
            setLiquidityData(prevState => ({
                ...prevState,
                data: allPairs,
            }));
            setLiquidityPoolsBalance(liquidityPools);
            setAllPools(allPairs);
            setFilteredPools(allPairs);
            console.log(allPairs)
        }
       
    }, [liquidityPools, liquidityBalance, isLoadingLiquidity, address ]);

    function handleAllClick() {
        setSelectedButton('all');
        setFilteredPools(allPools);
    }

    function handleStableClick() {
        setSelectedButton('stable');
        setFilteredPools(filterStableTrue(allPools));
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);  
        setFilteredPools(filteredData(allPools));
    };
    function handleVolatileClick() {
        setSelectedButton('volatile');
        setFilteredPools(filterStableFalse(allPools));
    }
    const handleStakedOnlyToggle = () => {
        setShowStakedOnly(prev => !prev);
        if (!showStakedOnly){
            setFilteredPools(filterNonZeroBribe(allPools))
        }
        if (showStakedOnly ){
            setFilteredPools(allPools)
        }
    };
    
    return (
        <div className={'pt-20 px-8 md:px-20'}>
            <div className={'flex flex-row flex-wrap items-center justify-between'}>
                <div>
                    <h1 className={styles.title}>liquidity</h1>
                    <div className='flex flex-row justify-between'>
                        <p className={`${styles.content} pt-5`}>Pair your tokens to provide liquidity. Stake the LP
                            tokens to earn
                            ECHO. <Link className={styles.learn_more} href={'https://docs.echoswap.xyz/echoswap/terminology-know/liquidity'}>Learn
                                More</Link></p>
                    </div>
                </div>
                <div className={'w-full md:w-44 lg:w-48'}>

                    <Modal id={'choose_pool'} open={open} setOpen={() => setOpen(false)}>
                        <div className='flex flex-row flex-wrap gap-2.5'>
                            <button
                                onClick={() => setOpen(true)}
                                disabled={!isSupported}
                                className={`mt-14 md:mt-0 btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 w-full ${styles.add_remove_liquidity_btn}`}>
                                Add/remove liquidity
                            </button>

                        </div>
                        <ManageLiquidity updateModal={(e) => setOpen(e)} liquidityPoolsBalance={liquidityPoolsBalance} />

                    </Modal>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between pt-11 pb-9">
                <div className={'flex flex-row items-center gap-4 sm:gap-0 w-full md:w-44 lg:w-60'}>
                    <div className='max-[600px]:hidden flex flex-row items-center gap-4'>
                        <div className={'flex flex-row gap-6 items-center'}>
                        <button
                            onClick={handleAllClick}
                            className={`btn btn-primary rounded-none px-2.5 ${selectedButton === 'all' ? 'border border-primary ' : 'border-transparent'} bg-opacity-10 w-16 min-h-0 h-8 text-white ${styles.filter_btn}`}>
                            all
                        </button>
                            <button
                                onClick={handleStableClick}
                                className={`btn btn-primary  ${selectedButton === 'stable' ? 'border border-primary  ' : 'border-transparent'} rounded-none bg-opacity-10   px-2.5 w-16 min-h-0 h-8 hover:text-white text-accent ${styles.filter_btn}`}>
                                stable
                            </button>
                            <button
                                onClick={handleVolatileClick}
                                className={`btn btn-primary ${selectedButton === 'volatile' ? 'border border-primary  ' : 'border-transparent'} rounded-none bg-opacity-10   px-2.5 w-16 min-h-0 h-8 hover:text-white text-accent ${styles.filter_btn}`}>
                                volatile
                            </button>
                        </div>
                        <div className={'pl-16 pr-5'}>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                <input type="checkbox" className="toggle toggle-primary" onChange={handleStakedOnlyToggle} />

                                    <span className={`label-text pl-1 ${styles.stake_switch}`}>Staked Only</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="relative text-gray-600 focus-within:text-gray-400 w-full md:w-44 lg:w-60">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M14.8528 14.1434L11.7651 11.0555C12.7031 9.95239 13.2128 8.56934 13.2128 7.10685C13.2128 5.47515 12.5777 3.94166 11.4246 2.78839C10.2714 1.63514 8.73801 1 7.10642 1C5.47483 1 3.94145 1.63514 2.78826 2.78839C1.63509 3.94164 1 5.47515 1 7.10685C1 8.73856 1.63509 10.272 2.78826 11.4253C3.94143 12.5786 5.47483 13.2137 7.10642 13.2137C8.5688 13.2137 9.95385 12.7019 11.0548 11.7659L14.1425 14.8537C14.2406 14.9519 14.3681 15 14.4976 15C14.6271 15 14.7546 14.952 14.8527 14.8537C15.0491 14.6574 15.0491 14.3398 14.8527 14.1434H14.8528ZM3.49858 10.7171C1.50768 8.72601 1.50768 5.48768 3.49858 3.49874C4.46164 2.53561 5.74435 2.00285 7.10852 2.00285C8.47269 2.00285 9.75331 2.53351 10.7185 3.49874C12.7094 5.48979 12.7094 8.72811 10.7185 10.7171C8.72547 12.706 5.4874 12.706 3.49858 10.7171Z"
                                        fill="#7E7E7E" />
                                </svg>
                            </button>
                        </span>
                        <input 
                            type="search" 
                            name="q" 
                            placeholder="Search Pair or Token"
                            className="w-full md:w-44 lg:w-60 pl-10 input input-bordered rounded-none min-h-0 h-12 border md:border-accent" 
                            value={searchTerm}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className='hidden max-[600px]:block'>


                        <Modal id={'mobile_filter'} open={openFilter} setOpen={() => setOpenFilter(false)}>
                            <button className={`btn ${styles.mobile_filter_btn}`} onClick={() => setOpenFilter(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path fill="white"
                                        d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
                                </svg>
                            </button>
                            <MobileFilter updateModal={(e) => setOpenFilter(e)} />
                        </Modal>
                    </div>
                </div>
                <div></div>
            </div>
            {/* this component is only in mobile*/}
            <div className='hidden max-[600px]:block'>
                <LiquidityMobileCard liquidityPoolsBalance={liquidityPoolsBalance} data={filteredPools} heads={columns} />
            </div>

            {/* this component is only in desktop*/}
            <div className='block max-[600px]:hidden'>
                <LiquidityTable liquidityPoolsBalance={liquidityPoolsBalance} data={filteredPools} heads={columns} />

            </div>
        </div>
    );
};

export default Liquidity;