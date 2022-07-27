import React, {useEffect} from "react";
import FeedIngredient from "../components/feed-item/feed-ingredient/feed-ingredient";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PagesStyles from './pages.module.css';
import {onClose, wsInit} from "../services/actions/ws-actions";
import { date } from "../utils/utils";

export const FeedDetailsPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {wsData, wsGetMessage} = useSelector(state => state.ws);
  const {ingredients} = useSelector(state => state.ingredients)
  const ingredient = wsData.orders.find((item) => item._id === id);
  
  
  const ingr = ingredients.filter(item => ingredient.ingredients.map(unit => item._id === unit))   

  console.log(ingr)
  

  useEffect(() => {
    dispatch(wsInit())
    return () => dispatch(onClose())
  }, [dispatch])

  const status = () => {
    if(ingredient.status === 'done') {
      return 'Выполнен'
    }
  }

  if(ingredient) {
    return (
      <>
        {wsGetMessage && (
          <div className={PagesStyles.feed__page}>
            <p
              className={`${PagesStyles.feed__page_number} text text_type_digits-default mb-10`}>#0{ingredient.number}</p>
            <p className='text text_type_main-medium mb-3'>{ingredient.name}</p>
            <p className="text text_type_main-default mb-15">{status()}</p>
            <p className='text text_type_main-medium mb-6'>Состав:</p>
            <div className={`${PagesStyles.feed__page_container} pr-6`}>

              {/* {result.map(item => {
                return ( */}
              <div className={`${PagesStyles.feed__page_ingredient} mb-4`}>
                <div className={`${PagesStyles.feed__page_block} mr-4`}>
                  <img src="https://code.s3.yandex.net/react/code/bun-01.png" alt="Ингредиент" className={PagesStyles.feed__page_image} />
                </div>
                <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
                <div className={`${PagesStyles.feed__page_price} ml-4`}>
                  <p className='text text_type_digits-default mr-2'>2 x 20</p>
                  <CurrencyIcon/>
                </div>
              </div>
              {/* )})} */}

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
}
