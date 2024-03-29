import React, {Dispatch, FC, SetStateAction} from "react";
import {useHistory} from 'react-router-dom';
import { useDrop } from "react-dnd";
import {nanoid} from "nanoid";
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
} from "../../services/actions/constructor-actions";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {TIngredientsData, useDispatch, useSelector} from "../../utils/types";

interface IBurgerConstructor {
  orderIsOpened: boolean;
  modalOpened: boolean;
  setOrderIsOpened: Dispatch<SetStateAction<boolean>>;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
}

const BurgerConstructor: FC<IBurgerConstructor> = (props) => {
  const {
    orderIsOpened,
    modalOpened,
    setOrderIsOpened,
    setModalOpened,
    closeModal,
  } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { bun, filling } = useSelector((state) => state.construct);
  const {authorized} = useSelector(state => state.user);

  //хук для перемещения элемента из ингредиентов в конструктор
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: {item: TIngredientsData}) {
      const uId: string = nanoid()
      dispatch(addConstructorItem(item.item, uId));
    },
  });

  //получение массива id для формирования номера заказа
  const saveOrder = (bread: TIngredientsData, meat: TIngredientsData[]): string[] => {
    const fillingId = meat.map((item): string => item._id);
    return [bread._id, ...fillingId];
  };

  //открытие модалки заказа, получение номера заказа, сброс заказа
  const openOrderModal = (): void => {
    if(authorized) {
    setOrderIsOpened(true);
    setModalOpened(true);
    if(bun && filling.length) {
      dispatch(getOrder(saveOrder(bun, filling)));
      dispatch(resetConstructorItem());
    }} else {
      history.replace({
        pathname: '/login',
        state: {
          from: {
            pathname: '/',
          },
        },
      });
    }
  };

  //общая стоимость заказа
  const totalPrice = (): number => {
    const bunCost: number = bun ? bun.price * 2 : 0;
    const fillCost: number = filling.reduce((s, v) => s + v.price, 0);
    return fillCost + bunCost;
  };

  return (
    <>
      <section ref={dropTarget} className="pt-25 pl-4">
        {bun ? (
          <BurgerConstructorBun
            text={"(верх)"}
            bun={bun}
            type={"top"} />
        ) : (
          <BurgerConstructorEmpty
            text={"Перетащите булку"} />
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
                  key={fill.uId}
                  filling={filling}
                  fill={fill}
                  id={fill.uId}
                  index={index}
                />
              );
            })
          ) : (
            <BurgerConstructorEmpty
              text={"Перетащите начинку"} />
          )}
        </div>

        {bun ? (
          <BurgerConstructorBun
            text={"(низ)"}
            bun={bun}
            type={"bottom"} />
        ) : (
          <BurgerConstructorEmpty
            text={"Перетащите булку"} />
        )}

        <div className={`${Constructor.constructor__total} mr-4`}>
          <div className={`${Constructor.constructor__price} mr-10`}>
            <p className="text text_type_digits-medium mr-2">{totalPrice()}</p>
            <CurrencyIcon type={"primary"}/>
          </div>
          <Button
            type="primary"
            size="medium"
            name='Оформить заказ'
            children='Оформить заказ'
            onClick={openOrderModal}/>
        </div>
      </section>
       {orderIsOpened &&
        <Modal
          closeModal={closeModal}
          title="">
          <OrderDetails/>
        </Modal>
      }
    </>
  );
};

export default BurgerConstructor;
