import React from "react";
import ModalStyles from "../styles/Modal.module.css";

export default function Modal({ children, trigger }) {
    const [isOpen, setIsOpen] = React.useState(false);


    function openModal() {
        setIsOpen(true);
    };

    function closeModal(e) {
        if (e.target === e.currentTarget) {
            setIsOpen(false)
        }
    };

    return (
        <>
            <div onClick={openModal}>{trigger}</div>
            {isOpen ? (
                <div className={ModalStyles.modal} onClick={closeModal}>
                    <div>
                        <button className={ModalStyles.closeButton} onClick={closeModal}>X</button>
                        {children}
                    </div>
                </div>
            ) : (
                <></>
            )}

        </>
    )
}