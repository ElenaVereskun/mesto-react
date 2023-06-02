import React from "react";

function Card({ card, onCardClick }) {
  const { name, link } = card;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <div className="element__image">
        <button className="element__delete element__delete_none" type="button" aria-label="удаление"></button>
        <img src={link} className="element__link" alt={name} onClick={handleClick} />
      </div>
      <div className="element__caption">
        <h2 className="element__title">{name}</h2>
        <div className="element__likes">
          <button className="element__like" type="button" aria-label="лайк"></button>
          <p className="element__like-count">0</p>
        </div>
      </div>
    </li>
  )
}
export default Card;