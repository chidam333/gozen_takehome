import React, { useState } from 'react';

const Stepper = ({ steps, color1, color2 }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: '5px' }}>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '10px',
                            backgroundColor: index === currentStep ? color1 : color2,
                            color: 'black',
                            font: 'bold 16px/24px Arial, sans-serif',
                            border: '1px solid black',
                            margin: '0 5px',
                        }}
                    >
                        {step}
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }} className='font-bold flex gap-4'>
                <button onClick={handleBack} disabled={currentStep === 0} className='border-2 border-black py-1 px-2 cursor-pointer'>
                    Back
                </button>
                <button onClick={handleNext} disabled={currentStep === steps.length - 1} className='border-2 border-black py-1 px-2 cursor-pointer'>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Stepper;