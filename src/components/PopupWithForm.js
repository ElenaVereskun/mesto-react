import React from "react";

function PopupWithForm({ title, name, isOpen, onClose, children}) {

    return (
        <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
            
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" name={name}>
                    {children}
                    <button className="popup__save-button">Сохранить</button>
                </form>
                <button className="popup__close-button" onClick={onClose}></button>
                
            </div>
        </div>
    )
}
export default PopupWithForm;