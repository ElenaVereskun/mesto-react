import React from "react";
import PopupWithForm from "./PopupWithForm";
import avatar from '../images/avatar.jpg';

function Avatar() {
    return (
        <img src={avatar} className="profile__avatar" alt="аватар" />
    );
};
 /*
function HandleEditAvatarClick() {
    
    document.querySelector('.profile__edit-avatar').addEventListener('click', (() => {
        document.querySelector('.popup-avatar').classList.add('popup_opened');
    }));
};


function HandleEditProfileClick() {
    document.querySelector('.profile-popup').classList.add('popup_opened');
  };
  document.querySelector('.profile__edit-button').addEventListener('click', HandleEditProfileClick);

function HandleAddPlaceClick() {
    document.querySelector('.popup-add').classList.add('popup_opened');
  };
  document.querySelector('.profile__add-button').addEventListener('click', HandleAddPlaceClick); */


function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar
}) {
    return (
        <main className="page">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__photo">
                        <Avatar />
                        <button className="profile__edit-avatar" alt-label="изменить аватар" type="button"></button>
                    </div>
                    <div className="profile__user-name">
                        <div className="profile__user-edit">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="profile__edit-button" onClick={onEditProfile}></button>

                        </div>
                        <p className="profile__job">Исследователь океана</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить">
                    <div className="profile__add-button-centre"></div>
                </button>
            </section>
            <div>
                <ul className="elements">
                    <template id="element-template">
                        <li className="element">
                            <div className="element__image">
                                <button className="element__delete element__delete_none" type="button" aria-label="удаление"></button>

                            </div>
                            <div className="element__caption">
                                <h2 className="element__title"></h2>
                                <div className="element__likes">
                                    <button className="element__like" type="button" aria-label="лайк"></button>
                                    <p className="element__like-count">0</p>
                                </div>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
            <div>

            </div>

            <div className="popup profile-popup popup-profile" >
                <div className="profile-popup__container">
                    <h2 className="profile-popup__title">Редактировать профиль</h2>
                    <div className="profile-popup__form popup__form" name="поп-ап">
                        <div className="profile-popup__user profile-popup__user_info_name popup__input" id="input-name"></div>
                        <span className="popup__error input-name-error" id="input-name-error"></span>
                        <div className="profile-popup__user profile-popup__user_info_job popup__input" id="input-job"></div>
                        <span className="popup__error input-job-error" id="input-job-error"></span>
                        <button className="profile-popup__save-button popup__save-button" type="submit"
                            aria-label="Сохранить">Сохранить</button>
                    </div>
                    <button className="popup__close-button profile-popup__close-button" type="button" aria-label="Закрыть"></button>
                </div>
            </div>
            <div className="popup popup-add">
                <div className="popup-add__container">
                    <h2 className="popup-add__title">Новое место</h2>
                    <div className="popup-add__form popup__form" name="поп-ап" >
                        <div className="popup__input popup-add__place" type="text" id="input-place"></div>
                        <span className="popup__error input-place-error" id="input-place-error"></span>
                        <div className="popup__input popup-add__link" type="url" id="input-link"></div>
                        <span className="popup__error input-link-error" id="input-link-error"></span>
                        <button className="popup-add__save-button popup__save-button" type="submit"
                            aria-label="Создать">Создать</button>
                    </div>
                    <button className="popup__close-button popup-add__close-button" type="button" aria-label="Закрыть"></button>
                </div>
            </div>
            <div className="popup popup-photo">
                <div className="popup-photo__container">
                    <div src="#" className="popup-photo__link" alt=" "></div>
                    <h2 className="popup-photo__title">заголовок</h2>
                    <button className="popup__close-button popup-photo__close-button" type="button" aria-label="Закрыть"></button>
                </div>
            </div>
            <div className="popup popup-confirm">
                <div className="popup-confirm__form popup__form" name="поп-ап">
                    <div className="popup-confirm__container">
                        <h2 className="popup-confirm__title">Вы уверены?</h2>
                        <button className="popup-confirm popup-confirm__save-button" type="submit">Да</button>
                        <button className="popup__close-button popup-confirm__close-button" type="button" aria-label="Закрыть"></button>
                    </div>
                </div>
            </div>
            <div className="popup popup-avatar">
                <div className="popup-avatar__container">
                    <h2 className="popup-avatar__title">Обновить аватар</h2>
                    <div className="popup-avatar__form popup__form" name="поп-ап">
                        <div src=" " className="popup__input popup-avatar__link" type="url" id="input-link-avatar"></div>
                        <span className="popup__error input-link-avatar-error" id="input-link-avatar-error"></span>
                        <button className="popup-avatar__save-button popup__save-button" type="submit">Сохранить</button>
                        <button className="popup__close-button popup-avatar__close-button" type="button"
                            aria-label="Закрыть"></button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;