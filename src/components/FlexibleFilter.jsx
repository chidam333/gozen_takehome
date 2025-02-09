import React, { useState } from 'react';

const FlexibleFilter = ({ items }) => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className='w-[100%]'>
            <input 
                type="text" 
                value={filter} 
                onChange={handleFilterChange} 
                placeholder="Filter items" 
                className='border-2 border-black h-10vh text-black pl-4 w-[100%]'
            />
            <ul className='h-10vh bg-amber-700 text-amber-200 rounded-3xl mt-4 w-[100%]'>
                {filteredItems.map((item, index) => (
                    <li key={index} className='pl-4 border-1 border-t-amber-200'>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FlexibleFilter;