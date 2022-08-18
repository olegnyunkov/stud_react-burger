import React, {FC} from 'react';
import {
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

interface IBurgerPrice {
    styles: string;
    price: number;
}

const BurgerPrice: FC<IBurgerPrice> = ({styles, price}) => {
  return (
    <div className={styles}>
      <p className="text text_type_digits-default mr-2">{price}</p>
      <CurrencyIcon type="primary"/>
    </div>
  )
}

export default BurgerPrice;