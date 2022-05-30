import React, {useContext, useMemo} from 'react';
import Constructor from './burger-constructor.module.css';
import {IngredientsContext} from "../../services/ingredients-context";
import {sendOrder} from '../../utils/api'
import PropTypes from 'prop-types';
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = (
  {
    orderIsOpened,
    modalOpened,
    setOrderIsOpened,
    setModalOpened,
    orderInfo,
    setOrderInfo,
    closeModal
  }) => {
  const data = useContext(IngredientsContext);

  const saveOrder = data.map(item => {
    return item._id
  })

  const openOrderModal = () => {
    setOrderIsOpened(true);
    setModalOpened(true);
    sendOrder(saveOrder).then(res => setOrderInfo(res)).catch((res) => console.log(res))
  }

  const totalPrice = useMemo(() => {
    return (
      (data.bun ? data.bun.price * 2 : 0) +
      data.reduce((s, v) => s + v.price, 0)
    )
  }, [data])

  return (
    <>
      <section className='pt-25 pl-4'>
        {
          data.map((item) => {
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
            data.map((item) => {
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
          data.map((item) => {
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
