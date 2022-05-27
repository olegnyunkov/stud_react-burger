import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from "../order-details/order-details";
import Main from './app.module.css';
import { api } from '../../utils/api';
import {IngredientsContext} from '../../services/ingredients-context';
import Modal from "../modal/modal";

const App = () => {
  const [data, setData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  const [orderInfo, setOrderInfo] = useState(null);
  
  const openIngredientsModal = (info) => {
    setIsOpened(true)
    setModalInfo(info)
  }

  const closeModal = () => {
    setIsOpened(false)
    setOrderIsOpened(false)
  }  

  const closeEscBtn = (evt) => {
    evt.key === 'Escape' && closeModal()
  }

  useEffect(() => {
    api().then((res) => setData(res.data)).catch((res) => console.log(res))
  }, [])

  

  return (
    <>
      <IngredientsContext.Provider value={[data]}>
        <AppHeader/>
        <div className={Main.main}>
          <BurgerIngredients openIngredientsModal={openIngredientsModal}/>
          <BurgerConstructor setOrderIsOpened={setOrderIsOpened} setOrderInfo={setOrderInfo}/>
        </div>
        {
          isOpened && (
            <Modal isOpened={isOpened} closeModal={closeModal} closeEscBtn={closeEscBtn} modalInfo={modalInfo}
                   title='Детали ингредиента'>
              <IngredientDetails modalInfo={modalInfo}/>
            </Modal>
          )}
        {
          orderIsOpened && (
            <Modal orderIsOpened={orderIsOpened} closeModal={closeModal} closeEscBtn={closeEscBtn} title=''>
              <OrderDetails orderInfo={orderInfo}/>
            </Modal>
          )}
      </IngredientsContext.Provider>
    </>
  );
}


export default App;