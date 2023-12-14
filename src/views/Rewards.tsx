'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from '@/assets/styles/css/modules/rewards.module.css'
import useLockHook, {initialNFTValues, IVeNFTData} from "@/contracts/hooks/useLock";
import {formatEther} from "viem";
import {useAccount} from "wagmi";
import useRewardsHook from "@/contracts/hooks/useRewards";
import {IPairBribe} from "@/interfaces/IPairBribe";
import {ITokenFromVeNFT} from "@/interfaces/ITokenFromVeNFT";
import RewardsTable from "@/controllers/RewardsTable";

export interface IRebase {
    rebase: bigint,
    nftId: string
}

export interface ISyncTokens {
    pair: `0x${string}`,
    dataArray: ITokenFromVeNFT[]
}

const Rewards = () => {
    const [epoch, setEpoch] = useState<boolean>(true)
    const [pairBribe, setPairBribe] = useState<IPairBribe[]>([])
    const {address} = useAccount();
    const {emmisionClaimable, getPairBribes, fetchGaugeAddress, getTokenNameFromVote} = useRewardsHook(address!)
    const details = useRef<any>()
    const [dataList, setDataList] = useState<string>("Total Rewards")
    const {VeNFTBalance} = useLockHook(address!);
    const [NFT, setNFT] = useState<IVeNFTData>(initialNFTValues)
    const [rebaseRows, setRebaseRows] = useState<IRebase[]>([])
    const [bribeRows, setBribeRows] = useState<ITokenFromVeNFT[][]>([])
    const [flag, setFlag] = useState<boolean>(false)
    // @ts-ignore
    const [uniqueObjects , setUniqueObjects] = useState<IPairBribe[]>([])
    // const uniqueObjects: IPairBribe[] = [];
    // @ts-ignore
    const uniqueIds: IPairBribe = {};


    // Create an object to store merged data based on tokens
    const mergedData = {};

    // Iterate through the array of data
    pairBribe.forEach(data => {
        const tokenKey = data.tokens.join(',');

        // @ts-ignore
        if (!mergedData[tokenKey]) {
            // If the token key doesn't exist, create a new entry with the data
            // @ts-ignore
            mergedData[tokenKey] = {...data};
        } else {
            // If the token key already exists, merge the data arrays
            // @ts-ignore
            mergedData[tokenKey].amounts = mergedData[tokenKey].amounts.concat(data.amounts);
            // @ts-ignore
            mergedData[tokenKey].decimals = mergedData[tokenKey].decimals.concat(data.decimals);
            // @ts-ignore
            mergedData[tokenKey].symbols = mergedData[tokenKey].symbols.concat(data.symbols);
        }
    });

    // Convert the merged data object back to an array
    const mergedArray = Object.values(mergedData);


    // Initialize an empty array to store categorized objects
    const objs: ISyncTokens[] = [];

    // Define a function to categorize the data by id
    function CategorizeById(data: ITokenFromVeNFT) {
        const existingObj = objs.find(obj => obj.pair === data.pair);

        if (existingObj) {
            // If an object with the same id already exists, add the data to its array
            existingObj.dataArray.push(data);
        } else {
            // If no object with the same id exists, create a new object and push it to the array
            objs.push({
                pair: data.pair,
                dataArray: [data]
            });
        }
    }

    useEffect(() => {
        setFlag(true)
        const nftIds = VeNFTBalance.map(obj => Number(obj.id))
        if (!flag) {
            return;
        } else {
            nftIds.map((id) => {
                emmisionClaimable(id).then((rebase: bigint) => {
                    if (Number(rebase) !== 0) {
                        setRebaseRows(oldArray => [...oldArray, {
                            rebase: rebase,
                            nftId: id.toString()
                        }]);
                    }
                })
            })
        }
    }, [VeNFTBalance])


    useEffect(() => {
        let pairs_expected_claim_for_next_epoch: { pair: string, id: number }[] = []
        let pairs_expected_claim_for_current_epoch: string[] = []

        if (epoch) {
            VeNFTBalance.filter(obj => {
                if (obj.voted) {
                    obj.votes.map((data) => {
                        pairs_expected_claim_for_next_epoch.push({
                            pair: data.pair,
                            id: obj.id
                        })
                        pairs_expected_claim_for_current_epoch.push(data.pair)
                        fetchGaugeAddress(data.pair as `0x${string}`).then(pair_address => {
                            // getTokenNameFromVote(obj.id, pair_address!).then(r => console.log(r))
                        })
                    })
                }
            })
            pairs_expected_claim_for_next_epoch.map((arr_addresses) => {
                getPairBribes(arr_addresses.pair as `0x${string}`).then(newPairBribe => {
                    const newObj = {...newPairBribe, id: arr_addresses.id};
                    // @ts-ignore
                    setPairBribe(prevState => [...prevState, newObj])
                })
            })

            // setPairBribe(pair_bribe)

            // remove redundant pair addresses
            pairs_expected_claim_for_current_epoch = [...new Set(pairs_expected_claim_for_current_epoch)]
            // pairs_expected_claim_for_current_epoch.map((data)=>{
            //     console.log(data)
            // })


            VeNFTBalance.map(data => {
                if (data.voted) {
                    data.votes.map(({pair}) => {
                        getTokenNameFromVote(data.id, pair as `0x${string}`).then(returnData => {
                            setBribeRows(prevState => [...prevState, returnData!])
                        })
                    })
                }
            })

        } else {
            setBribeRows([])
        }
    }, [VeNFTBalance, epoch])


    useEffect(() => {
        // pairBribe.map(data=>{
        //     data.
        // })

        // console.log(mergedArray);

        pairBribe.forEach(obj => {
            // @ts-ignore
            if (!uniqueIds[obj.id]) {
                // If this id is encountered for the first time, add it to the uniqueIds object
                // @ts-ignore
                uniqueIds[obj.id] = true;
                // @ts-ignore
                setUniqueObjects(obj); // Add the object to the uniqueObjects array
            }
        });

        // console.log(uniqueObjects)
        console.log(uniqueObjects)
    }, [pairBribe])


    bribeRows.map(data => {
        return data.filter(obj => {
            if (obj.token !== "0x0000000000000000000000000000000000000000") {
                return obj
            }
        })
    }).map(data => {
        data.map(obj => {
            // Call the categorizeById function for each data item
            CategorizeById(obj);
        })
    })

    // console.log(objs);
    return (
        <div className={'pt-24 md:px-20 px-8'}>
            {/* desktop view */}
            <div className="flex flex-wrap">
                <h1 className={`${styles.title}  w-full`}>Rewards</h1>
                <div className="flex w-full flex-wrap items-center justify-between pt-5 pb-11">
                    <div className="w-full md:w-auto">
                        <p className={styles.content}>Claim rewards for locking tokens, including new token emissions,
                            bribes,
                            <br/>
                            and a slice of the transaction fees from your pools</p>
                    </div>
                    <div className={`${styles.total_claim} w-full md:w-auto mt-5 lg:mt-0 hidden md:block`}>
                        <div className="flex flex-row justify-between items-center">
                            <span>Total Claimable Rewards: $0</span>
                            <button className={`btn btn-primary ms-3 rounded-none ${styles.total_claim_btn}`}>Claim All
                            </button>
                        </div>
                    </div>
                </div>
                <div className={'w-full flex-wrap justify-between flex'}>
                    <div className="w-full md:w-auto flex flex-wrap ">
                        <button
                            onClick={() => setEpoch(true)}
                            className={`btn ${epoch ? 'btn-primary' : 'btn-neutral'} rounded-none outline outline-1 outline-primary w-1/2 md:w-auto`}>CURRENT
                            EPOCH
                        </button>
                        <button
                            onClick={() => setEpoch(false)}
                            className={`btn ${epoch ? 'btn-neutral' : 'btn-primary'} rounded-none outline outline-1 outline-primary w-1/2 md:w-auto`}>NEXT
                            EPOCH
                        </button>
                    </div>


                    <details ref={details} className="dropdown mb-10 mt-5 md:mt-0 w-full md:w-auto">
                        <summary
                            className="btn btn-neutral rounded-none border border-accent w-90 md:w-60 flex flex-row justify-between border-1 border-accent-content/2 hover:border-primary hover:bg-secondary">
                            <span className={styles.dropdown_rewards}>{dataList}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2.25602 6.13729C2.49814 5.85991 2.91928 5.83131 3.19667 6.07343L8.00133 10.2672L12.806 6.07343C13.0834 5.83131 13.5045 5.8599 13.7466 6.13729C13.9887 6.41468 13.9602 6.83582 13.6828 7.07794L8.43972 11.6543C8.18857 11.8735 7.81409 11.8735 7.56294 11.6543L2.31989 7.07794C2.0425 6.83582 2.01391 6.41468 2.25602 6.13729Z"
                                      fill="#7E7E7E"/>
                            </svg>
                        </summary>

                        <ul className="p-2 border border-accent menu dropdown-content z-[1] bg-neutral shadow-3xl  w-full md:w-64">
                            {VeNFTBalance.map((data, index: number) => {
                                return <li key={index} className={styles.nft_items} onClick={(e) => {
                                    details?.current?.removeAttribute("open")
                                    setNFT(data)
                                    setDataList(`NFT #${data.id.toString()}`)
                                }}>
                                    <button disabled={data.voting_amount === BigInt(0)}
                                            className='flex flex-row justify-between'>
                                        <span>NFT#{data.id.toString()}</span>
                                        <span>{formatEther(data.voting_amount).toString().slice(0, 5)} veECHO</span>
                                    </button>
                                </li>
                            })}
                        </ul>
                    </details>

                </div>
            </div>


            <div>
                <RewardsTable rebaseRows={rebaseRows} bribesRows={objs} pairBribes={uniqueObjects}/>
            </div>
        </div>
    );
};

export default Rewards;