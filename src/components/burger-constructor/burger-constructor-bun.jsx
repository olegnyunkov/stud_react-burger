import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useDrag, useDrop} from "react-dnd";
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";
import Constructor from './burger-constructor.module.css';
import {getOrder} from '../../utils/api';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {addConstructorItem, deleteConstructorItem, resetConstructorItem} from "../../services/actions/actions";
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
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