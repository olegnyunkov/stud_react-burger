import React, {useState} from "react";
import {Link, Redirect} from 'react-router-dom'
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './login.module.css';
import {sendResetPasswordRequest} from "../utils/api";
import {useDispatch, useSelector} from "react-redux";

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const {forgotPassSuccess, forgotPassRequest, forgotPassFailed} = useSelector(state => state.user);
  const onChange = e => {
    setValue(e.target.value)
  }
  const resetPassword = (e) => {
    e.preventDefault();
    dispatch(sendResetPasswordRequest(value))
  }

  if (forgotPassSuccess) {
    return <Redirect to='/reset-password'/>
  }

  if (forgotPassFailed) {
    return <p>Произошла ошибка при получении данных</p>
  } else if (forgotPassRequest) {
    return <p>Загрузка...</p>
  } else {
    return (
      <form className={LoginPageStyles.login}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <div className={`${LoginPageStyles.login__inputs} mt-6`}>
          <EmailInput
            onChange={onChange}
            value={value}
            name='Укажите e-mail'/>
        </div>
        <div className='mt-6'>
          <Button
            type="primary"
            size="medium"
            onClick={resetPassword}>Восстановить</Button>
        </div>
        <div className={`${LoginPageStyles.login__links} mt-20`}>
          <p className='text text_type_main-default mr-2'>Вспомнили пароль?</p>
          <Link
            to={{pathname: '/login'}}
            className="text text_type_main-default">Войти</Link>
        </div>
      </form>
    )
  }
}