import React, { useState } from 'react';

const DynamicForm = ({ config }) => {
    const [formData, setFormData] = useState(
        config.reduce((acc, field) => {
            acc[field.name] = field.defaultValue || '';
            return acc;
        }, {})
    );
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
    };

    const handleReset = () => {
        setFormData(
            config.reduce((acc, field) => {
                acc[field.name] = field.defaultValue || '';
                return acc;
            }, {})
        );
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            {config.map((field) => (
                <div key={field.name} className='flex items-center'>
                    <label className='inline w-[4vw]'>{field.label}</label>
                    <span className="dots pr-6"> : </span>
                    <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className='w-[25vw] border-2 border-yellow-700 rounded-2xl pl-1'
                    />
                </div>
            ))}
            <div className="buttons flex gap-4">
                <button type="submit" className='border-2 border-black bg-green-400 p-2 w-[18vw] md:w-[12vw] lg:w-[8vw] '>Submit</button>
                <button type="button" className='border-2 border-black bg-yellow-400 p-2 w-[18vw] md:w-[12vw] lg:w-[8vw] 'onClick={handleReset}>Reset</button>
            </div>
        </form>
    );
};

export default DynamicForm;
