'use client'
import styles from '@/assets/styles/css/modules/vote.module.css'
import Link from "next/link";
import VoteTable from "@/controllers/VoteTable";
import useVoteHook from "@/contracts/hooks/useVote";
import {useAccount} from "wagmi";
import React, {useEffect, useMemo, useRef, useState} from "react";
import SearchToken from "@/extensions/SearchToken";
import useLockHook, {initialNFTValues, IVeNFTData} from "@/contracts/hooks/useLock";
import {formatEther} from "viem";
import {ILiquidityUser} from "@/interfaces/ILiquidityUser";
import {ILiquidityData} from "@/interfaces/ILiquidityData";
import useAddLiquidity from "@/contracts/hooks/useAddLiquidity";
import useRewardsHook from "@/contracts/hooks/useRewards";
import useUnixConvertor from "@/hooks/useUnixConvertor";
import useBlockChainTimeStamp from "@/hooks/useBlockChainTimeStamp";


const Vote = () => {
    const {block, isLoading: tsIsLoading} = useBlockChainTimeStamp()
    const [veNFTBalance, setVeNFTBalance] = useState<string>('0')
    const [emmisions, setEmmision] = useState<string>('0')
    const {address} = useAccount();
    const {emmisionClaimable} = useRewardsHook(address!)
    const {isLoading, castVote, resetVote, balanceOfNFT, period, activePeriod} = useVoteHook(address!)
    let sevenDays = (7 * 24 * 60 * 60) + (period) - (!tsIsLoading ? Number(block.timestamp) : 0)
    let epoch = parseInt(String(((!tsIsLoading ? Number(block.timestamp) : 0) - activePeriod) / (7 * 24 * 60 * 60))) + 1
    const {day, hour, minutes, seconds} = useUnixConvertor(sevenDays);
    const {VeNFTBalance} = useLockHook(address!);
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [filter, setFilter] = useState<ILiquidityUser[]>([])
    const [NFT, setNFT] = useState<IVeNFTData>(initialNFTValues)
    const details = useRef<any>()
    const [totalVote, setTotalVote] = useState<number>(0)
    const [voted, setVoted] = useState<boolean>(false);
    const [votedNFTPairAddresses, setVotedPairAddresses] = useState<string[]>([''])
    const [liquidityPoolsBalance, setLiquidityPoolsBalance] = useState<ILiquidityUser[]>([])
    const [allPools, setAllPools] = useState<ILiquidityUser[]>([])
    const [liquidityData, setLiquidityData] = useState<ILiquidityData>({
        heads: ['Name', 'ARP', 'Total Staked', 'My Staked', 'My Pool', 'Earnings'],
        data: [], // Start with an empty array
        liquidityPoolsBalance: []
    });
    const [disabledButtons, setDisabledButtons] = useState<boolean>(false)
    const {isLoadingLiquidity, liquidityBalance, liquidityPools, allPairs, fetchLiquidityPools} = useAddLiquidity()

    const [rowInputs, setRowInputs] = useState<string[]>([]);

    // Create a ref to store the memoized row components
    const rowComponentsRef = useRef<JSX.Element>();


    useEffect(() => {
        fetchLiquidityPools(address as `0x${string}`).then(r => {
            // console.log(r)
        });
    }, [address, fetchLiquidityPools]);
    useEffect(() => {
        if (!isLoadingLiquidity && liquidityPools && liquidityBalance && allPairs) {
            setLiquidityData(prevState => ({
                ...prevState,
                data: allPairs,
            }));
            setLiquidityPoolsBalance(liquidityPools)
            setAllPools(allPairs.filter(obj => obj.pair_address !== "0x0000000000000000000000000000000000000000" && obj.gauge != '0x0000000000000000000000000000000000000000'))
        }

    }, [liquidityPools, liquidityBalance, isLoadingLiquidity]);
    useEffect((): void => setFilter(SearchToken(allPools, searchQuery) as ILiquidityUser[]), [allPools, searchQuery])


    function resetVoteHandler() {
        if (NFT.voted) {
            resetVote(NFT.id).then(r => {
                console.log(r)
            })
        }
    }


    // initialization of rowInputs
    useEffect(() => {
        const defaultRowInputs = allPools.map((_, index) => rowInputs[index] || '0');
        setRowInputs(defaultRowInputs);
    }, [allPools]);
    // Use useMemo to memoize the row components
    // Store the memoized row components in the ref
    rowComponentsRef.current = useMemo(() => (
        <VoteTable
            isLoading={false}
            rows={filter}
            callBack={(data) => setTotalVote(data)}
            onInputChange={(data) => setRowInputs(data.map((votes) => votes.inputValue))}
            setDisabledButtons={setDisabledButtons}
        />), [filter]);

    function castVoteHandler() {

        balanceOfNFT(NFT.id).then(weight => {
            // Array of percentage values
            const convertRowsInputToNumber = rowInputs.map(str => parseFloat(str))

            // Variable to calculate percentages of
            const convertWeightToNumber = Number(weight); // Change this to your desired value

            // Calculate percentages
            const allVotes = convertRowsInputToNumber.map(percent => ((percent / 100) * convertWeightToNumber));

            const poolsWithVote = allPools.map((v, index) => ({...v, vote: allVotes[index]}))
            const filterZeroVotes = poolsWithVote.filter(data => data.vote !== 0)

            const votes = filterZeroVotes.map(data => data.vote)
            const pair_addresses = filterZeroVotes.map(obj => obj.pair_address)

            // castVote(NFT.id, pair_addresses, votes).then(r => {
            //     console.log(r)
            // })
        })
    }

    useEffect(() => {
        let allVotingSummation: bigint = BigInt(0)
        let allEmmisionSummation: bigint = BigInt(0)
        VeNFTBalance.map(obj => {
            allVotingSummation += obj.voting_amount
        })
        setVeNFTBalance(formatEther(allVotingSummation))

        VeNFTBalance.map(data => {
            emmisionClaimable(data.id).then((emmision: bigint) => {
                allEmmisionSummation += emmision
            })
        })
        setEmmision(formatEther(allEmmisionSummation))


        // console.log(VeNFTBalance)

    }, [VeNFTBalance])

    // useEffect(()=>{
    //     const unixTime = epoch;
    //     const date = new Date(unixTime*1000);
    //     console.log(date.toLocaleDateString("en-US"));
    // },[epoch])
    // useEffect(()=>{
    //     console.log(allPools)
    // },[allPools])
    useEffect(() => {
        if (voted) {
            // Filter the liquidityBalanceArray to get objects with matching pair_address
            setAllPools(allPools.filter(liquidityBalance =>
                NFT.votes.some(vote =>
                    vote.pair === liquidityBalance.pair_address
                )
            ))
        } else {
            if (!isLoadingLiquidity && liquidityPools && liquidityBalance && allPairs) {
                setLiquidityData(prevState => ({
                    ...prevState,
                    data: allPairs,
                }));
                setLiquidityPoolsBalance(liquidityPools)
                setAllPools(allPairs.filter(obj => obj.pair_address !== "0x0000000000000000000000000000000000000000" && obj.gauge != '0x0000000000000000000000000000000000000000'))
            }
        }
    }, [voted])


    useEffect(() => {

        console.log(period)


    }, [period])

    useEffect(() => {
        console.log(allPairs)
    }, [allPairs])
    return (
        <div className='p-5 md:py-24 md:px-20'>
            <div className="flex flex-col">
                <div className="flex flex-wrap justify-between items-stretch">
                    <div className='flex w-full md:w-auto flex-col gap-5'>
                        <h1 className={styles.title}>vote</h1>
                        <p className={styles.content}>
                            Vote weekly to earn Fees & Bribes from your veNFT <br/>
                            <Link className={styles.learn_more} href={'/'} passHref>Learn More</Link>
                        </p>
                    </div>
                    <div className='flex w-full mt-3 md:0 md:w-2/3 flex-wrap  items-center gap-3'>
                        <div
                            className='pt-3 px-5 pb-5 border justify-between  border-accent flex w-full md:flex-col md:w-fit gap-2.5'>
                            <p className={styles.box_title}>Your veTHE Balance</p>
                            <span className={`${styles.box_content}`}>{Number(veNFTBalance).toFixed(3)}</span>
                        </div>
                        <div
                            className='pt-3 px-5 pb-5 border justify-between border-accent flex w-full md:flex-col md:w-fit gap-2.5'>
                            <p className={styles.box_title}>Emissions / % of Vote</p>
                            <span className={styles.box_content}>${Number(emmisions).toFixed(3)}</span>
                        </div>
                        <div
                            className='pt-3 px-5 pb-5 border justify-between border-accent flex w-full md:flex-col md:w-fit gap-2.5'>
                            <p className={styles.box_title}>Average Voting APR</p>
                            <span className={styles.box_content}>455.00%</span>
                        </div>
                        <div
                            className='pt-3 px-5 pb-5 border justify-between border-accent flex w-full md:flex-col md:w-fit gap-2.5'>
                            <p className={styles.box_title}>Epoch {epoch} Ends In</p>
                            <p className={styles.box_content}>
                                <span className='text-primary'>{day}d {hour}h {minutes}m</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between pt-16 pb-16">
                    <div className='flex flex-wrap items-center justify-between gap-4'>
                        <div className="relative w-full md:w-fit text-gray-600 focus-within:text-gray-400">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                         fill="none">
                                        <path
                                            d="M14.8528 14.1434L11.7651 11.0555C12.7031 9.95239 13.2128 8.56934 13.2128 7.10685C13.2128 5.47515 12.5777 3.94166 11.4246 2.78839C10.2714 1.63514 8.73801 1 7.10642 1C5.47483 1 3.94145 1.63514 2.78826 2.78839C1.63509 3.94164 1 5.47515 1 7.10685C1 8.73856 1.63509 10.272 2.78826 11.4253C3.94143 12.5786 5.47483 13.2137 7.10642 13.2137C8.5688 13.2137 9.95385 12.7019 11.0548 11.7659L14.1425 14.8537C14.2406 14.9519 14.3681 15 14.4976 15C14.6271 15 14.7546 14.952 14.8527 14.8537C15.0491 14.6574 15.0491 14.3398 14.8527 14.1434H14.8528ZM3.49858 10.7171C1.50768 8.72601 1.50768 5.48768 3.49858 3.49874C4.46164 2.53561 5.74435 2.00285 7.10852 2.00285C8.47269 2.00285 9.75331 2.53351 10.7185 3.49874C12.7094 5.48979 12.7094 8.72811 10.7185 10.7171C8.72547 12.706 5.4874 12.706 3.49858 10.7171Z"
                                            fill="#7E7E7E"/>
                                    </svg>
                                    </button>
                                </span>
                            <input
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
                                type="text" name="q"
                                placeholder="Search Pair or Token"
                                className="pl-10 input input-bordered rounded-none w-full md:w-60  min-h-0 h-12 border border-accent"/>
                        </div>

                        <details ref={details} className="dropdown w-full md:w-auto">
                            <summary
                                className="btn btn-neutral rounded-none border border-accent w-90 md:w-80 flex flex-row justify-between border-1 border-accent-content/2 hover:border-primary hover:bg-secondary min-h-0 h-12">
                                <span className={styles.dropdown_rewards}>NFT #{NFT?.id.toString()}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M2.25602 6.13729C2.49814 5.85991 2.91928 5.83131 3.19667 6.07343L8.00133 10.2672L12.806 6.07343C13.0834 5.83131 13.5045 5.8599 13.7466 6.13729C13.9887 6.41468 13.9602 6.83582 13.6828 7.07794L8.43972 11.6543C8.18857 11.8735 7.81409 11.8735 7.56294 11.6543L2.31989 7.07794C2.0425 6.83582 2.01391 6.41468 2.25602 6.13729Z"
                                          fill="#7E7E7E"/>
                                </svg>
                            </summary>

                            <ul className="p-2 border-accent menu dropdown-content z-[1] bg-neutral shadow-3xl w-80">
                                {VeNFTBalance.map((data, index: number) => {
                                    return <li key={index} className={styles.nft_items} onClick={(e) => {
                                        details?.current?.removeAttribute("open")
                                        setNFT(data)
                                    }}>
                                        <button disabled={data.voting_amount === BigInt(0)}
                                                className='flex flex-row justify-between'>
                                            <span>NFT#{data.id.toString()}</span>
                                            <span>{formatEther(data.voting_amount).toString()} veECHO</span>
                                        </button>
                                    </li>
                                })}
                            </ul>
                        </details>


                        <div className="form-control flex flex-wrap justify-between">
                            <label className="cursor-pointer label">
                                <input
                                    checked={voted}
                                    onChange={() => setVoted(prevCheck => !prevCheck)}
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                    disabled={!NFT.voted}
                                />
                                <span className={`label-text pl-1 ${styles.vote_switch}`}>Voted Only</span>
                            </label>
                        </div>

                    </div>
                    <div>
                        {/*<p className={styles.expect_rewards}>Expected Rewards:$1.3</p>*/}
                    </div>
                </div>


                {rowComponentsRef.current}

                <div className="fixed w-full left-5 md:left-1/4 bottom-9 inset-x-1/3">
                    <div className='w-11/12 md:w-3/6 flex flex-wrap bg-primary pt-3 pb-3 px-2 md:px-5'>
                        <div className="flex w-full justify-between items-center">
                            <p className={`${styles.voting_count} w-1/2`}>
                                <div>Voting Power Used：{NFT.voted ? 'voted' : `${totalVote}%`}</div>
                            </p>
                            <div className='flex flex-row justify-end w-2/3 md:w-auto'>
                                <button
                                    disabled={disabledButtons}
                                    onClick={castVoteHandler}
                                    className={`btn btn-neutral rounded-none min-h-0 h-10 disabled:bg-opacity-[0.4] ${styles.vote_button}`}>Cast
                                    Votes
                                </button>
                                <button
                                    onClick={resetVoteHandler}
                                    className={`btn btn-primary rounded-none min-h-0 h-10 ${styles.vote_button}`}>Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vote;



