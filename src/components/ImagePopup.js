import React from "react";

function ImagePopup() {

    return (
        <div className="popup popup-photo">
        <div className="popup-photo__container">
            <div src="#" className="popup-photo__link" alt=" "></div>
            <h2 className="popup-photo__title">заголовок</h2>
            <button className="popup__close-button popup-photo__close-button" type="button" aria-label="Закрыть"></button>
        </div>
    </div>
    )
}
export default ImagePopup;