import React from 'react';

const DataTable = ({ data }) => {
    const cellStyle = {
        border: '1px solid black',
        padding: '8px'
    };

    return (
        <table className='border-2 border-black '>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((key) => (
                        <th key={key} className='border-2 border-black p-2 w-[10vw] bg-amber-400'>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {Object.values(row).map((value, i) => (
                            <td key={i} className='border-2 border-black p-2'>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;