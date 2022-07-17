import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
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
import {getIngredients, getUserInfo} from "../../utils/api";
import {getCookie} from '../../utils/cookie';
import {ProtectedRoute} from "../protected-route/protected-route";
import {NotFoundPage} from "../../pages/not-found";
import {IngredientDetailsPage} from "../../pages/ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const App = () => {
  const dispatch = useDispatch();
  const [ingredientsIsOpened, setIngredientsIsOpened] = useState(false);
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background;

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  const closeModal = () => {
    setIngredientsIsOpened(false)
    setOrderIsOpened(false)
    dispatch(removeDetails())
  }

  const closeIngredientsModal = useCallback((url) => {
    history.push(url)
  }, [history])

  useEffect(() => {
    if (getCookie('accessToken')) {
      dispatch(getUserInfo())
    }
  }, [dispatch])

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <AppHeader/>
        <Switch location={background || location}>
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
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/register' component={RegisterPage}/>
          <Route exact path='/forgot-password' component={ForgotPasswordPage}/>
          <Route exact path='/reset-password' component={ResetPasswordPage}/>
          <Route path='/ingredients/:id' component={IngredientDetailsPage}/>
          <ProtectedRoute path='/profile' children={<ProfilePage/>}/>
          <Route component={NotFoundPage}/>
        </Switch>
        {background && (
          <Route
            path='/ingredients/:id'
            children={
              <Modal
                closeModal={() => {
                  closeIngredientsModal('/')
                }}
                title='Детали ингредиента'
                modalOpened={modalOpened}>
                <IngredientDetails/>
              </Modal>}/>
        )}
      </DndProvider>
    </>
  )
    ;
}

export default App;