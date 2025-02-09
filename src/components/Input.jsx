import React, { useState } from 'react';

const Input = ({ type, placeholder, value, onChange, validate }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        const validationResult = validate(newValue);
        console.log({validationResult})
        if (validationResult.isValid) {
            setError('');
            setSuccess(validationResult.message);
        } else {
            setError(validationResult.message);
            setSuccess('');
        }
    };

    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className='px-4 py-2 rounded-4xl border-4 border-yellow-700 border-solid w-[40vw] md:w-[20vw]'
            />
            {error && <div style={{ color: 'red' }} className='text-center'>{error}</div>}
            {success && <div style={{ color: 'green' }} className='text-center'>{success}</div>}
        </div>
    );
};

export default Input;