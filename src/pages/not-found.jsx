import LoginPageStyles from "./login.module.css";
import React from "react";
import {Link} from "react-router-dom";

export const NotFoundPage = () => {

  return (
    <div className={LoginPageStyles.login}>
      <h2 className="text text_type_main-medium">Ошибка</h2>
      <p className='text text_type_main-default'>Запрашиваемая страница не найдена</p>
      <Link
        to={{pathname: '/'}}
        className="text text_type_main-default">
        На главную
      </Link>
    </div>
  )
}