import React, { useState } from 'react';

const Carousel = ({ width, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
    };
    
    const nextImage = () => {
        setCurrentIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
    };

    return (
        
        <div style={{ width, position: 'relative', overflow: 'hidden' }} className='aspect-16/9'>
            <button
                onClick={prevImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
                className='font-extrabold text-4xl bg-stone-300 pb-2 left-2 border-2 border-black border-solid cursor-pointer'
            >
                &lt;
            </button>
            <button
                onClick={nextImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
                className='font-extrabold text-4xl bg-stone-300 pb-2 right-2 border-2 border-black border-solid cursor-pointer'
            >
                &gt;
            </button>
            <img
                src={images[currentIndex]}
                alt={`carousel-${currentIndex}`}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                className='border-2 border-black border-solid'
            />
        </div>
    );
};

export default Carousel;