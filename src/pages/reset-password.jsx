import React from "react";
import {Link} from 'react-router-dom'
import {PasswordInput, Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './login.module.css';
import {setNewPassword} from '../utils/api'

export const ResetPasswordPage = () => {
  const [value, setValue] = React.useState('');
  const [tokenValue, setTokenValue] = React.useState('')
  const onChange = e => {
    setValue(e.target.value)
  }
  const onChangeToken = e => {
    setTokenValue(e.target.value)
  }
  const newPassword = (e) => {
    e.preventDefault();
    setNewPassword(value, tokenValue).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <form className={LoginPageStyles.login}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <PasswordInput
          onChange={onChange}
          value={value}
          name={'password'} />
      </div>
      <div className={`${LoginPageStyles.login__inputs} mt-6`}>
        <Input
          onChange={onChangeToken}
          placeholder='Введите код из письма' />
      </div>
      <div className='mt-6'>
        <Button
          type="primary"
          size="medium"
          onClick={newPassword}>Сохранить</Button>
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