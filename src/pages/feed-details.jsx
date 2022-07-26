import React, {useEffect} from "react";
import FeedIngredient from "../components/feed-item/feed-ingredient/feed-ingredient";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PagesStyles from './pages.module.css';
import {onClose, wsInit} from "../services/actions/ws-actions";

export const FeedDetailsPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {wsData, wsGetMessage} = useSelector(state => state.ws);
  const ingredient = wsData.orders.find((item) => item._id === id);

  useEffect(() => {
    dispatch(wsInit())
    return () => dispatch(onClose())
  }, [dispatch])

  if(ingredient) {
    return (
      <>
        {wsGetMessage && (
          <div className={PagesStyles.feed__page}>
            <p
              className={`${PagesStyles.feed__page_number} text text_type_digits-default mb-10`}>{ingredient.number}</p>
            <p className='text text_type_main-medium mb-3'>{ingredient.name}</p>
            <p className="text text_type_main-default mb-15">{ingredient.status}</p>
            <p className='text text_type_main-medium mb-6'>Состав:</p>
            <div>
              <div>
                {/*<FeedIngredient/>*/}
                <p>Флюоресцентная булка R2-D3</p>
                <div>
                  <p>2 x 20</p>
                  <CurrencyIcon/>
                </div>
              </div>
              <div>
                {/*<FeedIngredient/>*/}
                <p>Флюоресцентная булка R2-D3</p>
                <div>
                  <p>2 x 20</p>
                  <CurrencyIcon/>
                </div>
              </div>
            </div>
            <div className={`${PagesStyles.feed__page_date} mt-10`}>
              <p className='text text_type_main-default text_color_inactive'>{ingredient.createdAt}</p>
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
