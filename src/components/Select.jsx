import React, { useState, useEffect } from 'react';
 
const Select = ({ options, onChange, multiple = false, style }) => {
    const [selectedOption, setSelectedOption] = useState(multiple ? [] : '');
    const handleChange = (event) => {
        let value = ""
        if(multiple){
            let values = [...event.target.selectedOptions].map(o => o.value)
            value = values.join(", "); // it works for multiple select properly without comma
        }else{
            value = event.target.value;
        }
        setSelectedOption(value);
        onChange(value);
    };

    const renderOptions = (optionsList) => {
        return optionsList.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ));
    };

    return (
        <div>
            <select
                value={selectedOption}
                onChange={handleChange}
                multiple={multiple}
                className='border border-black rounded-md'
                style={style}
            >
                {renderOptions(options)}
            </select>
        </div>
    );
};

export default Select;