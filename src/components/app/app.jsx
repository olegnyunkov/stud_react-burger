import React, {useEffect, useState} from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Main from './app.module.css';
import { api } from '../../utils/api';
import { IngredientsContext } from '../../services/ingredients-context';

const orderInitialState = {
  "name": "",
  "order": {
    "number": ""
  },
  "success": false
}

const App = () => {
  const [data, setData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [orderInfo, setOrderInfo] = useState(orderInitialState);
  
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
          <BurgerIngredients
            openIngredientsModal={openIngredientsModal}
            isOpened={isOpened}
            closeModal={closeModal}
            closeEscBtn={closeEscBtn}
            modalInfo={modalInfo}
          />
          <BurgerConstructor
            orderIsOpened={orderIsOpened}
            setOrderIsOpened={setOrderIsOpened}
            setOrderInfo={setOrderInfo}
            closeModal={closeModal}
            closeEscBtn={closeEscBtn}
            orderInfo={orderInfo}
          />
        </div>
      </IngredientsContext.Provider>
    </>
  );
}


export default App;