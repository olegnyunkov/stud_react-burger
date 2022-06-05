import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Main from './app.module.css';
import { getIngredients } from '../../utils/api';
import { IngredientsContext } from '../../services/ingredients-context';

const orderInitialState = {
  "name": "",
  "order": {
    "number": ""
  },
  "success": false
}

const App = () => {
  // const [data, setData] = useState([]);
  const [ingredientsIsOpened, setIngredientsIsOpened] = useState(false);
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false)
  const [modalInfo, setModalInfo] = useState({});
  const [orderInfo, setOrderInfo] = useState(orderInitialState);

  const closeModal = () => {
    setIngredientsIsOpened(false)
    setOrderIsOpened(false)
  }

  // useEffect(() => {
  //   getIngredients().then((res) => setData(res.data)).catch((res) => console.log(res))
  // }, [])


  return (
    <>
      {/*<IngredientsContext.Provider value={data}>*/}
        <AppHeader/>
        <div className={Main.main}>
          <BurgerIngredients
            setIngredientsIsOpened={setIngredientsIsOpened}
            ingredientsIsOpened={ingredientsIsOpened}
            closeModal={closeModal}
            modalInfo={modalInfo}
            setModalInfo={setModalInfo}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
          <BurgerConstructor
            setIngredientsIsOpened={setIngredientsIsOpened}
            orderIsOpened={orderIsOpened}
            setOrderIsOpened={setOrderIsOpened}
            setOrderInfo={setOrderInfo}
            closeModal={closeModal}
            orderInfo={orderInfo}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      {/*</IngredientsContext.Provider>*/}
    </>
  );
}


export default App;