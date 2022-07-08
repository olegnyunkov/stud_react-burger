import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import HeaderStyles from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
  
  return (
    <header className={HeaderStyles.header}>
      <NavLink to='/' className={`mt-4 mb-4 mr-2 pt-4 pb-4 pr-5 pl-5 ${HeaderStyles.header__item}`}>
        <BurgerIcon type="secondary"/>
        <p className='text text_type_main-default ml-2 text_color_inactive'>Конструктор</p>
      </NavLink>
      <NavLink to='/login' className={`mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ${HeaderStyles.header__item} ${({isActive}) => isActive ? HeaderStyles.header__active : 'text_color_inactive'}`}>
        <ListIcon type="secondary"/>
        <p className={`text text_type_main-default ml-2`}>Лента заказов</p>
      </NavLink>
      <div className={HeaderStyles.header__logo}>
        <Logo/>
      </div>
      <Link to='/profile' className={`mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ${HeaderStyles.header__item}`}>
        <ProfileIcon type="secondary"/>
        <p className='text text_type_main-default ml-2 text_color_inactive'>Личный кабинет</p>
      </Link>
    </header>
  );
};

export default AppHeader;