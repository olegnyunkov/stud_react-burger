import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import Constructor from "./burger-constructor.module.css";
import { getOrder } from "../../utils/api";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import BurgerConstructorBun from "./burger-constructor-bun";
import BurgerConstructorFilling from "./burger-constructor-filling";
import BurgerConstructorEmpty from "./burger-constructor-empty";
import {
  addConstructorItem,
  resetConstructorItem,
} from "../../services/actions/actions";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({
  orderIsOpened,
  modalOpened,
  setOrderIsOpened,
  setModalOpened,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const { bun, filling } = useSelector((state) => state.construct);

  //хук для перемещения элемента из ингредиентов в конструктор
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addConstructorItem(item));
    },
  });

  //получение массива id для формирования номера заказа
  const saveOrder = (bread, meat) => {
    const fillingId = meat.map((item) => item._id);
    return [bread._id, ...fillingId];
  };

  //открытие модалки заказа, получение номера заказа, сброс заказа
  const openOrderModal = () => {
    setOrderIsOpened(true);
    setModalOpened(true);
    dispatch(getOrder(saveOrder(bun, filling)));
    dispatch(resetConstructorItem());
  };

  //общая стоимость заказа
  const totalPrice = () => {
    const bunCost = bun ? bun.price * 2 : 0;
    const fillCost = filling.reduce((s, v) => s + v.price, 0);
    return fillCost + bunCost;
  };

  return (
    <>
      <section ref={dropTarget} className="pt-25 pl-4">
        {bun ? (
          <BurgerConstructorBun text={"(верх)"} bun={bun} type={"top"} />
        ) : (
          <BurgerConstructorEmpty text={"Перетащите булку"} />
        )}

        <div
          className={
            filling.length
              ? `${Constructor.constructor__elements} mb-4 pr-2`
              : `${Constructor.constructor__elements_empty}`
          }
        >
          {filling.length ? (
            filling.map((fill, index) => {
              return (
                <BurgerConstructorFilling
                  key={nanoid()}
                  filling={filling}
                  fill={fill}
                  id={fill._id}
                  index={index}
                />
              );
            })
          ) : (
            <BurgerConstructorEmpty text={"Перетащите начинку"} />
          )}
        </div>

        {bun ? (
          <BurgerConstructorBun text={"(низ)"} bun={bun} type={"bottom"} />
        ) : (
          <BurgerConstructorEmpty text={"Перетащите булку"} />
        )}

        <div className={`${Constructor.constructor__total} mr-4`}>
          <div className={`${Constructor.constructor__price} mr-10`}>
            <p className="text text_type_digits-medium mr-2">{totalPrice()}</p>
            <CurrencyIcon />
          </div>
          <Button type="primary" size="medium" onClick={openOrderModal}>
            Оформить заказ
          </Button>
        </div>
      </section>
      { orderIsOpened && (
        <Modal closeModal={closeModal} title="" modalOpened={modalOpened}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

BurgerConstructor.propTypes = {
  modalOpened: PropTypes.bool.isRequired,
  setModalOpened: PropTypes.func.isRequired,
  orderIsOpened: PropTypes.bool.isRequired,
  setOrderIsOpened: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default BurgerConstructor;
