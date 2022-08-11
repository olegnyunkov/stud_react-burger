import React, {FC} from 'react';
import PropTypes from "prop-types";
import {
  ConstructorElement
} from '@ya.praktikum/react-developer-burger-ui-components';
import {TIngredients} from "../../utils/types";

interface IBurgerConstructorBun {
    text: string;
    bun: TIngredients;
    type: string;
}

const BurgerConstructorBun: FC<IBurgerConstructorBun> = (props) => {
  const { text, bun, type } = props;

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