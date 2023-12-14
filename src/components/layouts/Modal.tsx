'use client'
import React, {ReactNode} from 'react';

interface IModal {
    id: string,
    children: ReactNode[],
    className?: string,
    setOpen: (e: boolean) => void,
    open: boolean
}

const Modal = ({id, children, className, open, setOpen}: IModal) => {
    return (
        <>
            {/*modal*/}
            {/* The button to open modal */}
            <label
                htmlFor={id}
                className={className}>
                {children[0]}
            </label>

            {/* Put this part before </body> tag */}
            {/*<input */}
            {/*    type="checkbox" */}
            {/*    id={id} */}
            {/*    className="modal-toggle" */}
            {/*    defaultChecked={open}*/}
            {/*    onChange={() => setOpen(!open)} */}
            {/*/>*/}
            <input type="checkbox" id={id} className="modal-toggle" checked={open}/>

            <div className="modal">
                <div className="modal-box rounded-none max-h-none bg-transparent">
                    {children[1]}
                </div>
                <label className="modal-backdrop" htmlFor={id} onClick={() => setOpen(false)}>Close</label>
            </div>
            {/*end modal*/}
        </>
    );
};

export default Modal;
