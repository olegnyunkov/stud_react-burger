import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './login.module.css';
import {sendUserRegistrationInfo} from '../utils/api';
import {useDispatch, useSelector} from "react-redux";
import {
  registrationEmail,
  registrationName,
  registrationPassword,
  registrationSuccess
} from "../services/actions/registration-actions";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const {email, password, name} = useSelector(state => state.registration);
  const onChangeName = e => {
    dispatch(registrationName(e.target.value))
  }
  const onChangeEmail = e => {
    dispatch(registrationEmail(e.target.value))
  }
  const onChangePassword = e => {
    dispatch(registrationPassword(e.target.value))
  }
  const userRegistration = (e) => {
    e.preventDefault();
    sendUserRegistrationInfo(email, password, name).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <div className={LoginPageStyles.login}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <Input onChange={onChangeName} placeholder="Имя" value={name} />
      </div>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <EmailInput onChange={onChangeEmail} value={email} />
      </div>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <PasswordInput onChange={onChangePassword} value={password} />
      </div>
      <div className='mt-6'>
        <Button onClick={userRegistration} type="primary" size="medium">Зарегистрироваться</Button>
      </div>
      <div className={`${LoginPageStyles.login__links} mt-20`}>
        <p className='text text_type_main-default mr-2'>Уже зарегистрированы?</p>
        <Link to={{pathname: '/login'}} className="text text_type_main-default">Войти</Link>
      </div>
    </div>
  )
}