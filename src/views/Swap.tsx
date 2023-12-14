'use client'
import React, { useEffect, useState } from 'react';
import styles from '@/assets/styles/css/modules/swap.module.css'
import Image from 'next/image';
import Token from "@/components/extras/Token";
import Modal from "@/components/layouts/Modal";
import TransactionSetting from "@/components/extras/TransactionSetting";
import { useAccount, useFeeData } from 'wagmi'
import { useTokenBalances } from "@/contracts/hooks/useTokensList"
import useApprove from '@/contracts/hooks/useApprove'
import { ITokenItems } from "@/interfaces/ITokenItems";
import { formatEther, parseUnits } from "viem";
import { CONTRACT_ADDRESSES } from '@/constants/constants/contractAddresses'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useBestPath } from '@/contracts/hooks/useBestPath';
import useSwapHook from '@/contracts/hooks/useSwap';
import { useNetworkInfo } from '@/contracts/hooks/useNetworkInfo';
import SwapConnectButton from '@/components/shared/SwapConnectButton'
import BigNumber from "bignumber.js";

interface IPath {
    from: string;
    to: string;
    stable: boolean;
}

const Swap = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { data, isError, } = useFeeData()
    const { address: account, isConnecting, isDisconnected } = useAccount()
    // const { chain, chains } = useNetwork();
    const { chainId: chain, isSupported } = useNetworkInfo();
    const [chainId, setChainId] = useState<number>(5611);
    const [address, setAddress] = useState<`0x${string}`>('0x');
    useEffect(() => {
        if (chain && chain === 5611 || chain === 280) {
            setChainId(chain)
        }
    }, [chain]);
    useEffect(() => {
        if (account) {
            setAddress(account)
        }
    }, [account]);
    const { balances, initial, isLoading } = useTokenBalances(address);
    // initial tokens
    const CHAIN_CONFIGS: { [chainId: number]: { tokenA: ITokenItems, tokenB: ITokenItems } } = {
        280: {
            tokenA: {
                logoURI: '/static/img/icon/ethereum-eth-logo.svg',
                decimals: 18,
                balance: '0',
                address: '0x000000000000000000000000000000000000800A',
                symbol: 'ETH',
                name: '',
                price: 0
            },
            tokenB: {
                logoURI: '/static/img/icon/tokens/ECHO.svg',
                decimals: 18,
                balance: '0',
                address: '0x0C7811ba1CE9f63246bAcD97847f9D5a987e421B',
                symbol: 'ECHO',
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
            tokenB: {
                logoURI: '/static/img/icon/tokens/ECHO.svg',
                decimals: 18,
                balance: '0',
                address: '0xBAfF9138605135108b38437c0355be6714Ba127e',
                symbol: 'ECHO',
                name: '',
                price: 0
            }
        }
    };
    const currentConfig = CHAIN_CONFIGS[chainId];
    const contractList = CONTRACT_ADDRESSES[chainId]
    const { tokenA: InitialA, tokenB: InitialB } = currentConfig;
    const percentages = [25, 50, 75, 100];
    const [tokenA, setTokenA] = useState<ITokenItems>(InitialA)
    const [tokenB, setTokenB] = useState<ITokenItems>(InitialB)

    const [tokensBalance, setTokensBalance] = useState<ITokenItems[]>([])
    const [amountA, setAmountA] = useState<number>(0)
    const [amountB, setAmountB] = useState<number>(0)
    const [balanceA, setbalanceA] = useState<string>('0')
    const [balanceB, setbalanceB] = useState<string>('0')
    const [allowanceTokenA, setAllowanceTokenA] = useState<bigint>(BigInt(2 ** 256 - 1))
    const [allowanceTokenB, setAllowanceTokenB] = useState<bigint>(BigInt(2 ** 256 - 1))
    const [tradePath, setTradePath] = useState<IPath[]>([])
    const [open1, setOpen1] = useState<boolean>(false)
    const [open2, setOpen2] = useState<boolean>(false)
    const [open3, setOpen3] = useState<boolean>(false)
    const [acc, setAcc] = useState<boolean>(false)
    const [isLoadingPrice, setLoadingPrice] = useState<boolean>(false)
    const [IsloadingSwap, setIsloadingSwap] = useState<boolean>(false)
    const [InsufficientLiquidity, setInsufficientLiquidity] = useState<boolean>(false)
    const [priceImpact, setPriceImpact] = useState<number>(Infinity);
    const [tolerance, setTolerance] = useState<number>(0.1)
    const [networkfee, setNetworkfee] = useState<string>('0')
    const [deadline, setDeadline] = useState<number>(30)
    const [IsConfirmedTx, setIsConfirmedTx] = useState<string>('')
    const handleFlipp = () => {
        setTokenB(tokenA);
        setTokenA(tokenB);
    };

    // fetching
    const {
        result,
        path,
        error,
        isLoading: isFetchingPrice,
        priceImpact: fetchedPriceImpact
    } = useBestPath(tokenA, tokenB, parseUnits(amountA ? amountA.toString() : '0', tokenA.decimals))
    const { fetchAllowance, approve } = useApprove()
    const { swap } = useSwapHook()

    async function fetchData(token: `0x${string}`, index: number) {

        try {
            const allowanceAmount = await fetchAllowance(token, address as `0x${string}`)

            if (index === 0 && allowanceAmount) {

                setAllowanceTokenA(allowanceAmount);

            }
            if (index === 1 && allowanceAmount) {
                setAllowanceTokenB(allowanceAmount);
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);

        }
    }

    useEffect(() => {
        if (tokenA.balance && tokenB.balance) {
            setbalanceA(tokenA.balance?.toString())
            setbalanceB(tokenB.balance?.toString())
        }
        if (data?.gasPrice && data.maxFeePerGas && data.maxPriorityFeePerGas) {
            const networkFee = ((parseFloat(formatEther((data.gasPrice))) + parseFloat(formatEther((data.maxFeePerGas))) + parseFloat(formatEther((data.maxPriorityFeePerGas))))).toFixed(9)
            setNetworkfee(networkFee)
        }

    }, [address, tokenA, tokenB])

    useEffect(() => {
        if (tokenA.balance) {
            setbalanceA(tokenA.balance?.toString())

        }
        if (tokenA.symbol !== 'ETH' && tokenA.symbol !== 'opBNB') {
            fetchData(tokenA.address, 0)
        } else {
            setAllowanceTokenA(BigInt(2 ** 256 - 1));
        }
        if (result) {
            if (amountA === 0) {
                setAmountB(0)
            } else if (result[1] !== BigInt(0)) {
                if (path?.length === 2) {
                    setAmountB(parseFloat(formatEther(result[2] as bigint)))
                } else {
                    setAmountB(parseFloat(formatEther(result[1] as bigint)))
                }

                setInsufficientLiquidity(false)
                setPriceImpact(fetchedPriceImpact)
            } else if (result[1] === BigInt(0)) {
                setTradePath([])
                setInsufficientLiquidity(true)
                setPriceImpact(fetchedPriceImpact)
                setAmountB(0)
            }

        }
        if (path !== null) {
            setTradePath(path)
        }
        setLoadingPrice(isFetchingPrice)
    }, [tokenA, amountA, amountB, error, result, tradePath, path, fetchedPriceImpact, isFetchingPrice]);
    useEffect(() => {
        if (tokenB.balance) {
            setbalanceB(tokenB.balance?.toString())
        }
        if (tokenB.symbol !== 'ETH' && tokenB.symbol !== 'opBNB') {
            fetchData(tokenB.address, 1)
        } else {
            setAllowanceTokenB(BigInt(2 ** 256 - 1));
        }
        if (result) {
            if (amountA === 0) {
                setAmountB(0)
            } else if (result[1] !== BigInt(0)) {

                if (path?.length === 2) {
                    setAmountB(parseFloat(formatEther(result[2] as bigint)))
                } else {
                    setAmountB(parseFloat(formatEther(result[1] as bigint)))
                }

                setInsufficientLiquidity(false)
                setPriceImpact(fetchedPriceImpact)
            } else if (result[1] === BigInt(0)) {
                setTradePath([])
                setInsufficientLiquidity(true)
                setPriceImpact(fetchedPriceImpact)
                setAmountB(0)
            }

        }
        if (path !== null) {
            setTradePath(path)
        }
        setLoadingPrice(isFetchingPrice)
    }, [tokenB, amountB, amountA, error, result, path, fetchedPriceImpact, isFetchingPrice, contractList]);
    useEffect(() => {
        if (balances && !isLoading) {
            const tokenABalance = balances.find(token => token.address === tokenA.address)?.balance || '0';
            const tokenBBalance = balances.find(token => token.address === tokenB.address)?.balance || '0';

            setTokenA(prevToken => ({ ...prevToken, balance: tokenABalance }));
            setTokenB(prevToken => ({ ...prevToken, balance: tokenBBalance }));
        }
    }, [balances, isLoading]);


    const handleTokenA = (tokenA: ITokenItems) => {
        if (tokenA.address === tokenB.address) {
            return null
        }
        setTokenA(tokenA);
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        const value = tokenA.address;
        if (!value) {
            current.delete("from");
        } else {
            current.set("from", tokenA.address);
        }
        const search = current.toString();
        // or const query = `${'?'.repeat(search.length && 1)}${search}`;
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
    };
    const handleTokenB = (tokenB: ITokenItems) => {
        if (tokenB.address === tokenA.address) {
            return null
        }
        setTokenB(tokenB);
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        const value = tokenB.address;
        if (!value) {
            current.delete("to");
        } else {
            current.set("to", tokenB.address);
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    };

    useEffect(() => {
        if (balances && !isLoading) {
            setTokensBalance(balances);
        }
    }, [balances, isLoading]);

    async function handleSwap() {
        try {
            setIsloadingSwap(true);
            setIsConfirmedTx('sendTx')
            const SwaptxHash = await swap(address, 5611, tokenA.address, tokenB.address, new BigNumber(amountA.toFixed(15)).times(10 ** tokenA.decimals).toFixed(0), tradePath, tolerance, new BigNumber(amountB.toFixed(15)).times(10 ** tokenA.decimals).toFixed(0), deadline);
            if (!SwaptxHash) throw new Error('Failed to swap');
            setIsloadingSwap(false);
            setIsConfirmedTx('success')
        } catch (error) {
            console.log(error)
            setIsConfirmedTx('rejected')
        }
    };

    async function handleApprove(token: ITokenItems, amount: string) {
        
        const hash = await approve(token.address, parseUnits(amount, token.decimals));
        console.log(hash)
        fetchData(token.address, 0)
        fetchData(token.address, 1)
    }

    return (
        <main className="fix pt-32 p-5">
            <div className="flex justify-center h-screen">
                <div className="flex flex-col md:w-96 w-auto">
                    <Modal id={'advance_setting'} className={'w-full'} open={open1} setOpen={() => setOpen1(false)}
                    >
                        <button onClick={() => setOpen1(true)} className={'flex flex-row justify-end items-center'}>
                            <div
                                className={`${styles.advance} mb-1 animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10"
                                    fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M2.90404 1.16517H7.66736C7.86335 1.16517 8.0396 1.2845 8.11239 1.46647L9.45447 4.82166C9.50018 4.93594 9.50018 5.06342 9.45447 5.17769L8.11239 8.53288C8.0396 8.71486 7.86335 8.83418 7.66736 8.83418H2.88913C2.70214 8.83418 2.53399 8.72034 2.46455 8.54672L1.11693 5.17769C1.07122 5.06341 1.07122 4.93594 1.11693 4.82166L2.45901 1.46647C2.5318 1.28449 2.70805 1.16517 2.90404 1.16517ZM1.56895 1.11045C1.78732 0.56452 2.31606 0.206543 2.90404 0.206543H7.66736C8.25534 0.206543 8.78408 0.564519 9.00246 1.11045L10.3445 4.46564C10.4817 4.80846 10.4817 5.19089 10.3445 5.53371L9.00246 8.88891C8.78408 9.43483 8.25534 9.79281 7.66736 9.79281H2.88913C2.31016 9.79281 1.78951 9.44031 1.57448 8.90275L0.22687 5.53371C0.0897414 5.19089 0.0897413 4.80846 0.22687 4.46564L1.56895 1.11045ZM6.24415 4.99989C6.24415 5.52933 5.81496 5.95852 5.28553 5.95852C4.75609 5.95852 4.3269 5.52933 4.3269 4.99989C4.3269 4.47046 4.75609 4.04127 5.28553 4.04127C5.81496 4.04127 6.24415 4.47046 6.24415 4.99989ZM7.20278 4.99989C7.20278 6.05876 6.3444 6.91715 5.28553 6.91715C4.22666 6.91715 3.36827 6.05876 3.36827 4.99989C3.36827 3.94102 4.22666 3.08264 5.28553 3.08264C6.3444 3.08264 7.20278 3.94102 7.20278 4.99989Z"
                                        fill="#7E7E7E" />
                                </svg>
                                advance
                            </div>
                        </button>
                        <TransactionSetting updateModal={(e) => setOpen1(e)}
                            tolerance={tolerance}
                            setTolerance={setTolerance}
                            deadline={deadline}
                            setDeadline={setDeadline} />
                    </Modal>

                    <div className={'border border-white p-3 flex flex-col'}>
                        <div className={'flex flex-row justify-between items-center'}>
                            <div>
                                <p className={styles.balance}>Balance: {parseFloat(balanceA).toFixed(5)} </p>
                            </div>
                            <div className={'flex flex-row gap-2'}>
                                {percentages.map((percentage, index) => (
                                    <div key={index}>
                                        <button
                                            onClick={() => setAmountA((percentage * parseFloat(balanceA) / 100))}
                                            className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                            {percentage} %
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={'pt-2.5 pb-2.5 flex flex-row items-center justify-between'}>
                            <Modal id={'choose_token'} className={'w-full'} open={open2}
                                setOpen={() => setOpen2(false)}>
                                <button
                                    onClick={() => setOpen2(true)}
                                    className="btn btn-neutral border-none min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row flex-nowrap justify-start gap-2">
                                    <Image loading='lazy'
                                        data-src={tokenA.logoURI}
                                        className={'lazyload'}
                                        src={tokenA.logoURI}
                                        alt={tokenA.name}
                                        width={20} height={21} />
                                    <span className={`${styles.token_selection} w-max`}> {tokenA.symbol} </span>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16"
                                            fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M2.25602 6.13729C2.49814 5.85991 2.91928 5.83131 3.19667 6.07343L8.00133 10.2672L12.806 6.07343C13.0834 5.83131 13.5045 5.8599 13.7466 6.13729C13.9887 6.41468 13.9602 6.83582 13.6828 7.07794L8.43972 11.6543C8.18857 11.8735 7.81409 11.8735 7.56294 11.6543L2.31989 7.07794C2.0425 6.83582 2.01391 6.41468 2.25602 6.13729Z"
                                                fill="#858E9B" />
                                        </svg>
                                    </div>
                                </button>
                                <Token updateModal={(e) => setOpen2(e)} filter_button={true} balances={tokensBalance}
                                    isLoading={isLoading} handleToken={handleTokenA} />
                            </Modal>
                            <input type="number" value={amountA}
                                onChange={e => setAmountA(parseFloat(e.target.value))}
                                className="p-0 input text-end input-ghost w-full max-w-xs min-h-0 h-5 border-none p-2 focus:border-none focus:outline-0" />
                        </div>
                    </div>
                    <div className='pt-6 pb-6 flex justify-center'>
                        <button
                            onClick={() => handleFlipp()}
                            className='btn btn-neutral min-h-0 h-auto border-transparent hover:bg-transparent hover:border-transparent'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14"
                                fill="none">
                                <path
                                    d="M10.2797 6.79284C10.669 6.40353 11.3002 6.40353 11.6895 6.79284C12.0788 7.18214 12.0788 7.81334 11.6895 8.20265L6.70503 13.1871C6.31572 13.5764 5.68452 13.5764 5.29522 13.1871L0.310781 8.20265C-0.0785287 7.81334 -0.0785287 7.18214 0.310781 6.79284C0.700089 6.40353 1.33128 6.40353 1.72059 6.79284L5.00323 10.0755L5.00323 1.51642C5.00323 0.965852 5.44956 0.519531 6.00012 0.519531C6.55069 0.519531 6.99701 0.965853 6.99701 1.51642L6.99701 10.0755L10.2797 6.79284Z"
                                    fill="#7E7E7E" />
                            </svg>

                        </button>
                    </div>
                    <div className={'border border-white p-3 flex flex-col'}>
                        <div className={'flex flex-row justify-between items-center'}>
                            <div>
                                <p className={styles.balance}>Balance: {parseFloat(balanceB).toFixed(5)} </p>
                            </div>
                            <p
                                className={styles.balance}>
                                $0.2333
                            </p>


                        </div>

                        <div className={'pt-2.5 pb-2.5 flex flex-row items-center justify-between'}>
                            <Modal id={'choose_token_2'} className={'w-full'} open={open3}
                                setOpen={() => setOpen3(false)}>
                                <button onClick={() => setOpen3(true)}
                                    className="btn btn-neutral border-none min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row flex-nowrap justify-start gap-2">
                                    <Image loading='lazy'
                                        data-src={tokenB.logoURI}
                                        className={'lazyload'}
                                        src={tokenB.logoURI}
                                        alt={tokenB.name}
                                        width={20}
                                        height={21} />
                                    <span className={`${styles.token_selection} w-max`}> {tokenB.symbol} </span>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16"
                                            fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M2.25602 6.13729C2.49814 5.85991 2.91928 5.83131 3.19667 6.07343L8.00133 10.2672L12.806 6.07343C13.0834 5.83131 13.5045 5.8599 13.7466 6.13729C13.9887 6.41468 13.9602 6.83582 13.6828 7.07794L8.43972 11.6543C8.18857 11.8735 7.81409 11.8735 7.56294 11.6543L2.31989 7.07794C2.0425 6.83582 2.01391 6.41468 2.25602 6.13729Z"
                                                fill="#858E9B" />
                                        </svg>
                                    </div>
                                </button>
                                <Token updateModal={(e) => setOpen3(e)} filter_button={true} balances={tokensBalance}
                                    isLoading={isLoading} handleToken={handleTokenB} />
                            </Modal>
                            {isLoadingPrice ? <span className="loading loading-bars loading-sm"></span>
                                :

                                <input type="number" value={parseFloat((amountB).toFixed(5))}
                                    readOnly
                                    // onChange={e => setAmountB(parseFloat(e.target.value))}
                                    className="p-0 input text-end input-ghost w-full max-w-xs min-h-0 h-5 border-none focus:border-none focus:outline-0" />
                            }
                        </div>
                    </div>

                    <div className='pt-6 pb-6'>
                        <div className="m-0 cursor-pointer flex-wrap bg-transparent !p-0">
                            <div className="w-full flex flex-wrap justify-between  items-start ">
                                <div onClick={() => acc ? setAcc(false) : setAcc(true)}
                                    className="collapse-title w-auto text-xl !p-0 font-medium">
                                       { amountB && <span className={`p-0 m-0 items-center ${styles.fuel_accordion_title} text-gray-400}`}>1 {tokenA.symbol} = {(amountA/amountB).toFixed(6)} {' '} {tokenB.symbol} </span>}
                                    {!IsloadingSwap && priceImpact <= -60 &&
                                        <p className={` flex flex-row p-0 m-0 items-center ${styles.fuel_accordion_title}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                viewBox="0 0 12 12"
                                                fill="none">
                                                <g clipPath="url(#clip0_3202_1833)">
                                                    <path
                                                        d="M6 9.25C6.27614 9.25 6.5 9.02614 6.5 8.75L6.5 5.25C6.5 4.97386 6.27614 4.75 6 4.75C5.72386 4.75 5.5 4.97386 5.5 5.25L5.5 8.75C5.5 9.02614 5.72386 9.25 6 9.25Z"
                                                        fill="#eb4034" />
                                                    <path
                                                        d="M6 4.25C6.41421 4.25 6.75 3.91421 6.75 3.5C6.75 3.08579 6.41421 2.75 6 2.75C5.58579 2.75 5.25 3.08579 5.25 3.5C5.25 3.91421 5.58579 4.25 6 4.25Z"
                                                        fill="#eb4034" />
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M0.5 6C0.5 9.03757 2.96243 11.5 6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5C2.96243 0.5 0.5 2.96243 0.5 6ZM6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6C10.5 8.48528 8.48528 10.5 6 10.5Z"
                                                        fill="#eb4034" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_3202_1833">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className='px-4 text-red-600'>price impact very high</span>

                                        </p>}
                                </div>
                                <div onClick={() => acc ? setAcc(false) : setAcc(true)} className="py-2">
                                    <svg className={acc ? "rotate-180" : "rotate-0"} xmlns="http://www.w3.org/2000/svg"
                                        width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M0.255534 0.636316C0.49765 0.35893 0.918791 0.330337 1.19618 0.572454L6.00084 4.76619L10.8055 0.572452C11.0829 0.330335 11.504 0.358928 11.7461 0.636314C11.9883 0.913701 11.9597 1.33484 11.6823 1.57696L6.43923 6.15334C6.18808 6.37256 5.8136 6.37256 5.56245 6.15334L0.319397 1.57696C0.0420102 1.33484 0.0134179 0.913703 0.255534 0.636316Z"
                                            fill="#7E7E7E" />
                                    </svg>
                                </div>
                            </div>
                            {
                                acc && <div className="border-t pt-2 p-0">
                                    <div>
                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-row justify-between items-center'>
                                                <span className={styles.fuel_fee}>Network fee</span>
                                                <span className={styles.fuel_fee_amount}>~ {networkfee} </span>
                                            </div>
                                            <div className='flex flex-row justify-between items-center'>
                                                <span className={styles.fuel_fee}>Price impact</span>
                                                <span className={styles.fuel_fee_price}> {priceImpact.toFixed(1)} </span>
                                            </div>
                                            <div className='flex flex-row justify-between items-center'>
                                                <span className={styles.fuel_fee}>Minimum output</span>
                                                <span
                                                    className={styles.fuel_fee_price}> {(amountB - ((amountB * tolerance) / 100)).toFixed(5)} {tokenB.symbol} </span>
                                            </div>
                                            <div className='flex flex-row justify-between items-center'>
                                                <span className={styles.fuel_fee}>Expected output</span>
                                                <span className={styles.fuel_fee_price}> {(amountB).toFixed(5)} {tokenB.symbol}</span>
                                            </div>
                                        </div>

                                        <div className="mt-3 pt-2 border-t">
                                            <div className='flex flex-row justify-between items-center'>
                                                <span className={styles.fuel_fee}>Routing source</span>
                                                <span className={styles.fuel_fee_price}>EchoSwap</span>
                                            </div>
                                        </div>

                                        <div className={'pt-3 '}>

                                            <div className='flex relative flex-wrap justify-between items-center'>
                                                <button
                                                    className={`px-3 btn btn-neutral border-white rounded-none min-h-0 h-6 ${styles.fuel_guid_steps}`}>
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                         viewBox="0 0 15 15" fill="none">
                                                        <circle cx="7.63013" cy="7.63013" r="6.74536" fill="white"/>
                                                    </svg> */}
                                                    <Image loading='lazy'
                                                        data-src={`/static/img/icon/tokens/${tokenA.symbol}.svg`}
                                                        className={'lazyload'}
                                                        src={`/static/img/icon/tokens/${tokenA.symbol}.svg`}
                                                        alt={tokenA.symbol}
                                                        width={15}
                                                        height={15} />
                                                    {tokenA.symbol}
                                                </button>
                                                {tradePath.length >= 2 &&
                                                    <button
                                                        className={`px-3 btn btn-neutral border-white rounded-none min-h-0 h-6 ${styles.fuel_guid_steps}`}>
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                         viewBox="0 0 15 15" fill="none">
                                                        <circle cx="7.63013" cy="7.63013" r="6.74536" fill="white"/>
                                                    </svg> */}

                                                        {chainId === 280 ?
                                                            <>
                                                                <Image loading='lazy'
                                                                    data-src={`/static/img/icon/tokens/WETH.svg`}
                                                                    className={'lazyload'}
                                                                    src={`/static/img/icon/tokens/WETH.svg`}
                                                                    alt={tokenB.symbol}
                                                                    width={15}
                                                                    height={15} />
                                                                WETH
                                                            </>
                                                            :
                                                            <>
                                                                <Image loading='lazy'
                                                                    data-src={`/static/img/icon/tokens/WNATIVE.svg`}
                                                                    className={'lazyload'}
                                                                    src={`/static/img/icon/tokens/WNATIVE.svg`}
                                                                    alt={tokenB.symbol}
                                                                    width={15}
                                                                    height={15} />
                                                                WBNB
                                                            </>}
                                                    </button>
                                                }

                                                <button
                                                    className={`px-3 btn btn-neutral border-white rounded-none min-h-0 h-6 ${styles.fuel_guid_steps}`}>
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                         viewBox="0 0 15 15" fill="none">
                                                        <circle cx="7.63013" cy="7.63013" r="6.74536" fill="white"/>
                                                    </svg> */}
                                                    <Image loading='lazy'
                                                        data-src={`/static/img/icon/tokens/${tokenB.symbol}.svg`}
                                                        className={'lazyload'}
                                                        src={`/static/img/icon/tokens/${tokenB.symbol}.svg`}
                                                        alt={tokenB.symbol}
                                                        width={15}
                                                        height={15} />
                                                    {tokenB.symbol}
                                                </button>
                                                <span className="w-full flex absolute  py-[1px] bg-white"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>

                    <div className={'pt-0 pb-10'}>
                        {/*<button disabled={true} className={`btn rounded-none w-full ${styles.button_amount}`}>*/}
                        {/*    Enter an Amount*/}
                        {/*</button>*/}
                        {isDisconnected ?
                            <div className={`btn btn-primary rounded-none shadow-3xl w-full ${styles.swap_button}`}>
                                <SwapConnectButton />
                            </div>

                            : (amountA === 0 ?
                                <button
                                    className={`btn btn-primary rounded-none shadow-3xl w-full ${styles.swap_button}`}
                                    disabled={true}>
                                    enter Amount
                                </button> :
                                (amountA > parseFloat(tokenA?.balance as string) ?
                                    <button
                                        className={`btn btn-primary rounded-none shadow-3xl w-full ${styles.swap_button}`}
                                        disabled={true}>
                                        Insufficient Balance
                                    </button> : (!InsufficientLiquidity ?

                                        (parseFloat(formatEther(allowanceTokenA)) < amountA ?
                                            <button
                                                className={`btn btn-primary rounded-none shadow-3xl w-full ${styles.swap_button}`}
                                                onClick={() => handleApprove(tokenA, balanceA)}>
                                                Approve {tokenA.symbol}
                                            </button> :
                                            <button
                                                className={`btn btn-primary rounded-none shadow-3xl w-full ${styles.swap_button}`}
                                                disabled={!isSupported}
                                                onClick={() => handleSwap()}>
                                                Swap
                                            </button>) :
                                        <button
                                            className={`btn btn-primary rounded-none shadow-3xl w-full ${styles.swap_button}`}
                                            disabled={true}>
                                            Insufficient Liquidity
                                        </button>)))
                        }

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Swap;