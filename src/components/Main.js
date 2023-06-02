import { useEffect, useState } from 'react';
import api from "../utils/Api";
import Card from "./Card";

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onPhotoClick,
}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserProfileInfo().then((data) => {
            setUserName(data.name);
            setUserDescription(data.about)
            setUserAvatar(data.avatar);
        })
            .catch((err) => console.log(`Ошибка: ${err}`));

        api.getCards()
            .then((data) => {
                setCards(
                    data.map((res) => ({
                        likes: res.likes,
                        link: res.link,
                        name: res.name,
                        key: res._id,
                    }))
                );
            })
            .catch((err) => console.log(`Ошибка: ${err}`));
    }, []);

    return (
        <main className="page">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__photo">
                        <img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
                        <button className="profile__edit-avatar" onClick={onEditAvatar}></button>
                    </div>
                    <div className="profile__user-name">
                        <div className="profile__user-edit">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit-button" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" onClick={onAddPlace}>
                    <div className="profile__add-button-centre"></div>
                </button>
            </section>
            <div>
                <ul className="elements">
                    {cards.map((card) => (
                        <Card card={card} onCardClick={onPhotoClick} key={card._id}>
                        </Card>
                    ))}
                </ul>
            </div>
        </main>
    )
}
export default Main;