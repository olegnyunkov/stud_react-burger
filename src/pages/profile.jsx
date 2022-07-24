import React from "react";
import {Redirect, useRouteMatch} from "react-router-dom";

import PagesStyles from "./pages.module.css";
import {useSelector} from "react-redux";
import ProfileMenu from "../components/profile-menu/profile-menu";
import ProfileInfo from "../components/profile-info/profile-info";
import ProfileOrders from "../components/profile-orders/profile-orders";

export const ProfilePage = () => {
  const {authorized} = useSelector(state => state.user);
  const infoMatch = useRouteMatch('/profile')
  const ordersMatch = useRouteMatch('/profile/orders')

  if (!authorized) {
    return <Redirect to='/login'/>
  }

  return (
    <div className={PagesStyles.profile}>
      <ProfileMenu />
      {infoMatch && <ProfileInfo/>}
      {ordersMatch && <ProfileOrders/>}
    </div>
  );
};
