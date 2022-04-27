import React from 'react';
import HeaderStyles from './app-header.module.css'
import { 
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    } from '@ya.praktikum/react-developer-burger-ui-components';


const AppHeader = () => {
    return(
        <header className={HeaderStyles.header}>
            <div className={HeaderStyles.header__item}>
                <BurgerIcon type="secondary" />
                <p>Конструктор</p>
            </div>
            <div className={HeaderStyles.header__item}>
                <ListIcon type="secondary" />
                <p>Лента заказов</p>
            </div>
            <Logo />
            <div className={HeaderStyles.header__item}>
                <ProfileIcon type="secondary" />
                <p>Личный кабинет</p>
            </div>
        </header>
    );
};

export default AppHeader;