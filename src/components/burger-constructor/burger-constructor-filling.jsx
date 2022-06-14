import React, { useRef, useCallback, useState } from "react";
import update from 'immutability-helper';
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import Constructor from "./burger-constructor.module.css";
import { getOrder } from "../../utils/api";
import Modal from "../modal/modal";
import BurgerConstructorBun from "./burger-constructor-bun";
import OrderDetails from "../order-details/order-details";
import {
  addConstructorItem,
  deleteConstructorItem,
  resetConstructorItem,
} from "../../services/actions/actions";
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructorFilling = ({ filling, fill, index }) => {
  const [cards, setCards] = useState(filling)
  const dispatch = useDispatch();
  const ref = useRef(null);
  const id = fill._id

  const moveIngredients = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])

  const [{ handlerId }, dropTarget] = useDrop({
    accept: "ingr",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveIngredients(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
    drop(item) {
      dispatch(addConstructorItem(item));
    },
  });

  const [{ isDragging }, dragRef] = useDrag({
    type: "ingr",
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1
  dragRef(dropTarget(ref))

  return (    
    <div id={fill._id} ref={ref} className={Constructor.constructor__element} data-handler-id={handlerId}>
      <div className="mr-2">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={fill.name}
        price={fill.price}
        thumbnail={fill.image}
        handleClose={() => {
          dispatch(deleteConstructorItem(index));
        }}
      />
    </div>  
  );
};

export default BurgerConstructorFilling;
