import React, { useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Main from './app.module.css';
import {removeDetails} from "../../services/actions/actions";
import {useDispatch} from "react-redux";

const orderInitialState = {
  "name": "",
  "order": {
    "number": ""
  },
  "success": false
}

const App = () => {
  const dispatch = useDispatch();
  const [ingredientsIsOpened, setIngredientsIsOpened] = useState(false);
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false)
  const [orderInfo, setOrderInfo] = useState(orderInitialState);

  const closeModal = () => {
    setIngredientsIsOpened(false)
    setOrderIsOpened(false)
    dispatch(removeDetails())
  }

  return (
    <>
      <AppHeader/>
      <div className={Main.main}>
        <BurgerIngredients
          setIngredientsIsOpened={setIngredientsIsOpened}
          ingredientsIsOpened={ingredientsIsOpened}
          closeModal={closeModal}
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
        <BurgerConstructor
          orderIsOpened={orderIsOpened}
          setOrderIsOpened={setOrderIsOpened}
          setOrderInfo={setOrderInfo}
          closeModal={closeModal}
          orderInfo={orderInfo}
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
      </div>
    </>
  );
}

export default App;