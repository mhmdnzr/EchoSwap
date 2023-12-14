import { useCallback } from 'react';
import Router from '@/contracts/abis/Router.sol/Router.json'
import WNATIVE from '@/contracts/abis/interfaces/IWETH.sol/WNATIVE.json'
import { writeContract, fetchFeeData  } from '@wagmi/core'
import {CONTRACT_ADDRESSES} from '@/constants/constants/contractAddresses'
import BigNumber from "bignumber.js";

interface IPath {
  from: string;
  to: string;
  stable: boolean;
}

function useSwapHook() {
  const swap = useCallback(
    async (
      address: `0x${string}`,
      chainId: number,
      tokenA: `0x${string}`,
      tokenB: `0x${string}`,
      amountIn: string,
      path: IPath[],
      slippage: number,
      amountOut: string,
      dline: number
    ) => {
      
        const feeData = await fetchFeeData()
        const contractList = CONTRACT_ADDRESSES[chainId]
        let swapMethodName: string;
        let args: any[];
        const amountOutMin = calculateAmountOutMin(amountOut, slippage);
        const deadline = Math.floor(Date.now() / 1000) + 60 * dline;

        if (tokenA === contractList.ETH) {
          if (tokenB === contractList.WRAPPED_ETH) {
            swapMethodName = 'deposit';
            args = [];
          } else {
            swapMethodName = 'swapExactETHForTokens';
            args = [amountOutMin, path, address, deadline];
          }
        } else if (tokenB === contractList.ETH) {
          if (tokenA === contractList.WRAPPED_ETH) {
            swapMethodName = 'withdraw';
            args = [amountIn];
          } else {
            swapMethodName = 'swapExactTokensForETH';
            args = [amountIn, amountOutMin, path, address, deadline];
          }
        } else {
          swapMethodName = 'swapExactTokensForTokens';
          args = [amountIn, amountOutMin, path, address, deadline];
        }
        const ContractAddress: `0x${string}` = (swapMethodName === 'deposit' || swapMethodName === 'withdraw') ? (CONTRACT_ADDRESSES[chainId].WRAPPED_ETH as `0x${string}`): (CONTRACT_ADDRESSES[chainId].ROUTER as `0x${string}`) 
        const ABI: any[]= (swapMethodName === 'deposit' || swapMethodName === 'withdraw') ? WNATIVE.abi : Router.abi
        const ETHValue = (tokenA === contractList.ETH ) ? BigInt(amountIn) : BigInt(0)
        console.log(args, ETHValue, swapMethodName)
        try {
        const { hash } = await writeContract({
          address: ContractAddress,
          abi: ABI,
          functionName: swapMethodName,
          args: args,
          value: ETHValue,
          maxFeePerGas: feeData.maxFeePerGas as bigint,
          maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
        })

        console.log('Transaction successful, Hash:', hash);
        return hash;
      } catch (error) {
        console.error('Swap failed:', error);
        throw error;
      }
    },
    [],
  );

  return {
    swap,
  };
}

export default useSwapHook;

function calculateAmountOutMin(amountOut: string, slippage: number): string {
  const amountOutBigNumber = new BigNumber(amountOut.slice());
  const reduction = amountOutBigNumber.times(slippage / 100);
  const result = amountOutBigNumber.minus(reduction);
  return result.toFixed(0);
}

