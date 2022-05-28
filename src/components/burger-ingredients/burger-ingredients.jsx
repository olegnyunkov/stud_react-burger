import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BurgerItem from '../burger-item/burger-item';
import Title from '../title/title';
import Tabs from '../tabs/tabs';
import Ingredients from './burger-ingredients.module.css';
import { IngredientsContext } from "../../services/ingredients-context";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = ({ openIngredientsModal, isOpened, closeModal, closeEscBtn, modalInfo }) => {
  const [data] = useContext(IngredientsContext);

  return (
    <>
    <section>
      <Title styles={'mt-10 mb-5 text text_type_main-large'} title='Соберите бургер'/>
      <Tabs/>
      <div className={Ingredients.ingredients__items}>
        <Title styles={'mt-10 text text_type_main-medium'} title='Булки'/>
        <div className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
          {data.map((item) => {
            if (item.type === 'bun') {
              return (
                <BurgerItem key={item._id} src={item.image} name={item.name} price={item.price}
                            openIngredientsModal={() => openIngredientsModal(item)}/>
              )
            }
          })}
        </div>
        <Title styles={'mb-6 text text_type_main-medium'} title='Соусы'/>
        <div className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
          {data.map((item) => {
            if (item.type === 'sauce') {
              return (
                <BurgerItem key={item._id} src={item.image} name={item.name} price={item.price}
                            openIngredientsModal={() => openIngredientsModal(item)}/>
              )
            }
          })}
        </div>
        <Title styles={'mb-6 text text_type_main-medium'} title='Начинки'/>
        <div className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
          {data.map((item) => {
            if (item.type === 'main') {
              return (
                <BurgerItem key={item._id} src={item.image} name={item.name} price={item.price}
                            openIngredientsModal={() => openIngredientsModal(item)}/>
              )
            }
          })}
        </div>
      </div>
    </section>
      {
        isOpened && (
          <Modal isOpened={isOpened} closeModal={closeModal} closeEscBtn={closeEscBtn} modalInfo={modalInfo}
                 title='Детали ингредиента'>
            <IngredientDetails modalInfo={modalInfo}/>
          </Modal>
        )}
      </>
  )
}

BurgerIngredients.propTypes = {
  openIngredientsModal: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeEscBtn: PropTypes.func.isRequired,
  modalInfo: PropTypes.object.isRequired
}

export default BurgerIngredients;