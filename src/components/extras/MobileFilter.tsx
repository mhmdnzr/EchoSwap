'use client'
import React, {memo, useState} from 'react';
import styles from '@/assets/styles/css/modules/filter.module.css'

const MobileFilter = ({ updateModal }: { updateModal: (e: boolean) => void }) => {
    const [selector, setSelector] = useState<1 | 2 | 3>(1)

    return (
        <div className='shadow-3xl bg-neutral border border-white px-4 py-8'>

            <div className="flex flex-row justify-between items-center pb-11">
                <p className={styles.title}>filters</p>
                <button onClick={() => updateModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M25.8313 8.05349C26.352 7.53279 26.352 6.68857 25.8313 6.16787C25.3106 5.64717 24.4663 5.64717 23.9456 6.16787L15.9998 14.1137L8.05392 6.16787C7.53322 5.64717 6.689 5.64717 6.1683 6.16787C5.6476 6.68857 5.6476 7.53279 6.1683 8.05349L14.1142 15.9993L6.16787 23.9456C5.64717 24.4663 5.64717 25.3106 6.16787 25.8313C6.68857 26.352 7.53279 26.352 8.05349 25.8313L15.9998 17.885L23.9461 25.8313C24.4668 26.352 25.311 26.352 25.8317 25.8313C26.3524 25.3106 26.3524 24.4663 25.8317 23.9456L17.8854 15.9993L25.8313 8.05349Z"
                            fill="#7E7E7E" />
                    </svg>
                </button>
            </div>

            <div className="flex flex-row justify-between">
                <button onClick={() => setSelector(1)} className={`animation ${styles.button} ${selector == 1 ? 'text-white bg-primary w-1/3' : 'text-accent w-1/3 border border-r-transparent border-l-primary border-t-primary border-b-primary'}`}>all</button>
                <button onClick={() => setSelector(2)}
                    className={`animation ${styles.button} ${selector == 2 ? 'text-white bg-primary w-1/3' : 'text-accent w-1/3 border border-r-transparent border-l-transparent border-t-primary border-b-primary'}`}>stable
                </button>
                <button
                    onClick={() => setSelector(3)}
                    className={`animation ${styles.button} ${selector == 3 ? 'text-white bg-primary w-1/3' : 'text-accent w-1/3 border border-r-primary border-l-transparent border-t-primary border-b-primary'}`}>volatile
                </button>
            </div>


            <div className="relative text-gray-600 focus-within:text-gray-400 w-full md:w-44 lg:w-60 mt-10 mb-16">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                            fill="none">
                            <path
                                d="M14.8528 14.1434L11.7651 11.0555C12.7031 9.95239 13.2128 8.56934 13.2128 7.10685C13.2128 5.47515 12.5777 3.94166 11.4246 2.78839C10.2714 1.63514 8.73801 1 7.10642 1C5.47483 1 3.94145 1.63514 2.78826 2.78839C1.63509 3.94164 1 5.47515 1 7.10685C1 8.73856 1.63509 10.272 2.78826 11.4253C3.94143 12.5786 5.47483 13.2137 7.10642 13.2137C8.5688 13.2137 9.95385 12.7019 11.0548 11.7659L14.1425 14.8537C14.2406 14.9519 14.3681 15 14.4976 15C14.6271 15 14.7546 14.952 14.8527 14.8537C15.0491 14.6574 15.0491 14.3398 14.8527 14.1434H14.8528ZM3.49858 10.7171C1.50768 8.72601 1.50768 5.48768 3.49858 3.49874C4.46164 2.53561 5.74435 2.00285 7.10852 2.00285C8.47269 2.00285 9.75331 2.53351 10.7185 3.49874C12.7094 5.48979 12.7094 8.72811 10.7185 10.7171C8.72547 12.706 5.4874 12.706 3.49858 10.7171Z"
                                fill="#7E7E7E" />
                        </svg>
                    </button>
                </span>
                <input type="search" name="q" placeholder="Search Pair or Token"
                    className="w-full md:w-44 lg:w-60 pl-10 input input-bordered rounded-none min-h-0 h-12 border md:border-accent" />
            </div>

            <div className=''>
                <div className="form-control">
                    <label className="cursor-pointer label flex flex-row justify-start gap-2">
                        <input type="checkbox" className="toggle toggle-primary" />
                        <span className={`label-text pl-1 ${styles.stake_switch}`}>Staked Only</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
    ;

export default memo(MobileFilter);