import { useState, useCallback, useEffect } from 'react';
import { writeContract, fetchFeeData, readContract } from '@wagmi/core'
import { useNetwork } from "wagmi";
import { waitForTransaction } from '@wagmi/core'
import { CONTRACT_ADDRESSES } from '@/constants/constants/contractAddresses'
import ERC20 from '@/contracts/abis/ERC20.sol/ERC20.json'
import Gauge from '@/contracts/abis/GaugeV2_1.sol/GaugeV21.json'
import pairContractABI from '@/contracts/abis/Pair.sol/Pair.json'
import WNATIVE from '@/contracts/abis/interfaces/IWETH.sol/WNATIVE.json'
import { useNetworkInfo } from './useNetworkInfo';

function useApprove() {
  const [approvedAmount, setApprovedAmount] = useState(BigInt(0));
  const { chainId, isSupported } = useNetworkInfo();
  const [voterApprovedAmount, setvoterApprovedAmount] = useState(BigInt(0));
  const [lpApprovedAmount, setLpApprovedAmount] = useState(BigInt(0));
  const [contractList, setContractList] = useState(CONTRACT_ADDRESSES[chainId ?? 5611]);
  useEffect(() => {
    if (chainId !== undefined) {
        setContractList(CONTRACT_ADDRESSES[chainId]);
    }
}, [chainId]);
  const fetchAllowance = useCallback(
    async (tokenAddress: `0x${string}`, ownerAddress: `0x${string}`) => {
      if(tokenAddress || ownerAddress ){
        return null
      }
        if (tokenAddress === '0x000000000000000000000000000000000000800A' || tokenAddress === '0x4200000000000000000000000000000000000006') {
          setApprovedAmount(BigInt(2 ** 256 - 1));
          return BigInt(2 ** 256 - 1);
        } else {
          try {
            const spender = contractList.ROUTER as `0x${string}`
            const allowance: any = await readContract({
              address: tokenAddress as `0x${string}`,
              abi: ERC20.abi,
              functionName: 'allowance',
              args: [ownerAddress, spender],
            });
            setApprovedAmount(allowance.toString());
            
            return allowance;
          } catch (error) {
            console.error('Failed to fetch allowance:', error);
            throw error;
          }
          
        }

      
    },
    [],
  );
  const fetchVoteAllowance = useCallback(
    async (poolAddress: `0x${string}`,gauge: `0x${string}`, ownerAddress: `0x${string}`) => {
      if(poolAddress || ownerAddress || gauge){
        return null
      }
      try {
       
        const allowance: any = await readContract({
          address: poolAddress as `0x${string}`,
          abi: pairContractABI.abi,
          functionName: 'allowance',
          args: [ownerAddress, gauge],
        });

        setvoterApprovedAmount(allowance.toString());
        return allowance;
      } catch (error) {
        console.error('Failed to fetch allowance:', error);
        throw error;
      }
    },
    [],
  );
  const fetchLpAllowance = useCallback(
    async (poolAddress: `0x${string}`, ownerAddress: `0x${string}`, ) => {
      if(poolAddress || ownerAddress){
        return null
      }
      try {
       
        const allowance: any = await readContract({
          address: poolAddress as `0x${string}`,
          abi: pairContractABI.abi,
          functionName: 'allowance',
          args: [ownerAddress, contractList.ROUTER],
        });

        setLpApprovedAmount(allowance.toString());
        return allowance;
      } catch (error) {
        console.error('Failed to fetch allowance:', error);
        throw error;
      }
    },
    [],
  );
  const fetchGaugeAllowance = useCallback(
    async (poolAddress: `0x${string}`, ownerAddress: `0x${string}`,gauge: `0x${string}`) => {
      if(poolAddress || ownerAddress || gauge){
        return null
      }
      try {
       
        const allowance: any = await readContract({
          address: poolAddress as `0x${string}`,
          abi: pairContractABI.abi,
          functionName: 'allowance',
          args: [ownerAddress, gauge],
        });

        return allowance;
      } catch (error) {
        console.error('Failed to fetch allowance:', error);
        throw error;
      }
    },
    [],
  );
  const approve = useCallback(
    async (tokenAddress: `0x${string}`, amount: bigint) => {
      try {
        const feeData = await fetchFeeData()
        const spender = contractList.ROUTER as `0x${string}`
        const { hash } = await writeContract({
          address: tokenAddress as `0x${string}`,
          abi: ERC20.abi,
          functionName: 'approve',
          args: [spender, amount],
          maxFeePerGas: feeData.maxFeePerGas as bigint,
          maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
        })
        const data = await waitForTransaction({
          hash: hash,
        })
        return data;
      } catch (error) {
        console.error('Failed to approve:', error);
        throw error;
      }
    },
    [],
  );
  const approveGauge = useCallback(
    async (poolAddress: `0x${string}`,gauge:  `0x${string}`, amount: bigint) => {
      try {
        const feeData = await fetchFeeData()
        const { hash } = await writeContract({
          address: poolAddress as `0x${string}`,
          abi: pairContractABI.abi,
          functionName: 'approve',
          args: [gauge, amount],
          maxFeePerGas: feeData.maxFeePerGas as bigint,
          maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
        })
        const data = await waitForTransaction({
          hash: hash,
        })
        return data;
      } catch (error) {
        console.error('Failed to approve:', error);
        throw error;
      }
    },
    [],
  );
  const approveRouter = useCallback(
    async (poolAddress: `0x${string}`, amount: bigint) => {
      try {
        const feeData = await fetchFeeData()
        const { hash } = await writeContract({
          address: poolAddress as `0x${string}`,
          abi: pairContractABI.abi,
          functionName: 'approve',
          args: [contractList?.ROUTER, amount],
          maxFeePerGas: feeData.maxFeePerGas as bigint,
          maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
        })
        const data = await waitForTransaction({
          hash: hash,
        })
        return data;
      } catch (error) {
        console.error('Failed to approve:', error);
        throw error;
      }
    },
    [],
  );
  return {
    approvedAmount,
    voterApprovedAmount,
    lpApprovedAmount,
    fetchAllowance,
    fetchVoteAllowance,
    fetchLpAllowance,
    approve,
    approveGauge,
    approveRouter,
    fetchGaugeAllowance,
  };
}
export default useApprove;
