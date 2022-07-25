import ProfileOrdersStyles from "./profile-orders.module.css";
import FeedItem from "../feed-item/feed-item";
import React, {useEffect} from "react";
import {getCookie} from "../../utils/cookie";
import {wsInitToken} from "../../services/actions/ws-actions";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid";


const ProfileOrders = () => {
  const dispatch = useDispatch();
  const {wsData, wsGetMessage} = useSelector(state => state.ws);
  const accessToken = getCookie('accessToken');
  console.log(accessToken)

  useEffect(() => {
    dispatch(wsInitToken(`wss://norma.nomoreparties.space/orders?token=${accessToken}`))
  }, [dispatch])

  return (
    <div className={ProfileOrdersStyles.orders__container}>
      {wsGetMessage && wsData.orders.map(data => {
        return <FeedItem key={nanoid()} orders={data}/>
      })}
    </div>
  )
}

export default ProfileOrders;