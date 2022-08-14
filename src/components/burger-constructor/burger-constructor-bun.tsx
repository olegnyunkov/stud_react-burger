import React, {FC} from 'react';
import {
  ConstructorElement
} from '@ya.praktikum/react-developer-burger-ui-components';
import {TIngredientsData} from "../../utils/types";

interface IBurgerConstructorBun {
    text: string;
    bun: TIngredientsData;
    type: "top" | "bottom" | undefined;
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