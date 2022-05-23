import React, {useContext} from 'react';
import Constructor from './burger-constructor.module.css';
import {IngredientsContext} from "../../services/ingredients-context";
import PropTypes from 'prop-types';
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerConstructor = ({ openOrderModal }) => {
  const [data] = useContext(IngredientsContext);

  return (
    <section className='pt-25 pl-4'>
      <div className='pl-8 mr-4 mb-4'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={1255}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
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
      <div className='pl-8 mb-10 mr-4'>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={1255}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
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
