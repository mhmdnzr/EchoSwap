/* TODO: take a look at lines: 70, 84, 140*/

import { useState, useCallback } from 'react';
import { formatUnits } from 'viem';
import Router from '@/contracts/abis/Router.sol/Router.json'
import Voter from '@/contracts/abis/Voter.sol/Voter.json'
import Gauge from '@/contracts/abis/GaugeV2_1.sol/GaugeV21.json'
import pairContractABI from '@/contracts/abis/Pair.sol/Pair.json'
import { writeContract, fetchFeeData, readContract } from '@wagmi/core'
import { CONTRACT_ADDRESSES } from '@/constants/constants/contractAddresses'
import { parseEther } from 'viem';
import { useNetwork } from "wagmi";
import PairAPI from '@/contracts/abis/APIHelper/PairAPIV2.sol/PairAPI.json'
import PairFactory from '@/contracts/abis/factories/PairFactory.sol/PairFactory.json'
import { ILiquidityUser } from '@/interfaces/ILiquidityUser'
import { ILiquidityBalance } from '@/interfaces/ILiquidityBalance'


function useLiquidity() {
    const [isLiquidityPoolExists, setIsLiquidityPoolExists] = useState(false);
    const [estimatedAmountInTokenB, setEstimatedAmountInTokenB] = useState<bigint>(BigInt(0));
    const [liquidityPools, setLiquidityPools] = useState<ILiquidityUser[]>()
    const [allPairs, setAllPairs] = useState<ILiquidityUser[]>()
    const [liquidityBalance, setLiquidityBalance] = useState<ILiquidityBalance[]>()
    const { chain, chains } = useNetwork();
    const [isLoadingAmountOut, setLoadingAmountOut] = useState<boolean>(false)
    const [isLoadingLiquidity, setLoadingLiquidity] = useState<boolean>(false)
    const [isLoadingAdd, setLoadingAdd] = useState<boolean>(false)
    const [isLoadingRemove, setLoadingRemove] = useState<boolean>(false)
    const [isLoadingCreateGauge, setLoadingCreateGauge] = useState<boolean>(false)
    const [isLoadingCreatePair, setLoadingCreatePair] = useState<boolean>(false)
    const [isLoadingGaugeDeposit, setLoadingcGaugeDeposit] = useState<boolean>(false)
    const [isLoadingQuoteAdd, setLoadingQuoteAdd] = useState<boolean>(false)

    const contractList = CONTRACT_ADDRESSES[chain?.id as number ?? 5611]
    const getEstimatedAmountInTokenB = useCallback(async (PairAddress: `0x${string}`, tokenIn: `0x${string}`, amountIn: bigint) => {
        try {
            const data: any = await readContract({
                address: PairAddress,
                abi: pairContractABI.abi,
                functionName: 'getAmountOut',
                args: [amountIn, tokenIn],
            });
            return data
        } catch (error) {
            console.error('Error fetching getAmountOut:', error);
        }
    }, [])
    const fetchPoolBalance = useCallback(async (AcountAddress: `0x${string}`, tokenA: `0x${string}`, tokenB: `0x${string}`, stable: boolean,)
        : Promise<{ data: bigint, pairFor: `0x${string}` } | undefined> => {
        try {
            const pairFor = await fetchLiquidityPoolExistence(tokenA, tokenB, stable, BigInt(1000000000)) as `0x${string}`
            const data: any = await readContract({
                address: pairFor as `0x${string}`,
                abi: pairContractABI.abi,
                functionName: 'balanceOf',
                args: [AcountAddress],
            });
            return { data, pairFor };
        } catch (error) {
            return { data: BigInt(0), pairFor: '0x0000000000000000000000000000000000000000' };
            console.error('Error pool and balance:', error);
        }
    }, [])
    const fetchGaugeAddress = useCallback(async (pairFor: `0x${string}`) => {
    try {
        
        const data: any = await readContract({
            address: contractList.Voter as `0x${string}`,
            abi: Voter.abi,
            functionName: 'gauges',
            args: [pairFor],
        });
        return data as `0x${string}` ;
    } catch (error) {
        console.error('Error gauge address:', error);
    }
}, [])
    const fetchLiquidityPoolExistence = useCallback(async (tokenA: `0x${string}`, tokenB: `0x${string}`, stable: boolean, amountIn: bigint) => {
        try {
            setLoadingAmountOut(true)
            if (contractList.ROUTER && tokenA, tokenB) {
                const data: any = await readContract({
                    address: contractList.ROUTER as `0x${string}`,
                    abi: Router.abi,
                    functionName: 'pairFor',
                    args: [tokenA === contractList.ETH ? contractList.WRAPPED_ETH : tokenA, tokenB === contractList.ETH ? contractList.WRAPPED_ETH : tokenB, stable],
                });
                if (data && data !== '0x0000000000000000000000000000000000000000') {
                    setIsLiquidityPoolExists(true);
                    const estimatedAmountInTokenB: bigint = await getEstimatedAmountInTokenB(data as `0x${string}`, (tokenA === contractList.ETH ? contractList.WRAPPED_ETH : tokenA) as `0x${string}`, amountIn)
                    setEstimatedAmountInTokenB(estimatedAmountInTokenB);
                    return data as `0x${string}`
                } else {
                    setIsLiquidityPoolExists(false);
                    setEstimatedAmountInTokenB(BigInt(0));
                    return '0x0000000000000000000000000000000000000000'
                }
                setLoadingAmountOut(false)
            } else {
                console.log('set tokenA and tokenB first')
            }
        } catch (error) {
            console.error('Error fetching liquidity pool existence:', error);
        }
    }, []);
    const allPairsLength = useCallback(async () => {
        try {

            const data: any = await readContract({
                address: contractList.PAIR_FACTORY as `0x${string}`,
                abi: PairFactory.abi,
                functionName: 'allPairsLength',
                args: [],
            });
            return data as number
        } catch (error) {
            console.error('Error fetching allPairsLength:', error);
        }
    }, []);
    const fetchLiquidityPools = useCallback(async (accountAddress: `0x${string}`) => {
        try {
            setLoadingLiquidity(true)
            const pairsLength = await allPairsLength()
            const offsetlist: { [key: number]: string } = {
                280: '10',
                5611: '0'
            };
            const offset = offsetlist[chain?.id as number]
            const data: any = await readContract({
                address: contractList.pairAPI as `0x${string}`,
                abi: PairAPI.abi,
                functionName: 'getAllPair',
                args: [accountAddress, pairsLength, offset],
            });
            setLiquidityPools(data.filter((item: any) => item.account_lp_balance !== BigInt(0)) as ILiquidityUser[]);
            setLiquidityBalance(filteredData(data as ILiquidityUser[]))
            setLoadingLiquidity(false)
            setAllPairs(data as ILiquidityUser[])

        } catch (error) {
            console.error('Error fetching getAllPair :', error);
        }
    }, []);
    const fetchQuoteAddLiquidity = useCallback(async (tokenA: `0x${string}`, tokenB: `0x${string}`, stable: boolean, amountA: bigint, amountB: bigint) => {
        try {
            setLoadingQuoteAdd(true)
                const data: any = await readContract({
                    address: contractList.ROUTER as `0x${string}`,
                    abi: Router.abi,
                    functionName: 'quoteAddLiquidity',
                    args: [tokenA === contractList.ETH ? contractList.WRAPPED_ETH : tokenA, tokenB === contractList.ETH ? contractList.WRAPPED_ETH : tokenB, stable, amountA, amountB],
                });
                setLoadingQuoteAdd(false)
                return data as bigint[]
            
        } catch (error) {
            console.error('Error fetching quote Add liquidity :', error);
        }
    }, []);
    const fetchQuoteRemoveLiquidity = useCallback(async (tokenA: `0x${string}`, tokenB: `0x${string}`, stable: boolean, LpAmount: bigint) => {
        try {
            setLoadingQuoteAdd(true)
                const data: any = await readContract({
                    address: contractList.ROUTER as `0x${string}`,
                    abi: Router.abi,
                    functionName: 'quoteRemoveLiquidity',
                    args: [tokenA === contractList.ETH ? contractList.WRAPPED_ETH : tokenA, tokenB === contractList.ETH ? contractList.WRAPPED_ETH : tokenB, stable, LpAmount],
                });
                setLoadingQuoteAdd(false)
                return data as bigint[]
            
        } catch (error) {
            console.error('Error fetching remove liquidity :', error);
        }
    }, []);
    const createPair = useCallback(async (tokenA: `0x${string}`, tokenB: `0x${string}`, stable: boolean) => {
        try {
            setLoadingCreatePair(true)
            const feeData = await fetchFeeData()
            const { hash } = await writeContract({
                address: contractList.PAIR_FACTORY as `0x${string}`,
                abi: PairFactory.abi,
                functionName: 'createPair',
                args: [tokenA, tokenB, stable],
                maxFeePerGas: feeData.maxFeePerGas as bigint,
                maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
            })
            setLoadingCreatePair(false)
            return hash

        } catch (error) {
            console.error('Error create pair:', error);
        }
    }, []);
    const addLiquidity = useCallback(async (accountAdddress: `0x${string}`, tokenA: `0x${string}`, tokenB: `0x${string}`, stable: boolean, amountInTokenA: bigint, amountInTokenB: bigint, slippage: number) => {
        try {
            setLoadingAdd(true)
            let addMethodName: string;
            let args: any[];
            const quoteAdd = await fetchQuoteAddLiquidity(tokenA, tokenB, stable, amountInTokenA, amountInTokenB) as bigint[]
            const amountTokenAMin = calculateAmountOutMin(quoteAdd[0], slippage)
            const amountTokenBMin = calculateAmountOutMin(quoteAdd[1], slippage)
            // const amountTokenAMin = quoteAdd[0]
            // const amountTokenBMin = quoteAdd[1]
            const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix timestamp
            const feeData = await fetchFeeData()

            if (tokenA === contractList.WRAPPED_ETH || tokenB === contractList.WRAPPED_ETH) {
                addMethodName = 'addLiquidityETH'
                args = [tokenB, stable, amountInTokenB, amountTokenBMin, amountTokenAMin, accountAdddress, deadline]
            } else {
                addMethodName = 'addLiquidity'
                args = [tokenA, tokenB, stable, amountInTokenA, amountInTokenB, amountTokenAMin, amountTokenBMin, accountAdddress, deadline]
            }
            const { hash } = await writeContract({
                address: contractList.ROUTER as `0x${string}`,
                abi: Router.abi,
                functionName: addMethodName,
                args: args,
                value: (tokenA === contractList.WRAPPED_ETH) ? amountInTokenA : ((tokenB === contractList.WRAPPED_ETH) ? amountInTokenB : BigInt(0)),
                maxFeePerGas: feeData.maxFeePerGas as bigint,
                maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
            })
            setLoadingAdd(false)
            return hash
        } catch (error) {
            console.error('Error adding liquidity:', error);
        }
    }, []);
    const createGauge = useCallback(async (tokenA: `0x${string}`, tokenB: `0x${string}`, stable: boolean) => {
        try {
            setLoadingCreateGauge(true)
            const pairFor = await fetchLiquidityPoolExistence(tokenA, tokenB, stable, BigInt(0)) as `0x${string}`
            const feeData = await fetchFeeData()

            const { hash } = await writeContract({
                address: contractList.Voter as `0x${string}`,
                abi: Voter.abi,
                functionName: 'createGauge',
                args: [pairFor],
                maxFeePerGas: feeData.maxFeePerGas as bigint,
                maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
            })
            setLoadingCreateGauge(false)
            return hash

        } catch (error) {
            console.error('Error create Gauge:', error);
        }
    }, []);
    const GaugeDeposit = useCallback(async ( pairFor: `0x${string}`, Amount: bigint) => {
        try {
            setLoadingcGaugeDeposit(true)
            let gaugeAddress: `0x${string}` = '0x'
            try {
                const data: any = await readContract({
                    address: contractList.Voter as `0x${string}`,
                    abi: Voter.abi,
                    functionName: 'gauges',
                    args: [pairFor],
                });
                gaugeAddress = data as `0x${string}`
            } catch (error) {
                console.error('Error fetching gauges:', error);
            }
            const feeData = await fetchFeeData()

            const { hash } = await writeContract({
                address: gaugeAddress,
                abi: Gauge.abi,
                functionName: 'deposit',
                args: [Amount],
                maxFeePerGas: feeData.maxFeePerGas as bigint,
                maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
            })
            setLoadingcGaugeDeposit(false)
            return hash

        } catch (error) {
            console.error('Error deposit to gauge :', error);
        }
    }, []);
    const GaugeWithdraw = useCallback(async ( gaugeAddress: `0x${string}`, Amount: bigint) => {
        try {
            setLoadingcGaugeDeposit(true)
            
            const feeData = await fetchFeeData()

            const { hash } = await writeContract({
                address: gaugeAddress,
                abi: Gauge.abi,
                functionName: 'withdraw',
                args: [Amount],
                maxFeePerGas: feeData.maxFeePerGas as bigint,
                maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
            })
            setLoadingcGaugeDeposit(false)
            return hash

        } catch (error) {
            console.error('Error withdraw from gauge :', error);
        }
    }, []);
    const removeLiquidity = useCallback(async (accountAdddress: `0x${string}`, tokenA: `0x${string}`, tokenB: `0x${string}`, stable: boolean, liquidityAmount: bigint, slippage: number) => {
        try {
            setLoadingRemove(true)
            let removeMethodName: string;
            let args: any[];
            const amountOut = await fetchQuoteRemoveLiquidity( tokenA, tokenB, stable, liquidityAmount)

            const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix timestamp
            const feeData = await fetchFeeData()
            if (amountOut) {
                if (tokenA === contractList.WRAPPED_ETH) {
                    removeMethodName = 'removeLiquidityETH'
                    args = [tokenB, stable, liquidityAmount, calculateAmountOutMin(amountOut[1], slippage), calculateAmountOutMin(amountOut[0], slippage), accountAdddress, deadline]
                } else if (tokenB === contractList.WRAPPED_ETH) {
                    removeMethodName = 'removeLiquidityETH'
                    args = [tokenA, stable, liquidityAmount, calculateAmountOutMin(amountOut[0], slippage), calculateAmountOutMin(amountOut[1], slippage), accountAdddress, deadline]
                } else {
                    removeMethodName = 'removeLiquidity'
                    args = [tokenA, tokenB, stable, liquidityAmount, calculateAmountOutMin(amountOut[0], slippage), calculateAmountOutMin(amountOut[1], slippage), accountAdddress, deadline]
                }
                const { hash } = await writeContract({
                    address: contractList.ROUTER as `0x${string}`,
                    abi: Router.abi,
                    functionName: removeMethodName,
                    args: args,
                    maxFeePerGas: feeData.maxFeePerGas as bigint,
                    maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
                })
                setLoadingRemove(false)
                return hash
            } else {
                console.log('can not estmate the amount out of tokenA and tokenB')
            }
        } catch (error) {
            console.error('Error removing liquidity:', error);
        }
    }, []);
    function calculateAmountOutMin(amountOut: bigint, slippage: number): number {
        const amountOutNum = Number(amountOut);
        const adjustedAmount = amountOutNum * (1 - slippage / 100);
        const integerAmount = Math.floor(adjustedAmount);
        
        return integerAmount;
    }
    

    function filteredData(liquidityPools: ILiquidityUser[]): ILiquidityBalance[] {
        const filteredDataArray = liquidityPools.filter(item => item.account_lp_balance !== BigInt(0));

        const optimizedDataList: ILiquidityBalance[] = filteredDataArray.map(item => ({
            pair_address: item.pair_address,
            account_lp_balance: item.account_lp_balance,
            account_gauge_balance: item.account_gauge_balance,
            account_gauge_earned: item.account_gauge_earned,
            account_token0_balance: item.account_token0_balance,
            account_token1_balance: item.account_token1_balance,
            bribe: item.bribe,
            symbol: item.symbol,
            gauge: item.gauge,
            gauge_total_supply: item.gauge_total_supply,
            emissions: item.emissions,
            claimable0: item.claimable0,
            claimable1: item.claimable1,
            token0: item.token0,
            token1: item.token1,
            token0_symbol: item.token0_symbol,
            token1_symbol: item.token1_symbol,
            stable: item.stable
        }));

        return optimizedDataList;
    }
    const getEstimatedAmountOut = useCallback(async (RouterAddress: `0x${string}`, tokenA: `0x${string}`, tokenB: `0x${string}`, stable: boolean, lpAmount: bigint) => {
        try {
            const data: any = await readContract({
                address: RouterAddress,
                abi: Router.abi,
                functionName: 'quoteRemoveLiquidity',
                args: [tokenA, tokenB, stable, lpAmount],
            });
            return data as [bigint, bigint]
        } catch (error) {
            console.error('Error quote Remove Liquidit:', error);
        }
    }, [])
    return {
        isLoadingLiquidity,
        isLoadingCreatePair,
        isLoadingAdd,
        isLoadingRemove,
        isLoadingAmountOut,
        allPairs,
        liquidityPools,
        liquidityBalance,
        isLiquidityPoolExists,
        estimatedAmountInTokenB,
        isLoadingCreateGauge,
        isLoadingGaugeDeposit,
        fetchLiquidityPoolExistence,
        createPair,
        addLiquidity,
        fetchLiquidityPools,
        removeLiquidity,
        createGauge,
        GaugeDeposit,
        GaugeWithdraw,
        fetchPoolBalance,
        fetchGaugeAddress
    };
}

export default useLiquidity;
