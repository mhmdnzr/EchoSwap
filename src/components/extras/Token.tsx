'use client'
import React, {memo, useEffect, useState} from 'react';
import styles from '@/assets/styles/css/modules/tokencomponent.module.css'
import Image from 'next/image';
import {ITokenItems} from "@/interfaces/ITokenItems";
import SearchToken from "@/extensions/SearchToken";

interface IToken {
    filter_button?: boolean;
    balances: ITokenItems[];
    isLoading: boolean;
    handleToken: (token: ITokenItems) => void,
    updateModal: (e: boolean) => void
}

const Token = ({filter_button = false, balances, isLoading, handleToken, updateModal}: IToken) => {
        const [searchQuery, setSearchQuery] = useState<string>('')
        const [filter, setFilter] = useState<ITokenItems[]>([])

        useEffect((): void => setFilter(SearchToken(balances, searchQuery)), [balances, searchQuery])

        if (isLoading && balances) {
            return <>
                <div className="h-fit overflow-hidden">
                    <div className={`overflow-y-auto scrollbar w-full ${styles.token_height}`}>
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                </div>
            </>
        } else {
            return (
                <div className={`${styles.token} p-4`}>
                    <div className={'flex flex-row items-center justify-between pb-7'}>
                        <span className={styles.select}>Select a Token</span>
                        <button
                            onClick={() => updateModal(false)}
                            className={'btn btn-neutral hover:bg-transparent hover:border-none p-0 border-none min-h-0 h-5'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.9156 4.02674C13.176 3.76639 13.176 3.34428 12.9156 3.08393C12.6553 2.82358 12.2332 2.82358 11.9728 3.08393L7.99989 7.05687L4.02696 3.08393C3.76661 2.82358 3.3445 2.82358 3.08415 3.08393C2.8238 3.34428 2.8238 3.76639 3.08415 4.02674L7.05708 7.99967L3.08393 11.9728C2.82358 12.2332 2.82358 12.6553 3.08393 12.9156C3.34428 13.176 3.76639 13.176 4.02674 12.9156L7.99989 8.94248L11.973 12.9156C12.2334 13.176 12.6555 13.176 12.9158 12.9156C13.1762 12.6553 13.1762 12.2332 12.9158 11.9728L8.9427 7.99967L12.9156 4.02674Z"
                                      fill="#7E7E7E"/>
                            </svg>
                        </button>
                    </div>
                    <div className={'pb-7'}>
                        <div className="relative text-gray-600 focus-within:text-gray-400">
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
                                type="text" name="q" placeholder="Search by name,symbol or address"
                                className="pl-10 input input-bordered rounded-none w-full "/>
                        </div>
                    </div>

                    {!filter_button && <div className={'flex flex-row flex-wrap gap-3 justify-between pb-14'}>
                        <button
                            className={`flex flex-row flex-nowrap btn btn-neutral basis-1/4 shadow-3xl border border-primary rounded-none px-3 bg-primary bg-opacity-10 min-h-0 h-8 ${styles.filter_token}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_3202_2153)">
                                    <path
                                        d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9H0Z"
                                        fill="#627EEA"/>
                                    <path
                                        d="M8.99996 15.4683L8.91296 15.1743V6.62126L8.99996 6.53426L12.969 8.88026L8.99996 15.4683Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 15.4683L5.0282 8.88026L9.0002 6.53426V10.6863V15.4683Z"
                                          fill="#F7F7F7"/>
                                    <path
                                        d="M8.99997 5.78096L8.94897 5.72095V2.67596L8.99997 2.53196L12.972 8.12695L8.99997 5.78096Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 2.53196V5.78096L5.0282 8.12695L9.0002 2.53196Z" fill="#F7F7F7"/>
                                    <path d="M9 6.53403L12.969 8.88004L9 10.686V6.53403Z" fill="#7D93E7"/>
                                    <path d="M5.0282 8.88004L9.0002 6.53403V10.686L5.0282 8.88004Z" fill="#BCC5EE"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3202_2153">
                                        <rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0 18)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span> Ethereum</span>
                        </button>
                        <button
                            className={`flex flex-row flex-nowrap btn btn-neutral basis-1/4 border border-transparent rounded-none min-h-0 h-8 px-3 hover:bg-primary hover:bg-opacity-10 hover:border-primary ${styles.filter_token}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_3202_2153)">
                                    <path
                                        d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9H0Z"
                                        fill="#627EEA"/>
                                    <path
                                        d="M8.99996 15.4683L8.91296 15.1743V6.62126L8.99996 6.53426L12.969 8.88026L8.99996 15.4683Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 15.4683L5.0282 8.88026L9.0002 6.53426V10.6863V15.4683Z"
                                          fill="#F7F7F7"/>
                                    <path
                                        d="M8.99997 5.78096L8.94897 5.72095V2.67596L8.99997 2.53196L12.972 8.12695L8.99997 5.78096Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 2.53196V5.78096L5.0282 8.12695L9.0002 2.53196Z" fill="#F7F7F7"/>
                                    <path d="M9 6.53403L12.969 8.88004L9 10.686V6.53403Z" fill="#7D93E7"/>
                                    <path d="M5.0282 8.88004L9.0002 6.53403V10.686L5.0282 8.88004Z" fill="#BCC5EE"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3202_2153">
                                        <rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0 18)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span> Ethereum</span>
                        </button>
                        <button
                            className={`flex flex-row flex-nowrap btn btn-neutral basis-1/4 border border-transparent rounded-none min-h-0 h-8 px-3 hover:bg-primary hover:bg-opacity-10 hover:border-primary ${styles.filter_token}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_3202_2153)">
                                    <path
                                        d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9H0Z"
                                        fill="#627EEA"/>
                                    <path
                                        d="M8.99996 15.4683L8.91296 15.1743V6.62126L8.99996 6.53426L12.969 8.88026L8.99996 15.4683Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 15.4683L5.0282 8.88026L9.0002 6.53426V10.6863V15.4683Z"
                                          fill="#F7F7F7"/>
                                    <path
                                        d="M8.99997 5.78096L8.94897 5.72095V2.67596L8.99997 2.53196L12.972 8.12695L8.99997 5.78096Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 2.53196V5.78096L5.0282 8.12695L9.0002 2.53196Z" fill="#F7F7F7"/>
                                    <path d="M9 6.53403L12.969 8.88004L9 10.686V6.53403Z" fill="#7D93E7"/>
                                    <path d="M5.0282 8.88004L9.0002 6.53403V10.686L5.0282 8.88004Z" fill="#BCC5EE"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3202_2153">
                                        <rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0 18)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span> Ethereum</span>
                        </button>
                        <button
                            className={`flex flex-row flex-nowrap btn btn-neutral basis-1/4 border border-transparent rounded-none min-h-0 h-8 px-3 hover:bg-primary hover:bg-opacity-10 hover:border-primary ${styles.filter_token}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_3202_2153)">
                                    <path
                                        d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9H0Z"
                                        fill="#627EEA"/>
                                    <path
                                        d="M8.99996 15.4683L8.91296 15.1743V6.62126L8.99996 6.53426L12.969 8.88026L8.99996 15.4683Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 15.4683L5.0282 8.88026L9.0002 6.53426V10.6863V15.4683Z"
                                          fill="#F7F7F7"/>
                                    <path
                                        d="M8.99997 5.78096L8.94897 5.72095V2.67596L8.99997 2.53196L12.972 8.12695L8.99997 5.78096Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 2.53196V5.78096L5.0282 8.12695L9.0002 2.53196Z" fill="#F7F7F7"/>
                                    <path d="M9 6.53403L12.969 8.88004L9 10.686V6.53403Z" fill="#7D93E7"/>
                                    <path d="M5.0282 8.88004L9.0002 6.53403V10.686L5.0282 8.88004Z" fill="#BCC5EE"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3202_2153">
                                        <rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0 18)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span> Ethereum</span>
                        </button>
                        <button
                            className={`flex flex-row flex-nowrap btn btn-neutral basis-1/4 border border-transparent rounded-none min-h-0 h-8 px-3 hover:bg-primary hover:bg-opacity-10 hover:border-primary ${styles.filter_token}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_3202_2153)">
                                    <path
                                        d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9H0Z"
                                        fill="#627EEA"/>
                                    <path
                                        d="M8.99996 15.4683L8.91296 15.1743V6.62126L8.99996 6.53426L12.969 8.88026L8.99996 15.4683Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 15.4683L5.0282 8.88026L9.0002 6.53426V10.6863V15.4683Z"
                                          fill="#F7F7F7"/>
                                    <path
                                        d="M8.99997 5.78096L8.94897 5.72095V2.67596L8.99997 2.53196L12.972 8.12695L8.99997 5.78096Z"
                                        fill="#BCC5EE"/>
                                    <path d="M9.0002 2.53196V5.78096L5.0282 8.12695L9.0002 2.53196Z" fill="#F7F7F7"/>
                                    <path d="M9 6.53403L12.969 8.88004L9 10.686V6.53403Z" fill="#7D93E7"/>
                                    <path d="M5.0282 8.88004L9.0002 6.53403V10.686L5.0282 8.88004Z" fill="#BCC5EE"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3202_2153">
                                        <rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0 18)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span> Ethereum</span>
                        </button>

                    </div>}

                    {filter_button && <div className={'pb-2.5 flex flex-row justify-between'}>
                        <p className={styles.token_title}>TOKEN NAME</p>
                        <p className={styles.balance}>Balance</p>
                    </div>}


                    <div className="h-fit overflow-hidden">
                        <div className={`overflow-y-auto scrollbar w-full ${styles.token_height}`}>
                            {
                                <div className={'flex flex-col gap-5 pb-7'}>
                                    {filter?.map((data: ITokenItems, index: number) => {
                                        return <button onClick={() => {
                                            handleToken(data);
                                            updateModal(false)
                                        }} key={index}>
                                            <div className={'flex flex-row justify-between items-center gap-0'}>
                                                <div className={'flex flex-row items-center'}>
                                                    <div className="avatar-group -space-x-6">
                                                        <div className={`avatar border-none ${styles.avatarIcon}`}>
                                                            <div className="w-12">
                                                                <Image loading='lazy'
                                                                    data-src={data.logoURI}
                                                                    className={'lazyload'}
                                                                    src={data.logoURI}
                                                                    alt={data.name}
                                                                    width={36} height={36}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col text-left pl-2">
                                                        <div>
                                                            <span className={styles.token_name}> {data.symbol} </span>
                                                        </div>
                                                        <span className={styles.details}>VOLATILE</span>
                                                    </div>
                                                </div>
                                                <div className={'flex flex-col justify-end text-right'}>
                                                    <span
                                                        className={styles.balanceItem}> {data.balance?.slice(0, 7)} </span>
                                                    <span className={styles.priceItem}>$3.66</span>
                                                </div>
                                            </div>
                                        </button>
                                    })}

                                </div>}
                        </div>
                    </div>
                </div>
            );
        }
    }
;

export default memo(Token);