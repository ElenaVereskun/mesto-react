import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import api from "../utils/Api";
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  useEffect(() => {
    api.getUserProfileInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))

    api.getCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      api.likeCard(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => console.log(err));
    } else {
      api.deleteLikeCard(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((deleteCard) => {
        setCards((state) => state.filter((c) => c._id === card._id ? deleteCard : c));
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateUser() {
    api.editUserInfo()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateAvatar(){
    api.editAvatar()
      .then((data) =>{
        setCurrentUser(data)
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}  >
      <div className="content">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}          
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} />
        <PopupWithForm
          title={'Новое место'}
          name={'add'}
          buttonText={'Создать'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={
            <div>
              <input className="popup__input popup-add__place" type="text" id="input-place" name="name"
                placeholder="Название" required />
              <span className="popup__error input-place-error" id="input-place-error"></span>
              <input className="popup__input popup-add__link" type="url" id="input-link" name="link"
                placeholder="Ссылка на картинку" required />
              <span className="popup__error input-link-error" id="input-link-error"></span>
            </div>
          } />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
