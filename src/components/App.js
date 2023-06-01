import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }


  return (
    <div className="content">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick}/>

      <PopupWithForm 
      title={'Редактировать профиль'} 
      name={'prifile'} 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups}
      children={
        <div>
            <input className="popup-profile__user popup-profile__user_info_name popup__input" id="input-name"
                    type="text" name="name" placeholder="Имя пользователя"required/>
            <span className="popup__error input-name-error" id="input-name-error"></span>
            <input className="popup-profile__user popup-profile__user_info_job popup__input" id="input-job" type="text"
                    name="job" placeholder="Род деятельности"required/>
            <span className="popup__error input-job-error" id="input-job-error"></span>
        </div>     
      }/>
      <PopupWithForm 
      title={'Обновить аватар'} 
      name={'avatar'} 
      isOpen={isEditAvatarPopupOpen} 
      onClose={closeAllPopups}
      children={
        <div>
            <input src=" " className="popup__input popup-avatar__link" type="url" id="input-link-avatar" name="link"
                    placeholder="Ссылка на аватар" required/>
            <span className="popup__error input-link-avatar-error" id="input-link-avatar-error"></span>
        </div> 
      }/>
      <PopupWithForm 
      title={'Новое место'} 
      name={'add'} 
      isOpen={isAddPlacePopupOpen} 
      onClose={closeAllPopups}
      children={
        <div>
                <input className="popup__input popup-add__place" type="text" id="input-place" name="name"
                    placeholder="Название" required/>
                <span className="popup__error input-place-error" id="input-place-error"></span>
                <input className="popup__input popup-add__link" type="url" id="input-link" name="link"
                    placeholder="Ссылка на картинку" required/>
                <span className="popup__error input-link-error" id="input-link-error"></span>
        </div>     
      }/>
      <ImagePopup />
      <Footer />
    </div>
  );
}
export default App;
