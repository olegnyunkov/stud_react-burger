import React from 'react';
import PropTypes from "prop-types";
import ConstructorElementEmpty from './burger-constructor.module.css';

const BurgerConstructorEmpty = (props) => {
  const { text } = props;

  return (
    <div
      className={`${ConstructorElementEmpty.constructor__element_empty} pl-8 mr-4 mb-4 text text_type_main-default`}
    >
      {text}
    </div>
  );
};

BurgerConstructorEmpty.propTypes = {
  text: PropTypes.string.isRequired
};

export default BurgerConstructorEmpty;