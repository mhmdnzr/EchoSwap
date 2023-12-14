'use client'
import React, {useState} from 'react';
import {ILiquidityData} from "@/interfaces/ILiquidityData";
import styles from "@/assets/styles/css/modules/mobile_card.module.css";
import Modal from "@/components/layouts/Modal";
import ManageLiquidity from "@/components/extras/ManageLiquidity";

const LiquidityMobileCard = (props: ILiquidityData) => {
    const columns = props.heads
    const rows = props.data
    const [open, setOpen] = useState<boolean>(false)

    return (
        rows.map((data, index) => {
            return <div className="collapse bg-transparent rounded-none mt-12 mb-12 gap-8" key={index}>
                <input type="radio" name="my-accordion-1"/>
                <div className="collapse-title p-0 text-xl font-medium">
                    <div className="flex flex-col gap-5">
                        <div className='flex flex-row justify-between items-center'>
                            <div className="flex flex-row items-center">
                                <div className="avatar-group -space-x-6">
                                    <div className={`avatar border-none ${styles.avatarIcon}`}>
                                        <div className="w-12">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g id="ethereum-eth-logo" clipPath="url(#clip0_595_88149)">
                                                    <path id="Vector"
                                                          d="M0 10C0 7.34783 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34783 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10H0Z"
                                                          fill="#607AE3"/>
                                                    <path id="Vector_2"
                                                          d="M9.99999 17.1866L9.90332 16.86V7.35664L9.99999 7.25998L14.41 9.86664L9.99999 17.1866Z"
                                                          fill="#BCC5EE"/>
                                                    <path id="Vector_3"
                                                          d="M10 17.1866L5.58667 9.86664L10 7.25998V11.8733V17.1866Z"
                                                          fill="#F7F7F7"/>
                                                    <path id="Vector_4"
                                                          d="M10 6.42336L9.94336 6.3567V2.97337L10 2.81337L14.4134 9.03003L10 6.42336Z"
                                                          fill="#BCC5EE"/>
                                                    <path id="Vector_5"
                                                          d="M10 2.81337V6.42336L5.58667 9.03003L10 2.81337Z"
                                                          fill="#F7F7F7"/>
                                                    <path id="Vector_6"
                                                          d="M10 7.25996L14.41 9.86662L10 11.8733V7.25996Z"
                                                          fill="#7D93E7"/>
                                                    <path id="Vector_7"
                                                          d="M5.58667 9.86662L10 7.25996V11.8733L5.58667 9.86662Z"
                                                          fill="#BCC5EE"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_595_88149">
                                                        <rect width="20" height="20" fill="white"
                                                              transform="matrix(1 0 0 -1 0 20)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`avatar border-none ${styles.avatarIcon}`}>
                                        <div className="w-12">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g id="material-symbols:generating-tokens-rounded"
                                                   clipPath="url(#clip0_595_88135)">
                                                    <path id="Vector"
                                                          d="M10.5 20C7.70833 20 5.34375 19.0313 3.40625 17.0938C1.46875 15.1563 0.5 12.7917 0.5 10C0.5 7.20833 1.46875 4.84375 3.40625 2.90625C5.34375 0.96875 7.70833 0 10.5 0C13.2917 0 15.6562 0.96875 17.5938 2.90625C19.5312 4.84375 20.5 7.20833 20.5 10C20.5 12.7917 19.5312 15.1563 17.5938 17.0938C15.6562 19.0313 13.2917 20 10.5 20ZM10.5 14.375C10.8542 14.375 11.1513 14.2554 11.3913 14.0163C11.6313 13.7771 11.7508 13.48 11.75 13.125V8.125H13.3125C13.5833 8.125 13.8071 8.03625 13.9837 7.85875C14.1604 7.68125 14.2492 7.4575 14.25 7.1875C14.25 6.91667 14.1612 6.69292 13.9837 6.51625C13.8062 6.33958 13.5825 6.25083 13.3125 6.25H7.6875C7.41667 6.25 7.19292 6.33875 7.01625 6.51625C6.83958 6.69375 6.75083 6.9175 6.75 7.1875C6.75 7.45833 6.83875 7.68208 7.01625 7.85875C7.19375 8.03542 7.4175 8.12417 7.6875 8.125H9.25V13.125C9.25 13.4792 9.37 13.7763 9.61 14.0163C9.85 14.2563 10.1467 14.3758 10.5 14.375Z"
                                                          fill="#1EE3CF"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_595_88135">
                                                        <rect width="20" height="20" fill="white"
                                                              transform="translate(0.5)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col pl-5">
                                    <span className={styles.title}>{data.title}</span>
                                    <span className={styles.details}>{data.detail}</span>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 36 36"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M5.07507 13.8095C5.61984 13.1854 6.5674 13.1211 7.19152 13.6658L18.002 23.1017L28.8125 13.6658C29.4366 13.1211 30.3842 13.1854 30.9289 13.8095C31.4737 14.4336 31.4094 15.3812 30.7853 15.926L18.9884 26.2228C18.4233 26.7161 17.5807 26.7161 17.0156 26.2228L5.21877 15.926C4.59465 15.3812 4.53031 14.4336 5.07507 13.8095Z"
                                          fill="#7E7E7E"/>
                                </svg>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className={'flex flex-col gap-1'}>
                                <span className={styles.title_bar}>APR</span>
                                <span className={styles.value}>{data.apr}%</span>
                            </div>
                            <div className={'flex flex-col gap-1'}>
                                <span className={styles.title_bar}>Total Staked</span>
                                <span className={`${styles.value} flex flex-row items-center`}>
                                    ${data.total_stake}
                                    <div className="pl-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                               viewBox="0 0 24 24"
                                                               fill="none">
                                          <path
                                              d="M12.0001 21.3346C17.1449 21.3346 21.3306 17.149 21.3306 12.0041C21.3306 6.85919 17.1449 2.67352 12.0001 2.67352C6.85519 2.67352 2.6695 6.85919 2.6695 12.0041C2.6695 17.149 6.85522 21.3346 12.0001 21.3346ZM12.0001 22.501C6.21224 22.501 1.50317 17.7919 1.50317 12.0041C1.50317 6.21623 6.21224 1.50719 12.0001 1.50719C17.7878 1.50719 22.497 6.21623 22.497 12.0041C22.497 17.7919 17.7878 22.501 12.0001 22.501Z"
                                              fill="#7E7E7E"/>
                                          <path
                                              d="M6.61328 12.0037C6.61328 11.7226 6.72493 11.4531 6.92368 11.2543C7.12243 11.0556 7.39198 10.9439 7.67305 10.9439C7.95412 10.9439 8.22368 11.0556 8.42242 11.2543C8.62117 11.4531 8.73282 11.7226 8.73282 12.0037C8.73282 12.2848 8.62117 12.5543 8.42242 12.7531C8.22368 12.9518 7.95412 13.0635 7.67305 13.0635C7.39198 13.0635 7.12243 12.9518 6.92368 12.7531C6.72493 12.5543 6.61328 12.2848 6.61328 12.0037Z"
                                              fill="#7E7E7E"/>
                                          <path
                                              d="M10.9402 12.0037C10.9402 11.7226 11.0518 11.4531 11.2506 11.2543C11.4493 11.0556 11.7189 10.9439 12 10.9439C12.281 10.9439 12.5506 11.0556 12.7493 11.2543C12.9481 11.4531 13.0597 11.7226 13.0597 12.0037C13.0597 12.2848 12.9481 12.5543 12.7493 12.7531C12.5506 12.9518 12.281 13.0635 12 13.0635C11.7189 13.0635 11.4493 12.9518 11.2506 12.7531C11.0518 12.5543 10.9402 12.2848 10.9402 12.0037Z"
                                              fill="#7E7E7E"/>
                                          <path
                                              d="M15.2671 12.0037C15.2671 11.7226 15.3787 11.4531 15.5775 11.2543C15.7762 11.0556 16.0458 10.9439 16.3269 10.9439C16.6079 10.9439 16.8775 11.0556 17.0762 11.2543C17.275 11.4531 17.3866 11.7226 17.3866 12.0037C17.3866 12.2848 17.275 12.5543 17.0762 12.7531C16.8775 12.9518 16.6079 13.0635 16.3269 13.0635C16.0458 13.0635 15.7762 12.9518 15.5775 12.7531C15.3787 12.5543 15.2671 12.2848 15.2671 12.0037Z"
                                              fill="#7E7E7E"/>
                                        </svg></div>
                                </span>
                            </div>
                            <div></div>

                        </div>
                    </div>
                </div>
                <div className="collapse-content w-full p-0 flex flex-wrap ">
                    <div className='flex w-full flex-wrap justify-between'>
                        <div className={'flex flex-col  gap-1'}>
                            <span className={styles.title_bar}>My Staked</span>
                            <span className={styles.value}>{data.my_stake}%</span>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <span className={styles.title_bar}>My Pool</span>
                            <span className={styles.value}>{data.my_pool}%</span>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <span className={styles.title_bar}>Earnings</span>
                            <span className={styles.value}>{data.earnings}%</span>
                        </div>

                    </div>
                    <div className="flex w-full flex-wrap justify-between md:gap-10 pt-12">
                        <div className="flex flex-wrap items-center justify-center p-2  w-1/2">
                            <Modal id={'choose_pool'} className={'w-full'} open={open} setOpen={() => setOpen(false)}>
                                <button
                                    onClick={() => setOpen(true)}
                                    className={`button button-primary outline outline-primary rounded-none !text-[14px]  py-3 w-full ${styles.manage}`}>
                                    Manage
                                </button>

                                <ManageLiquidity updateModal={(e) => setOpen(e)}
                                                 liquidityPoolsBalance={props.liquidityPoolsBalance}/>

                            </Modal>
                        </div>
                        <div className="flex flex-wrap items-center justify-center p-2 w-1/2">
                            <Modal id={'claim_earning'} className={'w-full'} open={open} setOpen={() => setOpen(false)}>
                                <button
                                    onClick={() => setOpen(true)}
                                    className={`button button-primary border-transparent rounded-none !text-[14px] flex items-center justify-center w-full ${styles.claim}`}>
                                    Claim
                                    Earnings
                                </button>

                                <ManageLiquidity updateModal={(e) => setOpen(e)}
                                                 liquidityPoolsBalance={props.liquidityPoolsBalance}/>

                            </Modal>
                        </div>


                    </div>
                </div>
            </div>
        })
    );
};

export default LiquidityMobileCard;