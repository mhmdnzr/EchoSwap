import {useCallback, useEffect, useState} from 'react';
import {readContract, writeContract} from '@wagmi/core'
import {CONTRACT_ADDRESSES} from '@/constants/constants/contractAddresses'
import veNFTABI from '@/contracts/abis/APIHelper/veNFTAPIV2.sol/veNFTAPI.json'
import echo from '@/contracts/abis/Echo.sol/Echo.json'
import votingEscrow from '@/contracts/abis/VotingEscrow.sol/VotingEscrow.json'
import {useNetwork} from "wagmi";
import {formatEther} from "viem";

export interface IVeNFTData {
    account: string
    amount: bigint
    attachments: bigint
    decimals: number
    id: number
    lockEnd: number
    rebase_amount: bigint
    token: string
    tokenDecimals: bigint
    tokenSymbol: string
    vote_ts: bigint
    voted: boolean
    votes: {
        pair: string
        weight: bigint
    }[],
    voting_amount: bigint
}

export const initialNFTValues: IVeNFTData = {
    account: '',
    amount: BigInt(0),
    attachments: BigInt(0),
    decimals: 0,
    id: 0,
    lockEnd: 0,
    rebase_amount: BigInt(0),
    token: '',
    tokenDecimals: BigInt(0),
    tokenSymbol: '',
    vote_ts: BigInt(0),
    voted: false,
    votes: [],
    voting_amount: BigInt(0)
}

function useLockHook(account: `0x${string}`) {
    const [VeNFTBalance, setVeNFTBalance] = useState<IVeNFTData[]>([initialNFTValues]);
    const [balanceOf, setBalanceOf] = useState<string>('');
    const [allowance, setAllowance] = useState<bigint>(BigInt(0));
    const {chain, chains} = useNetwork();
    const [isLoading, setLoading] = useState<boolean>(true)
    const [allNFTs, setAllNFTs] = useState<IVeNFTData[]>([initialNFTValues])

    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.veNFTAPIV2 as `0x${string}`,
                abi: veNFTABI.abi as any[],
                functionName: 'getNFTFromAddress',
                args: [account],
            });
            setLoading(false)
            setVeNFTBalance(data);
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);
    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.veNFTAPIV2 as `0x${string}`,
                abi: veNFTABI.abi as any[],
                functionName: 'getAllNFT',
                args: [10, 0],// 10 need to be fetched
            });
            setLoading(false)
            setAllNFTs(data)
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);

    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.Echo as `0x${string}`,
                abi: echo.abi as any[],
                functionName: 'balanceOf',
                args: [account],
            });
            setLoading(false)
            setBalanceOf(formatEther(data as bigint));
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);

    useEffect((): void => {
        (async (): Promise<void> => {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const data: any = await readContract({
                address: contractList.Echo as `0x${string}`,
                abi: echo.abi as any[],
                functionName: 'allowance',
                args: [account, contractList.VotingEscrow],
            });
            setLoading(false)
            setAllowance(data)
        })()
            .catch((e) => {
                console.log('caught: ', e);
            });
    }, [account, chain]);

    // const withdraw = useCallback(async (tokenId: number) => {
    //     try {
    //         const { hash } = await writeContract({
    //             address: contractList.votingEscrow as `0x${string}`,
    //             abi: votingEscrowABI.abi as any[],
    //             functionName: 'withdraw',
    //             args: [tokenId],
    //         });
    //         console.log('Transaction successful, Hash:', hash);
    //     } catch (error) {
    //         console.error('Transaction Error ', error);
    //     }
    // }, []);
    //


    const createLock = useCallback(async (amount: number, duration: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const {hash} = await writeContract({
                address: contractList.VotingEscrow as `0x${string}`,
                abi: votingEscrow.abi as any[],
                functionName: 'create_lock',
                args: [amount, duration],
            });
            console.log('Transaction successful, Hash:', hash);
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);

    const approveLock = useCallback(async (balanceInput: bigint) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const {hash} = await writeContract({
                address: contractList.Echo as `0x${string}`,
                abi: echo.abi as any[],
                functionName: 'approve',
                args: [contractList.VotingEscrow, balanceInput],
            });
            console.log('Transaction successful, Hash:', hash);
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);


    const mergeLock = useCallback(async (_from_nft: number, _to_nft: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const {hash} = await writeContract({
                address: contractList.VotingEscrow as `0x${string}`,
                abi: votingEscrow.abi as any[],
                functionName: 'merge',
                args: [_from_nft, _to_nft],
            });
            console.log('Transaction successful, Hash:', hash);
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);

    const transferLock = useCallback(async (_from_wallet: string, _to_wallet: string, _nft_id: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const {hash} = await writeContract({
                address: contractList.VotingEscrow as `0x${string}`,
                abi: votingEscrow.abi as any[],
                functionName: 'transferFrom',
                args: [_from_wallet, _to_wallet, _nft_id],
            });
            console.log('Transaction successful, Hash:', hash);
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);

    const splitNFT = useCallback(async (_amount: number[], _nft_id: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const {hash} = await writeContract({
                address: contractList.VotingEscrow as `0x${string}`,
                abi: votingEscrow.abi as any[],
                functionName: 'split',
                args: [_amount, _nft_id],
            });
            console.log('Transaction successful, Hash:', hash);
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);


    const increaseLock = useCallback(async (_amount: number, _tokenId: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const {hash} = await writeContract({
                address: contractList.VotingEscrow as `0x${string}`,
                abi: votingEscrow.abi as any[],
                functionName: 'increase_amount',
                args: [_tokenId, _amount],
            });
            console.log('Transaction successful, Hash:', hash);
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);


    const extendDurationLock = useCallback(async (_tokenId: number, _lock_duration: number) => {
        try {
            const contractList = CONTRACT_ADDRESSES[chain!.id as number]
            const {hash} = await writeContract({
                address: contractList.VotingEscrow as `0x${string}`,
                abi: votingEscrow.abi as any[],
                functionName: 'increase_unlock_time',
                args: [_tokenId, _lock_duration],
            });
            console.log('Transaction successful, Hash:', hash);
        } catch (error) {
            console.error('Transaction Error ', error);
        }
    }, [chain]);

    return {
        balanceOf,
        VeNFTBalance,
        allowance,
        isLoading,
        createLock,
        approveLock,
        mergeLock,
        transferLock,
        splitNFT,
        increaseLock,
        extendDurationLock,
        allNFTs
        // withdraw,
    };
}

export default useLockHook;
