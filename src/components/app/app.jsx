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

  const handleOpenModal = () => {
    setIsOpened(false)
  }

  const handleCloseModal = () => {
    setIsOpened(true)
  }

  useEffect(() => {
    api()
      .then((res) => {
        setData(res.data)
      })
  }, [])

  return (
    <>
      <AppHeader/>
      <div className={Main.main}>
        <BurgerIngredients data={data} handleOpenModal={handleOpenModal}/>
        <BurgerConstructor data={data}/>
      </div>
      <Modal isOpened={isOpened} handleCloseModal={handleCloseModal}/>
    </>
  );
}


export default App;