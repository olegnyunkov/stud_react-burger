import React, {useEffect} from "react";
import PagesStyles from './pages.module.css';
import FeedItem from "../components/feed-item/feed-item";
import {useDispatch, useSelector} from "react-redux";
import {onClose, wsInit} from "../services/actions/ws-actions";
import {nanoid} from "nanoid";

export const FeedPage = () => {
  const dispatch = useDispatch();
  const {wsData, wsGetMessage} = useSelector(state => state.ws);

  useEffect(() => {
    dispatch(wsInit())
    return () => dispatch(onClose())
  }, [dispatch])

  return (
    <div className={PagesStyles.feed__info}>

      <div className={`${PagesStyles.feed} mr-15`}>
        <h2 className={`${PagesStyles.feed__title} text text_type_main-large`}>Лента заказов</h2>
        <div className={PagesStyles.feed__container}>
          {wsGetMessage && wsData.orders.map(data => {
            return <FeedItem key={nanoid()} orders={data}/>
          })}
        </div>
      </div>

      <div className={PagesStyles.feed__stats}>
        <div className={PagesStyles.feed__status}>
          <div className={PagesStyles.feed__ready}>
            <p className='text text_type_main-medium mb-6'>Готовы:</p>
            {/*{wsGetMessage && wsData.orders.map(data => {*/}
            {/*  return <p className='text text_type_digits-default mb-2'>034533</p>*/}
            {/*})}*/}
          </div>
          <div className={PagesStyles.feed__process}>
            <p className='text text_type_main-medium mb-6'>В работе:</p>
            <p className='text text_type_digits-default mb-2'>034538</p>
            <p className='text text_type_digits-default'>034541</p>
          </div>
        </div>
        <div>
          <p className='text text_type_main-medium'>Выполнено за все время:</p>
          <p className={`${PagesStyles.feed__total} text text_type_digits-large`}>{wsData.total}</p>
        </div>
        <div>
          <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
          <p className={`${PagesStyles.feed__total} text text_type_digits-large`}>{wsData.totalToday}</p>
        </div>
      </div>

    </div>
  )
}