import React, {FC} from 'react';
import ConstructorElementEmpty from './burger-constructor.module.css';

interface IBurgerConstructorEmpty {
  text: string;
}

const BurgerConstructorEmpty: FC<IBurgerConstructorEmpty> = (props) => {
  const { text } = props;

  return (
    <div
      className={`${ConstructorElementEmpty.constructor__element_empty} pl-8 mr-4 mb-4 text text_type_main-default`}
    >
      {text}
    </div>
  );
};

export default BurgerConstructorEmpty;