'use client';
import React, {useState, useEffect} from 'react';
import Button from "@/components/layouts/Button";
import Pool from "@/components/extras/Pool";
import Token from "@/components/extras/Token";
import Modal from "@/components/layouts/Modal";
import {userChooseData} from "@/store/actions/choosePoolAction";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {ILiquidityUser} from '@/interfaces/ILiquidityUser'
import {ITokenItems} from "@/interfaces/ITokenItems";
import {useAccount, useNetwork} from 'wagmi'
import {useTokenBalances} from "@/contracts/hooks/useTokensList"
import useAddLiquidity from '@/contracts/hooks/useAddLiquidity'



const ChoosePool = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [open1, setOpen1] = useState<boolean>(false)
    const [open2, setOpen2] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedPool, setSelectedPool] = useState<ILiquidityUser>()
    const [tokensBalance, setTokensBalance] = useState<ITokenItems[]>([])
    const [token, setToken] = useState<ITokenItems>()
    const [fetchAllPairs, setAllPairs] = useState<ILiquidityUser[]>([]) 

    const { address, isConnecting, isDisconnected } = useAccount()
    const dispatch = useAppDispatch();
    const { balances, initial, isLoading: isLoadingToken } = useTokenBalances(address as `0x${string}`);
    const confirmHandler = () => dispatch(userChooseData({
        isChoose: true,
        loading: false
    }))
    const handlePool = (pool: ILiquidityUser) => {
        setSelectedPool(pool);
       
    };
    const handleToken = (tokenA: ITokenItems) => {
        setToken(tokenA);
    };
    async function fetchData() {
        await fetchLiquidityPools(address as `0x${string}` )
        let filteredPools: ILiquidityUser[] = allPairs?.filter(obj => obj.bribe !== "0x0000000000000000000000000000000000000000") || []
        console.log(filteredPools)
        setAllPairs( filteredPools)
    } 
    useEffect(() => {
        setIsLoading(isLoadingToken)
        if (balances && !isLoadingToken) {
            setTokensBalance(balances);
        }
        fetchData()
    }, [ balances, isLoadingToken]);
    const {
        allPairs,
        fetchLiquidityPools,
    } = useAddLiquidity()
    // useEffect((): void => setFilter(SearchToken(balances, searchQuery)), [balances, searchQuery])

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
                        isLoading={isLoading} handlePool={handlePool}/>
                    </Modal>

                <div className={'flex flex-row w-full justify-between pb-2'}>
                    <div>Your Bribe</div>
                    <div>Balance: 34,332</div>
                </div>
                <div
                    className={'flex flex-row items-center w-full justify-between border px-3 pt-5 pb-5 border-1 border-accent'}>
                    <Modal id={'choose_token'} className={'w-full'} open={open2} setOpen={() => setOpen2(false)}>
                        <button onClick={() => setOpen2(true)}
                            className="btn btn-neutral border-none min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row flex-nowrap justify-start gap-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <g clipPath="url(#clip0_3209_3024)">
                                        <path
                                            d="M0 10C0 7.34783 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34783 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10H0Z"
                                            fill="#607AE3"/>
                                        <path
                                            d="M9.99999 17.1865L9.90332 16.8599V7.35652L9.99999 7.25985L14.41 9.86652L9.99999 17.1865Z"
                                            fill="#BCC5EE"/>
                                        <path d="M10.0002 17.1865L5.58691 9.86652L10.0002 7.25985V11.8732V17.1865Z"
                                              fill="#F7F7F7"/>
                                        <path
                                            d="M10 6.42312L9.94336 6.35645V2.97312L10 2.81312L14.4134 9.02979L10 6.42312Z"
                                            fill="#BCC5EE"/>
                                        <path d="M10.0002 2.81312V6.42312L5.58691 9.02979L10.0002 2.81312Z"
                                              fill="#F7F7F7"/>
                                        <path d="M10 7.2602L14.41 9.86687L10 11.8735V7.2602Z" fill="#7D93E7"/>
                                        <path d="M5.58691 9.86687L10.0002 7.2602V11.8735L5.58691 9.86687Z"
                                              fill="#BCC5EE"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3209_3024">
                                            <rect width="20" height="20" fill="white"
                                                  transform="matrix(1 0 0 -1 0 20)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className={'w-max'}>ETH token</span>
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
                    <Button disabled={true} onClick={confirmHandler}>choose pool</Button>
                </div>
            </div>
        </div>
    );
};

export default ChoosePool;