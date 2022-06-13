import React from 'react';
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

const BurgerConstructor = (
  {
    orderIsOpened,
    modalOpened,
    setOrderIsOpened,
    setModalOpened,
    closeModal
  }) => {
  const dispatch = useDispatch();
  const {bun, filling} = useSelector(state => state.construct);
  const [{isHover}, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      dispatch(addConstructorItem(item));
    }
  })

  const [{isDrag}, dragRef] = useDrag({
    type: "ingredient",
    item: {}
  });

  const saveOrder = (bread, meat) => {
    const fillingId = meat.map(item => item._id)
    return [bread._id, ...fillingId]
  }

  const openOrderModal = () => {
    setOrderIsOpened(true);
    setModalOpened(true);
    dispatch(getOrder(saveOrder(bun, filling)))
    dispatch(resetConstructorItem())
  }

  const totalPrice = () => {
    const bunCost = bun ? bun.price * 2 : 0;
    const fillCost = filling.reduce((s, v) => s + v.price, 0);
    return fillCost + bunCost
  }

  return (
    <>
      <section ref={dropTarget} className='pt-25 pl-4'>
        {
          bun ? <div key={nanoid()} className='pl-8 mr-4 mb-4'>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} ${'(верх)'}`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
            : <div
              className={`${Constructor.constructor__element_empty} pl-8 mr-4 mb-4 text text_type_main-default`}>Перетащите
              булку</div>
        }

        <div
          className={filling.length ? `${Constructor.constructor__elements} mb-4 pr-2` : `${Constructor.constructor__elements_empty}`}>
          {
            filling.length ? filling.map((fill, index) => {
                return (
                  <div key={nanoid()} id={fill._id} ref={dragRef} className={Constructor.constructor__element}>
                    <div className='mr-2'>
                      <DragIcon type="primary"/>
                    </div>
                    <ConstructorElement
                      text={fill.name}
                      price={fill.price}
                      thumbnail={fill.image}
                      handleClose={() => {
                        dispatch(deleteConstructorItem(index))
                      }}
                    />
                  </div>
                )
              })
              : <div
                className={`${Constructor.constructor__element_empty} pl-8 mr-4 mb-4 text text_type_main-default`}>Перетащите
                начинку</div>
          }
        </div>
        {
          bun ? <div key={nanoid()} className='pl-8 mr-4 mb-4'>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} ${'(низ)'}`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
            : <div
              className={`${Constructor.constructor__element_empty} pl-8 mr-4 mb-4 text text_type_main-default`}>Перетащите
              булку</div>
        }
        <div className={`${Constructor.constructor__total} mr-4`}>
          <div className={`${Constructor.constructor__price} mr-10`}>
            <p className="text text_type_digits-medium mr-2">{totalPrice()}</p>
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
            <OrderDetails/>
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
  closeModal: PropTypes.func.isRequired
}

export default BurgerConstructor;
