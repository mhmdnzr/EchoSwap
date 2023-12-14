import React, {useEffect, useState} from 'react';
import styles from "@/assets/styles/css/modules/table.module.css";
import {ILiquidityUser} from "@/interfaces/ILiquidityUser";
import {formatEther} from "viem";

export interface IRowInput {
    rowIndex: number,
    inputValue: string
}

const VoteTable = ({rows, isLoading, onInputChange, callBack , setDisabledButtons}: {
    onInputChange: (data: IRowInput[]) => void,
    rows: ILiquidityUser[],
    isLoading: boolean,
    setDisabledButtons : (value : boolean) => void,
    callBack: (total: number) => void
}) => {
    const columns: string[] = ['Name', 'Total votes', 'Voting APR', 'Reward', 'Reward Estimate', 'Your Vote']
    const [inputData, setInputData] = useState<IRowInput[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [errorIndices, setErrorIndices] = useState<(number | null)[]>([]);

    const handleInputChange = (inputValue: string, rowIndex: number) => {
        let input = ''
        if (inputValue === '') input = '0'
        else input = inputValue

        const updatedData = [...inputData];
        updatedData[rowIndex] = {rowIndex, inputValue: input};
        setInputData(updatedData);
    };

    // Function to fill the input with 100
    const handleMaxClick = (rowIndex: number) => {
        const updatedData = [...inputData];
        updatedData[rowIndex] = {rowIndex, inputValue: '100'};
        setInputData(updatedData);
    };

    // Function to update the total and check for errors
    const updateTotal = (data: IRowInput[]) => {
        const sum = data.reduce((acc, item) => acc + (parseInt(item.inputValue) || 0), 0);
    
        if (sum === 100) {
            setErrorIndices([]);
        } else {
            const newErrorIndices = data
                .map((item) => (total > 100 ? item.rowIndex : null))
                .filter((index) => index !== null);
            setErrorIndices(newErrorIndices);
        }

        setTotal(sum);
    };
    useEffect(() => {
        setInputData(Array.from(Array<IRowInput>(rows.length), (_, index) => (
            {
                inputValue: '0',
                rowIndex: index
            }
        )))
    }, [rows.length])

    useEffect(() => {
        updateTotal(inputData)
        onInputChange(inputData)
    }, [inputData])

    useEffect(() => {
        callBack(total)
        total > 100 ? setDisabledButtons(true) : setDisabledButtons(false) 
    }, [total])
    return (
        <>

            {isLoading ?
                <span className="loading loading-bars loading-lg"></span> :
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="font-medium ">
                                    <tr>
                                        {
                                            columns.map((col: string, index: number) => {
                                                return <th key={index} scope="col"
                                                           className={`px-6  ${styles.table_header}`}>{col}</th>
                                            })
                                        }
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {rows.map((row, index: number) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="transition duration-300 ease-in-out hover:bg-secondary hover:bg-opacity-10 hover:border-primary">
                                                <td className="whitespace-nowrap px-0 py-2">
                                                    <div className={'flex flex-row items-center gap-0'}>
                                                        <div className="avatar-group -space-x-6 ">
                                                            <div className={`avatar  border-none ${styles.avatarIcon}`}>
                                                                <div className="w-12">
                                                                    <svg width="20" height="20" viewBox="0 0 20 20"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="ethereum-eth-logo"
                                                                           clipPath="url(#clip0_595_88149)">
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
                                                                                <rect width="20" height="20"
                                                                                      fill="white"
                                                                                      transform="matrix(1 0 0 -1 0 20)"/>
                                                                            </clipPath>
                                                                        </defs>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className={`avatar border-none ${styles.avatarIcon}`}>
                                                                <div className="w-12">
                                                                    <svg width="21" height="20" viewBox="0 0 21 20"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="material-symbols:generating-tokens-rounded"
                                                                           clipPath="url(#clip0_595_88135)">
                                                                            <path id="Vector"
                                                                                  d="M10.5 20C7.70833 20 5.34375 19.0313 3.40625 17.0938C1.46875 15.1563 0.5 12.7917 0.5 10C0.5 7.20833 1.46875 4.84375 3.40625 2.90625C5.34375 0.96875 7.70833 0 10.5 0C13.2917 0 15.6562 0.96875 17.5938 2.90625C19.5312 4.84375 20.5 7.20833 20.5 10C20.5 12.7917 19.5312 15.1563 17.5938 17.0938C15.6562 19.0313 13.2917 20 10.5 20ZM10.5 14.375C10.8542 14.375 11.1513 14.2554 11.3913 14.0163C11.6313 13.7771 11.7508 13.48 11.75 13.125V8.125H13.3125C13.5833 8.125 13.8071 8.03625 13.9837 7.85875C14.1604 7.68125 14.2492 7.4575 14.25 7.1875C14.25 6.91667 14.1612 6.69292 13.9837 6.51625C13.8062 6.33958 13.5825 6.25083 13.3125 6.25H7.6875C7.41667 6.25 7.19292 6.33875 7.01625 6.51625C6.83958 6.69375 6.75083 6.9175 6.75 7.1875C6.75 7.45833 6.83875 7.68208 7.01625 7.85875C7.19375 8.03542 7.4175 8.12417 7.6875 8.125H9.25V13.125C9.25 13.4792 9.37 13.7763 9.61 14.0163C9.85 14.2563 10.1467 14.3758 10.5 14.375Z"
                                                                                  fill="#1EE3CF"/>
                                                                        </g>
                                                                        <defs>
                                                                            <clipPath id="clip0_595_88135">
                                                                                <rect width="20" height="20"
                                                                                      fill="white"
                                                                                      transform="translate(0.5)"/>
                                                                            </clipPath>
                                                                        </defs>
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="flex flex-col">
                                                            <div>
                                                <span
                                                    className={styles.token_name}>{row.token0_symbol} / {row.token1_symbol}</span>
                                                            </div>
                                                            <span className={styles.details}>{row.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 ">
                                                    <span className="md:hidden w-full">Total votes</span>
                                                    <div className="flex flex-col">
                                                        <span className={styles.token_name}>0%</span>
                                                        <span className={styles.details}>position unknown</span>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 ">
                                                    <span className="md:hidden w-full">Voting APR</span>
                                                    <span className={styles.token_name}>0%</span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 ">
                                                    <span className="md:hidden w-full">Voting APR</span>
                                                    <span className={styles.token_name}>0%</span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 ">
                                                    <span className="md:hidden w-full">Reward</span>
                                                    <div className="flex flex-row justify-center items-center gap-2">
                                                        <span
                                                            className={styles.token_name}>${parseFloat(formatEther(row.gauge_total_supply)).toFixed(3)} Echo</span>
                                                        <div className="tooltip tooltip-right" data-tip="$0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16"
                                                                 viewBox="0 0 16 16"
                                                                 fill="none">
                                                                <path
                                                                    d="M7.99988 14.2229C11.4298 14.2229 14.2203 11.4325 14.2203 8.00256C14.2203 4.57263 11.4298 1.78218 7.99988 1.78218C4.56997 1.78218 1.77951 4.57263 1.77951 8.00256C1.77951 11.4325 4.56998 14.2229 7.99988 14.2229ZM7.99988 15.0005C4.14133 15.0005 1.00195 11.8611 1.00195 8.00256C1.00195 4.14399 4.14133 1.00463 7.99988 1.00463C11.8584 1.00463 14.9978 4.14399 14.9978 8.00256C14.9978 11.8611 11.8584 15.0005 7.99988 15.0005Z"
                                                                    fill="#EAECEF"/>
                                                                <path
                                                                    d="M4.40918 8.00247C4.40918 7.81509 4.48362 7.63539 4.61611 7.50289C4.74861 7.37039 4.92831 7.29596 5.11569 7.29596C5.30307 7.29596 5.48278 7.37039 5.61527 7.50289C5.74777 7.63539 5.82221 7.81509 5.82221 8.00247C5.82221 8.18985 5.74777 8.36955 5.61527 8.50205C5.48278 8.63455 5.30307 8.70898 5.11569 8.70898C4.92831 8.70898 4.74861 8.63455 4.61611 8.50205C4.48362 8.36955 4.40918 8.18985 4.40918 8.00247Z"
                                                                    fill="#EAECEF"/>
                                                                <path
                                                                    d="M7.29297 8.00247C7.29297 7.81509 7.3674 7.63539 7.4999 7.50289C7.6324 7.37039 7.8121 7.29596 7.99948 7.29596C8.18686 7.29596 8.36656 7.37039 8.49906 7.50289C8.63156 7.63539 8.70599 7.81509 8.70599 8.00247C8.70599 8.18985 8.63156 8.36955 8.49906 8.50205C8.36656 8.63455 8.18686 8.70898 7.99948 8.70898C7.8121 8.70898 7.6324 8.63455 7.4999 8.50205C7.3674 8.36955 7.29297 8.18985 7.29297 8.00247Z"
                                                                    fill="#EAECEF"/>
                                                                <path
                                                                    d="M10.1777 8.00247C10.1777 7.81509 10.2522 7.63539 10.3847 7.50289C10.5172 7.37039 10.6969 7.29596 10.8842 7.29596C11.0716 7.29596 11.2513 7.37039 11.3838 7.50289C11.5163 7.63539 11.5908 7.81509 11.5908 8.00247C11.5908 8.18985 11.5163 8.36955 11.3838 8.50205C11.2513 8.63455 11.0716 8.70898 10.8842 8.70898C10.6969 8.70898 10.5172 8.63455 10.3847 8.50205C10.2522 8.36955 10.1777 8.18985 10.1777 8.00247Z"
                                                                    fill="#EAECEF"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 ">
                                                    <span className="md:hidden w-full">Your Vote</span>
                                                    <div className="flex flex-col">
                                                        <span className={styles.token_name}>$0</span>
                                                        <span className={styles.details}>0%</span>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 ">
                                                    <div className="border flex w-full md:w-60 border-accent ">
                                                        <input
                                                            value={/*!inputData.length ? '0' : */inputData[index]?.inputValue}
                                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                                // @ts-ignore
                                                                total > 100 ? e.target.classList.add("border-red-700") : e.target.classList.remove("border-red-700")
                                                                handleInputChange(e.target.value === '' ? '0' : e.target.value, index)
                                                            }}
                                                            type="number" min="0" max="100" name="vote"
                                                            placeholder="Enter Vote"
                                                            className={`${total > 100 && "border-red-700"} input input-bordered border rounded-none w-10/12 min-h-0 h-12`}/>
                                                        <button
                                                            onClick={(e) => {
                                                                handleMaxClick(index)
                                                                // @ts-ignore
                                                                total < 100 ? ( e.target.previousElementSibling.value = 100) : ( e.target.previousElementSibling.classList.add("border-red-700"))
                                                            }}
                                                            className="w-2/12 border-none text-blue-600  p-2 bg-transparent flex justify-center items-center ">
                                                            MAX
                                                        </button>

                                                    </div>
                                                </td>
                                            </tr>

                                        )
                                    })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default VoteTable;