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
            <Route exact path='/'>
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
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} /> 
            <Route exact path='/forgot-password' component={ForgotPasswordPage} />
            <Route exact path='/reset-password' component={ResetPasswordPage} />
            <Route exact path='/ingredients/:id' component={IngredientDetailsPage} />
            <ProtectedRoute path='/profile' children={<ProfilePage/>} />
            <Route component={NotFoundPage} />
          </Switch>
        </DndProvider>
      </BrowserRouter>
    </>
  )
    ;
}

export default App;