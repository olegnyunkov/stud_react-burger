import React from 'react';
import HeaderStyles from './app-header.module.css';
import { 
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    return(
        <header className={HeaderStyles.header}>
            <div className={`mt-4 mb-4 mr-2 pt-4 pb-4 pr-5 pl-5 ${HeaderStyles.header__item}`}>
                <BurgerIcon type="secondary" />
                <p className='text text_type_main-default ml-2'>Конструктор</p>
            </div>
            <div className={`mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ${HeaderStyles.header__item}`}>
                <ListIcon type="secondary" />
                <p className='text text_type_main-default ml-2'>Лента заказов</p>
            </div>
            <div className={HeaderStyles.header__logo}>
                <Logo />
            </div>
            <div className={`mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ${HeaderStyles.header__item}`}>
                <ProfileIcon type="secondary" />
                <p className='text text_type_main-default ml-2'>Личный кабинет</p>
            </div>
        </header>
    );
};

export default AppHeader;