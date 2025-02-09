import React, { useState } from 'react';

const Modal = ({ show, toggleModal, title, content  }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="absolute top-0 left-0 h-[100vh] w-[100vw] grid place-content-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal relative bg-amber-400 px-18 py-10 border-8 border-yellow-700 border-solid">
                <button className="cursor-pointer modal-close absolute right-6 -mt-8 text-2xl font-extrabold" onClick={toggleModal}>
                    &times;
                </button>
                <h1 className='font-extrabold'>{title}</h1>
                {content}
            </div>
        </div>
    );
};

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal show={showModal} onClose={toggleModal}>

            </Modal>
        </div>
    );
};

export default Modal;