'use client'
import React, {memo} from 'react';
import styles from '@/assets/styles/css/modules/swap.module.css'
import {useAppDispatch} from "@/hooks/useAppDispatch";

interface TransactionSettingProps {
    updateModal: (e: boolean) => void;
    tolerance: number;
    setTolerance: React.Dispatch<React.SetStateAction<number>>;
    deadline: number;
    setDeadline: React.Dispatch<React.SetStateAction<number>>;
}

const TransactionSetting = ({updateModal, tolerance, setTolerance, deadline, setDeadline}: TransactionSettingProps) => {
    const handleToleranceChange = (value: number) => {
        setTolerance(value);
    }

    const handleDeadlineChange = (value: number) => {
        setDeadline(value);
    }
    const dispatch = useAppDispatch();
    // useEffect((): void => {
    //     dispatch(userSettingModalData({
    //         transactionSpeed: '',
    //         transactionDeadline: deadline.toString(),
    //         tolerance: tolerance,
    //     },));
    // }, [dispatch, tolerance, deadline]);

    const toleranceHandler = (tolerance_param: string) => {
        const convertToNumber = Number(tolerance_param)
        setTolerance(convertToNumber)
    }
    const deadlineHandler = (deadline_param: string) => {
        const convertToNumber = Number(deadline_param)
        setDeadline(convertToNumber)
    }

    return (
        <div className={`bg-neutral shadow-3xl p-4`}>
            <div className="flex flex-row items-center justify-between">
                <p className={`${styles.transaction_setting_title}`}>transaction settings</p>
                <button onClick={() => updateModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_3202_2019)">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12.9156 4.02674C13.176 3.76639 13.176 3.34428 12.9156 3.08393C12.6553 2.82358 12.2332 2.82358 11.9728 3.08393L7.99989 7.05687L4.02696 3.08393C3.76661 2.82358 3.3445 2.82358 3.08415 3.08393C2.8238 3.34428 2.8238 3.76639 3.08415 4.02674L7.05708 7.99967L3.08393 11.9728C2.82358 12.2332 2.82358 12.6553 3.08393 12.9156C3.34428 13.176 3.76639 13.176 4.02674 12.9156L7.99989 8.94248L11.973 12.9156C12.2334 13.176 12.6555 13.176 12.9158 12.9156C13.1762 12.6553 13.1762 12.2332 12.9158 11.9728L8.9427 7.99967L12.9156 4.02674Z"
                                  fill="#7E7E7E"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_3202_2019">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            <div className="pt-4 flex flex-row justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                        d="M10.875 9.75C10.875 9.84946 10.8355 9.94484 10.7652 10.0152C10.6948 10.0855 10.5995 10.125 10.5 10.125H1.5C1.40054 10.125 1.30516 10.0855 1.23483 10.0152C1.16451 9.94484 1.125 9.84946 1.125 9.75V2.25C1.125 2.15054 1.16451 2.05516 1.23483 1.98484C1.30516 1.91451 1.40054 1.875 1.5 1.875C1.59946 1.875 1.69484 1.91451 1.76516 1.98484C1.83549 2.05516 1.875 2.15054 1.875 2.25V7.34531L4.23281 4.98281C4.30391 4.91239 4.39993 4.87289 4.5 4.87289C4.60007 4.87289 4.69609 4.91239 4.76719 4.98281L6 6.22031L8.84531 3.375H7.875C7.77554 3.375 7.68016 3.33549 7.60983 3.26516C7.53951 3.19484 7.5 3.09946 7.5 3C7.5 2.90054 7.53951 2.80516 7.60983 2.73484C7.68016 2.66451 7.77554 2.625 7.875 2.625H9.75C9.84946 2.625 9.94484 2.66451 10.0152 2.73484C10.0855 2.80516 10.125 2.90054 10.125 3V4.875C10.125 4.97446 10.0855 5.06984 10.0152 5.14016C9.94484 5.21049 9.84946 5.25 9.75 5.25C9.65054 5.25 9.55516 5.21049 9.48483 5.14016C9.41451 5.06984 9.375 4.97446 9.375 4.875V3.90469L6.26719 7.01719C6.19609 7.08761 6.10007 7.12711 6 7.12711C5.89993 7.12711 5.80391 7.08761 5.73281 7.01719L4.5 5.77969L1.875 8.40469V9.375H10.5C10.5995 9.375 10.6948 9.41451 10.7652 9.48483C10.8355 9.55516 10.875 9.65054 10.875 9.75Z"
                        fill="#7E7E7E"/>
                </svg>
                <p className={`${styles.transaction_setting_tolerance} pl-1`}>Slippage Tolerance</p>
            </div>

            <div className="pt-2.5">
                <div className='pb-3 pt-3 px-4 border border-accent rounded-none flex flex-row justify-between'>
                    <div className='flex flex-row gap-1'>
                        <input className={`${styles.transaction_setting_percent} pl-2 w-10 bg-transparent`}
                               value={tolerance}
                               onChange={(e) => handleToleranceChange(parseFloat(e.target.value))}/>%
                    </div>
                    <div className='flex flex-row gap-10'>
                        <button
                            className={`${styles.transaction_setting_percent_btn} animation ${tolerance == 0.1 ? 'shadow-3xl border border-primary rounded-none min-h-0 h-6 px-3 bg-primary bg-opacity-10' : 'border-none'}`}
                            onClick={() => handleToleranceChange(0.1)}>0.1%
                        </button>
                        <button
                            className={`${styles.transaction_setting_percent_btn} animation ${tolerance == 0.5 ? 'shadow-3xl border border-primary rounded-none min-h-0 h-6 px-3 bg-primary bg-opacity-10' : 'border-none'}`}
                            onClick={() => handleToleranceChange(0.5)}>0.5%
                        </button>
                        <button
                            className={`${styles.transaction_setting_percent_btn} animation ${tolerance == 1 ? 'shadow-3xl border border-primary rounded-none min-h-0 h-6 px-3 bg-primary bg-opacity-10' : 'border-none'}`}
                            onClick={() => handleToleranceChange(1)}
                        >1%
                        </button>
                        <button
                            className={`${styles.transaction_setting_percent_btn} animation ${tolerance == 2 ? 'shadow-3xl border border-primary rounded-none min-h-0 h-6 px-3 bg-primary bg-opacity-10' : 'border-none'}`}
                            onClick={() => handleToleranceChange(2)}>2%
                        </button>
                    </div>
                </div>
            </div>


            <div className="pt-6 flex flex-row justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <g clipPath="url(#clip0_3202_2038)">
                        <path
                            d="M8.25 6.5C8.52614 6.5 8.75 6.27614 8.75 6C8.75 5.72386 8.52614 5.5 8.25 5.5H6.5V2.75C6.5 2.47386 6.27614 2.25 6 2.25C5.72386 2.25 5.5 2.47386 5.5 2.75V6C5.5 6.27614 5.72386 6.5 6 6.5H8.25Z"
                            fill="#7E7E7E"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M6 0.5C2.96243 0.5 0.5 2.96243 0.5 6C0.5 9.03757 2.96243 11.5 6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5ZM1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6Z"
                              fill="#7E7E7E"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_3202_2038">
                            <rect width="12" height="12" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <p className={`${styles.transaction_setting_tolerance} pl-1`}>Transaction deadline</p>
            </div>

            <div className="pt-2.5">
                <div className='pb-3 pt-3 px-4 border border-accent rounded-none flex flex-row justify-between'>
                    <input className={`${styles.transaction_setting_percent} pl-2 w-10 bg-transparent`}
                           value={deadline}
                           onChange={(e) => handleDeadlineChange(parseFloat(e.target.value))}/>
                    <p className={styles.transaction_setting_minute}>minutes</p>
                </div>
            </div>
        </div>
    );
};
export default memo(TransactionSetting);