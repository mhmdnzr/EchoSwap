"use client"
import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import styles from "@/assets/styles/css/modules/lock.module.css";
import useLock from "@/contracts/hooks/useLock";
import useLockHook, {IVeNFTData} from "@/contracts/hooks/useLock";
import {useAccount, usePublicClient} from "wagmi";
import CalculateAmount from "@/extensions/CalculateAmount";
import Image from "next/image";
import Convertor18 from "@/extensions/Convertor18";
import DatePicker from "react-datepicker";
import {formatEther} from "viem";

function ManageLock({updateModal, data}: { data: IVeNFTData, updateModal: (e: boolean) => void }) {
    const [tabStatus, setTabStatus] = useState("manage")

    return (
        <div
            className={`bg-neutral w-full md:w-96 h-[500px] overflow-auto  flex flex-wrap content-start p-4 border-white !border-0 ${styles.manage_echonft_main}`}>
            <div className={'flex flex-row items-center justify-between w-full pb-5'}>
                <div className="flex flex-row justify-between">
                    <button className="pr-2" onClick={() => updateModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                        </svg>
                    </button>
                    <span className={styles.manage_echonft_title}>Manage veNFT #{data.id.toString()}</span>
                </div>
            </div>
            <div className="w-full mt-2  border border-primary flex flex-wrap justify-between">
                <button
                    onClick={() => setTabStatus("manage")}
                    className={`flex w-auto capitalize text-xs flex-row btn border-none rounded-none min-h-0 h-10  ${tabStatus === "manage" ? "btn-primary" : "bg-transparent"} ${styles.add_remove_lock_btn}`}>
                    Manage
                </button>
                <button
                    onClick={() => setTabStatus("merge")}
                    className={`flex w-auto capitalize text-xs flex-row btn border-none  rounded-none min-h-0 h-10  ${tabStatus === "merge" ? "btn-primary" : "bg-transparent"} ${styles.add_remove_lock_btn}`}>
                    Merge
                </button>
                <button
                    onClick={() => setTabStatus("split")}
                    className={`flex w-auto capitalize text-xs flex-row btn border-none  rounded-none min-h-0 h-10  ${tabStatus === "split" ? "btn-primary" : "bg-transparent"} ${styles.add_remove_lock_btn}`}>
                    Split
                </button>
                <button
                    onClick={() => setTabStatus("transfer")}
                    className={`flex w-auto capitalize text-xs flex-row btn border-none  rounded-none min-h-0 h-10  ${tabStatus === "transfer" ? "btn-primary" : "bg-transparent"} ${styles.add_remove_lock_btn}`}>
                    Transfer
                </button>
            </div>
            {tabStatus === "manage" && <ManageComponent data={data}/>}
            {tabStatus === "merge" && <MergeComponent data={data}/>}
            {tabStatus === "split" && <SplitComponent data={data}/>}
            {tabStatus === "transfer" && <TransferComponent data={data}/>}
        </div>
    );
}

function ManageComponent({data}: { data: IVeNFTData }): React.JSX.Element {
    const [day, setDay] = useState<number>(14);
    const [balanceInput, setBalanceInput] = useState<number>(0)
    const {address} = useAccount()
    const {balanceOf, allowance, increaseLock, extendDurationLock, isLoading} = useLock(address!)
    const client = usePublicClient();
    const [date, setDate] = useState<Date>(new Date());
    const [votingPower, setVotingPower] = useState<number>(0)

    function percentButtonHandler(percent: number): void {
        setBalanceInput(CalculateAmount(percent, balanceOf))
    }

    function datePickerChangeHandler(newDate: Date): void {
        setDate(newDate)
        // User-selected date
        let selectedDate = newDate

        // Get the current date
        let currentDate = new Date();

        // Calculate the time difference in milliseconds
        let timeDiff = selectedDate.getTime() - currentDate.getTime();

        // Convert milliseconds to days
        let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
        setDay(daysDiff)
        setVotingPower(parseFloat((balanceInput * (daysDiff / (365 * 2))).toFixed(2)))
    }

    async function increaseLockHandler(): Promise<void> {
        increaseLock(Convertor18(balanceInput), data.id).then(r => console.log(r))
    }

    async function extendLockHandler(): Promise<void> {
        const block = await client.getBlockNumber();
        const blockWithAddedDay = parseInt(block.toString()) + day
        extendDurationLock(data.id, blockWithAddedDay).then(r => console.log(r))
    }

    useEffect(() => {
        setVotingPower(parseFloat((balanceInput * (day / (365 * 2))).toFixed(2)))
    }, [day, balanceInput])

    return (
        <div className="w-full flex mt-5 flex-wrap  ">
            <div className="w-full text-xs flex-wrap">
                Amount
                <div className={'border w-full border-white p-2 mt-2 flex flex-col'}>
                    <div className={'flex flex-row justify-between  items-center'}>
                        <div>
                            <div className={styles.balance}>Balance: {isLoading ? <span
                                className="loading loading-spinner text-primary loading-xs"></span> : balanceOf.toString()}</div>
                        </div>
                        <div className={'flex flex-row gap-2'}>
                            <div>
                                <button
                                    onClick={() => percentButtonHandler(0.25)}
                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                    25%
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => percentButtonHandler(0.50)}
                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                    50%
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => percentButtonHandler(0.75)}
                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                    75%
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => percentButtonHandler(1)}
                                    className={`${styles.advance} animation px-1 btn btn-neutral rounded-none min-h-0 h-7 hover:bg-transparent hover:border-transparent pl-1`}>
                                    MAX
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'pt-2.5 pb-2.5 flex flex-row items-center justify-between'}>
                        <button
                            className="btn btn-neutral border-none min-h-0 h-5 hover:bg-transparent hover:border-none p-0 flex flex-row flex-nowrap justify-start gap-2">
                            <Image loading='lazy'
                                   data-src='/echo.svg'
                                   className={'lazyload'}
                                   src={'/echo.svg'}
                                   alt={'echo icon'}
                                   width={20}
                                   height={20}/>
                            <span className={`${styles.token_selection} w-max`}>Echo</span>
                        </button>
                        <input
                            value={balanceInput}
                            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                                // In general, use Number.isNaN over global isNaN as isNaN will coerce the value to a number first
                                // which likely isn't desired
                                const value = !Number.isNaN(event.target.valueAsNumber) ? event.target.valueAsNumber : 0;

                                setBalanceInput(value);
                            }}

                            type="number" placeholder="0"
                            className="p-0 input input-ghost w-full text-end max-w-xs min-h-0 h-5 border-none focus:border-none focus:outline-0"/>
                    </div>
                </div>
                <div className='w-full mt-5'>
                    {
                        <button
                            disabled={balanceInput == 0 && allowance <= balanceInput}
                            type="button"
                            onClick={increaseLockHandler}
                            className={`disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn}`}>
                            Increase Lock Amount
                        </button>
                    }
                </div>
                <div className="w-full  mt-2 text-xs flex-wrap">
                    Lock Until
                    <div className={'border w-full border-white p-2 mt-2 flex flex-col'}>

                        <DatePicker className="w-full text-white p-2 flex bg-transparent focus:outline-0 focus:border-0"
                                    selected={date} onChange={(date: Date) => datePickerChangeHandler(date)}/>

                    </div>
                    {day < 0 && <span className={`animation ${styles.date_error}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6.5C12.5523 6.5 13 6.94772 13 7.5V12.5C13 13.0523 12.5523 13.5 12 13.5C11.4477 13.5 11 13.0523 11 12.5V7.5C11 6.94772 11.4477 6.5 12 6.5ZM12 15.5C12.5523 15.5 13 15.9477 13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5Z"
                                fill="#FF9D00"/>
                        </svg>
                Please select future date
                </span>}
                </div>
                <div className="w-full p-0 flex  mt-5  flex-wrap">
                    <div
                        onClick={() => setDay(14)}
                        className={`border flex text-[12px]  flex-row w-1/4 btn hover:bg-primary bg-transparent  rounded-none min-h-0 h-10  hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn} ${day == 14 ? "shadow-3xl border-primary" : "border-transparent"}`}>
                        2 Weeks
                    </div>
                    <div
                        onClick={() => setDay(186)}
                        className={`border flex text-[12px]  flex-row w-1/4 btn hover:bg-primary bg-transparent rounded-none min-h-0 h-10  hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn} ${day == 186 ? "shadow-3xl border-primary" : "border-transparent"}`}>
                        6 Weeks
                    </div>
                    <div
                        onClick={() => setDay(365)}
                        className={`border flex text-[12px]  flex-row w-1/4 btn hover:bg-primary bg-transparent rounded-none min-h-0 h-10  hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn} ${day == 365 ? "shadow-3xl border-primary" : "border-transparent"}`}>
                        1 year
                    </div>
                    <div
                        onClick={() => setDay(730)}
                        className={`border flex text-[12px]  flex-row w-1/4 btn hover:bg-primary bg-transparent rounded-none min-h-0 h-10  hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn} ${day == 730 ? "shadow-3xl border-primary" : "border-transparent"}`}>
                        2 years
                    </div>
                </div>
                <div className="w-full mt-5 font-bold flex justify-between items-center">
                <span>
                    Your Voting Power will be:
                </span>
                    <span>{votingPower}</span>
                </div>
                <div className='w-full mt-5'>
                    <button
                        onClick={extendLockHandler}
                        type="button"
                        className={`disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn}`}>
                        Extend Duration
                    </button>
                </div>
            </div>
        </div>
    )
}

function MergeComponent({data}: { data: IVeNFTData }): React.JSX.Element {
    const details = useRef<any>()
    const {address} = useAccount();
    const {VeNFTBalance, mergeLock} = useLockHook(address!);
    const [NFT, setNFT] = useState<IVeNFTData>()

    function mergeHandler(): void {
        mergeLock(data.id, NFT!.id).then(r => console.log(r))
    }

    if (VeNFTBalance.length == 0 || VeNFTBalance.length == 1) {
        return <div className="w-full flex mt-5 items-center">
            <div className='w-full flex bg-amber-400 bg-opacity-10 justify-evenly p-3 flex-wrap mt-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6.5C12.5523 6.5 13 6.94772 13 7.5V12.5C13 13.0523 12.5523 13.5 12 13.5C11.4477 13.5 11 13.0523 11 12.5V7.5C11 6.94772 11.4477 6.5 12 6.5ZM12 15.5C12.5523 15.5 13 15.9477 13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5Z"
                          fill="#FF9D00"/>
                </svg>
                <div className="text-amber-500 text-xs mt-1">
                    You can not merge with 1 NFT in your wallet!
                </div>
            </div>
        </div>
    } else {
        return (
            <div className="w-full flex mt-5 flex-wrap">
                <div className="w-full flex justify-between text-xs flex-wrap">
                    <span>veECHO ID</span>
                    <span>veECHO balance: {formatEther(data.voting_amount).toString().slice(0, 6)}</span>
                    <div className={'w-full border-white  mt-2 flex flex-col'}>
                        <input disabled={true} type="text" defaultValue={`Token #${data.id.toString()}`}
                               className="disabled:bg-neutral input input-bordered rounded-none w-full  min-h-0 h-12 border disabled:border-accent"/>
                    </div>
                </div>
                <div className="w-full flex justify-between text-xs mt-5 flex-wrap">
                    <span>Merge To</span>
                    <span>veECHO balance: {NFT?.voting_amount.toString().slice(0, 6)}</span>
                    <div className={'w-full border-white  mt-2 flex flex-col'}>
                        <details ref={details} className="dropdown w-full">
                            <summary
                                className="btn btn-neutral rounded-none border border-accent w-full flex flex-row justify-between border-1 border-accent-content/2 hover:border-primary hover:bg-secondary min-h-0 h-12">
                                <span className={styles.dropdown_rewards}>NFT #{NFT?.id.toString()}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M2.25602 6.13729C2.49814 5.85991 2.91928 5.83131 3.19667 6.07343L8.00133 10.2672L12.806 6.07343C13.0834 5.83131 13.5045 5.8599 13.7466 6.13729C13.9887 6.41468 13.9602 6.83582 13.6828 7.07794L8.43972 11.6543C8.18857 11.8735 7.81409 11.8735 7.56294 11.6543L2.31989 7.07794C2.0425 6.83582 2.01391 6.41468 2.25602 6.13729Z"
                                          fill="#7E7E7E"/>
                                </svg>
                            </summary>

                            <ul className="p-2 border-accent menu dropdown-content z-[1] bg-neutral shadow-3xl w-80">
                                {VeNFTBalance.filter(obj => obj.id !== data.id).map((data, index: number) => {
                                    return <li key={index} className={styles.nft_items} onClick={() => {
                                        details.current?.removeAttribute("open")
                                        setNFT(data)
                                    }}>
                                        <div className='flex flex-row justify-between'>
                                            <span>NFT#{data.id.toString()}</span>
                                            <span>{formatEther(data.voting_amount).toString()} veECHO</span>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center text-xs mt-5 flex-wrap">
                    <span>Token #{data.id.toString()} veEcho balance</span>
                    <span className="text-xl">797.24 <span className="text-xs">(96.36)</span></span>
                </div>
                <div className='w-full mt-5'>
                    <button
                        disabled={NFT == undefined}
                        type="button"
                        onClick={mergeHandler}
                        className={`disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn}`}>
                        Merge
                    </button>
                </div>
                <div className='w-full flex bg-amber-400 bg-opacity-10 justify-evenly p-3 flex-wrap mt-5'>
                    <div className="w-1/12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6.5C12.5523 6.5 13 6.94772 13 7.5V12.5C13 13.0523 12.5523 13.5 12 13.5C11.4477 13.5 11 13.0523 11 12.5V7.5C11 6.94772 11.4477 6.5 12 6.5ZM12 15.5C12.5523 15.5 13 15.9477 13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5Z"
                                  fill="#FF9D00"/>
                        </svg>
                    </div>
                    <div className="w-10/12 text-amber-500 text-xs">
                        Merging/splitting will cause a loss of unclaimed and pending rewards, make sure to claim
                        everything
                        behorehand.
                    </div>
                </div>
            </div>
        )
    }
}

function SplitComponent({data}: { data: IVeNFTData }): React.JSX.Element {
    interface ISplit {
        id: number;
        amount: number;
        percent: number;
    }

    const {address} = useAccount();
    const {splitNFT} = useLockHook(address!)
    const balance = parseFloat(data.voting_amount.toString().slice(0, 6))
    const [tokenNo, setTokenNo] = useState<number>(2)
    let mockData: ISplit[] = []
    const [myData, setMyData] = useState<Array<ISplit>>()
    const increase = (number: number) => {
        setMyData([])
        for (let i = 0; i <= number; i++) {
            mockData.push({id: i + 1, amount: balance / tokenNo, percent: 100 / tokenNo})
        }
        setMyData(mockData)
    }
    const decrease = (number: number) => {
        for (let i = 0; i <= number; i++) {
            mockData.slice(number, (mockData.length - 1))
        }
        setMyData(mockData)
    }

    useEffect(() => {
        if (tokenNo > mockData.length) {
            increase(tokenNo - 1)
        } else {
            decrease(tokenNo - 1)
        }
    }, [tokenNo]);

    function splitHandler() {
        const percents: number[] = [];
        for (let i: number = 0; i < myData!.length; i++) {
            const percent: number = myData![i].percent;
            if (percent) {
                percents.push(Math.floor(percent));
            }
        }
        console.log(percents, data.id)
        splitNFT(percents, Number(data.id)).then(r => console.log('from here: ', r))
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, id: number, field: string) {
        const updatedData = myData?.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    [field]: Number(e.target.value)
                }
            }
            return item
        })
        setMyData(updatedData)
    }

    return (
        <div className="w-full flex mt-5 flex-wrap">
            <div className="w-full flex justify-between text-xs flex-wrap">
                <span>veECHO ID</span>
                <span>veECHO balance: {formatEther(data.voting_amount).toString().slice(0, 6)}</span>
                <div className="w-full p-0 flex  mt-5  flex-wrap">
                    <div
                        onClick={() => setTokenNo(2)}
                        className={`flex text-[12px]  flex-row w-1/4 btn hover:bg-transparent  rounded-none min-h-0 h-10  hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn} ${tokenNo === 2 && "shadow-3xl border border-primary"}`}>
                        2 Tokens
                    </div>
                    <div
                        onClick={() => setTokenNo(3)}
                        className={`flex text-[12px]  flex-row w-1/4 btn hover:bg-transparent  rounded-none min-h-0 h-10  hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn} ${tokenNo === 3 && "shadow-3xl border border-primary"}`}>
                        3 Tokens
                    </div>
                    <div
                        onClick={() => setTokenNo(4)}
                        className={`flex text-[12px]  flex-row w-1/4 btn hover:bg-transparent  rounded-none min-h-0 h-10  hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn} ${tokenNo === 4 && "shadow-3xl border border-primary"}`}>
                        4 Tokens
                    </div>
                    <input
                        type="number"
                        placeholder="Enter Amount"
                        onChange={(e) => setTokenNo(Number(e.target.value))}
                        contentEditable="true"
                        className={`flex text-[12px]  flex-row w-1/4 btn hover:bg-transparent  rounded-none min-h-0 h-10  hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn} `}/>
                </div>
            </div>
            <div className="w-full mt-5 text-xs flex flex-wrap ">
                <div className="w-full justify-between flex flex-wrap">
                    <div>NO</div>
                    <div>veECHO Amount</div>
                    <div>Percentage</div>
                </div>
                {
                    myData?.map((item, index) => (
                        <div key={index} className="flex w-full p-2 border my-1 flex-wrap justify-between">
                            <input disabled={true} value={myData[index].id} type="number"
                                   className="p-2 rounded bg-transparent w-1/3"
                                   name="" id=""/>
                            <input onChange={e => handleInputChange(e, item.id, "amount")}
                                   value={Math.floor(myData[index].amount)} type="number"
                                   className="p-2 rounded bg-transparent w-1/3" name="" id=""/>
                            <input onChange={e => handleInputChange(e, item.id, "percent")}
                                   value={Math.floor(myData[index].percent)} type="number"
                                   className="p-2 rounded bg-transparent w-1/3" name="" id=""/>
                        </div>
                    ))
                }

            </div>
            <div className="w-full mt-5 text-xs flex justify-between items-center flex-wrap ">
                <span className="text-xs">Total Split Amount：100%</span>
                <button onClick={() => setTokenNo(2)} className="text-xs btn p-1 btn-neutral">Reset</button>
            </div>
            <div className='w-full mt-5'>
                <button
                    onClick={splitHandler}
                    className={`flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn}`}>
                    Split
                </button>
            </div>
            <div className='w-full flex bg-amber-400 bg-opacity-10 justify-evenly p-3 flex-wrap mt-5'>
                <div className="w-1/12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6.5C12.5523 6.5 13 6.94772 13 7.5V12.5C13 13.0523 12.5523 13.5 12 13.5C11.4477 13.5 11 13.0523 11 12.5V7.5C11 6.94772 11.4477 6.5 12 6.5ZM12 15.5C12.5523 15.5 13 15.9477 13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5Z"
                              fill="#FF9D00"/>
                    </svg>
                </div>
                <div className="w-10/12 text-amber-500 text-xs">
                    Merging/splitting will cause a loss of unclaimed and pending rewards, make sure to claim everything
                    behorehand.
                </div>
            </div>
        </div>
    )
}

function TransferComponent({data}: { data: IVeNFTData }): React.JSX.Element {
    const {address} = useAccount()
    const {transferLock} = useLock(address!)
    const [destination_account, setDestination_account] = useState<`0x${string}`>('' as `0x${string}`)

    function transferHandler() {
        transferLock(address!, destination_account, data.id).then(r => console.log(r))
    }

    return (
        <div className="w-full flex mt-5 flex-wrap">
            <div className="w-full flex justify-between text-xs flex-wrap">
                <span>Transfer veECHO to</span>
                <div className={'w-full border-white  mt-2 flex flex-col'}>
                    <input
                        type="text"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDestination_account(event.target.value as `0x${string}`)}
                        placeholder="0x"
                        className="input input-bordered rounded-none w-full  min-h-0 h-12 border border-accent"/>
                </div>
            </div>
            <div className='w-full mt-5'>
                <button
                    disabled={destination_account.trim() === ""}
                    type="button"
                    onClick={transferHandler}
                    className={`disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn}`}>
                    Transfer
                </button>
            </div>
        </div>
    )
}


export default ManageLock;