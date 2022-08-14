import React, {FC, useState} from "react";
import {Link, Redirect, useLocation} from 'react-router-dom'
import {EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PagesStyles from './pages.module.css';
import {sendResetPasswordRequest} from "../utils/api";
import { resetError } from "../services/actions/user-actions";
import {ILocationState, useDispatch, useSelector} from "../utils/types";

type TButton = {
  type: string;
  name: string;
  size: string;
  children: string;
}

export const ForgotPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<ILocationState>();
  const [email, setEmail] = useState<string>('');
  const {forgotPassSuccess, forgotPassRequest, forgotPassFailed, authorized} = useSelector(state => state.user);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }
  const resetPassword = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(sendResetPasswordRequest(email))
  }

  const resetErrors = (): void => {
    dispatch(resetError())
  }

  if (forgotPassSuccess) {
    return <Redirect to='/reset-password'/>
  }

  if (authorized) {
    return <Redirect to={location?.state?.from || '/'}/>
  }

  if (forgotPassFailed) {
    setTimeout(resetErrors, 2000)
    return <p className={`text text_type_main-large ${PagesStyles.loading__screen}`}>Произошла ошибка при получении данных</p>
  } else if (forgotPassRequest) {
    return <p className={`text text_type_main-large ${PagesStyles.loading__screen}`}>Загрузка...</p>
  } else {
    return (
      <form className={PagesStyles.login} onSubmit={resetPassword}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <div className={`${PagesStyles.login__inputs} mt-6`}>
          <EmailInput
            onChange={onChange}
            value={email}
            name='Укажите e-mail'/>
        </div>
        <div className='mt-6'>
          <Button
            type="primary"
            name='Восстановить'
            size="medium"></Button>
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