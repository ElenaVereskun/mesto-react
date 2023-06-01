import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar
}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
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
                        cardId: res._id,
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
                    <template id="element-template">
                        {cards.map((card) => (
                            <Card 
                            link={card.link}
                            name={card.name}
                            likes={card.likes}
                            key={card.cardId}
                            />
                        ))}
                    </template>
                </ul>
            </div>
        </main>
    )
}
export default Main;