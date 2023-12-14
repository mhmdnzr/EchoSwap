import {useCallback, useEffect, useState} from "react";
import {CONTRACT_ADDRESSES} from "@/constants";
import {readContract, writeContract} from "@wagmi/core";
import {useNetwork} from "wagmi";
import echoHolders from "@/contracts/abis/EchoHolders.sol/EchoHolders.json";
import masterChef from "@/contracts/abis/MasterChef.sol/MasterChef.json";
import rewardsDistributer from "@/contracts/abis/RewardsDistributor.sol/RewardsDistributor.json"
import {formatEther} from "viem";

function useEchoHook(account: `0x${string}`) {
    const {chain} = useNetwork();
    const [isLoading, setLoading] = useState<boolean>(true)
    const [total_supply, setTotal_supply] = useState<string>('')
    const [max_supply, setMax_supply] = useState<string>('')
    const [balanceOf, setBalanceOf] = useState<string>('');
    const [allStakedNFTTokenIds, setAllStakedNFTTokenIds] = useState<string[]>(['']);
    const [unStakedTokenIds, setUnStakedTokenIds] = useState<string[]>(['']);
    const [rewardsPerSecond, setRewardsPerSecond] = useState<bigint>(BigInt(0));
    const [claimableFees, setClaimableFees] = useState<any>('')
    const [tokensOfOwner, setTokensOfOwner] = useState<bigint[]>([BigInt(0)])
const[pendingReward,setPendingReward]=useState<bigint>(BigInt(0))

    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.EchoHolders as `0x${string}`,
                abi: echoHolders.abi as any[],
                functionName: 'MAX_SUPPLY',
                args: [],
            });
            setLoading(false)
            setMax_supply(data)
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);


    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.EchoHolders as `0x${string}`,
                abi: echoHolders.abi as any[],
                functionName: 'totalSupply',
                args: [],
            });
            setLoading(false)
            setTotal_supply(data)
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);


    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.EchoHolders as `0x${string}`,
                abi: echoHolders.abi as any[],
                functionName: 'balanceOf',
                args: [contractList.MaterChef],
            });
            setLoading(false)
            setBalanceOf(data);
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);

    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.EchoHolders as `0x${string}`,
                abi: echoHolders.abi as any[],
                functionName: 'tokensOfOwner',
                args: [account],
            });
            setLoading(false)
            setTokensOfOwner(data as bigint[]);
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);

    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.MaterChef as `0x${string}`,
                abi: masterChef.abi as any[],
                functionName: 'pendingReward',
                args: [account],
            });
            setLoading(false)
            setPendingReward(data as bigint);
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);


    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.MaterChef as `0x${string}`,
                abi: masterChef.abi as any[],
                functionName: 'stakedTokenIds',
                args: [account],
            });
            setLoading(false)
            setUnStakedTokenIds(data as string[]);
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);


    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.MaterChef as `0x${string}`,
                abi: masterChef.abi as any[],
                functionName: 'tokenOwner',
                args: [account],
            });
            setLoading(false)
            setAllStakedNFTTokenIds(data as string[]);
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);

    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.MaterChef as `0x${string}`,
                abi: masterChef.abi as any[],
                functionName: 'rewardPerSecond',
                args: [],
            });
            setLoading(false)
            setRewardsPerSecond(data as bigint);
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);

    //
    // useEffect((): void => {
    //     if (stakedTokenIds.length !== 0 && allStakedNFTTokenIds) {
    //         setUnStakedTokenIds(allStakedNFTTokenIds?.filter((name: string) => !stakedTokenIds.includes(name)))
    //     }
    // }, [allStakedNFTTokenIds, stakedTokenIds])


    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.MaterChef as `0x${string}`,
                abi: masterChef.abi as any[],
                functionName: 'harvest',
                args: [],
            });
            setLoading(false)
            setClaimableFees(data);
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);


    const claimable = useCallback(async (_tokenId: string) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.RewardDistributor as `0x${string}`,
                abi: rewardsDistributer.abi as any[],
                functionName: 'claimable',
                args: [_tokenId],
            });
            setLoading(false)
            return data;
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);
    const stake = useCallback(async (_nftId: bigint[]) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await writeContract({
                address: contractList.MaterChef as `0x${string}`,
                abi: masterChef.abi as any[],
                functionName: 'deposit',
                args: [_nftId],
            });
            setLoading(false)
            return data;
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);

    const approval = useCallback(async (_approved:boolean) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await writeContract({
                address: contractList.EchoHolders as `0x${string}`,
                abi: echoHolders.abi as any[],
                functionName: 'setApprovalForAll',
                args: [contractList.MaterChef, _approved],
            });
            setLoading(false)
            return data;
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);

    const isApproveForAll = useCallback(async () => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.EchoHolders as `0x${string}`,
                abi: echoHolders.abi as any[],
                functionName: 'isApprovedForAll',
                args: [account, contractList.MaterChef],
            });
            setLoading(false)
            return data as boolean;
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);
    return {
        total_supply,
        max_supply,
        balanceOf,
        isLoading,
        unStakedTokenIds,
        rewardsPerSecond,
        claimableFees,
        claimable,
        tokensOfOwner,
        stake,
        approval,
        isApproveForAll,
        pendingReward
        // allStakedNFTTokenIds
    }
}

export default useEchoHook