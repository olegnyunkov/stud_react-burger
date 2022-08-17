import React from 'react';
import Ingredients from './burger-ingredients.module.css';
import BurgerItem from '../burger-item/burger-item';
import Title from '../title/title';
import Tabs from '../tabs/tabs';
import {getDetails} from "../../services/actions/ingredient-details-actions";
import { openModal } from '../../services/actions/modal-actions';
import {useDispatch, useSelector} from "../../utils/types";
import {useInView} from "react-intersection-observer";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const {ingredients, isLoading, errorLoading} = useSelector(state => state.ingredients);
  const [bunsRef, inViewBuns] = useInView({threshold: 0});
  const [saucesRef, inViewSauces] = useInView({threshold: 0});
  const [fillingRef, inViewFilling] = useInView({threshold: 0});

  if (errorLoading) {
    return <p>Произошла ошибка при получении данных</p>
  } else if (isLoading) {
    return <p>Загрузка...</p>
  } else {
    return (
      <>
        <section>
          <Title 
            styles={'mt-10 mb-5 text text_type_main-large'} 
            title='Соберите бургер'/>
          <Tabs 
            inViewBuns={inViewBuns} 
            inViewSauces={inViewSauces} 
            inViewFilling={inViewFilling}/>
          <div className={Ingredients.ingredients__items}>
            <Title 
              styles={'mt-10 text text_type_main-medium'} 
              title='Булки'/>
            <div ref={bunsRef} id='buns' className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
              {ingredients.map((item) => {
                if (item.type === 'bun') {
                  return (
                    <BurgerItem 
                      key={item._id} 
                      item={item} 
                      src={item.image} 
                      name={item.name} 
                      price={item.price}
                      openIngredientsModal={() => {
                        dispatch(getDetails(item))
                        dispatch(openModal())
                      }}/>
                  )
                }
              })}
            </div>
            <Title 
              styles={'mb-6 text text_type_main-medium'} 
              title='Соусы'/>
            <div ref={saucesRef} id='sauces' className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
              {ingredients.map((item) => {
                if (item.type === 'sauce') {
                  return (
                    <BurgerItem 
                      key={item._id} 
                      item={item} 
                      src={item.image} 
                      name={item.name} 
                      price={item.price}
                      openIngredientsModal={() => {
                        dispatch(getDetails(item))
                        dispatch(openModal())
                      }}/>
                  )
                }
              })}
            </div>
            <Title 
              styles={'mb-6 text text_type_main-medium'} 
              title='Начинки'/>
            <div ref={fillingRef} id='mains' className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
              {ingredients.map((item) => {
                if (item.type === 'main') {
                  return (
                    <BurgerItem 
                      key={item._id} 
                      item={item} 
                      src={item.image} 
                      name={item.name} 
                      price={item.price}
                      openIngredientsModal={() => {
                        dispatch(getDetails(item))
                        dispatch(openModal())
                      }}/>
                  )
                }
              })}
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default BurgerIngredients;