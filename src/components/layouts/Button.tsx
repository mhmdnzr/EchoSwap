'use client'
import React, {ReactNode} from 'react';
import styles from '@/assets/styles/css/modules/button.module.css'

interface IButton {
    children: ReactNode,
    className?: string,
    onClick: () => void,
    disabled: boolean
}

const Button = ({children, className, onClick, disabled}: IButton) => {
    return (
        <button onClick={onClick}
                className={`btn ${disabled ? 'btn-accent' : 'btn-primary'} border rounded-none ${styles.button} ${className}`}>
            {children}
        </button>
    );
};

export default Button;