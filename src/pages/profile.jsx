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
      <div>
        <Link>
          <p className="text text_type_main-medium">Профиль</p>
        </Link>
        <Link>
          <p className="text text_type_main-medium">История заказов</p>
        </Link>
        <Link>
          <p className="text text_type_main-medium">Выход</p>
        </Link>
        <p className="text text_type_main-default">
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
          <p>Отмена</p>
          <Button type="primary" size="medium">
            Восстановить
          </Button>
        </div>
      </div>
    </div>
  );
};
