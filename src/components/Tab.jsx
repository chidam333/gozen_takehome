import React, { useState } from 'react';
import "./Tab.css"
const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tab-buttons flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={(activeTab === index ? 'active' : '')+" cursor-pointer border-b-2 border-solid border-black px-2 py-2"}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {/* <div className="line bg-stone-700 w-full h-[2px]"></div> */}
            <div className="tab-content py-2 px-2 text-sm font-bold">
                {tabs[activeTab] && <div>{tabs[activeTab].content}</div>}
            </div>
        </div>
    );
};

export default Tab;