import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const avatarRef = React.useRef();
    
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef
        });
    }
    return (
        <PopupWithForm
            title={'Обновить аватар'}
            name={'avatar'}
            buttonText={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            children={
                <div>
                    <input src=" " ref={avatarRef} className="popup__input popup-avatar__link" type="url" id="input-link-avatar" name="link"
                        placeholder="Ссылка на аватар" required />
                    <span className="popup__error input-link-avatar-error" id="input-link-avatar-error"></span>
                </div>
            } />
    )
}
export default EditAvatarPopup;