import React, {useState} from "react";
import {Link, Redirect, useLocation} from 'react-router-dom'
import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PagesStyles from './pages.module.css';
import {sendUserRegistrationInfo} from '../utils/api';
import {useDispatch, useSelector} from "react-redux";
import { resetError } from "../services/actions/user-actions";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {authorized, registrationFailed, registrationRequest} = useSelector(state => state.user);
  const onChangeName = e => {
    setName(e.target.value)
  }
  const onChangeEmail = e => {
    setEmail(e.target.value)
  }
  const onChangePassword = e => {
    setPassword(e.target.value)
  }
  const userRegistration = (e) => {
    e.preventDefault();
    dispatch(sendUserRegistrationInfo(email, password, name))
  }
  const resetErrors = () => {
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
          value={email}/>
      </div>
      <div className={`${PagesStyles.login__inputs} mt-6`}>
        <PasswordInput 
          onChange={onChangePassword} 
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
