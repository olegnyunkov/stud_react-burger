import React from "react";
import {Link} from 'react-router-dom'
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './login.module.css'

export const LoginPage = () => {

  return (
    <div className={LoginPageStyles.login}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <div className='mt-6'>
        <EmailInput />
      </div>
      <div className='mt-6'>
        <PasswordInput/>
      </div>
      <div className='mt-6'>
        <Button type="primary" size="medium">Войти</Button>
      </div>
      <div className={`${LoginPageStyles.login__links} mt-20`}>
        <p className='text text_type_main-default mr-2'>Вы — новый пользователь?</p>
        <Link className="text text_type_main-default">Зарегистрироваться</Link>
      </div>
      <div className={`${LoginPageStyles.login__links} mt-4`}>
        <p className='text text_type_main-default mr-2'>Забыли пароль?</p>
        <Link className="text text_type_main-default">Восстановить пароль</Link>
      </div>
    </div>
  )
}