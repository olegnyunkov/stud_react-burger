import React from 'react';
import Ingredients from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import {
  Tab,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = (props) => {

  return (
    <section>
      <Title styles={'mt-10 mb-5 text text_type_main-large'} title='Соберите бургер'/>
      <Tabs/>
      <div className={Ingredients.ingredients__items}>
        <Title styles={'mt-10 text text_type_main-medium'} title='Булки'/>
        <div className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
          {props.data.map((item) => {
            if (item.type === 'bun') {
              return (
                <BurgerItem key={item._id} src={item.image} name={item.name} price={item.price} handleOpenModal={() => props.handleOpenModal(item)}/>
              )
            }
          })}
        </div>
        <Title styles={'mb-6 text text_type_main-medium'} title='Соусы'/>
        <div className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
          {props.data.map((item) => {
            if (item.type === 'sauce') {
              return (
                <BurgerItem key={item._id} src={item.image} name={item.name} price={item.price} handleOpenModal={() => props.handleOpenModal(item)}/>
              )
            }
          })}
        </div>
        <Title styles={'mb-6 text text_type_main-medium'} title='Начинки'/>
        <div className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
          {props.data.map((item) => {
            if (item.type === 'main') {
              return (
                <BurgerItem key={item._id} src={item.image} name={item.name} price={item.price} handleOpenModal={() => props.handleOpenModal(item)}/>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

const Title = (props) => {
  return (
    <p className={props.styles}>{props.title}</p>
  )
}

const BurgerImage = (props) => {
  return (
    <img src={props.src} alt={props.alt} className={props.styles}/>
  )
}

const BurgerPrice = (props) => {
  return (
    <div className={props.styles}>
      <p className="text text_type_digits-default mr-2">{props.price}</p>
      <CurrencyIcon type="primary"/>
    </div>
  )
}

const BurgerItem = (props) => {

  return (
    <div onClick={props.handleOpenModal}>
      <BurgerImage src={props.src} alt={props.name} styles={'ml-4 mr-4 mb-1'}/>
      <BurgerPrice price={props.price} styles={`${Ingredients.bun__price} mb-1`}/>
      <p className={`${Ingredients.bun__title} text text_type_main-default`}>{props.name}</p>
    </div>
  )
}

const Tabs = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div className={Ingredients.ingredients__tabs}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

Title.propTypes = {
  styles: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

BurgerImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired
}

BurgerPrice.propTypes = {
  styles: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default BurgerIngredients;