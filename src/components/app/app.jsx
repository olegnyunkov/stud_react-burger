import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Route, Switch, useHistory, useLocation, useRouteMatch} from "react-router-dom";
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
import {getIngredients, getUserInfo, sendRefreshTokenInfo} from "../../utils/api";
import {getCookie} from '../../utils/cookie';
import {ProtectedRoute} from "../protected-route/protected-route";
import {NotFoundPage} from "../../pages/not-found";
import {IngredientDetailsPage} from "../../pages/ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {FeedPage} from "../../pages/feed";
import {FeedDetailsPage} from "../../pages/feed-details";

const App = () => {
  const dispatch = useDispatch();
  const [ingredientsIsOpened, setIngredientsIsOpened] = useState(false);
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background;
  const match = useRouteMatch('/ingredients/:id');
  const accessToken = getCookie('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  
  useEffect(() => {
    if (accessToken) {
      dispatch(getUserInfo())
    } else if (!accessToken && refreshToken) {
      dispatch(sendRefreshTokenInfo(refreshToken))
    } else {
      return
    };

    if(match) {
      setModalOpened(true)
    }
  }, [dispatch, match]);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  const closeModal = () => {
    setIngredientsIsOpened(false)
    setOrderIsOpened(false)
    dispatch(removeDetails())
  }

  const closeIngredientsModal = useCallback((url) => {
    history.push(url)
  }, [history])

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
          {/*<ProtectedRoute path='/profile/orders' children={<ProfilePage/>}/>*/}
          <Route exact path='/feed' component={FeedPage}/>
          <Route path='/feed/:id' component={FeedDetailsPage}/>
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