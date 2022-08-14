import React, {useState} from "react";
import {Link, Redirect, useLocation} from 'react-router-dom';
import {PasswordInput, Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PagesStyles from './pages.module.css';
import {setNewPassword} from '../utils/api';
import { resetError } from "../services/actions/user-actions";
import {ILocationState, useDispatch, useSelector} from "../utils/types";

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const location = useLocation<ILocationState>();
  const [value, setValue] = useState<string>('');
  const [tokenValue, setTokenValue] = useState<string>('');
  const {newPassSuccess, newPassRequest, newPassFailed, authorized} = useSelector(state => state.user);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }
  const onChangeToken = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTokenValue(e.target.value)
  }
  const newPassword = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setNewPassword(value, tokenValue))
  }

  const resetErrors = (): void => {
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
            value={tokenValue}
            placeholder='Введите код из письма'/>
        </div>
        <div className='mt-6'>
          <Button
            type="primary"
            name='Сохранить'
            size="medium"/>
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