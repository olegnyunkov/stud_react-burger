import React from "react";
import {Link, Redirect} from 'react-router-dom'
import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './login.module.css';
import {sendUserRegistrationInfo} from '../utils/api';
import {useDispatch, useSelector} from "react-redux";
import {
  registrationEmail,
  registrationName,
  registrationPassword
} from "../services/actions/registration-actions";
import {addUser} from "../services/actions/user-actions";
import {setCookie} from "../utils/cookie";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const {email, password, name} = useSelector(state => state.registration);
  const {success} = useSelector(state => state.user);
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
    sendUserRegistrationInfo(email, password, name)
      .then(res => {
        dispatch(addUser(res))
        setCookie('accessToken', res.accessToken.split('Bearer ')[1])
        localStorage.setItem('refreshToken', res.refreshToken)
      })
      .catch(err => console.log(err))
  }

  if (success) {
    return <Redirect to='/'/>
  }

  return (
    <div className={LoginPageStyles.login}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <Input onChange={onChangeName} placeholder="Имя" value={name}/>
      </div>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <EmailInput onChange={onChangeEmail} value={email}/>
      </div>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <PasswordInput onChange={onChangePassword} value={password}/>
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
