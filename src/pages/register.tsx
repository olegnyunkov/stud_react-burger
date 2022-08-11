import React, {FC, useState} from "react";
import {Link, Redirect, useLocation} from 'react-router-dom'
import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PagesStyles from './pages.module.css';
import {sendUserRegistrationInfo} from '../utils/api';
import { resetError } from "../services/actions/user-actions";
import {ILocationState, useDispatch, useSelector} from "../utils/types";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const location = useLocation<ILocationState>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {authorized, registrationFailed, registrationRequest} = useSelector(state => state.user);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const userRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendUserRegistrationInfo(email, password, name))
  }
  const resetErrors = (): void => {
    dispatch(resetError())
  }

  if (authorized) {
    return <Redirect to={location?.state?.from || '/'}/>
  }

  if (registrationFailed) {
    setTimeout(resetErrors, 2000)
    return <p className={`text text_type_main-large ${PagesStyles.loading__screen}`}>Произошла ошибка при получении данных</p>
  } else if (registrationRequest) {
    return <p className={`text text_type_main-large ${PagesStyles.loading__screen}`}>Загрузка...</p>
  } else {
  return (
    <form className={PagesStyles.login} onSubmit={userRegistration}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <div className={`${PagesStyles.login__inputs} mt-6`}>
        <Input 
          onChange={onChangeName} 
          placeholder="Имя" 
          value={name}/>
      </div>
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
          size="medium">Зарегистрироваться</Button>
      </div>
      <div className={`${PagesStyles.login__links} mt-20`}>
        <p className='text text_type_main-default mr-2'>Уже зарегистрированы?</p>
        <Link 
          to={{pathname: '/login'}} 
          className="text text_type_main-default">Войти</Link>
      </div>
    </form>
  )
  }
}
