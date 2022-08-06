import PagesStyles from "../../pages/pages.module.css";
import {nanoid} from "nanoid";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {date, ingredientsId} from "../../utils/utils";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getCookie} from "../../utils/cookie";
import {onClose, wsInit, wsInitToken} from "../../services/actions/ws-actions";

const FeedDetails = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {wsData} = useSelector(state => state.ws);
  const {ingredients} = useSelector(state => state.ingredients)
  const {authorized} = useSelector(state => state.user)
  console.log(ingredients)

  useEffect(() => {
    if (!wsData) {
      authorized
        ? dispatch(wsInitToken(`wss://norma.nomoreparties.space/orders?token=${accessToken}`))
        : dispatch(wsInit())
    }
    return () => {
      dispatch(onClose());
    };
  }, [dispatch]);

  const ingredient = wsData.orders?.find((item) => item._id === id);
  const ingredientList = ingredientsId(ingredient.ingredients, ingredients);
  const accessToken = getCookie('accessToken');

  const status = () => {
    if (ingredient.status === 'done') {
      return 'Выполнен'
    }
  }

  const getIngredients = (id) => {
    return ingredients.find((item) => item._id === id)
  }

  const ingredientsLists = ingredient?.ingredients.map((id) => {
    return getIngredients(id)
  })

  const totalPrice = (arr, sum = 0) => {
    for (let {price} of arr)
      sum += price
    return sum
  }

  const uniqIngr = (arr,  obj = {}) => {
    arr.forEach((el) => {
      const name = el.name
      if (name in obj) {
        obj[name].count++
      } else {
        obj[name] = el
        obj[name].count = 1
      }
    })

    return Object.values(obj)
  }

  if (!ingredientList) {
    return <p>Загрузка...</p>
  } else {
    return (
      <>
        <p className={`${PagesStyles.feed__page_number} text text_type_digits-default mb-10`}>#0{ingredient.number}</p>
        <p className='text text_type_main-medium mb-3'>{ingredient.name}</p>
        <p className={`${PagesStyles.feed__page_status} text text_type_main-default mb-15`}>{status()}</p>
        <p className='text text_type_main-medium mb-6'>Состав:</p>
        <div className={`${PagesStyles.feed__page_container} pr-6`}>

          {uniqIngr(ingredientList).map(item => {
            return (
              <div className={`${PagesStyles.feed__page_ingredient} mb-4`} key={nanoid()}>
                <div className={`${PagesStyles.feed__page_block} mr-4`}>
                  <img src={item.image} alt="Ингредиент"
                       className={PagesStyles.feed__page_image}/>
                </div>
                <p className="text text_type_main-default">{item.name}</p>
                <div className={`${PagesStyles.feed__page_price} ml-4`}>
                  <p className='text text_type_digits-default mr-2'>{item.count} x {item.price}</p>
                  <CurrencyIcon/>
                </div>
              </div>
            )
          })}

        </div>
        <div className={`${PagesStyles.feed__page_date} mt-10`}>
          <p className='text text_type_main-default text_color_inactive'>{date(ingredient.createdAt)}</p>
          <div className={PagesStyles.feed__page_price}>
            <p className="text text_type_digits-default mr-2">{totalPrice(ingredientsLists)}</p>
            <CurrencyIcon/>
          </div>
        </div>
      </>
    )
  }
}

export default FeedDetails;