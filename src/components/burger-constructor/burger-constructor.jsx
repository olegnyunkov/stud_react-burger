import React, { useContext } from 'react';
import Constructor from './burger-constructor.module.css';
import {IngredientsContext} from "../../services/ingredients-context";
import { orderApi } from '../../utils/api'
import PropTypes from 'prop-types';
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({ setOrderIsOpened, setOrderInfo }) => {
  const [data] = useContext(IngredientsContext);  

  const saveOrder = data.map(item => {return item._id})
  const openOrderModal = () => {
    setOrderIsOpened(true);
    orderApi(saveOrder).then(res => setOrderInfo(res)).catch((res) => console.log(res))
  }


  return (
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
            )}})
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
            )}})}
      <div className={`${Constructor.constructor__total} mr-4`}>
        <div className={`${Constructor.constructor__price} mr-10`}>
          <p className="text text_type_digits-medium mr-2">610</p>
          <CurrencyIcon/>
        </div>
        <Button type="primary" size="medium" onClick={openOrderModal}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

// BurgerConstructor.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object).isRequired
// }

export default BurgerConstructor;
