import React from "react";

function Card({props}) {

  return (
    <div>
      <template id="element-template">
        <li className="element">
          <div className="element__image">
            <button className="element__delete element__delete_none" type="button" aria-label="удаление"></button>
            <img src=" " className="element__link" alt=" " />
          </div>
          <div className="element__caption">
            <h2 className="element__title">{props.name}</h2>
            <div className="element__likes">
              <button className="element__like" type="button" aria-label="лайк"></button>
              <p className="element__like-count">{props.likes}</p>
            </div>
          </div>
        </li>
      </template>
    </div>
  )
}
export default Card;