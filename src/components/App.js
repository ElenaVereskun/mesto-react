import Input from '../Input';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='page'>
      <Header />      
      <Main 
      
      function handleEditAvatarClick
      handleEditProfileClick
      handleAddPlaceClick
      />
      <Footer />
      
      <div className="popup profile-popup">
        <div className="profile-popup__container">
          <h2 className="profile-popup__title">Редактировать профиль</h2>
          <form className="profile-popup__form popup__form" name="поп-ап">
            <Input
              placeholder='Имя'
              handleChange={() => console.log('hi2')}
            />
            <Input
              placeholder='Занятие'
              handleChange={() => console.log('hi3')}
            />
            <button className="profile-popup__save-button popup__save-button" type="submit"
              aria-label="Сохранить">Сохранить</button>
          </form>
          <button className="popup__close-button profile-popup__close-button" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup-add">
        <div className="popup-add__container">
          <h2 className="popup-add__title">Новое место</h2>
          <form className="popup-add__form popup__form" name="поп-ап">
            <Input
              placeholder='Имя'
              handleChange={() => console.log('hi4')}
            />
            <Input
              placeholder='Занятие'
              handleChange={() => console.log('hi5')}
            />
            <button className="popup-add__save-button popup__save-button" type="submit"
              aria-label="Создать">Создать</button>
          </form>
          <button className="popup__close-button popup-add__close-button" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup-photo">
        <div className="popup-photo__container">

          <h2 className="popup-photo__title">заголовок</h2>
          <button className="popup__close-button popup-photo__close-button" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup-confirm">
        <form className="popup-confirm__form popup__form" name="поп-ап">
          <div className="popup-confirm__container">
            <h2 className="popup-confirm__title">Вы уверены?</h2>
            <button className="popup-confirm popup-confirm__save-button" type="submit">Да</button>
            <button className="popup__close-button popup-confirm__close-button" type="button" aria-label="Закрыть"></button>
          </div>
        </form>
      </div>
      <div className="popup popup-avatar">
        <div className="popup-avatar__container">
          <h2 className="popup-avatar__title">Обновить аватар</h2>
          <form className="popup-avatar__form popup__form" name="поп-ап">
            <Input
              placeholder='Занятие'
              handleChange={() => console.log('hi6')}
            />
            <button className="popup-avatar__save-button popup__save-button" type="submit">Сохранить</button>
            <button className="popup__close-button popup-avatar__close-button" type="button"
              aria-label="Закрыть"></button>
          </form>
        </div>
      </div>

    </div>
  );
}
export default App;
