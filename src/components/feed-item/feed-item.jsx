import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedItemStyles from './feed-item.module.css';
import FeedIngredient from "./feed-ingredient/feed-ingredient";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid";
import {Link, useLocation, useRouteMatch} from "react-router-dom";
import { date } from "../../utils/utils";
import { openModal } from "../../services/actions/modal-actions";

const FeedItem = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {orders} = props;
  const {wsGetMessage} = useSelector(state => state.ws);
  const {ingredients} = useSelector(state => state.ingredients)
  const {url} = useRouteMatch();

  const getIngredients = (id) => {
    return ingredients.find((item) => item._id === id)
  }

  const ingredientsList = orders.ingredients.map((id) => {
    return getIngredients(id)
  })

  const totalPrice = (arr, sum = 0) => {
    for (let { price } of arr)
      sum += price
    return sum
  }

  if (!wsGetMessage) {
    return <p>Загрузка...</p>
  } else {
    return (
      <Link
        to={{
          pathname: `${url}/${orders._id}`,
          state: {background: location}
        }}
        className={`${FeedItemStyles.feed__link} text text_type_main-default`}>
        <div className={FeedItemStyles.feed__card} onClick={() => dispatch(openModal())}>
          <div className={FeedItemStyles.feed__info}>
            <p className='text text_type_digits-default'>#0{orders.number}</p>
            <p className='text text_type_main-default text_color_inactive'>{date(orders.updatedAt)}</p>
          </div>
          <p className='text text_type_main-medium mt-6'>{orders.name}</p>
          <div className={`${FeedItemStyles.feed__content} mt-6`}>
            <div className={FeedItemStyles.feed__ingredients}>
              {orders.ingredients.slice(0, 6).map((data) => {
                return <FeedIngredient key={nanoid()} id={data} />
              })}
            </div>
            <div className={`${FeedItemStyles.feed__price} ml-6`}>
              <p className='text text_type_digits-default mr-2'>{totalPrice(ingredientsList)}</p>
              <CurrencyIcon/>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default FeedItem;