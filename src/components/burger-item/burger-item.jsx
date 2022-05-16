import React from 'react';
import PropTypes from 'prop-types';
import BurgerImage from '../burger-image/burger-image';
import BurgerPrice from '../burger-price/burger-price';
import BurgerItemStyles from './burger-item.module.css';

const BurgerItem = (props) => {

  return (
    <div onClick={props.openIngredientsModal}>
      <BurgerImage src={props.src} alt={props.name} styles={'ml-4 mr-4 mb-1'}/>
      <BurgerPrice price={props.price} styles={`${BurgerItemStyles.bun__price} mb-1`}/>
      <p className={`${BurgerItemStyles.bun__title} text text_type_main-default`}>{props.name}</p>
    </div>
  )
}

BurgerItem.propTypes = {
  onClick: PropTypes.func,
}

export default BurgerItem;