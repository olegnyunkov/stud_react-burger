import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedItemStyles from './feed-item.module.css';
import FeedIngredient from "./feed-ingredient/feed-ingredient";
import {useSelector} from "react-redux";
import {nanoid} from "nanoid";

const FeedItem = (props) => {
  const {name, number, updatedAt, ingredients} = props.orders;
  const {wsGetMessage} = useSelector(state => state.ws);

  return (
    <div className={FeedItemStyles.feed__card}>
      <div className={FeedItemStyles.feed__info}>
        <p className='text text_type_digits-default'>{number}</p>
        <p className='text text_type_main-default text_color_inactive'>{updatedAt}</p>
      </div>
      <p className='text text_type_main-medium mt-6'>{name}</p>
      <div className={`${FeedItemStyles.feed__content} mt-6`}>
        <div className={FeedItemStyles.feed__ingredients}>
          {wsGetMessage && ingredients.slice(0, 5).map(data => {
              return <FeedIngredient key={nanoid()} id={data}/>
          })}
        </div>
        <div className={`${FeedItemStyles.feed__price} ml-6`}>
          <p className='text text_type_digits-default mr-2'>480</p>
          <CurrencyIcon/>
        </div>
      </div>
    </div>
  )
}

export default FeedItem;