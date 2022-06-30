import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './login.module.css';
import {sendUserRegistrationInfo} from '../utils/api';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    sendUserRegistrationInfo(name, email, password).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <div className={LoginPageStyles.login}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <Input onChange={onChangeName} placeholder="Имя" />
      </div>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <EmailInput onChange={onChangeEmail} />
      </div>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <PasswordInput onChange={onChangePassword} />
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