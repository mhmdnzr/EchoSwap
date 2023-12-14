'use client'
import React, {memo, useEffect, useState} from "react";
import { Image } from 'next/dist/client/image-component';
import styles from "@/assets/styles/css/modules/echo.module.css";
import { ILiquidityBalance } from '@/interfaces/ILiquidityBalance'
import { formatEther, parseUnits } from "viem";
import { useAccount, useNetwork } from "wagmi";
import useApprove from '@/contracts/hooks/useApprove'
import useAddLiquidity from '@/contracts/hooks/useAddLiquidity'

const ManageLpStaking = ({ updateModal, lp }: {
    lp: ILiquidityBalance,
    updateModal: (e: boolean) => void
}) => {
    const percentages = [25, 50, 75, 100];
    const { address, isConnecting, isDisconnected } = useAccount()
    const {  fetchGaugeAllowance, approveGauge } = useApprove()
    const {
        createGauge,
        GaugeDeposit,
        GaugeWithdraw
    } = useAddLiquidity()
    const [stakeTab, setStakeTab] = useState<boolean>(true)
    const [lpAmount, setLpAmount] = useState<string>('0')
    const [lpBalance, setLpBalance] = useState<string>('0')
    const [allowanceLp, setAllowanceLp] = useState<bigint>(BigInt(0))
    const [IsLoadingApprove, setIsLoadingApprove] = useState<boolean>(false)
    const [IsLoadingCreateGauge, setIsLoadingCreateGauge] = useState<boolean>(false)
    const [IsLoadingDeposite, setIsLoadingDeposite] = useState<boolean>(false)
    const [IsLoadingWithdraw, setIsLoadingWithdraw] = useState<boolean>(false)
    const [isGaugeExist, setGaugeExist] = useState<boolean>(false)

    useEffect(() => {
        const lpBalance = stakeTab ? parseFloat(formatEther(lp.account_lp_balance)).toFixed(5): parseFloat(formatEther(lp.account_gauge_balance)).toFixed(5)
        setLpBalance(lpBalance)
    }, [stakeTab, lp] )
    async function fetch() {
        if (lp && address) {
            if (lp.gauge === '0x0000000000000000000000000000000000000000') {
                setGaugeExist(false)
            } else {
                setGaugeExist(true)
            }

            try {
                const AllowanceLP = await fetchGaugeAllowance(lp.pair_address, address, lp.gauge as `0x${string}`);
                setAllowanceLp(AllowanceLP)
            } catch (error) {
                console.log('error fetching Gauge allowance')
            }

        }
    }
    useEffect(() => {

        fetch()
    }, [lpAmount,lp,  address]);
    async function handleApprove() {
        setIsLoadingApprove(true);
        const approveHash = await approveGauge(lp.pair_address, lp.gauge, lp.account_lp_balance);
        if (!approveHash) throw new Error('Failed to approve gauge');
        setIsLoadingApprove(false);
    }
    async function handleCreateGauge() {
        setIsLoadingCreateGauge(true);
        const createHash = await createGauge(lp.token0, lp.token1, lp.stable);
        if (!createHash) throw new Error('Failed to create gauge');
        setIsLoadingCreateGauge(false);
        fetch()
    }
    async function handleDeposite() {
        setIsLoadingDeposite(true);
        const depositHash = await GaugeDeposit(lp.pair_address, parseUnits(lpAmount, 18));
        if (!depositHash) throw new Error('Failed to create gauge');
        setIsLoadingDeposite(false);
    }
    async function handleWithdraw() {
        setIsLoadingWithdraw(true);
        const withdrawHash = await GaugeWithdraw(lp.gauge, parseUnits(lpAmount, 18));
        if (!withdrawHash) throw new Error('Failed to create gauge');
        setIsLoadingWithdraw(false);
    }
    return (
        <div className={`w-full md:w-96 p-4 shadow-3xl ${styles.manage_echonft_main}`}>
            
            <div className={'flex flex-row items-center justify-between pb-5'}>
                <span className={styles.manage_echonft_title}>Manage {lp.symbol} {lp.stable === true ? '(Stable)' : '(Volatile)'} </span>
                <button
                    onClick={() => updateModal(false)}
                    className={'btn btn-neutral hover:bg-transparent hover:border-none p-0 border-none min-h-0 h-5'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M12.9156 4.02674C13.176 3.76639 13.176 3.34428 12.9156 3.08393C12.6553 2.82358 12.2332 2.82358 11.9728 3.08393L7.99989 7.05687L4.02696 3.08393C3.76661 2.82358 3.3445 2.82358 3.08415 3.08393C2.8238 3.34428 2.8238 3.76639 3.08415 4.02674L7.05708 7.99967L3.08393 11.9728C2.82358 12.2332 2.82358 12.6553 3.08393 12.9156C3.34428 13.176 3.76639 13.176 4.02674 12.9156L7.99989 8.94248L11.973 12.9156C12.2334 13.176 12.6555 13.176 12.9158 12.9156C13.1762 12.6553 13.1762 12.2332 12.9158 11.9728L8.9427 7.99967L12.9156 4.02674Z"
                            fill="#7E7E7E" />
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
                    className={`btn bg-transparent border-transparent rounded-none text-primary min-h-0 h-7 ${styles.button} ${styles.manage_echonft_clearall_button}`}>Clear
                    all
                </button>
            </div>
            <div className={'border w-full border-white p-3 mt-5 flex flex-col'}>
                <div className={'flex flex-row justify-between items-center'}>
                    <div>
                        <p className={styles.balance}>Balance: {lpBalance} </p>
                    </div>
                    <div className={'flex flex-row gap-2'}>
                        {percentages.map((percentage, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => setLpAmount(((percentage * parseFloat(lpBalance) / 100).toFixed(5)))}
                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                    {percentage} %
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={'pt-2.5 pb-2.5 flex flex-row items-center justify-between'}>
                    <div className="avatar-group -space-x-6">
                        <div className={`avatar border-none ${styles.avatarIcon}`}>
                            <div className="w-12">
                                <Image loading='lazy'
                                    data-src={`/static/img/icon/tokens/${lp.token0_symbol}.svg`}
                                    className={'lazyload'}
                                    src={`/static/img/icon/tokens/${lp.token0_symbol}.svg`}
                                    alt={lp.token0_symbol}
                                    width={12}
                                    height={12} />
                            </div>
                        </div>
                        <div className={`avatar border-none ${styles.avatarIcon}`}>
                            <div className="w-12">
                                <Image loading='lazy'
                                    data-src={`/static/img/icon/tokens/${lp.token1_symbol}.svg`}
                                    className={'lazyload'}
                                    src={`/static/img/icon/tokens/${lp.token1_symbol}.svg`}
                                    alt={lp.token1_symbol}
                                    width={12}
                                    height={12} />
                            </div>
                        </div>

                    </div>
                    <span className={`${styles.token_selection} w-max`}> {lp.symbol} </span>



                    <input  type="number" placeholder={lpAmount}
                        className="p-0 input text-end input-ghost w-full max-w-xs min-h-0 h-5 border-none" />
                </div>
            </div>

            {
                !stakeTab ?
                    <div className='w-full pb-8'>
                        <button
                            onClick={() => setStakeTab(true)}
                            className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${stakeTab ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                            Cancel
                        </button>
                        <button
                            onClick={() => handleWithdraw()}
                            disabled={lp.account_gauge_balance === BigInt(0) || lpAmount === '0' }
                            className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${!stakeTab ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                            UnStake Lp
                        </button>
                    </div> :
                    <div className='w-full pb-8'>
                        {!isGaugeExist  ?
                            <button
                                onClick={() => handleCreateGauge()}
                                className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${stakeTab ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                                Create Gauge
                            </button> :
                            (allowanceLp < parseUnits(lpAmount, 18) || allowanceLp === BigInt(0) ?
                                <button
                                    onClick={() => handleApprove()}
                                    disabled={ lpAmount === '0' }
                                    className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${stakeTab ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                                    Approve Lp
                                </button> :
                                <button
                                    onClick={() => handleDeposite()}
                                    disabled={ lpAmount === '0' }
                                    className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${stakeTab ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                                    Stake Lp
                                </button>
                            )

                        }

                        <button
                            onClick={() => setStakeTab(false)}
                            className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${!stakeTab ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                            Cancel
                        </button>
                    </div>}
           
        </div>
    );
};

export default ManageLpStaking;