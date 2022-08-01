import React, {useState} from "react";
import {Link, Redirect, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {PasswordInput, Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PagesStyles from './pages.module.css';
import {setNewPassword} from '../utils/api';
import { resetError } from "../services/actions/user-actions";

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [value, setValue] = useState('');
  const [tokenValue, setTokenValue] = useState('');
  const {newPassSuccess, newPassRequest, newPassFailed, authorized} = useSelector(state => state.user);
  const onChange = e => {
    setValue(e.target.value)
  }
  const onChangeToken = e => {
    setTokenValue(e.target.value)
  }
  const newPassword = (e) => {
    e.preventDefault();
    dispatch(setNewPassword(value, tokenValue))
  }

  const resetErrors = () => {
    dispatch(resetError())
  }

  if (newPassSuccess) {
    return <Redirect to='/'/>
  }

  if (authorized) {
    return <Redirect to={location?.state?.from || '/'}/>
  }

  if (newPassFailed) {
    setTimeout(resetErrors, 2000)
    return <p className={`text text_type_main-large ${PagesStyles.loading__screen}`}>Произошла ошибка при получении данных</p>
  } else if (newPassRequest) {
    return <p className={`text text_type_main-large ${PagesStyles.loading__screen}`}>Загрузка...</p>
  } else {
    return (
      <form className={PagesStyles.login} onSubmit={newPassword}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <div className={`${PagesStyles.login__inputs} mt-6`}>
          <PasswordInput
            onChange={onChange}
            value={value}
            name={'password'}/>
        </div>
        <div className={`${PagesStyles.login__inputs} mt-6`}>
          <Input
            onChange={onChangeToken}
            placeholder='Введите код из письма'/>
        </div>
        <div className='mt-6'>
          <Button
            type="primary"
            size="medium">Сохранить</Button>
        </div>
        <div className={`${PagesStyles.login__links} mt-20`}>
          <p className='text text_type_main-default mr-2'>Вспомнили пароль?</p>
          <Link
            to={{pathname: '/login'}}
            className="text text_type_main-default">Войти</Link>
        </div>
      </form>
    )
  }
}