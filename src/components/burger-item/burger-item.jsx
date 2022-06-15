import React from 'react';
import {useSelector} from "react-redux";
import {useDrag} from "react-dnd";
import PropTypes from 'prop-types';
import BurgerImage from '../burger-image/burger-image';
import BurgerPrice from '../burger-price/burger-price';
import BurgerItemStyles from './burger-item.module.css';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerItem = ({openIngredientsModal, src, name, price, item}) => {

  const {bun, filling} = useSelector(state => state.construct);

  //хук для перемещения элемента в конструктор
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {item}
  });

  //счетчик количества ингредиентов в конструкторе
  const counter = () => {
    const fillId = filling.map((fill) => {
      return fill._id
    })
    let count = 0;
    for (let elem of fillId) {
      if (elem === item._id) {
        count++
      }
    }
    if(bun !== null) {
      if(bun._id === item._id) {
        count++
      }
    }
    return count
  }

  return (
    <div ref={dragRef} onClick={openIngredientsModal} className={BurgerItemStyles.burger__element}>
      <div>
        {counter() !== 0 && <Counter count={counter()} size="default"/>}
      </div>
      <BurgerImage src={src} alt={name} styles={'ml-4 mr-4 mb-1'}/>
      <BurgerPrice price={price} styles={`${BurgerItemStyles.bun__price} mb-1`}/>
      <p className={`${BurgerItemStyles.bun__title} text text_type_main-default`}>{name}</p>
    </div>
  )
}

BurgerItem.propTypes = {
  openIngredientsModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
}

export default BurgerItem;