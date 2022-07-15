import React, {useState} from "react";
import {Link, Redirect, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './login.module.css';
import {sendUserLoginInfo} from "../utils/api";
import { resetError } from "../services/actions/user-actions";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {authorized, loginRequest, loginError} = useSelector(state => state.user);
  const onChangeEmail = e => {
    setEmail(e.target.value)
  };
  const onChangePassword = e => {
    setPassword(e.target.value)
  };
  const location = useLocation()

  const userLogin = () => {
    dispatch(sendUserLoginInfo(email, password))
  };
  const resetErrors = () => {
    dispatch(resetError())
  }

  if (authorized) {
    return <Redirect to='/'/>
  }

  if (loginError) {
    setTimeout(resetErrors, 2000)
    return <p className={`text text_type_main-large ${LoginPageStyles.loading__screen}`}>Произошла ошибка при получении данных</p>
  } else if (loginRequest) {
    return <p className={`text text_type_main-large ${LoginPageStyles.loading__screen}`}>Загрузка...</p>
  } else {
    return (
      <div className={LoginPageStyles.login}>
        <h2 className="text text_type_main-medium">Вход</h2>
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
        <div className='mt-6'>
          <Button
            onClick={userLogin}
            type="primary"
            size="medium">Войти</Button>
        </div>
        <div className={`${LoginPageStyles.login__links} mt-20`}>
          <p className='text text_type_main-default mr-2'>Вы — новый пользователь?</p>
          <Link
            to={{pathname: '/register'}}
            className="text text_type_main-default">Зарегистрироваться</Link>
        </div>
        <div className={`${LoginPageStyles.login__links} mt-4`}>
          <p className='text text_type_main-default mr-2'>Забыли пароль?</p>
          <Link
            to={{pathname: '/forgot-password'}}
            className="text text_type_main-default">Восстановить пароль</Link>
        </div>
      </div>
    )
  }
}