import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from "./login.module.css";

export const ProfilePage = () => {
  return (
    <div className={LoginPageStyles.profile}>
      <div className='mr-15'>
        <Link className={`${LoginPageStyles.profile__links} text text_type_main-medium text_color_inactive`}>
          <p>Профиль</p>
        </Link>
        <Link className={`${LoginPageStyles.profile__links} text text_type_main-medium text_color_inactive`}>
          <p>История заказов</p>
        </Link>
        <Button type={"secondary"}>Выход</Button>
        <p className={`${LoginPageStyles.profile__text} text text_type_main-default mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div>
        <div className={`${LoginPageStyles.login__inputs} mt-6`}>
          <Input placeholder="Имя" />
        </div>
        <div className={`${LoginPageStyles.login__inputs} mt-6`}>
          <EmailInput />
        </div>
        <div className={`${LoginPageStyles.login__inputs} mt-6`}>
          <PasswordInput />
        </div>
        <div className="mt-6">
          <Button type="secondary">Отмена</Button>
          <Button type="primary" size="medium">
            Восстановить
          </Button>
        </div>
      </div>
    </div>
  );
};
