import React, {useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from "./login.module.css";
import {refreshUserInfo, sendUserLogoutInfo} from '../utils/api';
import {useDispatch, useSelector} from "react-redux";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {authorized} = useSelector(state => state.user);
  const onChangeName = (e) => {
    setName(e.target.value)
  };
  const onChangeEmail = e => {
    setEmail(e.target.value)
  };
  const onChangePassword = e => {
    setPassword(e.target.value)
  };
  const userLogout = () => {
    dispatch(sendUserLogoutInfo(localStorage.getItem('refreshToken')))
  }
  const updateUserInfo = (e) => {
    e.preventDefault();
    dispatch(refreshUserInfo(email, name, password))
  }
  const resetUserInfo = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

  if (!authorized) {
    return <Redirect to='/login'/>
  }

  return (
    <div className={LoginPageStyles.profile}>
      <div className={`${LoginPageStyles.profile__nav} mr-15`}>
        <NavLink
          exact
          to='/profile'
          className={`${LoginPageStyles.profile__links} text text_type_main-medium text_color_inactive`}
          activeClassName={LoginPageStyles.profile__links_active}>
          Профиль
        </NavLink>
        <NavLink
          exact
          to='/profile/orders'
          className={`${LoginPageStyles.profile__links} text text_type_main-medium text_color_inactive`}
          activeClassName={LoginPageStyles.profile__links_active}>
          История заказов
        </NavLink>
          <button
            className={`${LoginPageStyles.profile__button} text text_type_main-medium text_color_inactive pt-4 pb-4`}
            onClick={userLogout}>Выход</button>
        <p className={`${LoginPageStyles.profile__text} text text_type_main-default mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form onSubmit={updateUserInfo}>
        <div className={`${LoginPageStyles.login__inputs} mt-6`}>
          <Input
            placeholder="Имя"
            onChange={onChangeName}
            value={name}/>
        </div>
        <div className={`${LoginPageStyles.login__inputs} mt-6`}>
          <EmailInput
            onChange={onChangeEmail}
            value={email}/>
        </div>
        <div className={`${LoginPageStyles.login__inputs} mt-6`}>
          <PasswordInput
            onChange={onChangePassword}
            value={password}/>
        </div>
        <div className={`${LoginPageStyles.profile__buttons} mt-6`}>
          <Button
            type="secondary"
            onClick={resetUserInfo}>Отмена</Button>
          <Button
            type="primary"
            size="medium">
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  );
};
