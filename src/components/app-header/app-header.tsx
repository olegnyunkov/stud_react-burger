import React, {FC} from 'react';
import {Link, NavLink} from 'react-router-dom';
import HeaderStyles from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader: FC = () => {

  return (
    <header className={HeaderStyles.header}>
      <NavLink
        exact
        to='/'
        className={`mt-4 mb-4 mr-2 pt-4 pb-4 pr-5 pl-5 ${HeaderStyles.header__item}`}
        activeClassName={HeaderStyles.header__active}>
        <BurgerIcon type="secondary"/>
        <p className='text text_type_main-default ml-2'>Конструктор</p>
      </NavLink>
      <NavLink
        exact
        to='/feed'
        className={`mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ${HeaderStyles.header__item}`}
        activeClassName={HeaderStyles.header__active}>
        <ListIcon type="secondary"/>
        <p className={`text text_type_main-default ml-2`}>Лента заказов</p>
      </NavLink>
      <Link to='/'>
        <div className={HeaderStyles.header__logo}>
          <Logo/>
        </div>
      </Link>
      <NavLink
        to='/profile'
        className={`mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ${HeaderStyles.header__item}`}
        activeClassName={HeaderStyles.header__active}>
        <ProfileIcon type="secondary"/>
        <p className='text text_type_main-default ml-2'>Личный кабинет</p>
      </NavLink>
    </header>
  );
};

export default AppHeader;