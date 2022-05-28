import React from 'react';
import PropTypes from 'prop-types';
import BurgerImage from '../burger-image/burger-image';
import BurgerPrice from '../burger-price/burger-price';
import BurgerItemStyles from './burger-item.module.css';

const BurgerItem = ({openIngredientsModal, src, name, price}) => {

  return (
    <div onClick={openIngredientsModal}>
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
  price: PropTypes.number.isRequired
}

export default BurgerItem;