import React from "react";

function PopupWithForm({ title, name, isOpen }) {

    function IsOpen(){
        return(
            document.querySelector('.popup').classList.add('popup_opened')
        )
    }
        

    return (
        <div className={`popup popup-${name} ${{isOpen} ? 'popup_opened' : 'close'}`}>
            
            <div className="popup__container">
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" name={name}>

                    <button className="popup__save-button">{title}</button>
                </form>
                <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
                
            </div>
        </div>
    )
}
export default PopupWithForm;