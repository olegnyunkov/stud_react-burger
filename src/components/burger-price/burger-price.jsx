import React from 'react';
import PropTypes from 'prop-types';
import {
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerPrice = ({styles, price}) => {
  return (
    <div className={styles}>
      <p className="text text_type_digits-default mr-2">{price}</p>
      <CurrencyIcon type="primary"/>
    </div>
  )
}

BurgerPrice.propTypes = {
  styles: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default BurgerPrice;