import PagesStyles from "../../pages/pages.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {refreshUserInfo} from "../../utils/api";
import {useDispatch} from "react-redux";


const ProfileInfo = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeName = (e) => {
    setName(e.target.value)
  };
  const onChangeEmail = e => {
    setEmail(e.target.value)
  };
  const onChangePassword = e => {
    setPassword(e.target.value)
  };
  const updateUserInfo = (e) => {
    e.preventDefault();
    dispatch(refreshUserInfo(email, name, password))
  }
  const resetUserInfo = () => {
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
          value={email}/>
      </div>
      <div className={`${PagesStyles.login__inputs} mt-6`}>
        <PasswordInput
          onChange={onChangePassword}
          value={password}/>
      </div>
      <div className={`${PagesStyles.profile__buttons} mt-6`}>
        <Button
          type="secondary"
          onClick={resetUserInfo}>Отмена</Button>
        <Button
          type="primary"
          size="medium">
          Сохранить
        </Button>
      </div>
    </form>
  )
}

export default ProfileInfo;