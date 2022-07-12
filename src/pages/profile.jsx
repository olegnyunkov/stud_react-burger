import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
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
  const updateUserInfo = () => {
    dispatch(refreshUserInfo(email, name, password))
  }

  if (!authorized) {
    return <Redirect to='/login'/>
  }

  return (
    <div className={LoginPageStyles.profile}>
      <div className='mr-15'>
        <Link
          to='/profile'
          className={`${LoginPageStyles.profile__links} text text_type_main-medium text_color_inactive`}>
          <p>Профиль</p>
        </Link>
        <Link
          to='/profile'
          className={`${LoginPageStyles.profile__links} text text_type_main-medium text_color_inactive`}>
          <p>История заказов</p>
        </Link>
        <Button
          type={"secondary"}
          onClick={userLogout}>Выход</Button>
        <p className={`${LoginPageStyles.profile__text} text text_type_main-default mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div>
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
        <div className="mt-6">
          <Button
            type="secondary">Отмена</Button>
          <Button
            type="primary"
            size="medium"
            onClick={updateUserInfo}>
            Восстановить
          </Button>
        </div>
      </div>
    </div>
  );
};
