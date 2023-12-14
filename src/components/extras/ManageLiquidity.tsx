"use client"
import styles from "@/assets/styles/css/modules/echo.module.css";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Modal from "@/components/layouts/Modal";
import Token from "@/components/extras/Token";
import {useAccount, useNetwork} from "wagmi";
import {useTokenBalances} from "@/contracts/hooks/useTokensList";
import useApprove from '@/contracts/hooks/useApprove'
import {ITokenItems} from "@/interfaces/ITokenItems";
import useAddLiquidity from '@/contracts/hooks/useAddLiquidity'
import {ILiquidityUser} from '@/interfaces/ILiquidityUser'
import {formatEther, parseUnits} from "viem";
import {CONTRACT_ADDRESSES} from '@/constants/constants/contractAddresses'
import BigNumber from "bignumber.js";
import { formatUnits } from "ethers";

const ManageLiquidity = ({liquidityPoolsBalance, updateModal}: {
    updateModal: (e: boolean) => void,
    liquidityPoolsBalance: ILiquidityUser[]
}) => {
    const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0)
    const {address, isConnecting, isDisconnected} = useAccount()
    const {chain, chains} = useNetwork();
    const {balances, initial, isLoading} = useTokenBalances(address ? address : "0x0");

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
    const currentConfig = CHAIN_CONFIGS[chain?.id as number] || CHAIN_CONFIGS[5611];
    const contractList = CONTRACT_ADDRESSES[chain?.id as number]
    const {tokenA: InitialA, tokenB: InitialB} = currentConfig;
    const [tokenA, setTokenA] = useState<ITokenItems>(InitialA)
    const [tokenB, setTokenB] = useState<ITokenItems>(InitialB)
    const [courentPool, setCourentPool] = useState<ILiquidityUser[]| null>(null)
    const percentages = [25, 50, 75, 100];
    const [poolIndex, setPoolIndex] = useState<number>(0)
    const [liquidityTab, setLiquidityTab] = useState<string>("Deposit")
    const [open1, setOpen1] = useState<boolean>(false)
    const [open2, setOpen2] = useState<boolean>(false)
    const [open3, setOpen3] = useState<boolean>(false)
    const [open4, setOpen4] = useState<boolean>(false)
    const [IsStable, setIsStable] = useState<boolean>(true)
    const [rangeValue, setRangeValue] = useState<any>(20)
    const [lpAmount, setLpAmount] = useState<number>(0)
    const [showModal, setShowModal] = useState(true);
    const [amountA, setAmountA] = useState<number>(0)
    const [amountB, setAmountB] = useState<number>(0)
    const [balanceA, setbalanceA] = useState<string>('0')
    const [balanceB, setbalanceB] = useState<string>('0')
    const [allowanceTokenA, setAllowanceTokenA] = useState<string>(MAX_UINT256)
    const [allowanceTokenB, setAllowanceTokenB] = useState<string>(MAX_UINT256)
    const [allowanceLp, setAllowanceLp] = useState<bigint>(BigInt(0))
    const [tokensBalance, setTokensBalance] = useState<ITokenItems[]>([])
    const [IsloadingAdd, setIsloadingAdd] = useState<boolean>(false)
    const [IsLoadingCreateGauge, setIsLoadingCreateGauge] = useState<boolean>(false)
    const [IsLoadingApprove, setIsLoadingApproveLp] = useState<boolean>(false)
    const [IsLoadingApproveA, setIsLoadingApproveA] = useState<boolean>(false)
    const [IsLoadingApproveB, setIsLoadingApproveB] = useState<boolean>(false)
    const [IsLoadingCreatePair, setIsLoadingCreatePair] = useState<boolean>(false)
    const [IsLoadingDeposit, setIsLoadingDeposit] = useState<boolean>(false)
    const [txError, setTxError] = useState<boolean>(false)
    const [IsLoadingRemove, setIsLoadingRemove] = useState<boolean>(false)
    const [IsConfirmedTx, setIsConfirmedTx] = useState<string>('')
    const [selectedAction, setSelectedAction] = useState('');

    const {
        approvedAmount,
        voterApprovedAmount,
        lpApprovedAmount,
        fetchAllowance,
        fetchLpAllowance,
        fetchGaugeAllowance,
        fetchVoteAllowance,
        approve,
        approveGauge,
        approveRouter
    } = useApprove()
    const {
        isLoadingLiquidity,
        isLiquidityPoolExists,
        estimatedAmountInTokenB,
        fetchLiquidityPoolExistence,
        createPair,
        addLiquidity,
        removeLiquidity,
        createGauge,
        GaugeDeposit,
        fetchPoolBalance,
        fetchGaugeAddress
    } = useAddLiquidity()

    async function fetchData(token: `0x${string}`, index: number) {
        if (address) {
            try {
                const allowanceAmount = await fetchAllowance(token, address)
                if(allowanceAmount){
                if (index === 0) {
                    setAllowanceTokenA(new BigNumber(allowanceAmount).div(10 ** tokenA.decimals).toFixed(tokenA.decimals));
                }
                if (index === 1) {
                    setAllowanceTokenB(new BigNumber(allowanceAmount).div(10 ** tokenB.decimals).toFixed(tokenB.decimals));
                }
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
    }

    async function fetchRouterAllowance() {
        if (liquidityPoolsBalance[poolIndex] && address) {
            const lpAllowance = await fetchLpAllowance(liquidityPoolsBalance[poolIndex].pair_address, address)
            setAllowanceLp(lpAllowance)
        }
    }

    useEffect(() => {
        if (tokenA.balance && tokenB.balance) {
            setbalanceA(tokenA.balance?.toString())
            setbalanceB(tokenB.balance?.toString())
        }
    }, [address, tokenA, tokenB])
    useEffect(() => {
        if (tokenA.balance) {
            setbalanceA(tokenA.balance?.toString())

        }
        if (tokenA.symbol !== 'ETH' && tokenA.symbol !== 'opBNB') {
            fetchData(tokenA.address, 0)
        } else {
            setAllowanceTokenA(MAX_UINT256);
        }
        if (estimatedAmountInTokenB && estimatedAmountInTokenB !== BigInt(0)) {
            setAmountB(parseFloat(formatEther(estimatedAmountInTokenB)))
        }

    }, [tokenA, amountA, amountB, estimatedAmountInTokenB]);
    useEffect(() => {
        if (tokenB.balance) {
            setbalanceB(tokenB.balance?.toString())
        }
        if (tokenB.symbol !== 'ETH' && tokenB.symbol !== 'opBNB') {
            fetchData(tokenB.address, 1)
        } else {
            setAllowanceTokenB(MAX_UINT256);
        }
        if (estimatedAmountInTokenB && estimatedAmountInTokenB !== BigInt(0)) {
            setAmountB(parseFloat(formatEther(estimatedAmountInTokenB)))
        }
    }, [tokenB, amountB, amountA, estimatedAmountInTokenB]);
    useEffect(() => {
        if (liquidityPoolsBalance[poolIndex]) {
            const lpAmount = (parseFloat(formatEther(liquidityPoolsBalance[poolIndex]?.account_lp_balance)) * rangeValue) / 100
            setLpAmount(lpAmount)
        }
        fetchRouterAllowance()
        setAllowanceLp(lpApprovedAmount)
    }, [rangeValue, poolIndex, lpApprovedAmount]);

    useEffect(() => {
        async function fetchPoolExistence() {
            await fetchLiquidityPoolExistence(tokenA.address, tokenB.address, IsStable, parseUnits(amountA.toString(), tokenA.decimals))
        }

        fetchPoolExistence()
    }, [tokenA, tokenB, IsStable, amountA]);
    useEffect(() => {
        if (balances && !isLoading) {
            const tokenABalance = balances.find(token => token.address === tokenA.address)?.balance || '0';
            const tokenBBalance = balances.find(token => token.address === tokenB.address)?.balance || '0';

            setTokenA(prevToken => ({...prevToken, balance: tokenABalance}));
            setTokenB(prevToken => ({...prevToken, balance: tokenBBalance}));
        }
    }, [balances, isLoading]);
    useEffect(() => {
        if (balances && !isLoading) {
            setTokensBalance(balances);
        }
    }, [balances, isLoading]);

    const handleTokenA = (tokenA: ITokenItems) => {
        setTokenA(tokenA);
    };
    const handleTokenB = (tokenB: ITokenItems) => {
        setTokenB(tokenB);
    };
    useEffect(() => {
        function filterPool(data: ILiquidityUser[]): ILiquidityUser[] | null{
            if(data){
                return data.filter(item => 
                    (item.token0 === tokenA.address && item.token1 === tokenB.address && item.stable === IsStable ) ||
                    (item.token0 === tokenB.address && item.token1 === tokenA.address && item.stable === IsStable)
                );
            } else return null
           
        }
        setCourentPool(filterPool(liquidityPoolsBalance))
    }, [tokenA, tokenB, IsStable]);

    async function handleAddLiquidity() {
        try {
            setIsLoadingApproveA(true)
            setIsLoadingApproveB(true)
            setIsLoadingCreatePair(true)
            setIsloadingAdd(true)
            const token0 = (tokenA.address === contractList.ETH ? contractList.WRAPPED_ETH : tokenA.address) as `0x${string}`
            const token1 = (tokenB.address === contractList.ETH ? contractList.WRAPPED_ETH : tokenB.address) as `0x${string}`
            const parsedAmountA = new BigNumber(amountA.toFixed(6)).times(10 ** tokenA.decimals).toFixed(0)
            const parsedAmountB = new BigNumber(amountB.toFixed(6)).times(10 ** tokenB.decimals).toFixed(0)
            const AllowTokenA = new BigNumber(allowanceTokenA).times(10 ** tokenA.decimals).toFixed(0)
            const AllowTokenB = new BigNumber(allowanceTokenB).times(10 ** tokenB.decimals).toFixed(0)
            // Approve tokenA
            if (parseFloat(AllowTokenA) < parseFloat(parsedAmountA)) {
                const approvehash = await approve(token0, parseUnits(balanceA, tokenA.decimals));
                if (!approvehash) throw new Error('Failed to approve token A');
                console.log(approvehash)
                fetchData(tokenA.address, 0)
                fetchData(tokenB.address, 1)
            }
            setIsLoadingApproveA(false)
            // Approve tokenB
            if (parseFloat(AllowTokenB) < parseFloat(parsedAmountB)) {

                const approvehash = await approve(token1, parseUnits(balanceB, tokenB.decimals));
                if (!approvehash) throw new Error('Failed to approve token B');
                console.log(approvehash)
                fetchData(tokenA.address, 0)
                fetchData(tokenB.address, 1)
            }
            setIsLoadingApproveB(false)
            const result = await fetchPoolBalance(address as `0x${string}`, tokenA.address, tokenB.address, IsStable);
            // Creaye Pair if not exist yet
            if (result?.pairFor === '0x0000000000000000000000000000000000000000') {
                const AddtxHash = await createPair(token0, token1, IsStable);
                if (!AddtxHash) throw new Error('Failed to create pair');
                setIsLoadingCreatePair(false)
            }
            setIsLoadingCreatePair(false)
            // add Liquidity
            const addtxHash = await addLiquidity(address as `0x${string}`, token0, token1, IsStable, BigInt(parsedAmountA), BigInt(parsedAmountB), 2);
            if (!addtxHash) throw new Error('Failed to add liquidity');
            setIsloadingAdd(false);
            setTimeout(() => {
                setOpen3(false);
            }, 5000);
        } catch (error) {
            console.log('error adding liquidity ', error);
            setIsLoadingApproveA(false)
            setIsLoadingApproveB(false)
            setIsLoadingCreatePair(false)
            setIsloadingAdd(false)
            setTimeout(() => {
                setOpen3(false);
            }, 5000);
        }


    }

    async function handleAddLiquidityAndStake() {
        try {
            setIsConfirmedTx('loading')
            setIsLoadingApproveA(true)
            setIsLoadingApproveB(true)
            setIsLoadingCreatePair(true)
            setIsloadingAdd(true)
            setIsLoadingCreateGauge(true)
            setIsLoadingApproveLp(true);
            setIsLoadingDeposit(true);
            const token0 = (tokenA.address === contractList.ETH ? contractList.WRAPPED_ETH : tokenA.address) as `0x${string}`
            const token1 = (tokenB.address === contractList.ETH ? contractList.WRAPPED_ETH : tokenB.address) as `0x${string}`
            const parsedAmountA = new BigNumber(amountA.toFixed(6)).times(10 ** tokenA.decimals).toFixed(0)
            const parsedAmountB = new BigNumber(amountB.toFixed(6)).times(10 ** tokenB.decimals).toFixed(0)
            const AllowTokenA = new BigNumber(allowanceTokenA).times(10 ** tokenA.decimals).toFixed(0)
            const AllowTokenB = new BigNumber(allowanceTokenB).times(10 ** tokenB.decimals).toFixed(0)
            // Approve tokenA
            if (parseFloat(AllowTokenA) < parseFloat(parsedAmountA)) {
                const approvehash = await approve(token0, parseUnits(balanceA, tokenA.decimals));
                if (!approvehash) throw new Error('Failed to approve token A');
                console.log(approvehash)
                fetchData(tokenA.address, 0)
                fetchData(tokenB.address, 1)
            }
            setIsLoadingApproveA(false)
            // Approve tokenB
            if (parseFloat(AllowTokenB) < parseFloat(parsedAmountB)) {

                const approvehash = await approve(token1, parseUnits(balanceB, tokenB.decimals));
                if (!approvehash) throw new Error('Failed to approve token B');
                console.log(approvehash)
                fetchData(tokenA.address, 0)
                fetchData(tokenB.address, 1)
            }
            setIsLoadingApproveB(false)
            const result = await fetchPoolBalance(address as `0x${string}`, tokenA.address, tokenB.address, IsStable);
            // Create Pair if not exist yet
            if (result?.pairFor === '0x0000000000000000000000000000000000000000') {
                const createtxHash = await createPair(token0, token1, IsStable);
                if (!createtxHash) throw new Error('Failed to create pair');

            }
            setIsLoadingCreatePair(false)
            // add Liquidity
            const addtxHash = await addLiquidity(address as `0x${string}`, token0, token1, IsStable, BigInt(parsedAmountA), BigInt(parsedAmountB), 2);
            if (!addtxHash) throw new Error('Failed to add liquidity');
            setIsloadingAdd(false);
            const initialGauge = await fetchGaugeAddress(result?.pairFor as `0x${string}`);
            let gauge = initialGauge;

            // Check if the gauge does not exist
            if (gauge === '0x0000000000000000000000000000000000000000') {

                const createGaugeHash = await createGauge(token0, token1, IsStable);
                setIsLoadingCreateGauge(false);
                if (!createGaugeHash) throw new Error('Failed to create gauge');
                console.log(createGaugeHash);

                // Fetch the gauge address again after creating it
                gauge = await fetchGaugeAddress(result?.pairFor as `0x${string}`);
                if (gauge === '0x0000000000000000000000000000000000000000') throw new Error('Failed to get the created gauge address');
            }
            setIsLoadingCreateGauge(false);
            const allowanceLP = await fetchGaugeAllowance(result?.pairFor as `0x${string}`, gauge as `0x${string}`, address as `0x${string}`);

            // approve gauge 
            if (result && gauge && BigInt(allowanceLP) < result.data) {

                const approveHash = await approveGauge(result.pairFor, gauge as `0x${string}`, BigInt(MAX_UINT256));
                if (!approveHash) throw new Error('Failed to approve gauge');

            }
            setIsLoadingApproveLp(false);

            const depositHash = await GaugeDeposit(result?.pairFor as `0x${string}`, result?.data as bigint);
            if (!depositHash) throw new Error('Failed to deposit');
            setIsLoadingDeposit(false);

            console.log(result, voterApprovedAmount);
            setIsLoadingCreateGauge(false);
            setTxError(false)
            setIsConfirmedTx('success')
            setTimeout(() => {
                setOpen3(false);
            }, 5000);
        } catch (error) {
            console.log('error adding liquidity and deposit', error);
            setTxError(true)
            setIsConfirmedTx('rejected')
            setIsLoadingApproveA(false)
            setIsLoadingApproveB(false)
            setIsLoadingCreatePair(false)
            setIsloadingAdd(false)
            setIsLoadingCreateGauge(false)
            setIsLoadingApproveLp(false);
            setIsLoadingDeposit(false);
            setTimeout(() => {
                setOpen3(false);
            }, 5000);
        }
    }

    async function handleRemoveLiquidity() {
        try {
            setIsConfirmedTx('loading')
            setIsLoadingApproveLp(true);
            setIsLoadingRemove(true)
            if (parseFloat(formatEther(allowanceLp)) < parseFloat(formatEther(liquidityPoolsBalance[poolIndex]?.account_lp_balance))) {
                const ApproveLpHash = await approveRouter(liquidityPoolsBalance[poolIndex]?.pair_address, liquidityPoolsBalance[poolIndex].account_lp_balance);
                if (!ApproveLpHash) throw new Error('Failed to approve Lp');
                console.log(ApproveLpHash)
                await fetchRouterAllowance()
                setIsLoadingApproveLp(false);
            }
            setIsLoadingApproveLp(false);
            const removeHash = await removeLiquidity(address as `0x${string}`, liquidityPoolsBalance[poolIndex].token0, liquidityPoolsBalance[poolIndex].token1,
                liquidityPoolsBalance[poolIndex].stable, parseUnits(lpAmount.toString(), 18), 10)
            if (!removeHash) throw new Error('Failed to remove liquidity');
            console.log(removeHash)
            setIsLoadingRemove(false)
            setTxError(false)
            setIsConfirmedTx('success')
            setTimeout(() => {
                setOpen4(false);
            }, 5000);
        } catch (error) {
            console.log('error remove liquidity ', error);
            setTxError(true)
            setIsLoadingApproveLp(false)
            setIsLoadingRemove(false)
            setIsConfirmedTx('rejected')
            setTimeout(() => {
                setOpen4(false);
            }, 5000);
        }

    }


    return (
        <div
            className={`w-full md:w-96 h-[500px] overflow-auto flex flex-wrap content-start p-4 !border-none ${styles.manage_echonft_main}`}>
            <div className={'flex flex-row items-center justify-between w-full pb-5'}>
                <div className="flex flex-row justify-between">
                    <button className="pr-2" onClick={() => updateModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                        </svg>
                    </button>
                    <span className={styles.manage_echonft_title}>Manage Liquidity</span>
                </div>
                <button
                    className={'btn btn-neutral hover:bg-transparent hover:border-none p-0 border-none min-h-0 h-5'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>

                </button>
            </div>
            <div className='w-full pb-8'>
                <button
                    onClick={() => setLiquidityTab("Deposit")}
                    className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${liquidityTab === "Deposit" ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                    Deposit
                </button>
                <button
                    onClick={() => setLiquidityTab("Remove")}
                    className={`w-1/2 btn rounded-none outline outline-1 outline-primary ${liquidityTab === "Remove" ? `btn-primary ${styles.manage_echonft_tab_button_active}` : `btn-neutral ${styles.manage_echonft_tab_button} ${styles.button}`}`}>
                    Remove
                </button>
            </div>

            <div className="w-full mt-5 flex flex-wrap">
                {
                    liquidityTab === "Deposit" && <>
                        <div className="w-full flex flex-row  ">
                            <button
                                onClick={() => !IsStable && setIsStable(true)}
                                className={`btn btn-neutral rounded-none min-h-0 h-9 hover:bg-primary hover:bg-opacity-25 hover:text-white ${IsStable === true ? "border-primary" : "border-0"}`}
                            >
                                Stable
                            </button>
                            <button
                                onClick={() => IsStable && setIsStable(false)}
                                className={`btn  btn-neutral rounded-none min-h-0 h-9 hover:bg-primary hover:bg-opacity-25 hover:text-white ${IsStable === false ? "border-primary" : "border-0"}`}
                            >
                                Volatile
                            </button>
                        </div>
                        <div className="h-fit overflow-hidden">
                        </div>
                        <div className={'border w-full border-white p-3 mt-5 flex flex-col'}>
                            <div className={'flex flex-row flex-wrap justify-between items-center'}>
                                <div>
                                    <p className={styles.balance}>Balance: {parseFloat(balanceA).toFixed(5)} </p>
                                </div>
                                <div className={'flex flex-row gap-2'}>
                                    {percentages.map((percentage, index) => (
                                        <div key={index}>
                                            <button
                                                onClick={() => setAmountA(((percentage * parseFloat(balanceA) / 100)))}
                                                className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                                {percentage} %
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={'pt-2.5 pb-2.5 flex flex-row items-center justify-between'}>
                                <Modal id={'choose_tokenA'} className={'w-full'} open={open1}
                                       setOpen={() => setOpen1(false)}>
                                    <button
                                        onClick={() => setOpen1(true)}
                                        className="btn btn-neutral border-none min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row flex-nowrap justify-start gap-2">
                                        <Image loading='lazy'
                                               data-src={tokenA.logoURI}
                                               className={'lazyload'}
                                               src={tokenA.logoURI} alt={tokenA.name}
                                               width={20} height={21}/>
                                        <span className={`${styles.token_selection} w-max`}> {tokenA.symbol} </span>
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
                                    <Token
                                        filter_button={true}
                                        balances={tokensBalance}
                                        isLoading={isLoading}
                                        handleToken={handleTokenA}
                                        updateModal={e => setOpen1(e)}/>
                                </Modal>
                                <input type="number" value={amountA}
                                       onChange={e => setAmountA(parseFloat(e.target.value))}
                                       className="p-0 text-end input input-ghost w-full max-w-xs min-h-0 h-5 border-none"/>
                            </div>
                        </div>
                        <div className={'border w-full border-white p-3 flex flex-col mt-5'}>
                            <div className={'flex flex-row flex-wrap justify-between items-center'}>
                                <div>
                                    <p className={styles.balance}>Balance: {parseFloat(balanceB).toFixed(5)} </p>
                                </div>
                                {estimatedAmountInTokenB === BigInt(0) &&
                                    <div className={'flex flex-row gap-2'}>
                                        {percentages.map((percentage, index) => (
                                            <div key={index}>
                                                <button
                                                    onClick={() => setAmountB((percentage * parseFloat(balanceB) / 100))}
                                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                                    {percentage} %
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                }

                            </div>
                            <div className={'pt-2.5 pb-2.5 flex flex-row items-center justify-between'}>
                                <Modal id={'choose_tokenB'} className={'w-full'} open={open2}
                                       setOpen={() => setOpen2(false)}>
                                    <button onClick={() => setOpen2(true)}
                                            className="btn btn-neutral border-none min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row flex-nowrap justify-start gap-2">
                                        <Image loading='lazy'
                                               data-src={tokenB.logoURI}
                                               className={'lazyload'} src={tokenB.logoURI} alt={tokenB.name}
                                               width={20} height={21}/>
                                        <span className={`${styles.token_selection} w-max`}> {tokenB.symbol} </span>
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
                                    <Token filter_button={true}
                                           balances={tokensBalance}
                                           isLoading={isLoading}
                                           handleToken={handleTokenB} updateModal={e => setOpen2(e)}/>
                                </Modal>
                                <input type="number" value={amountB}
                                       onChange={e => setAmountB(parseFloat(e.target.value))}
                                       className="p-0 text-end input input-ghost w-full max-w-xs min-h-0 h-5 border-none"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap mt-5 justify-between">
                            <div className="w-full flex py-2 border-b">
                                Reserve Info
                            </div>
                            <div className="w-1/3 flex flex-col text-stone-400 py-1">
                                <div className="font-bold"> {courentPool && courentPool[0] ? parseFloat(formatUnits(courentPool[0].reserve0.toString(), Number(courentPool[0].token0_decimals))).toFixed(5): '0'}  </div>
                                <div> {tokenA.symbol} </div>
                            </div>
                            <div className="w-1/3 flex items-center flex-col text-stone-400 py-1">
                                <div className="font-bold">{courentPool && courentPool[0] ? parseFloat(formatUnits(courentPool[0].reserve1.toString(), Number(courentPool[0].token1_decimals)).toString()).toFixed(5): '0'}</div>
                                <div> {tokenB.symbol} </div>
                            </div>
                            <div className="w-1/3 flex items-end flex-col text-stone-400 py-1">
                                <div className="font-bold"> 2% </div>
                                <div>Slippage</div>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap mt-5 justify-between">
                            <div className="w-full flex py-2 border-b">
                                Your Balance
                            </div>
                            <div className="w-1/2 flex flex-col text-stone-400 py-1">
                                <div className="font-bold">{courentPool && courentPool[0] ? parseFloat(formatUnits(courentPool[0].account_lp_balance.toString(), Number(courentPool[0].token0_decimals))).toFixed(5): '0'}</div>
                                <div className="text-xs">Pooled {courentPool && courentPool[0] ? courentPool[0].symbol: 'Unknown'}</div>
                            </div>
                            <div className="w-1/2 flex items-end flex-col text-stone-400 py-1">
                                <div className="font-bold">{courentPool && courentPool[0] ? parseFloat(formatUnits(courentPool[0].account_gauge_balance.toString(), Number(courentPool[0].token1_decimals))).toFixed(5): '0'}</div>
                                <div className="text-xs">Staked {courentPool && courentPool[0] ? courentPool[0].symbol: 'Unknown'}</div>
                            </div>
                        </div>

                        <Modal id={'AddLiquidity'} className={'w-full'} open={open3}
                               setOpen={() => setOpen3(false)}>
                            <>
                                <button
                                    className={`btn btn-primary mt-5 rounded-none shadow-3xl w-full ${styles.swap_button}`}
                                    onClick={() => {
                                        handleAddLiquidityAndStake();
                                        setOpen3(true);
                                        setSelectedAction('AddLiquidityAndStake')
                                    }}>

                                    {amountA !== 0 && amountB !== 0 ? <span>Add Liquidity & Stake LP</span> :
                                        <span>Enter an Amount</span>}
                                </button>
                                <button
                                    className={`btn btn-primary mt-5 rounded-none shadow-3xl w-full ${styles.swap_button}`}
                                    onClick={() => {
                                        handleAddLiquidity();
                                        setOpen3(true);
                                        setSelectedAction('AddLiquidity')
                                    }}>

                                    {amountA !== 0 && amountB !== 0 ? 'Add Liquidity' : 'Enter an Amount'}
                                </button>
                            </>

                            <div className="mt-5 flex p-3 flex-wrap w-full"
                                 onClick={() => setOpen3(false)}>
                                {IsConfirmedTx === 'loading' ?
                                    <>
                                        <div className="w-full flex flex-wrap  ">
                                            <div className="w-full  border-b flex items-center py-4 justify-between">
                                                <span>Approve {tokenA.symbol} </span>
                                                {IsLoadingApproveA ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         viewBox="0 0 16 16" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333Z"
                                                              fill="url(#paint0_angular_3209_5663)"/>
                                                        <path
                                                            d="M13.8445 9.15619C14.4823 9.15619 14.9995 8.63908 14.9995 8.00119C14.9995 7.3633 14.4823 6.84619 13.8445 6.84619C13.2066 6.84619 12.6895 7.3633 12.6895 8.00119C12.6895 8.63908 13.2066 9.15619 13.8445 9.15619Z"
                                                            fill="#1C60F3"/>
                                                        <defs>
                                                            <radialGradient id="paint0_angular_3209_5663" cx="0" cy="0"
                                                                            r="1" gradientUnits="userSpaceOnUse"
                                                                            gradientTransform="translate(8 8) rotate(-23.9625) scale(6.8942 6.92085)">
                                                                <stop offset="0.921737" stop-color="#005AFC"
                                                                      stop-opacity="0"/>
                                                                <stop offset="0.944115" stop-color="#005AFC"/>
                                                                <stop offset="0.989583" stop-color="#005AFC"/>
                                                            </radialGradient>
                                                        </defs>
                                                    </svg> :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         viewBox="0 0 16 16" fill="none">
                                                        <path
                                                            d="M8.00002 16C3.58885 16 0 12.4111 0 8.00002C0 3.58884 3.58885 0 8.00002 0C12.4111 0 16 3.58885 16 8.00002C16 12.4111 12.4111 16 8.00002 16Z"
                                                            fill="#03A66D"/>
                                                        <path
                                                            d="M12.6387 4.91862C12.4141 4.69647 11.9009 4.57634 11.6797 4.79998L6.87994 9.60026L4.32035 7.04023C4.09916 6.81268 3.63872 7.00799 3.41413 7.22768C3.18754 7.44842 3.18267 7.80975 3.40338 8.03533L6.45319 11.1476C6.45417 11.1491 6.45613 11.1491 6.45753 11.1506C6.45903 11.1525 6.45903 11.1535 6.461 11.1555C6.49614 11.1906 6.54253 11.2131 6.58403 11.237C6.60647 11.2497 6.62408 11.2687 6.64655 11.2771C6.7149 11.3058 6.78911 11.3185 6.86235 11.3185C6.93462 11.3185 7.00788 11.3039 7.07723 11.2771C7.0992 11.2673 7.11529 11.2482 7.13773 11.2384C7.17923 11.2145 7.22564 11.1935 7.26079 11.1569C7.26274 11.1555 7.26274 11.1535 7.26373 11.1525C7.26567 11.1506 7.26718 11.1506 7.26862 11.1491L12.6436 5.72331C12.8658 5.50113 12.8624 5.14078 12.6387 4.91862Z"
                                                            fill="white"/>
                                                    </svg>
                                                }

                                            </div>
                                            <div className="w-full  border-b flex items-center py-4 justify-between">
                                                <span>Approve {tokenB.symbol} </span>
                                                {IsLoadingApproveB ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         viewBox="0 0 16 16" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333Z"
                                                              fill="url(#paint0_angular_3209_5663)"/>
                                                        <path
                                                            d="M13.8445 9.15619C14.4823 9.15619 14.9995 8.63908 14.9995 8.00119C14.9995 7.3633 14.4823 6.84619 13.8445 6.84619C13.2066 6.84619 12.6895 7.3633 12.6895 8.00119C12.6895 8.63908 13.2066 9.15619 13.8445 9.15619Z"
                                                            fill="#1C60F3"/>
                                                        <defs>
                                                            <radialGradient id="paint0_angular_3209_5663" cx="0" cy="0"
                                                                            r="1" gradientUnits="userSpaceOnUse"
                                                                            gradientTransform="translate(8 8) rotate(-23.9625) scale(6.8942 6.92085)">
                                                                <stop offset="0.921737" stop-color="#005AFC"
                                                                      stop-opacity="0"/>
                                                                <stop offset="0.944115" stop-color="#005AFC"/>
                                                                <stop offset="0.989583" stop-color="#005AFC"/>
                                                            </radialGradient>
                                                        </defs>
                                                    </svg> : (
                                                        !txError ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                 viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8.00002 16C3.58885 16 0 12.4111 0 8.00002C0 3.58884 3.58885 0 8.00002 0C12.4111 0 16 3.58885 16 8.00002C16 12.4111 12.4111 16 8.00002 16Z"
                                                                    fill="#03A66D"/>
                                                                <path
                                                                    d="M12.6387 4.91862C12.4141 4.69647 11.9009 4.57634 11.6797 4.79998L6.87994 9.60026L4.32035 7.04023C4.09916 6.81268 3.63872 7.00799 3.41413 7.22768C3.18754 7.44842 3.18267 7.80975 3.40338 8.03533L6.45319 11.1476C6.45417 11.1491 6.45613 11.1491 6.45753 11.1506C6.45903 11.1525 6.45903 11.1535 6.461 11.1555C6.49614 11.1906 6.54253 11.2131 6.58403 11.237C6.60647 11.2497 6.62408 11.2687 6.64655 11.2771C6.7149 11.3058 6.78911 11.3185 6.86235 11.3185C6.93462 11.3185 7.00788 11.3039 7.07723 11.2771C7.0992 11.2673 7.11529 11.2482 7.13773 11.2384C7.17923 11.2145 7.22564 11.1935 7.26079 11.1569C7.26274 11.1555 7.26274 11.1535 7.26373 11.1525C7.26567 11.1506 7.26718 11.1506 7.26862 11.1491L12.6436 5.72331C12.8658 5.50113 12.8624 5.14078 12.6387 4.91862Z"
                                                                    fill="white"/>
                                                            </svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                 viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1Z"
                                                                    fill="#F53F3F"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M10.1638 5.35739L10.6587 5.85237C10.8149 6.00858 10.8149 6.26184 10.6587 6.41805L9.06728 8.00923L10.6587 9.60061C10.8149 9.75682 10.8149 10.0101 10.6587 10.1663L10.1638 10.6613C10.0076 10.8175 9.75429 10.8175 9.59808 10.6613L8.00628 9.06923L6.4161 10.6607C6.25989 10.8169 6.00662 10.8169 5.85041 10.6607L5.35544 10.1657C5.19923 10.0095 5.19923 9.75624 5.35544 9.60003L6.94528 8.00923L5.35544 6.41863C5.19923 6.26242 5.19923 6.00915 5.35544 5.85294L5.85041 5.35797C6.00662 5.20176 6.25989 5.20176 6.4161 5.35797L8.00628 6.94823L9.59808 5.35739C9.75429 5.20118 10.0076 5.20118 10.1638 5.35739Z"
                                                                      fill="white"/>
                                                            </svg>)
                                                }
                                            </div>
                                            <div className="w-full  border-b flex items-center py-4 justify-between">
                                                <span>Deposit token in the pool</span>
                                                {IsloadingAdd ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         viewBox="0 0 16 16" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333Z"
                                                              fill="url(#paint0_angular_3209_5663)"/>
                                                        <path
                                                            d="M13.8445 9.15619C14.4823 9.15619 14.9995 8.63908 14.9995 8.00119C14.9995 7.3633 14.4823 6.84619 13.8445 6.84619C13.2066 6.84619 12.6895 7.3633 12.6895 8.00119C12.6895 8.63908 13.2066 9.15619 13.8445 9.15619Z"
                                                            fill="#1C60F3"/>
                                                        <defs>
                                                            <radialGradient id="paint0_angular_3209_5663" cx="0" cy="0"
                                                                            r="1" gradientUnits="userSpaceOnUse"
                                                                            gradientTransform="translate(8 8) rotate(-23.9625) scale(6.8942 6.92085)">
                                                                <stop offset="0.921737" stop-color="#005AFC"
                                                                      stop-opacity="0"/>
                                                                <stop offset="0.944115" stop-color="#005AFC"/>
                                                                <stop offset="0.989583" stop-color="#005AFC"/>
                                                            </radialGradient>
                                                        </defs>
                                                    </svg> :
                                                    (
                                                        !txError ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                 viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8.00002 16C3.58885 16 0 12.4111 0 8.00002C0 3.58884 3.58885 0 8.00002 0C12.4111 0 16 3.58885 16 8.00002C16 12.4111 12.4111 16 8.00002 16Z"
                                                                    fill="#03A66D"/>
                                                                <path
                                                                    d="M12.6387 4.91862C12.4141 4.69647 11.9009 4.57634 11.6797 4.79998L6.87994 9.60026L4.32035 7.04023C4.09916 6.81268 3.63872 7.00799 3.41413 7.22768C3.18754 7.44842 3.18267 7.80975 3.40338 8.03533L6.45319 11.1476C6.45417 11.1491 6.45613 11.1491 6.45753 11.1506C6.45903 11.1525 6.45903 11.1535 6.461 11.1555C6.49614 11.1906 6.54253 11.2131 6.58403 11.237C6.60647 11.2497 6.62408 11.2687 6.64655 11.2771C6.7149 11.3058 6.78911 11.3185 6.86235 11.3185C6.93462 11.3185 7.00788 11.3039 7.07723 11.2771C7.0992 11.2673 7.11529 11.2482 7.13773 11.2384C7.17923 11.2145 7.22564 11.1935 7.26079 11.1569C7.26274 11.1555 7.26274 11.1535 7.26373 11.1525C7.26567 11.1506 7.26718 11.1506 7.26862 11.1491L12.6436 5.72331C12.8658 5.50113 12.8624 5.14078 12.6387 4.91862Z"
                                                                    fill="white"/>
                                                            </svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                 viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1Z"
                                                                    fill="#F53F3F"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M10.1638 5.35739L10.6587 5.85237C10.8149 6.00858 10.8149 6.26184 10.6587 6.41805L9.06728 8.00923L10.6587 9.60061C10.8149 9.75682 10.8149 10.0101 10.6587 10.1663L10.1638 10.6613C10.0076 10.8175 9.75429 10.8175 9.59808 10.6613L8.00628 9.06923L6.4161 10.6607C6.25989 10.8169 6.00662 10.8169 5.85041 10.6607L5.35544 10.1657C5.19923 10.0095 5.19923 9.75624 5.35544 9.60003L6.94528 8.00923L5.35544 6.41863C5.19923 6.26242 5.19923 6.00915 5.35544 5.85294L5.85041 5.35797C6.00662 5.20176 6.25989 5.20176 6.4161 5.35797L8.00628 6.94823L9.59808 5.35739C9.75429 5.20118 10.0076 5.20118 10.1638 5.35739Z"
                                                                      fill="white"/>
                                                            </svg>)
                                                }
                                            </div>
                                            {selectedAction === 'AddLiquidityAndStake' &&
                                                <>
                                                    <div
                                                        className="w-full  border-b flex items-center py-4 justify-between">
                                                        <span>Approve {tokenA.symbol} / {tokenB.symbol} </span>
                                                        {IsLoadingApprove ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                 viewBox="0 0 16 16" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333Z"
                                                                      fill="url(#paint0_angular_3209_5663)"/>
                                                                <path
                                                                    d="M13.8445 9.15619C14.4823 9.15619 14.9995 8.63908 14.9995 8.00119C14.9995 7.3633 14.4823 6.84619 13.8445 6.84619C13.2066 6.84619 12.6895 7.3633 12.6895 8.00119C12.6895 8.63908 13.2066 9.15619 13.8445 9.15619Z"
                                                                    fill="#1C60F3"/>
                                                                <defs>
                                                                    <radialGradient id="paint0_angular_3209_5663" cx="0"
                                                                                    cy="0" r="1"
                                                                                    gradientUnits="userSpaceOnUse"
                                                                                    gradientTransform="translate(8 8) rotate(-23.9625) scale(6.8942 6.92085)">
                                                                        <stop offset="0.921737" stop-color="#005AFC"
                                                                              stop-opacity="0"/>
                                                                        <stop offset="0.944115" stop-color="#005AFC"/>
                                                                        <stop offset="0.989583" stop-color="#005AFC"/>
                                                                    </radialGradient>
                                                                </defs>
                                                            </svg> :
                                                            (
                                                                !txError ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path
                                                                            d="M8.00002 16C3.58885 16 0 12.4111 0 8.00002C0 3.58884 3.58885 0 8.00002 0C12.4111 0 16 3.58885 16 8.00002C16 12.4111 12.4111 16 8.00002 16Z"
                                                                            fill="#03A66D"/>
                                                                        <path
                                                                            d="M12.6387 4.91862C12.4141 4.69647 11.9009 4.57634 11.6797 4.79998L6.87994 9.60026L4.32035 7.04023C4.09916 6.81268 3.63872 7.00799 3.41413 7.22768C3.18754 7.44842 3.18267 7.80975 3.40338 8.03533L6.45319 11.1476C6.45417 11.1491 6.45613 11.1491 6.45753 11.1506C6.45903 11.1525 6.45903 11.1535 6.461 11.1555C6.49614 11.1906 6.54253 11.2131 6.58403 11.237C6.60647 11.2497 6.62408 11.2687 6.64655 11.2771C6.7149 11.3058 6.78911 11.3185 6.86235 11.3185C6.93462 11.3185 7.00788 11.3039 7.07723 11.2771C7.0992 11.2673 7.11529 11.2482 7.13773 11.2384C7.17923 11.2145 7.22564 11.1935 7.26079 11.1569C7.26274 11.1555 7.26274 11.1535 7.26373 11.1525C7.26567 11.1506 7.26718 11.1506 7.26862 11.1491L12.6436 5.72331C12.8658 5.50113 12.8624 5.14078 12.6387 4.91862Z"
                                                                            fill="white"/>
                                                                    </svg> :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path
                                                                            d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1Z"
                                                                            fill="#F53F3F"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                              d="M10.1638 5.35739L10.6587 5.85237C10.8149 6.00858 10.8149 6.26184 10.6587 6.41805L9.06728 8.00923L10.6587 9.60061C10.8149 9.75682 10.8149 10.0101 10.6587 10.1663L10.1638 10.6613C10.0076 10.8175 9.75429 10.8175 9.59808 10.6613L8.00628 9.06923L6.4161 10.6607C6.25989 10.8169 6.00662 10.8169 5.85041 10.6607L5.35544 10.1657C5.19923 10.0095 5.19923 9.75624 5.35544 9.60003L6.94528 8.00923L5.35544 6.41863C5.19923 6.26242 5.19923 6.00915 5.35544 5.85294L5.85041 5.35797C6.00662 5.20176 6.25989 5.20176 6.4161 5.35797L8.00628 6.94823L9.59808 5.35739C9.75429 5.20118 10.0076 5.20118 10.1638 5.35739Z"
                                                                              fill="white"/>
                                                                    </svg>)
                                                        }
                                                    </div>
                                                    <div
                                                        className="w-full  border-b flex items-center py-4 justify-between">
                                                        <span>Create gauge</span>
                                                        {IsLoadingCreateGauge ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                 viewBox="0 0 16 16" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333Z"
                                                                      fill="url(#paint0_angular_3209_5663)"/>
                                                                <path
                                                                    d="M13.8445 9.15619C14.4823 9.15619 14.9995 8.63908 14.9995 8.00119C14.9995 7.3633 14.4823 6.84619 13.8445 6.84619C13.2066 6.84619 12.6895 7.3633 12.6895 8.00119C12.6895 8.63908 13.2066 9.15619 13.8445 9.15619Z"
                                                                    fill="#1C60F3"/>
                                                                <defs>
                                                                    <radialGradient id="paint0_angular_3209_5663" cx="0"
                                                                                    cy="0" r="1"
                                                                                    gradientUnits="userSpaceOnUse"
                                                                                    gradientTransform="translate(8 8) rotate(-23.9625) scale(6.8942 6.92085)">
                                                                        <stop offset="0.921737" stop-color="#005AFC"
                                                                              stop-opacity="0"/>
                                                                        <stop offset="0.944115" stop-color="#005AFC"/>
                                                                        <stop offset="0.989583" stop-color="#005AFC"/>
                                                                    </radialGradient>
                                                                </defs>
                                                            </svg> :
                                                            (
                                                                !txError ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path
                                                                            d="M8.00002 16C3.58885 16 0 12.4111 0 8.00002C0 3.58884 3.58885 0 8.00002 0C12.4111 0 16 3.58885 16 8.00002C16 12.4111 12.4111 16 8.00002 16Z"
                                                                            fill="#03A66D"/>
                                                                        <path
                                                                            d="M12.6387 4.91862C12.4141 4.69647 11.9009 4.57634 11.6797 4.79998L6.87994 9.60026L4.32035 7.04023C4.09916 6.81268 3.63872 7.00799 3.41413 7.22768C3.18754 7.44842 3.18267 7.80975 3.40338 8.03533L6.45319 11.1476C6.45417 11.1491 6.45613 11.1491 6.45753 11.1506C6.45903 11.1525 6.45903 11.1535 6.461 11.1555C6.49614 11.1906 6.54253 11.2131 6.58403 11.237C6.60647 11.2497 6.62408 11.2687 6.64655 11.2771C6.7149 11.3058 6.78911 11.3185 6.86235 11.3185C6.93462 11.3185 7.00788 11.3039 7.07723 11.2771C7.0992 11.2673 7.11529 11.2482 7.13773 11.2384C7.17923 11.2145 7.22564 11.1935 7.26079 11.1569C7.26274 11.1555 7.26274 11.1535 7.26373 11.1525C7.26567 11.1506 7.26718 11.1506 7.26862 11.1491L12.6436 5.72331C12.8658 5.50113 12.8624 5.14078 12.6387 4.91862Z"
                                                                            fill="white"/>
                                                                    </svg> :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path
                                                                            d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1Z"
                                                                            fill="#F53F3F"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                              d="M10.1638 5.35739L10.6587 5.85237C10.8149 6.00858 10.8149 6.26184 10.6587 6.41805L9.06728 8.00923L10.6587 9.60061C10.8149 9.75682 10.8149 10.0101 10.6587 10.1663L10.1638 10.6613C10.0076 10.8175 9.75429 10.8175 9.59808 10.6613L8.00628 9.06923L6.4161 10.6607C6.25989 10.8169 6.00662 10.8169 5.85041 10.6607L5.35544 10.1657C5.19923 10.0095 5.19923 9.75624 5.35544 9.60003L6.94528 8.00923L5.35544 6.41863C5.19923 6.26242 5.19923 6.00915 5.35544 5.85294L5.85041 5.35797C6.00662 5.20176 6.25989 5.20176 6.4161 5.35797L8.00628 6.94823L9.59808 5.35739C9.75429 5.20118 10.0076 5.20118 10.1638 5.35739Z"
                                                                              fill="white"/>
                                                                    </svg>)
                                                        }
                                                    </div>
                                                    <div className="w-full  flex items-center py-4 justify-between">
                                                        <span>Stake LP token in the gauge</span>
                                                        {IsLoadingDeposit ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                 viewBox="0 0 16 16" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333Z"
                                                                      fill="url(#paint0_angular_3209_5663)"/>
                                                                <path
                                                                    d="M13.8445 9.15619C14.4823 9.15619 14.9995 8.63908 14.9995 8.00119C14.9995 7.3633 14.4823 6.84619 13.8445 6.84619C13.2066 6.84619 12.6895 7.3633 12.6895 8.00119C12.6895 8.63908 13.2066 9.15619 13.8445 9.15619Z"
                                                                    fill="#1C60F3"/>
                                                                <defs>
                                                                    <radialGradient id="paint0_angular_3209_5663" cx="0"
                                                                                    cy="0" r="1"
                                                                                    gradientUnits="userSpaceOnUse"
                                                                                    gradientTransform="translate(8 8) rotate(-23.9625) scale(6.8942 6.92085)">
                                                                        <stop offset="0.921737" stop-color="#005AFC"
                                                                              stop-opacity="0"/>
                                                                        <stop offset="0.944115" stop-color="#005AFC"/>
                                                                        <stop offset="0.989583" stop-color="#005AFC"/>
                                                                    </radialGradient>
                                                                </defs>
                                                            </svg> :
                                                            (
                                                                !txError ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path
                                                                            d="M8.00002 16C3.58885 16 0 12.4111 0 8.00002C0 3.58884 3.58885 0 8.00002 0C12.4111 0 16 3.58885 16 8.00002C16 12.4111 12.4111 16 8.00002 16Z"
                                                                            fill="#03A66D"/>
                                                                        <path
                                                                            d="M12.6387 4.91862C12.4141 4.69647 11.9009 4.57634 11.6797 4.79998L6.87994 9.60026L4.32035 7.04023C4.09916 6.81268 3.63872 7.00799 3.41413 7.22768C3.18754 7.44842 3.18267 7.80975 3.40338 8.03533L6.45319 11.1476C6.45417 11.1491 6.45613 11.1491 6.45753 11.1506C6.45903 11.1525 6.45903 11.1535 6.461 11.1555C6.49614 11.1906 6.54253 11.2131 6.58403 11.237C6.60647 11.2497 6.62408 11.2687 6.64655 11.2771C6.7149 11.3058 6.78911 11.3185 6.86235 11.3185C6.93462 11.3185 7.00788 11.3039 7.07723 11.2771C7.0992 11.2673 7.11529 11.2482 7.13773 11.2384C7.17923 11.2145 7.22564 11.1935 7.26079 11.1569C7.26274 11.1555 7.26274 11.1535 7.26373 11.1525C7.26567 11.1506 7.26718 11.1506 7.26862 11.1491L12.6436 5.72331C12.8658 5.50113 12.8624 5.14078 12.6387 4.91862Z"
                                                                            fill="white"/>
                                                                    </svg> :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path
                                                                            d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1Z"
                                                                            fill="#F53F3F"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                              d="M10.1638 5.35739L10.6587 5.85237C10.8149 6.00858 10.8149 6.26184 10.6587 6.41805L9.06728 8.00923L10.6587 9.60061C10.8149 9.75682 10.8149 10.0101 10.6587 10.1663L10.1638 10.6613C10.0076 10.8175 9.75429 10.8175 9.59808 10.6613L8.00628 9.06923L6.4161 10.6607C6.25989 10.8169 6.00662 10.8169 5.85041 10.6607L5.35544 10.1657C5.19923 10.0095 5.19923 9.75624 5.35544 9.60003L6.94528 8.00923L5.35544 6.41863C5.19923 6.26242 5.19923 6.00915 5.35544 5.85294L5.85041 5.35797C6.00662 5.20176 6.25989 5.20176 6.4161 5.35797L8.00628 6.94823L9.59808 5.35739C9.75429 5.20118 10.0076 5.20118 10.1638 5.35739Z"
                                                                              fill="white"/>
                                                                    </svg>)
                                                        }
                                                    </div>
                                                </>
                                            }
                                        </div>

                                    </>
                                    : (
                                        IsConfirmedTx === 'success' ?
                                            <div className="justify-center w-full flex flex-wrap">
                                                <div className="mt-5 flex justify-center flex-wrap w-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="152" height="152"
                                                         viewBox="0 0 152 152" fill="none">
                                                        <g clip-path="url(#clip0_3209_5397)">
                                                            <path
                                                                d="M76 150C116.869 150 150 116.869 150 76C150 35.1309 116.869 2 76 2C35.1309 2 2 35.1309 2 76C2 116.869 35.1309 150 76 150Z"
                                                                stroke="url(#paint0_radial_3209_5397)" stroke-width="4"/>
                                                            <mask id="mask0_3209_5397" maskUnits="userSpaceOnUse" x="46"
                                                                  y="45" width="70" height="70">
                                                                <path d="M116 45H46V115H116V45Z" fill="white"/>
                                                            </mask>
                                                            <g mask="url(#mask0_3209_5397)">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M106.396 60.4378C107.535 61.5768 107.535 63.4235 106.396 64.5626L74.3124 96.6459C73.1734 97.7848 71.3267 97.7848 70.1876 96.6459L55.6043 82.0626C54.4652 80.9235 54.4652 79.0768 55.6043 77.9378C56.7433 76.7987 58.59 76.7987 59.7291 77.9378L72.25 90.4587L102.271 60.4378C103.41 59.2987 105.257 59.2987 106.396 60.4378Z"
                                                                      fill="#4C1CAC"/>
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <radialGradient id="paint0_radial_3209_5397" cx="0" cy="0" r="1"
                                                                            gradientUnits="userSpaceOnUse"
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
                                                        Remove Lp successfully
                                                    </div>
                                                    <p className="w-full text-center mt-3 ">
                                                        Transaction has been confirmed by the blockchain
                                                    </p>

                                                </div>
                                                <div className="my-5 w-full flex flex-wrap justify-center">
                                                    {/* <button
                                                className={`mt-14 md:mt-0 btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 w-full ${styles.add_remove_liquidity_btn}`}>
                                                Swap
                                            </button> */}
                                                    <button
                                                        className={`mt-14 md:mt-0 bg-transparent  hover:bg-transparent  text-blue-600 rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 w-full ${styles.add_remove_liquidity_btn}`}>
                                                        View on Block Explorer
                                                    </button>
                                                </div>
                                            </div> :
                                            <>
                                                rejected Tx modal
                                            </>
                                    )}
                            </div>
                        </Modal>
                    </>
                }
                {
                    liquidityTab === "Remove" && <>
                        {liquidityPoolsBalance.map((data: ILiquidityUser, index: number) => {
                            return <div key={index} className={'flex border my-1 p-2 w-full items-center '}>
                                <div className="w-1/2  flex flex-wrap  ">
                                    <div className="w-1/3 flex">
                                        <div>
                                            <Image loading='lazy'
                                                   data-src={`/static/img/icon/tokens/${data.token0_symbol}.svg`}
                                                   className={'lazyload'}
                                                   src={`/static/img/icon/tokens/${data.token0_symbol}.svg`}
                                                   alt={data.token0_symbol}
                                                   width={20}
                                                   height={20}/>
                                        </div>
                                        <div className="-mx-2">
                                            <Image loading='lazy'
                                                   data-src={`/static/img/icon/tokens/${data.token1_symbol}.svg`}
                                                   className={'lazyload'}
                                                   src={`/static/img/icon/tokens/${data.token1_symbol}.svg`}
                                                   alt={data.token1_symbol}
                                                   width={20}
                                                   height={20}/>
                                        </div>
                                    </div>
                                    <span className="text-xs w-auto text-end "> {data.symbol} </span>
                                </div>
                                <div className="w-1/2  flex justify-end items-center">
                                    <span onClick={() => {
                                        setLiquidityTab("Withdraw");
                                        setPoolIndex(index);
                                    }}
                                          className="text-blue-600 cursor-pointer text-xs">Withdraw Liquidity</span>
                                </div>
                            </div>

                        })}

                    </>
                }
                {
                    liquidityTab === "Withdraw" &&
                    <div className="w-full flex flex-wrap">
                        <div className="w-full">
                            <div className="w-full flex justify-between">
                                <span>Amount</span>
                                <span> {lpAmount.toFixed(4)} </span>
                            </div>
                            <div className="w-full flex items-center justify-between text-xs  p-2">
                                <span className="text-xl">0%</span>
                                <span>25%</span>
                                <span>50%</span>
                                <span>75%</span>
                                <span>MAX</span>
                            </div>
                            <input type="range" min="0" max="100" value={rangeValue}
                                   onChange={(e) => setRangeValue(e.target.value)} className="range range-primary"
                                   step="25"/>
                        </div>
                        <div className="w-full flex flex-wrap mt-5 justify-between">
                            <div className="w-full flex py-2 border-b">
                                You will receive at least
                            </div>
                            <div className="mt-2 w-full flex justify-between">
                                <div className="w-1/3 flex items-center  text-stone-400 py-1">

                                    <Image loading='lazy'
                                           data-src={`/static/img/icon/tokens/${liquidityPoolsBalance[poolIndex]?.token0_symbol}.svg`}
                                           className={'lazyload'}
                                           src={`/static/img/icon/tokens/${liquidityPoolsBalance[poolIndex]?.token0_symbol}.svg`}
                                           alt={liquidityPoolsBalance[poolIndex].token0_symbol}
                                           width={20}
                                           height={20}/>
                                    <span
                                        className="text-xs px-1 text-white">{parseFloat(formatEther(liquidityPoolsBalance[poolIndex]?.account_token0_balance)).toFixed(4)} </span>
                                    <span className="text-xs"> {liquidityPoolsBalance[poolIndex]?.token0_symbol} </span>
                                </div>
                                <div className="w-1/3 flex items-end flex-col text-stone-400 py-1">
                                    <div className="font-bold text-xs">$0.01243</div>
                                </div>
                            </div>
                            <div className="mt-2 w-full flex justify-between">
                                <div className="w-1/3 flex items-center  text-stone-400 py-1">

                                    <Image loading='lazy'
                                           data-src={`/static/img/icon/tokens/${liquidityPoolsBalance[poolIndex]?.token1_symbol}.svg`}
                                           className={'lazyload'}
                                           src={`/static/img/icon/tokens/${liquidityPoolsBalance[poolIndex]?.token1_symbol}.svg`}
                                           alt={liquidityPoolsBalance[poolIndex].token1_symbol}
                                           width={20}
                                           height={20}/>

                                    <span
                                        className="text-xs px-1 text-white">{parseFloat(formatEther(liquidityPoolsBalance[poolIndex]?.account_token1_balance)).toFixed(4)}</span>
                                    <span className="text-xs">{liquidityPoolsBalance[poolIndex]?.token1_symbol}</span>
                                </div>
                                <div className="w-1/3 flex items-end flex-col text-stone-400 py-1">
                                    <div className="font-bold text-xs">$0.01243</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap mt-5 justify-between">
                            <div className="w-full flex py-2 border-b">
                                Your Balance
                            </div>
                            <div className="w-1/2 flex flex-col text-stone-400 py-1">
                                <div
                                    className="font-bold"> {parseFloat(formatEther(liquidityPoolsBalance[poolIndex]?.account_lp_balance)).toFixed(4)} </div>
                                <div className="text-xs">Pooled {liquidityPoolsBalance[poolIndex]?.symbol} </div>
                            </div>
                            <div className="w-1/2 flex items-end flex-col text-stone-400 py-1">
                                <div
                                    className="font-bold">{parseFloat(formatEther(liquidityPoolsBalance[poolIndex]?.account_gauge_balance)).toFixed(4)}</div>
                                <div className="text-xs">Staked {liquidityPoolsBalance[poolIndex]?.symbol}</div>
                            </div>
                        </div>

                        <Modal id={'RemoveLiquidity'} className={'w-full'} open={open4}
                               setOpen={() => setOpen4(false)}>
                            <button
                                className={`btn btn-primary mt-5 rounded-none shadow-3xl w-full ${styles.swap_button}`}
                                onClick={() => {
                                    handleRemoveLiquidity();
                                    setOpen4(true)
                                }}
                            >
                                Remove Liquidity
                            </button>
                            <div className="mt-5 flex p-3 flex-wrap w-full"
                                 onClick={() => setOpen4(false)}>

                                <div className="w-full flex flex-wrap  "
                                     onClick={() => setOpen4(false)}>
                                    {IsConfirmedTx === 'loading' ?
                                        <>
                                            <div className="w-full  border-b flex items-center py-4 justify-between">
                                                <span>Approve Lp token</span>
                                                {IsLoadingApprove ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         viewBox="0 0 16 16" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333Z"
                                                              fill="url(#paint0_angular_3209_5663)"/>
                                                        <path
                                                            d="M13.8445 9.15619C14.4823 9.15619 14.9995 8.63908 14.9995 8.00119C14.9995 7.3633 14.4823 6.84619 13.8445 6.84619C13.2066 6.84619 12.6895 7.3633 12.6895 8.00119C12.6895 8.63908 13.2066 9.15619 13.8445 9.15619Z"
                                                            fill="#1C60F3"/>
                                                        <defs>
                                                            <radialGradient id="paint0_angular_3209_5663" cx="0" cy="0"
                                                                            r="1" gradientUnits="userSpaceOnUse"
                                                                            gradientTransform="translate(8 8) rotate(-23.9625) scale(6.8942 6.92085)">
                                                                <stop offset="0.921737" stop-color="#005AFC"
                                                                      stop-opacity="0"/>
                                                                <stop offset="0.944115" stop-color="#005AFC"/>
                                                                <stop offset="0.989583" stop-color="#005AFC"/>
                                                            </radialGradient>
                                                        </defs>
                                                    </svg> :
                                                    (
                                                        !txError ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8.00002 16C3.58885 16 0 12.4111 0 8.00002C0 3.58884 3.58885 0 8.00002 0C12.4111 0 16 3.58885 16 8.00002C16 12.4111 12.4111 16 8.00002 16Z"
                                                                    fill="#03A66D"/>
                                                                <path
                                                                    d="M12.6387 4.91862C12.4141 4.69647 11.9009 4.57634 11.6797 4.79998L6.87994 9.60026L4.32035 7.04023C4.09916 6.81268 3.63872 7.00799 3.41413 7.22768C3.18754 7.44842 3.18267 7.80975 3.40338 8.03533L6.45319 11.1476C6.45417 11.1491 6.45613 11.1491 6.45753 11.1506C6.45903 11.1525 6.45903 11.1535 6.461 11.1555C6.49614 11.1906 6.54253 11.2131 6.58403 11.237C6.60647 11.2497 6.62408 11.2687 6.64655 11.2771C6.7149 11.3058 6.78911 11.3185 6.86235 11.3185C6.93462 11.3185 7.00788 11.3039 7.07723 11.2771C7.0992 11.2673 7.11529 11.2482 7.13773 11.2384C7.17923 11.2145 7.22564 11.1935 7.26079 11.1569C7.26274 11.1555 7.26274 11.1535 7.26373 11.1525C7.26567 11.1506 7.26718 11.1506 7.26862 11.1491L12.6436 5.72331C12.8658 5.50113 12.8624 5.14078 12.6387 4.91862Z"
                                                                    fill="white"/>
                                                            </svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1Z"
                                                                    fill="#F53F3F"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M10.1638 5.35739L10.6587 5.85237C10.8149 6.00858 10.8149 6.26184 10.6587 6.41805L9.06728 8.00923L10.6587 9.60061C10.8149 9.75682 10.8149 10.0101 10.6587 10.1663L10.1638 10.6613C10.0076 10.8175 9.75429 10.8175 9.59808 10.6613L8.00628 9.06923L6.4161 10.6607C6.25989 10.8169 6.00662 10.8169 5.85041 10.6607L5.35544 10.1657C5.19923 10.0095 5.19923 9.75624 5.35544 9.60003L6.94528 8.00923L5.35544 6.41863C5.19923 6.26242 5.19923 6.00915 5.35544 5.85294L5.85041 5.35797C6.00662 5.20176 6.25989 5.20176 6.4161 5.35797L8.00628 6.94823L9.59808 5.35739C9.75429 5.20118 10.0076 5.20118 10.1638 5.35739Z"
                                                                      fill="white"/>
                                                            </svg>)
                                                }
                                            </div>
                                            <div className="w-full  flex items-center py-4 justify-between">
                                                <span>Remove liquidity</span>
                                                {IsLoadingRemove ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         viewBox="0 0 16 16" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333Z"
                                                              fill="url(#paint0_angular_3209_5663)"/>
                                                        <path
                                                            d="M13.8445 9.15619C14.4823 9.15619 14.9995 8.63908 14.9995 8.00119C14.9995 7.3633 14.4823 6.84619 13.8445 6.84619C13.2066 6.84619 12.6895 7.3633 12.6895 8.00119C12.6895 8.63908 13.2066 9.15619 13.8445 9.15619Z"
                                                            fill="#1C60F3"/>
                                                        <defs>
                                                            <radialGradient id="paint0_angular_3209_5663" cx="0" cy="0"
                                                                            r="1" gradientUnits="userSpaceOnUse"
                                                                            gradientTransform="translate(8 8) rotate(-23.9625) scale(6.8942 6.92085)">
                                                                <stop offset="0.921737" stop-color="#005AFC"
                                                                      stop-opacity="0"/>
                                                                <stop offset="0.944115" stop-color="#005AFC"/>
                                                                <stop offset="0.989583" stop-color="#005AFC"/>
                                                            </radialGradient>
                                                        </defs>
                                                    </svg> :
                                                    (
                                                        !txError ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8.00002 16C3.58885 16 0 12.4111 0 8.00002C0 3.58884 3.58885 0 8.00002 0C12.4111 0 16 3.58885 16 8.00002C16 12.4111 12.4111 16 8.00002 16Z"
                                                                    fill="#03A66D"/>
                                                                <path
                                                                    d="M12.6387 4.91862C12.4141 4.69647 11.9009 4.57634 11.6797 4.79998L6.87994 9.60026L4.32035 7.04023C4.09916 6.81268 3.63872 7.00799 3.41413 7.22768C3.18754 7.44842 3.18267 7.80975 3.40338 8.03533L6.45319 11.1476C6.45417 11.1491 6.45613 11.1491 6.45753 11.1506C6.45903 11.1525 6.45903 11.1535 6.461 11.1555C6.49614 11.1906 6.54253 11.2131 6.58403 11.237C6.60647 11.2497 6.62408 11.2687 6.64655 11.2771C6.7149 11.3058 6.78911 11.3185 6.86235 11.3185C6.93462 11.3185 7.00788 11.3039 7.07723 11.2771C7.0992 11.2673 7.11529 11.2482 7.13773 11.2384C7.17923 11.2145 7.22564 11.1935 7.26079 11.1569C7.26274 11.1555 7.26274 11.1535 7.26373 11.1525C7.26567 11.1506 7.26718 11.1506 7.26862 11.1491L12.6436 5.72331C12.8658 5.50113 12.8624 5.14078 12.6387 4.91862Z"
                                                                    fill="white"/>
                                                            </svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1Z"
                                                                    fill="#F53F3F"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M10.1638 5.35739L10.6587 5.85237C10.8149 6.00858 10.8149 6.26184 10.6587 6.41805L9.06728 8.00923L10.6587 9.60061C10.8149 9.75682 10.8149 10.0101 10.6587 10.1663L10.1638 10.6613C10.0076 10.8175 9.75429 10.8175 9.59808 10.6613L8.00628 9.06923L6.4161 10.6607C6.25989 10.8169 6.00662 10.8169 5.85041 10.6607L5.35544 10.1657C5.19923 10.0095 5.19923 9.75624 5.35544 9.60003L6.94528 8.00923L5.35544 6.41863C5.19923 6.26242 5.19923 6.00915 5.35544 5.85294L5.85041 5.35797C6.00662 5.20176 6.25989 5.20176 6.4161 5.35797L8.00628 6.94823L9.59808 5.35739C9.75429 5.20118 10.0076 5.20118 10.1638 5.35739Z"
                                                                      fill="white"/>
                                                            </svg>)
                                                }
                                            </div>
                                        </> : (
                                            IsConfirmedTx === 'success' ?
                                                <div className="justify-center w-full flex flex-wrap">
                                                    <div className="mt-5 flex justify-center flex-wrap w-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="152" height="152"
                                                             viewBox="0 0 152 152" fill="none">
                                                            <g clip-path="url(#clip0_3209_5397)">
                                                                <path
                                                                    d="M76 150C116.869 150 150 116.869 150 76C150 35.1309 116.869 2 76 2C35.1309 2 2 35.1309 2 76C2 116.869 35.1309 150 76 150Z"
                                                                    stroke="url(#paint0_radial_3209_5397)"
                                                                    stroke-width="4"/>
                                                                <mask id="mask0_3209_5397" maskUnits="userSpaceOnUse"
                                                                      x="46" y="45" width="70" height="70">
                                                                    <path d="M116 45H46V115H116V45Z" fill="white"/>
                                                                </mask>
                                                                <g mask="url(#mask0_3209_5397)">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                          d="M106.396 60.4378C107.535 61.5768 107.535 63.4235 106.396 64.5626L74.3124 96.6459C73.1734 97.7848 71.3267 97.7848 70.1876 96.6459L55.6043 82.0626C54.4652 80.9235 54.4652 79.0768 55.6043 77.9378C56.7433 76.7987 58.59 76.7987 59.7291 77.9378L72.25 90.4587L102.271 60.4378C103.41 59.2987 105.257 59.2987 106.396 60.4378Z"
                                                                          fill="#4C1CAC"/>
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <radialGradient id="paint0_radial_3209_5397" cx="0"
                                                                                cy="0" r="1"
                                                                                gradientUnits="userSpaceOnUse"
                                                                                gradientTransform="translate(96.0256 50.8933) rotate(-149.676) scale(108.928)">
                                                                    <stop offset="0.504001" stop-color="#1F69FF"/>
                                                                    <stop offset="1" stop-color="white"
                                                                          stop-opacity="0"/>
                                                                </radialGradient>
                                                                <clipPath id="clip0_3209_5397">
                                                                    <rect width="152" height="152" fill="white"/>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div className="w-2/3 my-4 flex flex-wrap justify-center">
                                                        <div className="w-full text-center font-bold">
                                                            Remove Lp successfully
                                                        </div>
                                                        <p className="w-full text-center mt-3 ">
                                                            Transaction has been confirmed by the blockchain
                                                        </p>

                                                    </div>
                                                    <div className="my-5 w-full flex flex-wrap justify-center">
                                                        {/* <button
                                                            className={`mt-14 md:mt-0 btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 w-full ${styles.add_remove_liquidity_btn}`}>
                                                            Swap
                                                        </button> */}
                                                        <button
                                                            className={`mt-14 md:mt-0 bg-transparent  hover:bg-transparent  text-blue-600 rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none pt-3.5 pb-3.5 w-full ${styles.add_remove_liquidity_btn}`}>
                                                            View on Block Explorer
                                                        </button>
                                                    </div>
                                                </div> :
                                                <>
                                                    rejected Tx modal
                                                </>
                                        )

                                    }


                                </div>


                            </div>
                        </Modal>

                    </div>
                }


            </div>
            {/*<button*/}
            {/*    className={`btn btn-primary w-full animation rounded-none border-primary ${styles.manage_echonft_stake_active}`}>Stake*/}
            {/*    Nft*/}
            {/*</button>*/}
        </div>
    );
};

export default ManageLiquidity;

