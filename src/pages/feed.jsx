import React, {useEffect} from "react";
import PagesStyles from './pages.module.css';
import FeedItem from "../components/feed-item/feed-item";
import {useDispatch} from "react-redux";
import {wsConnectionStart} from "../services/actions/ws-actions";

export const FeedPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsConnectionStart())
  })

  return (
    <div className={PagesStyles.feed__info}>

      <div className={`${PagesStyles.feed} mr-15`}>
        <h2 className={`${PagesStyles.feed__title} text text_type_main-large`}>Лента заказов</h2>
        <div className={PagesStyles.feed__container}>
          <FeedItem/>
          <FeedItem/>
          <FeedItem/>
          <FeedItem/>
        </div>
      </div>

      <div className={PagesStyles.feed__stats}>
        <div className={PagesStyles.feed__status}>
          <div className={PagesStyles.feed__ready}>
            <p className='text text_type_main-medium mb-6'>Готовы:</p>
            <p className='text text_type_digits-default mb-2'>034533</p>
            <p className='text text_type_digits-default'>034533</p>
          </div>
          <div className={PagesStyles.feed__process}>
            <p className='text text_type_main-medium mb-6'>В работе:</p>
            <p className='text text_type_digits-default mb-2'>034538</p>
            <p className='text text_type_digits-default'>034541</p>
          </div>
        </div>
        <div>
          <p className='text text_type_main-medium'>Выполнено за все время:</p>
          <p className="text text_type_digits-large">28 752</p>
        </div>
        <div>
          <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
          <p className="text text_type_digits-large">138</p>
        </div>
      </div>

    </div>
  )
}