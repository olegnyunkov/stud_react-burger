import React from 'react';
import ConstructorElementEmpty from './burger-constructor.module.css';

const BurgerConstructorEmpty = ({ text }) => {

  return (
    <div
      className={`${ConstructorElementEmpty.constructor__element_empty} pl-8 mr-4 mb-4 text text_type_main-default`}
    >
      {text}
    </div>
  );
};

export default BurgerConstructorEmpty;