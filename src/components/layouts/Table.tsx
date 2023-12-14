import React, {ReactNode} from 'react';
import styles from '@/assets/styles/css/modules/table.module.css'
import {className} from "postcss-selector-parser";

interface ITableData {
    cols: string[],
    children: ReactNode
    className ?: string,
    trClassName ?: string ,
    theadClassName ?: string ,
}

const Table = (props: ITableData) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className={`${props.theadClassName}`}>
                <tr className={`border-none ${props.trClassName}`}>
                    {
                        props.cols.map((col: string, index: number) => {
                            return <th key={index} className={styles.table_header}>{col}</th>
                        })
                    }
                </tr>
                </thead>
                <tbody>


                {/* rows */}
                {props.children}


                </tbody>
            </table>
        </div>
    );
};

export default Table;