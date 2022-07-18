import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedItemStyles from './feed-item.module.css';

const FeedItem = () => {

  return (
    <div className={FeedItemStyles.feed__card}>
      <div className={FeedItemStyles.feed__info}>
        <p className='text text_type_digits-default'>#034535</p>
        <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
      </div>
      <p className='text text_type_main-medium mt-6'>Death Star Starship Main бургер</p>
      <div className={`${FeedItemStyles.feed__content} mt-6`}>
        <div className={FeedItemStyles.feed__ingredients}>

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