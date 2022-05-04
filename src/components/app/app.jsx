import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import main from './app.module.css';
import {data} from "../../utils/data";


function App() {
  return (
    <>
      <AppHeader />
      <div className={main.main}>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
      </div>
    </>
  );
}

export default App;
