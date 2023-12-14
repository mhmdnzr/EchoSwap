import {useNetwork} from "wagmi";
import {useCallback, useEffect, useState} from "react";
import {CONTRACT_ADDRESSES} from "@/constants";
import {readContract, writeContract} from "@wagmi/core";
import votingEscrow from "@/contracts/abis/VotingEscrow.sol/VotingEscrow.json";
import voter from "@/contracts/abis/VoterV2.sol/VoterV2.json";
import minter from '@/contracts/abis/Minter.sol/Minter.json'


function useVoteHook(account: `0x${string}`) {
    const {chain} = useNetwork();
    const [isLoading, setLoading] = useState<boolean>(true)
    const [activePeriod, setActivePeriod] = useState<number>(0)
    const [period, setPeriod] = useState<number>(0)



    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.Minter as `0x${string}`,
                abi: minter.abi as any[],
                functionName: 'active_period',
                args: [],
            });
            setLoading(false)
            setActivePeriod(Number(data as bigint))
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);
    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.Minter as `0x${string}`,
                abi: minter.abi as any[],
                functionName: 'period',
                args: [],
            });
            setLoading(false)
            setPeriod(Number(data as bigint))
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);

    const castVote = useCallback(async (_tokenId: number, _poolAddresses: `0x${string}`[], _weights: number[]) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const {hash} = await writeContract({
                address: contractList.Voter as `0x${string}`,
                abi: voter.abi as any[],
                functionName: 'vote',
                args: [_tokenId, _poolAddresses, _weights],
            });
            console.log('Transaction successful, Hash:', hash);
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);


    const balanceOfNFT = useCallback(async (_tokenId: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.VotingEscrow as `0x${string}`,
                abi: votingEscrow.abi as any[],
                functionName: 'balanceOfNFT',
                args: [_tokenId],
            });
            setLoading(false)
            // setBalanceOf(data as bigint)
            return data as bigint
            // console.log(data as bigint)
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);

    const resetVote = useCallback(async (_tokenId: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const {hash} = await writeContract({
                address: contractList.Voter as `0x${string}`,
                abi: voter.abi as any[],
                functionName: 'reset',
                args: [_tokenId],
            });
            console.log('Transaction successful, Hash:', hash);
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);

    return {
        isLoading,
        castVote,
        resetVote,
        balanceOfNFT,
        period,
        activePeriod
        // weightData
    }
}

export default useVoteHook