import PagesStyles from "../../pages/pages.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC, useState} from "react";
import {refreshUserInfo} from "../../utils/api";
import {useDispatch} from "../../utils/types";


const ProfileInfo: FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  };
  const updateUserInfo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(refreshUserInfo(email, name, password))
  }
  const resetUserInfo = (): void => {
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={updateUserInfo}>
      <div className={`${PagesStyles.login__inputs} mt-6`}>
        <Input
          placeholder="Имя"
          onChange={onChangeName}
          value={name}/>
      </div>
      <div className={`${PagesStyles.login__inputs} mt-6`}>
        <EmailInput
          onChange={onChangeEmail}
          name='Введите электронную почту'
          value={email}/>
      </div>
      <div className={`${PagesStyles.login__inputs} mt-6`}>
        <PasswordInput
          onChange={onChangePassword}
          name='Введите пароль'
          value={password}/>
      </div>
      <div className={`${PagesStyles.profile__buttons} mt-6`}>
        <Button
          type="secondary"
          name='Отмена'
          children='Отмена'
          onClick={resetUserInfo}/>
        <Button
          type="primary"
          name='Сохранить'
          children='Сохранить'
          size="medium"/>
      </div>
    </form>
  )
}

export default ProfileInfo;