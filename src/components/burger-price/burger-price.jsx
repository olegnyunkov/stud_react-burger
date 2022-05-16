import React from 'react';
import PropTypes from 'prop-types';
import {
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerPrice = (props) => {
  return (
    <div className={props.styles}>
      <p className="text text_type_digits-default mr-2">{props.price}</p>
      <CurrencyIcon type="primary"/>
    </div>
  )
}

BurgerPrice.propTypes = {
  styles: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default BurgerPrice;