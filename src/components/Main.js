import React from "react";

function Main() {
    return (
        <main className="content">
        <section className="profile">
            <div className="profile__info">
                <div className="profile__photo">
                    
                    <button className="profile__edit-avatar" alt-label="изменить аватар" type="button"></button>
                </div>
                <div className="profile__user-name">
                    <div className="profile__user-edit">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__edit-button" type="button" aria-label="Изменить"></button>
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
    </main>
    )
}

export default Main;