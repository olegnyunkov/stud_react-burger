import React, {FC, useEffect} from "react";
import PagesStyles from './pages.module.css';
import FeedItem from "../components/feed-item/feed-item";
import {onClose, wsInit, wsReset} from "../services/actions/ws-actions";
import {nanoid} from "nanoid";
import FeedInfo from "../components/feed-info/feed-info";
import {TWsDataOrders, useDispatch, useSelector} from "../utils/types";

export const FeedPage: FC = () => {
  const dispatch = useDispatch();
  const {wsData} = useSelector(state => state.ws);

  useEffect((): ()=>void => {
    dispatch(wsInit())
    return () => dispatch(onClose())
  }, [dispatch])

  useEffect(() => {
    dispatch(wsReset())
  }, [dispatch])

  if (!wsData) {
    return <p>Загрузка...</p>
  } else {
    return (
      <div className={PagesStyles.feed__info}>
        <div className={`${PagesStyles.feed} mr-15`}>
          <h2 className={`${PagesStyles.feed__title} text text_type_main-large`}>Лента заказов</h2>
          <div className={PagesStyles.feed__container}>
            {wsData.orders.map((data) => {
              return <FeedItem key={nanoid()} orders={data} url='/feed'/>
            })}
          </div>
        </div>
        <FeedInfo />
      </div>
    )
  }
}