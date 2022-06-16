import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Main from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {removeDetails} from "../../services/actions/actions";

const App = () => {
  const dispatch = useDispatch();
  const [ingredientsIsOpened, setIngredientsIsOpened] = useState(false);
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false)

  const closeModal = () => {
    setIngredientsIsOpened(false)
    setOrderIsOpened(false)
    dispatch(removeDetails())
  }

  return (
    <>
      <DndProvider backend={HTML5Backend}>
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
            closeModal={closeModal}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </DndProvider>
    </>
  );
}

export default App;