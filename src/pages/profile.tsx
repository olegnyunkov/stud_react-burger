import React, {FC} from "react";
import {useRouteMatch} from "react-router-dom";
import PagesStyles from "./pages.module.css";
import ProfileMenu from "../components/profile-menu/profile-menu";
import ProfileInfo from "../components/profile-info/profile-info";
import ProfileOrders from "../components/profile-orders/profile-orders";

interface IMatchParams {
  path?: string | undefined;
}

export const ProfilePage: FC = () => {
  const infoMatch = useRouteMatch<IMatchParams>('/profile')
  const ordersMatch = useRouteMatch<IMatchParams>('/profile/orders')
  console.log(infoMatch)

  return (
    <div className={PagesStyles.profile}>
      <ProfileMenu />
      {infoMatch && infoMatch.isExact && <ProfileInfo/>}
      {ordersMatch && <ProfileOrders/>}
    </div>
  );
};
