import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Main from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { removeDetails } from "../../services/actions/actions";

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
        <DndProvider backend={HTML5Backend}>
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
        </DndProvider>
      </div>
    </>
  );
}

export default App;