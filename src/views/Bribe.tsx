'use client';
import React, {useEffect, useState} from 'react';
import Button from "@/components/layouts/Button";
import Image from 'next/image';
import Pool from "@/components/extras/Pool";
import Token from "@/components/extras/Token";
import Modal from "@/components/layouts/Modal";
import {ILiquidityUser} from '@/interfaces/ILiquidityUser'
import {ITokenItems} from "@/interfaces/ITokenItems";
import {useAccount} from 'wagmi'
import {useTokenBalances} from "@/contracts/hooks/useTokensList"
import useAddLiquidity from '@/contracts/hooks/useAddLiquidity'
import {useNetworkInfo} from '@/contracts/hooks/useNetworkInfo';
import {CONTRACT_ADDRESSES} from '@/constants/constants/contractAddresses'

const Bribe = () => {
    // const choosePool = useAppSelector((state: any) => state.choosePool);
    // console.log(choosePool)
    const {chainId: chain, isSupported} = useNetworkInfo();
    const {
        isLiquidityPoolExists,
        allPairs,
        fetchLiquidityPools,
    } = useAddLiquidity()
    const {address, isConnecting, isDisconnected} = useAccount()
    const {balances, initial, isLoading: isLoadingToken} = useTokenBalances(address as `0x${string}`);
    // const dispatch = useAppDispatch();
    // const confirmHandler = () => dispatch(userChooseData({
    //     isChoose: true,
    //     loading: false
    // }))
    const [chainId, setChainId] = useState<number>(5611);
    useEffect(() => {
        if (chain && chain === 5611 || chain === 280) {
            setChainId(chain)
        }
    }, [chain]);

    const CHAIN_CONFIGS: { [chainId: number]: { tokenA: ITokenItems, } } = {
        280: {
            tokenA: {
                logoURI: '/static/img/icon/ethereum-eth-logo.svg',
                decimals: 18,
                balance: '0',
                address: '0x000000000000000000000000000000000000800A',
                symbol: 'ETH',
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
        }
    };
    const currentConfig = CHAIN_CONFIGS[chainId];
    const contractList = CONTRACT_ADDRESSES[chainId]
    const {tokenA: InitialA,} = currentConfig;
    const percentages = [25, 50, 75, 100];
    const [open, setOpen] = useState<boolean>(false)
    const [isFetching, setIsFetching] = useState<boolean>(false)
    const [open2, setOpen2] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedPool, setSelectedPool] = useState<ILiquidityUser>()
    const [tokensBalance, setTokensBalance] = useState<ITokenItems[]>([])
    const [token, setToken] = useState<ITokenItems>(InitialA)
    const [fetchAllPairs, setAllPairs] = useState<ILiquidityUser[]>([])
    const [Allowance, setAllowanceToken] = useState<bigint>(BigInt(0))
    const [balance, setbalance] = useState<string>('0')


    async function fetchData() {
        await fetchLiquidityPools(address as `0x${string}`)
        let filteredPools: ILiquidityUser[] = allPairs?.filter(obj => obj.bribe !== "0x0000000000000000000000000000000000000000") || []
        setIsFetching(false)
        setAllPairs(filteredPools)
    }

    useEffect(() => {
        if (balances) {
            const tokenBalance = balances.find(token => token.address === token.address)?.balance || '0';
            setToken(prevToken => ({...prevToken, balance: tokenBalance}));
        }
    }, [balances, isLoading]);
    useEffect(() => {
        if(!isLiquidityPoolExists){
        fetchData()
        if (token.balance) {
            setbalance(token.balance?.toString())
        }
        if (token.symbol !== 'ETH' && token.symbol !== 'opBNB') {
            fetchData()
        } else {
            setAllowanceToken(BigInt(2 ** 256 - 1));
        }
        }
        setIsFetching(true)
    }, [token, address, selectedPool]);

    useEffect(() => {
        setIsLoading(isLoadingToken)
        if (balances && !isLoadingToken) {
            setTokensBalance(balances);
        }
    }, [balances, isLoadingToken]);

    // useEffect((): void => setFilter(SearchToken(balances, searchQuery)), [balances, searchQuery])
    const handlePool = (pool: ILiquidityUser) => {
        setSelectedPool(pool);

    };
    const handleToken = (tokenA: ITokenItems) => {
        setToken(tokenA);
    };
    return (
        <div className={'flex flex-col justify-center items-center h-screen'}>
            <div className={'w-60 md:w-96 flex flex-col items-center'}>

                <Modal id={'choose_token'} className={'w-full'} open={open} setOpen={() => setOpen(false)}>
                    <button onClick={() => setOpen(true)}
                            className='pb-10 btn btn-neutral border-none min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row align-center items-center justify-between gap-2'>
                        <div>choose pool</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M0.256022 1.13729C0.498139 0.859906 0.919279 0.831314 1.19667 1.07343L6.00133 5.26717L10.806 1.07343C11.0834 0.831312 11.5045 0.859905 11.7466 1.13729C11.9887 1.41468 11.9602 1.83582 11.6828 2.07794L6.43972 6.65432C6.18857 6.87354 5.81409 6.87354 5.56294 6.65432L0.319885 2.07794C0.0424985 1.83582 0.0139062 1.41468 0.256022 1.13729Z"
                                      fill="#7E7E7E"/>
                            </svg>
                        </div>

                    </button>
                    <Pool updateModal={(e) => setOpen(e)} fetchAllPairs={fetchAllPairs}
                          isLoading={isFetching} handlePool={handlePool}/>
                </Modal>

                <div className={'flex flex-row w-full justify-between pb-2'}>
                    <div>Your Bribe</div>
                    <div>Balance: {parseFloat(balance).toFixed(5)}</div>
                </div>
                <div
                    className={'flex flex-row items-center w-full justify-between border px-3 pt-5 pb-5 border-1 border-accent'}>
                    <Modal id={'choose_token'} className={'w-full'} open={open2} setOpen={() => setOpen2(false)}>
                        <button onClick={() => setOpen2(true)}
                                className="btn btn-neutral border-none min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row flex-nowrap justify-start gap-2">
                            <Image loading='lazy'
                                data-src={token.logoURI}
                                className={'lazyload'}
                                src={token.logoURI}
                                alt={token.name}
                                width={20}
                                height={21}/>
                            <span className={'w-max'}>{token.symbol}</span>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M2.25602 6.13729C2.49814 5.85991 2.91928 5.83131 3.19667 6.07343L8.00133 10.2672L12.806 6.07343C13.0834 5.83131 13.5045 5.8599 13.7466 6.13729C13.9887 6.41468 13.9602 6.83582 13.6828 7.07794L8.43972 11.6543C8.18857 11.8735 7.81409 11.8735 7.56294 11.6543L2.31989 7.07794C2.0425 6.83582 2.01391 6.41468 2.25602 6.13729Z"
                                          fill="#858E9B"/>
                                </svg>
                            </div>
                        </button>
                        <Token updateModal={(e) => setOpen2(e)} filter_button={true} balances={tokensBalance}
                               isLoading={isLoading} handleToken={handleToken}/>
                        <div>take a look source</div>
                    </Modal>


                    <div>
                        <input type="number" placeholder="0"
                               className="p-0 text-end input input-ghost w-full max-w-xs min-h-0 h-5 border-none focus:border-none focus:outline-0"/>
                    </div>
                </div>
                <div className={'w-full'}>
                    <Button disabled={true} onClick={() => setOpen2(true)}>choose pool</Button>
                </div>
            </div>
        </div>
    );
};

export default Bribe;