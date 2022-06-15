import React from 'react';
import {
  ConstructorElement
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructorBun = ({ text, bun, type }) => {

  return (
  <div  className="pl-8 mr-4 mb-4">
      <ConstructorElement
        type={type}
        isLocked={true}
        text={`${bun.name} ${text}`}
        price={bun.price}
        thumbnail={bun.image}
      />
    </div>
  )
};

export default BurgerConstructorBun;