import {useNetwork} from "wagmi";
import {useCallback, useState} from "react";
import {CONTRACT_ADDRESSES} from "@/constants";
import {readContract} from "@wagmi/core";
import voter from "@/contracts/abis/VoterV2.sol/VoterV2.json";
import rewardDistrubuter from '@/contracts/abis/RewardsDistributor.sol/RewardsDistributor.json'
import Voter from "@/contracts/abis/Voter.sol/Voter.json";
import rewardAPI from '@/contracts/abis/APIHelper/RewardAPI.sol/RewardAPI.json'
import {IPairBribe} from "@/interfaces/IPairBribe";
import veNFTAPIV2 from '@/contracts/abis/APIHelper/veNFTAPIV2.sol/veNFTAPI.json'
import {ITokenFromVeNFT} from "@/interfaces/ITokenFromVeNFT";

function useRewardsHook(account: `0x${string}`) {
    const {chain} = useNetwork();
    const [isLoading, setLoading] = useState<boolean>(true)


    const emmisionClaimable = useCallback(async (_tokenId: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.RewardDistributor as `0x${string}`,
                abi: rewardDistrubuter.abi as any[],
                functionName: 'claimable',
                args: [_tokenId],
            });
            setLoading(false)
            return data
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);
    const claimBribes = useCallback(async (_bribes: string[], _tokens: string[], _tokenId: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.Voter as `0x${string}`,
                abi: voter.abi as any[],
                functionName: 'claimBribes',
                args: [_bribes, _tokens, _tokenId],
            });
            setLoading(false)
            return data
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);
    const claimFees = useCallback(async (_fees: string[], _tokens: string[], _tokenId: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.Voter as `0x${string}`,
                abi: voter.abi as any[],
                functionName: 'claimFees',
                args: [_fees, _tokens, _tokenId],
            });
            setLoading(false)
            return data
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);
    const claimRewards = useCallback(async (_gauges: string[], _tokens: string[]) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.Voter as `0x${string}`,
                abi: voter.abi as any[],
                functionName: 'claimRewards',
                args: [_gauges, _tokens],
            });
            setLoading(false)
            return data
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);
    const fetchGaugeAddress = useCallback(async (pairFor: `0x${string}`) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.Voter as `0x${string}`,
                abi: Voter.abi,
                functionName: 'gauges',
                args: [pairFor],
            });
            return data as `0x${string}`;
        } catch (error) {
            console.error('Error gauge address:', error);
        }
    }, [chain])

    const getPairBribes = useCallback(async (pair_address: `0x${string}`) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.rewardApi as `0x${string}`,
                abi: rewardAPI.abi,
                functionName: 'getPairBribe',
                args: [pair_address],
            });
            return data[0] as IPairBribe
        } catch (error) {
            console.error('Error gauge address:', error);
        }
    }, [chain])

    const getTokenNameFromVote = useCallback(async (token_id: number, pair_address: `0x${string}`) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.veNFTAPIV2 as `0x${string}`,
                abi: veNFTAPIV2.abi,
                functionName: 'singlePairReward',
                args: [token_id, pair_address],
            });
            return data as ITokenFromVeNFT[]
        } catch (error) {
            console.error('Error gauge address:', error);
        }
    }, [chain])

    return {
        isLoading,
        emmisionClaimable,
        claimBribes,
        claimFees,
        claimRewards,
        fetchGaugeAddress,
        getPairBribes,
        getTokenNameFromVote
    }
}

export default useRewardsHook