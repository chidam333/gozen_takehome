import React, { useEffect } from 'react';

const Toast = ({ success = false, danger = false, info = false, warning = false, message, duration }) => {
    console.log("toast is here")
    let id = Math.floor(Math.random() * 100);
    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById(`toast-${id}`).remove();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleClose = () => {
        document.getElementById(`toast-${id}`).remove();
    };

    return (
        <>
        {success ? <div id={`toast-${id}`} className='border-8 border-green-700 bg-amber-100 text-lg font-mono p-2 absolute bottom-10 right-4'>
            <span>{message}</span>
            <button onClick={handleClose} className="close-button"><img src="/close.svg" alt="close button" width="15px" className='ml-4 cursor-pointer mb-4'/></button>
        </div> : null}
        {warning ? <div id={`toast-${id}`} className='border-8 border-yellow-400 bg-amber-100 text-lg font-mono p-2 absolute bottom-10 right-4'>
            <span>{message}</span>
            <button onClick={handleClose} className="close-button"><img src="/close.svg" alt="close button" width="15px" className='ml-4 cursor-pointer mb-4'/></button>
        </div> : null}
        {danger ? <div id={`toast-${id}`} className='border-8 border-red-700 bg-amber-100 text-lg font-mono p-2 absolute bottom-10 right-4'>
            <span>{message}</span>
            <button onClick={handleClose} className="close-button"><img src="/close.svg" alt="close button" width="15px" className='ml-4 cursor-pointer mb-4'/></button>
        </div> : null}
        {info ? <div id={`toast-${id}`} className='border-8 border-cyan-700 bg-amber-100 text-lg font-mono p-2 absolute bottom-10 right-4'>
            <span>{message}</span>
            <button onClick={handleClose} className="close-button"><img src="/close.svg" alt="close button" width="15px" className='ml-4 cursor-pointer mb-4'/></button>
        </div> : null}
        </>
    );
};

export default Toast;