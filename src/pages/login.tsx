import React, {FC, useState} from "react";
import {Link, Redirect, useLocation} from 'react-router-dom';
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PagesStyles from './pages.module.css';
import {sendUserLoginInfo} from "../utils/api";
import { resetError } from "../services/actions/user-actions";
import {ILocationState, useDispatch, useSelector} from "../utils/types";

export const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<ILocationState>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {authorized, loginRequest, loginError} = useSelector(state => state.user);
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  };
  const userLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendUserLoginInfo(email, password))
  };
  const resetErrors = (): void => {
    dispatch(resetError())
  }

  if (authorized) {
    return <Redirect to={location?.state?.from || '/'}/>
  }

  if (loginError) {
    setTimeout(resetErrors, 2000)
    return <p className={`text text_type_main-large ${PagesStyles.loading__screen}`}>Произошла ошибка при получении данных</p>
  } else if (loginRequest) {
    return <p className={`text text_type_main-large ${PagesStyles.loading__screen}`}>Загрузка...</p>
  } else {
    return (
      <form className={PagesStyles.login} onSubmit={userLogin}>
        <h2 className="text text_type_main-medium">Вход</h2>
        <div className={`${PagesStyles.login__inputs} mt-6`}>
          <EmailInput
            onChange={onChangeEmail}
            name='Введите Email'
            value={email}/>
        </div>
        <div className={`${PagesStyles.login__inputs} mt-6`}>
          <PasswordInput
            onChange={onChangePassword}
            name='Введите пароль'
            value={password}/>
        </div>
        <div className='mt-6'>
          <Button
            type="primary"
            name='Войти'
            children='Войти'
            size="medium"/>
        </div>
        <div className={`${PagesStyles.login__links} mt-20`}>
          <p className='text text_type_main-default mr-2'>Вы — новый пользователь?</p>
          <Link
            to={{pathname: '/register'}}
            className="text text_type_main-default">Зарегистрироваться</Link>
        </div>
        <div className={`${PagesStyles.login__links} mt-4`}>
          <p className='text text_type_main-default mr-2'>Забыли пароль?</p>
          <Link
            to={{pathname: '/forgot-password'}}
            className="text text_type_main-default">Восстановить пароль</Link>
        </div>
      </form>
    )
  }
}