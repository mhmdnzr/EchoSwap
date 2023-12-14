"use client"
import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from "@/assets/styles/css/modules/lock.module.css";
import {useAccount, usePublicClient} from "wagmi";
import Image from "next/image";
import CalculateAmount from "@/extensions/CalculateAmount";
import useLock from "@/contracts/hooks/useLock";

/*date picker requirements*/
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Convertor18 from "@/extensions/Convertor18";

const address = process.env.TEST_WALLET as `0x${string}`

function CreateNewLock({updateModal}: { updateModal: (e: boolean) => void }) {
    const {address} = useAccount()
    const [balanceInput, setBalanceInput] = useState<number>(0)
    const {balanceOf, allowance, createLock, approveLock} = useLock(address!)
    const [date, setDate] = useState<Date>(new Date());
    const [day, setDay] = useState<number>(14);
    const [votingPower, setVotingPower] = useState<number>(0)
    const client = usePublicClient();

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

    async function lockHandler(): Promise<void> {
        const block = await client.getBlockNumber();
        const blockWithAddedDay = parseInt(block.toString()) + day
        createLock(Convertor18(balanceInput), blockWithAddedDay).then(r => console.log(r))
    }

    function approveHandler(): void {
        approveLock(BigInt(Convertor18(balanceInput))).then(r => console.log(r))
    }

    useEffect(()=>{
        setVotingPower(parseFloat((balanceInput * (day / (365 * 2))).toFixed(2)))
    },[day,balanceInput])


    // @ts-ignore
    return (
        <div
            className={`w-full md:w-96 h-[500px] overflow-auto  flex flex-wrap content-start p-4 border-transparent bg-neutral`}>
            <div className={'flex flex-row items-center justify-between w-full pb-5'}>
                <div className="flex flex-row justify-between">
                    <button className="pr-2" onClick={() => updateModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                        </svg>
                    </button>
                    <span className={styles.manage_echonft_title}>Create New Lock</span>
                </div>
            </div>
            <div className="w-full mt-2 text-xs flex-wrap">
                Amount
                <div className={'border w-full border-white p-2 mt-2 flex flex-col'}>
                    <div className={'flex flex-row justify-between  items-center'}>
                        <div>
                            <div className={styles.balance}>Balance: {balanceOf}</div>
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
                            <Image loading='lazy' data-src="/echo.svg" className="lazyload" src={'/echo.svg'} alt={'echo icon'} width={20} height={20}/>
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
                            className="p-0 input input-ghost text-end w-full max-w-xs min-h-0 h-5 border-none focus:border-none focus:outline-0"/>
                    </div>
                </div>
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
                {
                    allowance <= balanceInput ? <button
                            disabled={balanceInput == 0}
                            type="button"
                            onClick={approveHandler}
                            className={`disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn}`}>
                            Approve
                        </button>
                        :
                        <button
                            disabled={balanceInput == 0}
                            type="button"
                            onClick={lockHandler}
                            className={`disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent flex flex-row w-full btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-5 hover:bg-opacity-10 hover:shadow-none ${styles.add_remove_lock_btn}`}>
                            Lock
                        </button>
                }
                <span>allowance: {allowance.toString()}</span>
            </div>

        </div>
    );
}

export default CreateNewLock;