import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen();
  }
  return (
    <div className='content'>
      <Header />
      <Main onEditProfile={isEditProfilePopupOpen} />
      
      <PopupWithForm title={'Сохранить'} name={'prifile'} isOpen={handleEditProfileClick}/>
      <Footer />
    </div>
  );
}
export default App;
