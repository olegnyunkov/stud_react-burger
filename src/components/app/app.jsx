import React, {useEffect, useState} from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Main from './app.module.css';
import {api} from '../../utils/api';
import Modal from "../modal/modal";

const App = () => {
  const [data, setData] = useState([]);
  const [isOpened, setIsOpened] = useState(true);
  const [modalInfo, setModalInfo] = useState([])

  const openIngredientsModal = (info) => {
    setIsOpened(false)
    setModalInfo(info)
  }

  const closeIngredientsModal = () => {
    setIsOpened(true)
  }

  const openOrderModal = () => {

  }

  useEffect(() => {
    api().then((res) => setData(res.data))
  }, [])

  return (
    <>
      <AppHeader/>
      <div className={Main.main}>
        <BurgerIngredients data={data} openIngredientsModal={openIngredientsModal}/>
        <BurgerConstructor data={data}/>
      </div>
      <Modal isOpened={isOpened} closeIngredientsModal={closeIngredientsModal} data={data} modalInfo={modalInfo}>
      </Modal>
      {/* <Modal>

      </Modal> */}
    </>
  );
}


export default App;