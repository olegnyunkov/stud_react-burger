import React from "react";
import {Link, Redirect} from 'react-router-dom'
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {loginEmail, loginPassword} from "../services/actions/login-actions";
import {sendUserLoginInfo} from "../utils/api";
import {addUser} from "../services/actions/user-actions";
import {setCookie} from "../utils/cookie";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const {email, password} = useSelector(state => state.login);
  const {success} = useSelector(state => state.user);
  const onChangeEmail = e => {
    dispatch(loginEmail(e.target.value))
  }
  const onChangePassword = e => {
    dispatch(loginPassword(e.target.value))
  }
  const userLogin = () => {
    sendUserLoginInfo(email, password)
      .then(res => {
        dispatch(addUser(res))
        setCookie('accessToken', res.accessToken.split('Bearer ')[1])
        localStorage.setItem('refreshToken', res.refreshToken)
        console.log(document.cookie)
      })
      .catch(err => console.log(err))
  }

  if (success) {
    return <Redirect to='/'/>
  }

  return (
    <div className={LoginPageStyles.login}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <EmailInput onChange={onChangeEmail} value={email}/>
      </div>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <PasswordInput onChange={onChangePassword} value={password}/>
      </div>
      <div className='mt-6'>
        <Button onClick={userLogin} type="primary" size="medium">Войти</Button>
      </div>
      <div className={`${LoginPageStyles.login__links} mt-20`}>
        <p className='text text_type_main-default mr-2'>Вы — новый пользователь?</p>
        <Link to={{pathname: '/register'}} className="text text_type_main-default">Зарегистрироваться</Link>
      </div>
      <div className={`${LoginPageStyles.login__links} mt-4`}>
        <p className='text text_type_main-default mr-2'>Забыли пароль?</p>
        <Link to={{pathname: '/forgot-password'}} className="text text_type_main-default">Восстановить пароль</Link>
      </div>
    </div>
  )
}