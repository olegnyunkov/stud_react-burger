import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from "react-dnd";
import PropTypes from 'prop-types';
import Constructor from './burger-constructor.module.css';
import { getOrder } from '../../utils/api';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerConstructor = (
  {
    orderIsOpened,
    modalOpened,
    setOrderIsOpened,
    setModalOpened,
    orderInfo,
    closeModal
  }) => {
  const dispatch = useDispatch();
  const {ingredients, isLoading, errorLoading} = useSelector(state => state.ingredients);

  const saveOrder = ingredients.map(item => {
    return item._id
  })

  const openOrderModal = () => {
    setOrderIsOpened(true);
    setModalOpened(true);
    dispatch(getOrder(saveOrder))
  }

  const totalPrice = useMemo(() => {
    return (
      (ingredients.bun ? ingredients.bun.price * 2 : 0) +
      ingredients.reduce((s, v) => s + v.price, 0)
    )
  }, [ingredients])

  return (
    <>
      <section className='pt-25 pl-4'>
        {
          ingredients.map((item) => {
            if (item.name === 'Краторная булка N-200i') {
              return (
                <div key={item._id} className='pl-8 mr-4 mb-4'>
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${item.name} ${'(верх)'}`}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </div>
              )
            }
          })
        }
        <div className={`${Constructor.constructor__elements} mb-4 pr-2`}>
          {
            ingredients.map((item) => {
              if (item.type === 'main' && 'sauce') {
                return (
                  <div key={item._id} className={Constructor.constructor__element}>
                    <div className='mr-2'>
                      <DragIcon type="primary"/>
                    </div>
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </div>
                )
              }
            })
          }
        </div>
        {
          ingredients.map((item) => {
            if (item.name === 'Краторная булка N-200i') {
              return (
                <div key={item._id} className='pl-8 mr-4 mb-4'>
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${item.name} ${'(низ)'}`}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </div>
              )
            }
          })}
        <div className={`${Constructor.constructor__total} mr-4`}>
          <div className={`${Constructor.constructor__price} mr-10`}>
            <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
            <CurrencyIcon/>
          </div>
          <Button type="primary" size="medium" onClick={openOrderModal}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {
        orderIsOpened && (
          <Modal
            closeModal={closeModal}
            title=''
            modalOpened={modalOpened}
          >
            <OrderDetails orderInfo={orderInfo}/>
          </Modal>
        )}
    </>
  )
}

BurgerConstructor.propTypes = {
  modalOpened: PropTypes.bool.isRequired,
  setModalOpened: PropTypes.func.isRequired,
  orderIsOpened: PropTypes.bool.isRequired,
  setOrderIsOpened: PropTypes.func.isRequired,
  orderInfo: PropTypes.object.isRequired,
  setOrderInfo: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default BurgerConstructor;
