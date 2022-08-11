import ProfileOrdersStyles from "./profile-orders.module.css";
import FeedItem from "../feed-item/feed-item";
import React, {useEffect} from "react";
import {getCookie} from "../../utils/cookie";
import {onClose, wsInitToken, wsReset} from "../../services/actions/ws-actions";
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "../../utils/types";

const ProfileOrders = () => {
  const dispatch = useDispatch();
  const {wsData} = useSelector(state => state.ws);
  const accessToken = getCookie('accessToken');

  useEffect(() => {
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
        {wsData.orders?.reverse().map(data => {
          return <FeedItem key={nanoid()} orders={data} url='/profile/orders'/>
        })}
      </div>
    )
  }
}

export default ProfileOrders;