import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const placeRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: placeRef.current.value,
            link: linkRef.current.value
        });
    }

    return (
        <PopupWithForm
            title={'Новое место'}
            name={'add'}
            buttonText={'Создать'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            children={
                <div>
                    <input className="popup__input popup-add__place" ref={placeRef} type="text" id="input-place" name="name"
                        placeholder="Название" required />
                    <span className="popup__error input-place-error" id="input-place-error"></span>
                    <input className="popup__input popup-add__link" ref={linkRef} type="url" id="input-link" name="link"
                        placeholder="Ссылка на картинку" required />
                    <span className="popup__error input-link-error" id="input-link-error"></span>
                </div>
            } />
    )
}
export default AddPlacePopup;