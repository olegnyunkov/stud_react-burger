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
  const {name, number, updatedAt, _id, ingredients} = props.orders;
  const {wsGetMessage} = useSelector(state => state.ws);
  const {url} = useRouteMatch()
  console.log(url)

  return (
    <Link 
    to={{
      pathname: `${url}/${_id}`,
      state: { background: location}
      }} 
    className={`${FeedItemStyles.feed__link} text text_type_main-default`}>
      <div className={FeedItemStyles.feed__card} onClick={() => dispatch(openModal())}>
        <div className={FeedItemStyles.feed__info}>
          <p className='text text_type_digits-default'>#0{number}</p>
          <p className='text text_type_main-default text_color_inactive'>{date(updatedAt)}</p>
        </div>
        <p className='text text_type_main-medium mt-6'>{name}</p>
        <div className={`${FeedItemStyles.feed__content} mt-6`}>
          <div className={FeedItemStyles.feed__ingredients}>
            {wsGetMessage && ingredients.slice(0, 5).map((data, index) => {
              return <FeedIngredient key={nanoid()} id={data} index={index} length={ingredients}/>
            })}
          </div>
          <div className={`${FeedItemStyles.feed__price} ml-6`}>
            <p className='text text_type_digits-default mr-2'>480</p>
            <CurrencyIcon/>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeedItem;