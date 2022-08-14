import ProfileOrdersStyles from "./profile-orders.module.css";
import FeedItem from "../feed-item/feed-item";
import React, {FC, useEffect} from "react";
import {getCookie} from "../../utils/cookie";
import {onClose, wsInitToken, wsReset} from "../../services/actions/ws-actions";
import {nanoid} from "nanoid";
import {TWsDataOrders, useDispatch, useSelector} from "../../utils/types";

const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const {wsData} = useSelector(state => state.ws);
  const accessToken: string | undefined = getCookie('accessToken');

  useEffect((): ()=>void => {
    dispatch(wsInitToken(`wss://norma.nomoreparties.space/orders?token=${accessToken}`))
    return () => dispatch(onClose())
  }, [accessToken, dispatch])

  useEffect(() => {
    dispatch(wsReset())
  }, [dispatch])

  if (!wsData) {
    return <p>Загрузка...</p>
  } else {
    return (
      <div className={ProfileOrdersStyles.orders__container}>
        {wsData.orders?.reverse().map((data: TWsDataOrders) => {
          return <FeedItem key={nanoid()} orders={data} url='/profile/orders'/>
        })}
      </div>
    )
  }
}

export default ProfileOrders;