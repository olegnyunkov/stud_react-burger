import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {removeDetails} from "../../services/actions/actions";
import {LoginPage} from './../../pages/login';
import {RegisterPage} from './../../pages/register';
import {ForgotPasswordPage} from './../../pages/forgot-password';
import {ResetPasswordPage} from './../../pages/reset-password';


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
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <AppHeader/>
          <Switch>

            <Route path='/' exact={true}>
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
            </Route>

            <Route path='/login' exact={true}>
              <LoginPage/>
            </Route>

            <Route path='/register' exact={true}>
              <RegisterPage/>
            </Route>

            <Route path='/forgot-password' exact={true}>
              <ForgotPasswordPage/>
            </Route>

            <Route path='/reset-password' exact={true}>
              <ResetPasswordPage/>
            </Route>

          </Switch>
        </DndProvider>
      </BrowserRouter>
    </>
  )
    ;
}

export default App;