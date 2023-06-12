import React from 'react';
import { useEffect, useState } from 'react';
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
    onCardLike,
}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = useState([]);
    useEffect(() => {
        api.getCards()
            .then((data) => {
                setCards(
                    data.map((res) => ({
                        likes: res.likes,
                        link: res.link,
                        name: res.name,
                        key: res._id,
                        owner: res.owner,
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
                        <img className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} alt={currentUser.avatar} />
                        <button className="profile__edit-avatar" onClick={onEditAvatar}></button>
                    </div>
                    <div className="profile__user-name">
                        <div className="profile__user-edit">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__edit-button" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__job">{currentUser.about}</p>
                    </div>
                </div>
                <button className="profile__add-button" onClick={onAddPlace}>
                    <div className="profile__add-button-centre"></div>
                </button>
            </section>
            <div>
                <ul className="elements">
                    {cards.map((card) => (
                        <Card card={card}
                            onCardClick={onCardClick}
                            onCardLike={onCardLike}
                            key={card._id}
                            value={currentUser} >
                        </Card>
                    ))}
                </ul>
            </div>
        </main>
    )
}
export default Main;
