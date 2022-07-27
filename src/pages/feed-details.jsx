import React, {useEffect} from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PagesStyles from './pages.module.css';
import {onClose, wsInit} from "../services/actions/ws-actions";
import {date, ingredientsId} from "../utils/utils";
import {nanoid} from "nanoid";

export const FeedDetailsPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {wsData, wsGetMessage} = useSelector(state => state.ws);
  const {ingredients} = useSelector(state => state.ingredients)
  const ingredient = wsData.orders.find((item) => item._id === id);
  const ingredientList = ingredientsId(ingredient.ingredients, ingredients)

  useEffect(() => {
      dispatch(wsInit())
      return () => dispatch(onClose())
  }, [dispatch])

  const status = () => {
    if (ingredient.status === 'done') {
      return 'Выполнен'
    }
  }

  return (
    <>
      {wsGetMessage && ingredientList && (
        <div className={PagesStyles.feed__page}>
          <p
            className={`${PagesStyles.feed__page_number} text text_type_digits-default mb-10`}>#0{ingredient.number}</p>
          <p className='text text_type_main-medium mb-3'>{ingredient.name}</p>
          <p className={`${PagesStyles.feed__page_status} text text_type_main-default mb-15`}>{status()}</p>
          <p className='text text_type_main-medium mb-6'>Состав:</p>
          <div className={`${PagesStyles.feed__page_container} pr-6`}>

            {ingredientList.map(item => {
              return (
                <div className={`${PagesStyles.feed__page_ingredient} mb-4`} key={nanoid()}>
                  <div className={`${PagesStyles.feed__page_block} mr-4`}>
                    <img src={item.image} alt="Ингредиент"
                         className={PagesStyles.feed__page_image}/>
                  </div>
                  <p className="text text_type_main-default">{item.name}</p>
                  <div className={`${PagesStyles.feed__page_price} ml-4`}>
                    <p className='text text_type_digits-default mr-2'>{item.price}</p>
                    <CurrencyIcon/>
                  </div>
                </div>
              )
            })}

          </div>
          <div className={`${PagesStyles.feed__page_date} mt-10`}>
            <p className='text text_type_main-default text_color_inactive'>{date(ingredient.createdAt)}</p>
            <div className={PagesStyles.feed__page_price}>
              <p className="text text_type_digits-default mr-2">510</p>
              <CurrencyIcon/>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

