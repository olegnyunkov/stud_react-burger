import PagesStyles from "../../pages/pages.module.css";
import {NavLink} from "react-router-dom";
import React, {FC} from "react";
import {sendUserLogoutInfo} from "../../utils/api";
import {useDispatch} from "../../utils/types";

const ProfileMenu: FC = () => {
  const dispatch = useDispatch();
  const userLogout = (): void => {
    dispatch(sendUserLogoutInfo(localStorage.getItem('refreshToken')))
  }

  return (
    <div className={`${PagesStyles.profile__nav} mr-15`}>
      <NavLink
        exact
        to='/profile'
        className={`${PagesStyles.profile__links} text text_type_main-medium text_color_inactive`}
        activeClassName={PagesStyles.profile__links_active}>
        Профиль
      </NavLink>
      <NavLink
        exact
        to='/profile/orders'
        className={`${PagesStyles.profile__links} text text_type_main-medium text_color_inactive`}
        activeClassName={PagesStyles.profile__links_active}>
        История заказов
      </NavLink>
      <button
        className={`${PagesStyles.profile__button} text text_type_main-medium text_color_inactive pt-4 pb-4`}
        onClick={userLogout}>Выход</button>
      <p className={`${PagesStyles.profile__text} text text_type_main-default mt-20`}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </div>
  )
}

export default ProfileMenu;