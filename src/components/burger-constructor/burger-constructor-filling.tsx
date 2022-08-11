import React, {FC, useRef} from "react";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import ConstructorFillingStyles from "./burger-constructor-filling.module.css";
import {  
  deleteConstructorItem,
  moveConstructorItem,
} from "../../services/actions/constructor-actions";
import {  
  ConstructorElement,  
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {TIngredients, useDispatch} from "../../utils/types";

interface IBurgerConstructorFilling {
  fill: TIngredients[];
  index: number;
  id: string;
}

const BurgerConstructorFilling: FC<IBurgerConstructorFilling> = (props) => {
  const { fill, index, id } = props;

  const dispatch = useDispatch();
  const ref = useRef(null);

  //хук для сортировки элекентов внутри конструктора
  const [{handlerId}, dropRef] = useDrop({
    accept: 'item',
    collect: (monitor) => {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: TIngredients, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      console.log(index)
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

      dispatch(moveConstructorItem(dragIndex, hoverIndex))

      item.index = hoverIndex
    },    
  });

  //хук для сортировки элекентов внутри конструктора
  const [{isDragging}, dragRef] = useDrag({
    type: 'item',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

 dragRef(dropRef(ref))
   
  return (
       
    <div ref={ref} data-handler-id={handlerId} className={ConstructorFillingStyles.constructor__element}>
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

BurgerConstructorFilling.propTypes = {
  fill: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default BurgerConstructorFilling;
