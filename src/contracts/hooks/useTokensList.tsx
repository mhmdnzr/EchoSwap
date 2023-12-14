import { useEffect, useState } from 'react';
import { useNetworkInfo } from './useNetworkInfo';
import { TOKENS } from '@/constants/constants/tokens';
import { readContracts } from '@wagmi/core'
import { useBalance } from "wagmi";
import BigNumber from 'bignumber.js';
import ABI from '@/contracts/abis/ERC20.sol/ERC20.json'
import {ITokenItems} from "@/interfaces/ITokenItems";
import { watchNetwork } from '@wagmi/core'

export function useTokenBalances(address: `0x${string}`) {
    const { chainId, isSupported } = useNetworkInfo();
    const [tokenList, setTokenList] = useState<ITokenItems[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [balances, setBalances] = useState<ITokenItems[]>([]);
    const { data: accountBalance, } = useBalance({ address: address });
    const [initial, setInitial] = useState<string[]>(['0', '0'])
    useEffect(() => {
        if (chainId && isSupported) {
            // @ts-ignore
            setTokenList(TOKENS[chainId]);
        }
    }, [chainId, isSupported]);
    useEffect(() => {
        const unwatch = watchNetwork(() => {
            if (address && tokenList?.length > 0) {
                fetchBalances(address, tokenList);
            }
        });
  
        return () => {
            unwatch();
        };
    }, [address, tokenList]);
    useEffect(() => {
        if (address && tokenList?.length > 0) {
            fetchBalances(address, tokenList);
        }
    }, [address, tokenList]);

    const fetchBalances = async (address: string, tokenList: ITokenItems[] | []) => {
        try {
            setIsLoading(true)
            const Contractlist = tokenList.map(token => ({
                address: token.address as `0x${string}`,
                abi: ABI.abi as any[] ,
            }));

            const contractReadsArray = Contractlist.map(contract => ({
                ...contract,
                functionName: 'balanceOf',
                args: [address],
            }));
            // @ts-ignore
            const data = await readContracts({
                contracts: contractReadsArray
            });
            const structuredTokenBalances: ITokenItems[] = (data || []).map(
                (tokenBalance: any, index: number) => {
                    const tokenInfo = tokenList[index];
                    const balance = tokenBalance.status === 'success' && typeof tokenBalance.result === 'bigint'
                        ? new BigNumber(tokenBalance.result).div(10 ** tokenInfo.decimals).toFixed(tokenInfo.decimals)
                        : '0';
                    if(tokenInfo.symbol == 'ECHO'){
                        setInitial([(accountBalance?.formatted)?.toString() || '0', balance])
                    }
                    return {
                        address: tokenInfo.address as `0x${string}`,
                        price: tokenInfo.price,
                        name: tokenInfo.name,
                        symbol: tokenInfo.symbol,
                        balance,
                        decimals: tokenInfo.decimals,
                        logoURI: tokenInfo.logoURI || '/static/img/icon/echoSwapLogo.svg',
                    };
                    
                }
            )
                .filter(tokenItem => tokenItem !== null)
                .sort((a, b) => parseFloat(b.balance) - parseFloat(a.balance));

            const ethBalance = {
                address: chainId === 5611 ? '0x4200000000000000000000000000000000000006' as `0x${string}`: '0x000000000000000000000000000000000000800A' as `0x${string}`,
                price: 0,
                name: '',
                symbol: chainId === 5611 ? 'opBNB': 'ETH',
                balance: (accountBalance?.formatted)?.toString() || '0',
                decimals: 18,
                logoURI: chainId === 5611 ? '/static/img/icon/tokens/opBNB.svg': '/static/img/icon/ethereum-eth-logo.svg'
            };

            const updatedTokenBalances = [ethBalance, ...structuredTokenBalances];
            setBalances(updatedTokenBalances);
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching balances: ", error);
            // Handle error as needed
        }
    };

    return {balances, initial, isLoading};
}