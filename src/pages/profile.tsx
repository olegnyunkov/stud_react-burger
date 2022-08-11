import React from "react";
import {Redirect, useRouteMatch} from "react-router-dom";
import PagesStyles from "./pages.module.css";
import ProfileMenu from "../components/profile-menu/profile-menu";
import ProfileInfo from "../components/profile-info/profile-info";
import ProfileOrders from "../components/profile-orders/profile-orders";

interface IMatchParams {
  id: string;
  isExact?: boolean
}

export const ProfilePage = () => {
  const infoMatch = useRouteMatch('/profile')
  const ordersMatch = useRouteMatch('/profile/orders')

  return (
    <div className={PagesStyles.profile}>
      <ProfileMenu />
      {infoMatch.isExact && <ProfileInfo/>}
      {ordersMatch && <ProfileOrders/>}
    </div>
  );
};
