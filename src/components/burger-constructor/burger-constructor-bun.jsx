import React from 'react';
import PropTypes from "prop-types";
import {
  ConstructorElement
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructorBun = (props) => {
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

BurgerConstructorBun.propTypes = {
  text: PropTypes.string.isRequired,
  bun: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default BurgerConstructorBun;