import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import BurgerItem from '../burger-item/burger-item';
import Title from '../title/title';
import Tabs from '../tabs/tabs';
import Ingredients from './burger-ingredients.module.css';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getIngredients } from "../../utils/api";

const BurgerIngredients = ({
    ingredientsIsOpened,
    modalOpened,
    setIngredientsIsOpened,
    setModalOpened,
    closeModal,
    modalInfo,
    setModalInfo
  }) => {

  const dispatch = useDispatch();
  const {ingredients, isLoading, errorLoading} = useSelector(state => state.ingredients);

  useEffect(() => {
    dispatch(getIngredients())
  }, []);

  const openIngredientsModal = (info) => {
    setIngredientsIsOpened(true);
    setModalOpened(true);
    setModalInfo(info)
  }

  if (errorLoading) {
    return <p>Произошла ошибка при получении данных</p>
  } else if (isLoading) {
    return <p>Загрузка...</p>
  } else {
    return (
      <>
        <section>
          <Title styles={'mt-10 mb-5 text text_type_main-large'} title='Соберите бургер'/>
          <Tabs/>
          <div className={Ingredients.ingredients__items}>
            <Title styles={'mt-10 text text_type_main-medium'} title='Булки'/>
            <div className={`${Ingredients.buns} pt-6 pl-4 pb-10 pr-4`}>
              {ingredients.map((item) => {
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
              {ingredients.map((item) => {
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
              {ingredients.map((item) => {
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
          ingredientsIsOpened && (
            <Modal
              closeModal={closeModal}
              modalInfo={modalInfo}
              title='Детали ингредиента'
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}>
              <IngredientDetails modalInfo={modalInfo}/>
            </Modal>
          )}
      </>
    )
  }
}

BurgerIngredients.propTypes = {
  ingredientsIsOpened: PropTypes.bool.isRequired,
  setIngredientsIsOpened: PropTypes.func.isRequired,
  modalOpened: PropTypes.bool.isRequired,
  setModalOpened: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalInfo: PropTypes.object.isRequired,
  setModalInfo: PropTypes.func.isRequired,
}

export default BurgerIngredients;