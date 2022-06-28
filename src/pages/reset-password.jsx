import React from "react";
import {Link} from 'react-router-dom'
import {PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './login.module.css'

export const ResetPasswordPage = () => {

  return (
    <div className={LoginPageStyles.login}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <PasswordInput />
      </div>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <PasswordInput/>
      </div>
      <div className='mt-6'>
        <Button type="primary" size="medium">Сохранить</Button>
      </div>
      <div className={`${LoginPageStyles.login__links} mt-20`}>
        <p className='text text_type_main-default mr-2'>Вспомнили пароль?</p>
        <Link to={{pathname: '/login'}} className="text text_type_main-default">Войти</Link>
      </div>
    </div>
  )
}