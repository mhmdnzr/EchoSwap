import { useState, useCallback, useEffect } from 'react';
import { writeContract, fetchFeeData, readContract } from '@wagmi/core'
import { useNetwork } from "wagmi";
import { waitForTransaction } from '@wagmi/core'
import { CONTRACT_ADDRESSES } from '@/constants/constants/contractAddresses'
import ERC20 from '@/contracts/abis/ERC20.sol/ERC20.json'
import Gauge from '@/contracts/abis/GaugeV2_1.sol/GaugeV21.json'
import pairContractABI from '@/contracts/abis/Pair.sol/Pair.json'
import WNATIVE from '@/contracts/abis/interfaces/IWETH.sol/WNATIVE.json'
import Bribe from '@/contracts/abis/Bribes.sol/Bribe.json'
import { useNetworkInfo } from './useNetworkInfo';

function useBribe() {
  const [approvedAmount, setApprovedAmount] = useState(BigInt(0));
  const { chainId, isSupported } = useNetworkInfo();

  const [contractList, setContractList] = useState(CONTRACT_ADDRESSES[chainId ?? 5611]);
  useEffect(() => {
    if (chainId !== undefined) {
        setContractList(CONTRACT_ADDRESSES[chainId]);
    }
}, [chainId]);
  const fetchAllowance = useCallback(
    async (tokenAddress: `0x${string}`, gaugeBribeAddress: `0x${string}`, ownerAddress: `0x${string}`) => {
        
          try {
            const allowance: any = await readContract({
              address: tokenAddress as `0x${string}`,
              abi: ERC20.abi,
              functionName: 'allowance',
              args: [ownerAddress, gaugeBribeAddress],
            });
            setApprovedAmount(allowance.toString());
            
            return allowance;
          } catch (error) {
            console.error('Failed to fetch allowance:', error);
            throw error;
          }
          
      
    },
    [],
  );
  const approve = useCallback(
    async (tokenAddress: `0x${string}`, gaugeBribeAddress: `0x${string}`, amount: bigint) => {
      try {
        const feeData = await fetchFeeData()
        
        const { hash } = await writeContract({
          address: tokenAddress as `0x${string}`,
          abi: ERC20.abi,
          functionName: 'approve',
          args: [gaugeBribeAddress, amount],
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
  const notifyReward = useCallback(
    async (gaugeBribeAddress: `0x${string}`, TokenAddress: `0x${string}`, amount: bigint) => {
      try {
        const feeData = await fetchFeeData()
        const { hash } = await writeContract({
          address: gaugeBribeAddress as `0x${string}`,
          abi: Bribe.abi,
          functionName: 'notifyRewardAmount',
          args: [TokenAddress, amount],
          maxFeePerGas: feeData.maxFeePerGas as bigint,
          maxPriorityFeePerGas: feeData.lastBaseFeePerGas as bigint,
        })
        console.log(gaugeBribeAddress, TokenAddress, amount)
        const data = await waitForTransaction({
          hash: hash,
        })
        return data;
      } catch (error) {
        console.error('Failed to notifyRewardAmount:', error);
        throw error;
      }
    },
    [],
  );

  return {
    approvedAmount,
    fetchAllowance,
    approve,
    notifyReward,
  };
}
export default useBribe;
