import React, {memo, useEffect, useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '@/assets/styles/css/modules/token01.module.css'
import Button from "@/components/layouts/Button";
import Modal from "@/components/layouts/Modal";
import Token from "@/components/extras/Token";
import {ITokenItems} from "@/interfaces/ITokenItems";
import {CONTRACT_ADDRESSES} from '@/constants/constants/contractAddresses'
import {useAccount} from 'wagmi'
import {useNetworkInfo} from '@/contracts/hooks/useNetworkInfo';
import {ILiquidityUser} from '@/interfaces/ILiquidityUser'
import {formatEther, parseUnits} from 'viem';
import useBribe from '@/contracts/hooks/useBribe';

interface IToken {
    filter_button?: boolean;
    balances: ITokenItems[];
    selectedPool: ILiquidityUser;
    isLoading: boolean;
    handleToken: (token: ITokenItems) => void;
    updateModal: (e: boolean) => void;
    setPoolTab: (e: string) => void
}

const Token01 = ({
                     filter_button = false,
                     selectedPool,
                     balances,
                     isLoading,
                     handleToken,
                     updateModal,
                     setPoolTab
                 }: IToken) => {
    const {address, isConnecting, isDisconnected} = useAccount()
    // const { chain, chains } = useNetwork();
    const {chainId: chain, isSupported} = useNetworkInfo();
    const {approvedAmount, approve, fetchAllowance, notifyReward} = useBribe()

    const [chainId, setChainId] = useState<number>(5611);
    useEffect(() => {
        if (chain && chain === 5611 || chain === 280) {
            setChainId(chain)
        }
    }, [chain]);

    const CHAIN_CONFIGS: { [chainId: number]: { tokenA: ITokenItems, } } = {
        280: {
            tokenA: {
                logoURI: '/static/img/icon/ethereum-eth-logo.svg',
                decimals: 18,
                balance: '0',
                address: '0x000000000000000000000000000000000000800A',
                symbol: 'ETH',
                name: '',
                price: 0
            }
        },
        5611: {
            tokenA: {
                logoURI: '/static/img/icon/tokens/opBNB.svg',
                decimals: 18,
                balance: '0',
                address: '0x4200000000000000000000000000000000000006',
                symbol: 'opBNB',
                name: '',
                price: 0
            },
        }
    };
    const currentConfig = CHAIN_CONFIGS[chainId];
    const contractList = CONTRACT_ADDRESSES[chainId]
    const {tokenA: InitialA,} = currentConfig;
    const percentages = [25, 50, 75, 100];
    const [token, setToken] = useState<ITokenItems>(InitialA)
    const [open2, setOpen2] = useState<boolean>(false)

    const [amount, setAmount] = useState<number>(0)
    const [Allowance, setAllowanceToken] = useState<bigint>(BigInt(0))
    const [balance, setbalance] = useState<string>('0')

    useEffect(() => {
        if (balances) {
            const tokenBalance = balances.find(token => token.address === token.address)?.balance || '0';

            setToken(prevToken => ({...prevToken, balance: tokenBalance}));
        }
    }, [balances, isLoading]);

    async function fetchData() {
        try {
            const allowanceAmount = await fetchAllowance(token.address, selectedPool.bribe, address as `0x${string}`)
            setAllowanceToken(allowanceAmount as bigint);
            console.log(allowanceAmount)

        } catch (error) {
            console.error("Failed to fetch data:", error);

        }
    }

    useEffect(() => {

        if (token.balance) {
            setbalance(token.balance?.toString())
        }
        if (token.symbol !== 'ETH' && token.symbol !== 'opBNB') {
            fetchData()
        } else {
            setAllowanceToken(BigInt(2 ** 256 - 1));
        }
        fetchData()
        console.log('selectedpool', selectedPool)
    }, [token, address]);

    async function handleApprove() {

        const approveHash = await approve(token.address, selectedPool.bribe, parseUnits(token.balance?.toString() || '0', token.decimals));
        console.log(approveHash)
        await fetchData()
        if (!approveHash) throw new Error('Failed to approve');

    }

    async function handleNotifyReward() {

        const notifyRewardHash = await notifyReward(selectedPool.bribe, token.address, parseUnits(amount.toString(), token.decimals));
        console.log(notifyRewardHash)
        if (!notifyRewardHash) throw new Error('Failed to notify Reward ');

    }

    return (
        <div className={'flex flex-col justify-center items-center '}>
            <div className={'w-60 md:w-96 flex flex-col items-center'}>
                <div className="flex flex-col">
                    <div className={'w-96 pb-5'}>
                        <button
                            onClick={() => setPoolTab('selectPool')}
                            className={'p-0 flex flex-row justify-between items-center btn w-full bg-transparent border-none hover:border-none hover:bg-transparent'}>

                            <div className="avatar-group -space-x-6">
                                <div className={`avatar border-none ${styles.avatarIcon}`}>
                                    <div className="w-12">
                                        <Image loading='lazy'
                                            data-src={`/static/img/icon/tokens/${selectedPool.token0_symbol}.svg`}
                                            className={'lazyload'}
                                            src={`/static/img/icon/tokens/${selectedPool.token0_symbol}.svg`}
                                            alt={selectedPool.token0_symbol}
                                            width={36} height={36}/>
                                    </div>
                                </div>
                                <div className={`avatar border-none ${styles.avatarIcon}`}>
                                    <div className="w-12">
                                        <Image loading='lazy'
                                            data-src={`/static/img/icon/tokens/${selectedPool.token1_symbol}.svg`}
                                            className={'lazyload'}
                                            src={`/static/img/icon/tokens/${selectedPool.token1_symbol}.svg`}
                                            alt={selectedPool.token0_symbol}
                                            width={36} height={36}/>
                                    </div>
                                </div>

                            </div>
                            <span
                                className={styles.title}> {selectedPool.token0_symbol} / {selectedPool.token1_symbol} </span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2.25602 6.13729C2.49814 5.85991 2.91928 5.83131 3.19667 6.07343L8.00133 10.2672L12.806 6.07343C13.0834 5.83131 13.5045 5.8599 13.7466 6.13729C13.9887 6.41468 13.9602 6.83582 13.6828 7.07794L8.43972 11.6543C8.18857 11.8735 7.81409 11.8735 7.56294 11.6543L2.31989 7.07794C2.0425 6.83582 2.01391 6.41468 2.25602 6.13729Z"
                                      fill="#7E7E7E"/>
                            </svg>
                        </button>
                        <hr className={styles.token01}/>
                        <div className={'flex flex-row content-between justify-between'}>
                            <div className={'text-left'}>
                                <p className={styles.current_title}>Reserves</p>
                                <p className={styles.current_amount}>{parseFloat(formatEther(selectedPool.reserve0)).toFixed(5)} {selectedPool.token0_symbol}</p>
                                <p className={styles.current_amount}>{parseFloat(formatEther(selectedPool.reserve1)).toFixed(5)} {selectedPool.token1_symbol}</p>
                            </div>

                            <div className={'text-right'}>
                                <p className={styles.current_title}>Your Position</p>
                                <p className={styles.current_amount}>32 VEOP </p>
                                <p className={styles.current_amount}>0.0 OP</p>
                            </div>
                        </div>
                        <hr className={styles.token01}/>
                        <div className={'flex flex-row content-between justify-between'}>
                            <div className={'text-left'}>
                                <p className={styles.current_title}>APR</p>
                                <p className={styles.current_amount}>38.2%</p>
                            </div>
                            <div className={'text-center'}>
                                <p className={styles.current_title}>Current votes</p>
                                <p className={styles.current_amount}>99,847,048</p>
                            </div>
                            <div className={'text-right'}>
                                <p className={styles.current_title}>Deposited Bribes</p>
                                <p className={styles.current_amount}>~$52,245,22</p>
                            </div>
                        </div>
                        <hr className={styles.token01}/>

                        <div className={'flex flex-row w-full justify-between pb-2'}>
                            <p className={styles.ur_bribe}>Your Bribe</p>
                            <p className={styles.balance}>Balance: {parseFloat(balance).toFixed(5)} </p>
                        </div>
                        <div
                            className={'flex flex-row items-center w-full justify-between border px-3 pt-5 pb-5 border-1 border-accent'}>
                            <Modal id={'choose_token'} className={'w-full'} open={open2}
                                   setOpen={() => setOpen2(false)}>
                                <button
                                    onClick={() => setOpen2(true)}
                                    className="btn btn-neutral border-none min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row flex-nowrap justify-start gap-2">
                                    <Image loading='lazy'
                                        data-src={token.logoURI}
                                        className={'lazyload'}
                                        src={token.logoURI} alt={token.name}
                                        width={20} height={21}/>
                                    <span className={`${styles.token_selection} w-max`}> {token.symbol} </span>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             viewBox="0 0 16 16"
                                             fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M2.25602 6.13729C2.49814 5.85991 2.91928 5.83131 3.19667 6.07343L8.00133 10.2672L12.806 6.07343C13.0834 5.83131 13.5045 5.8599 13.7466 6.13729C13.9887 6.41468 13.9602 6.83582 13.6828 7.07794L8.43972 11.6543C8.18857 11.8735 7.81409 11.8735 7.56294 11.6543L2.31989 7.07794C2.0425 6.83582 2.01391 6.41468 2.25602 6.13729Z"
                                                  fill="#858E9B"/>
                                        </svg>
                                    </div>
                                </button>
                                <Token updateModal={(e) => setOpen2(e)} filter_button={true} balances={balances}
                                       isLoading={isLoading} handleToken={setToken}/>
                            </Modal>


                            <div>
                                <input type="number" value={amount}
                                       onChange={e => setAmount(parseFloat(e.target.value))}
                                       className="p-0 input text-end input-ghost w-full max-w-xs min-h-0 h-5 border-none p-2 focus:border-none focus:outline-0"/>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full'}>
                        {Allowance < parseUnits(amount.toString(), token.decimals) ?
                            <Button className={'shadow-3xl'} disabled={false}
                                    onClick={() => handleApprove()}>Approve {token.symbol} </Button> :
                            <Button className={'shadow-3xl'} disabled={false}
                                    onClick={() => handleNotifyReward()}>confirm</Button>}

                    </div>
                    <div>
                        <p className={styles.desc}> Attract more veECHO holders to vote for this pool by increasing
                            bribes. <Link passHref href={'https://docs.echoswap.xyz/echoswap/how-to-earn/rewards'} className={styles.more_link}> Learn More</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default memo(Token01);