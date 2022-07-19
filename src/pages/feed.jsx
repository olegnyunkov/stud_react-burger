import React from "react";
import PagesStyles from './pages.module.css';
import FeedItem from "../components/feed-item/feed-item";

export const FeedPage = () => {

  return (
    <div className={PagesStyles.feed}>
      <h2 className={`${PagesStyles.feed__title} text text_type_main-large`}>Лента заказов</h2>
      <div className={PagesStyles.feed__container}>
        <FeedItem />
        <FeedItem />
      </div>
    </div>
  )
}