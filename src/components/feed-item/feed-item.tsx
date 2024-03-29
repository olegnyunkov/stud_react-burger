import React, {FC} from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedItemStyles from './feed-item.module.css';
import FeedIngredient from "./feed-ingredient/feed-ingredient";
import {nanoid} from "nanoid";
import {Link, useLocation} from "react-router-dom";
import { date } from "../../utils/utils";
import { openModal } from "../../services/actions/modal-actions";
import {ILocationState, TIngredientsData, TWsDataOrders, useDispatch, useSelector} from "../../utils/types";

interface IFeedItem {
  orders: TWsDataOrders;
  url: string;
}

const FeedItem: FC<IFeedItem> = (props) => {
  const location = useLocation<ILocationState>();
  const dispatch = useDispatch();
  const {orders, url} = props;
  const {wsData} = useSelector(state => state.ws);
  const {ingredients} = useSelector(state => state.ingredients)

  const getIngredients = (id: string): TIngredientsData => {
    const lookup = ingredients.find((item): boolean => item._id === id)
    if (lookup === undefined) {
      throw new TypeError('find всегда найдет совпадение');
    }
    return lookup
  }

  const ingredientsList = orders.ingredients.map((id): TIngredientsData => {
      return getIngredients(id)
  })

  const totalPrice = (arr: TIngredientsData[] , sum: number = 0): number => {
      for (let {price} of arr)
        sum += price
      return sum
  }

  const elementCounter = (arr: TIngredientsData[]) => {
    if (arr.length - 5 > 0)
      return `+${arr.length - 5}`
  }

  if (!wsData) {
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
              {orders && orders.ingredients.slice(0, 6).map((data) => {
                return <FeedIngredient key={nanoid()} id={data} />
              })}
              <p className={`${FeedItemStyles.feed__counter} text text_type_digits-default`}>{elementCounter(ingredientsList)}</p>
            </div>
            <div className={`${FeedItemStyles.feed__price} ml-6`}>
              <p className='text text_type_digits-default mr-2'>{totalPrice(ingredientsList)}</p>
              <CurrencyIcon type={"primary"}/>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default FeedItem;