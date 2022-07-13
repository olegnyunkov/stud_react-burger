import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import Main from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {removeDetails} from "../../services/actions/ingredient-details-actions";
import {LoginPage} from '../../pages/login';
import {RegisterPage} from '../../pages/register';
import {ForgotPasswordPage} from '../../pages/forgot-password';
import {ResetPasswordPage} from '../../pages/reset-password';
import {ProfilePage} from '../../pages/profile';
import {getUserInfo} from "../../utils/api";
import { getCookie } from '../../utils/cookie';
import {ProtectedRoute} from "../protected-route/protected-route";
import {NotFoundPage} from "../../pages/not-found";
import {IngredientDetailsPage} from "../../pages/ingredient";

const App = () => {
  const dispatch = useDispatch();
  const [ingredientsIsOpened, setIngredientsIsOpened] = useState(false);
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const closeModal = () => {
    setIngredientsIsOpened(false)
    setOrderIsOpened(false)
    dispatch(removeDetails())
  }

  useEffect(() => {
    if(getCookie('accessToken')) {
      dispatch(getUserInfo())
  }
  }, [dispatch])

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

            <Route path='/login' exact>
              <LoginPage/>
            </Route>

            <Route path='/register' exact>
              <RegisterPage/>
            </Route>

            <Route path='/forgot-password' exact>
              <ForgotPasswordPage/>
            </Route>

            <Route path='/reset-password' exact>
              <ResetPasswordPage/>
            </Route>

            <Route path='/ingredients/:id' exact>
              <IngredientDetailsPage/>
            </Route>

            <ProtectedRoute path='/profile' children={<ProfilePage/>} />

            <Route>
              <NotFoundPage/>
            </Route>

          </Switch>
        </DndProvider>
      </BrowserRouter>
    </>
  )
    ;
}

export default App;