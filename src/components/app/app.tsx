import React, {FC, useCallback, useEffect, useState} from 'react';
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
import {getIngredients} from "../../utils/api";
import {getCookie} from '../../utils/cookie';
import {ProtectedRoute} from "../protected-route/protected-route";
import {NotFoundPage} from "../../pages/not-found";
import {IngredientDetailsPage} from "../../pages/ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {FeedPage} from "../../pages/feed";
import {FeedDetailsPage} from "../../pages/feed-details-page";
import FeedDetails from "../feed-details/feed-details";
import {openModal} from "../../services/actions/modal-actions";
import {checkAuth} from "../../utils/utils";
import {ILocationState, useDispatch, useSelector} from "../../utils/types";

const App: FC = () => {
  const dispatch = useDispatch();
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const history = useHistory();
  const location = useLocation<ILocationState>();
  const background = location.state?.background;
  const ingredientsMatch = useRouteMatch('/ingredients/:id');
  const profileOrderMatch = useRouteMatch('/profile/orders/:id');
  const feedOrderMatch = useRouteMatch('/feed/:id')
  const accessToken = getCookie('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const {wsData} = useSelector(state => state.ws);
  
  useEffect(() => {
    dispatch(checkAuth(accessToken, refreshToken))
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  useEffect(() => {
    if(ingredientsMatch || profileOrderMatch || feedOrderMatch) {
      dispatch(openModal())
    }
  }, [ingredientsMatch])

  const closeModal = (): void => {
    setOrderIsOpened(false)
    dispatch(removeDetails())
  }

  const closeIngredientsModal = useCallback<(url: string)=>void>((url: string) => {
    history.push(url)
  }, [history])

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <AppHeader/>
        <Switch location={background || location}>
          <Route exact path='/'>
            <div className={Main.main}>
              <BurgerIngredients/>
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
          <Route exact path='/ingredients/:id' component={IngredientDetailsPage}/>
          <ProtectedRoute exact path='/profile' children={<ProfilePage/>}/>
          <ProtectedRoute exact path='/profile/orders' children={<ProfilePage/>}/>
          <ProtectedRoute exact path='/profile/orders/:id' children={<FeedDetailsPage/>}/>
          <Route exact path='/feed' component={FeedPage}/>
          <Route exact path='/feed/:id' component={FeedDetailsPage}/>
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
                title='Детали ингредиента'>
                <IngredientDetails/>
              </Modal>}/>
        )}
        {background && (
          <ProtectedRoute
            path='/profile/orders/:id'
            children={
              <Modal
                closeModal={() => {
                  closeIngredientsModal('/profile/orders')
                }}
                title=''>
                {wsData && <FeedDetails/>}
              </Modal>}/>
        )}
        {background && (
          <Route
            path='/feed/:id'
            children={
              <Modal
                closeModal={() => {
                  closeIngredientsModal('/feed')
                }}
                title=''>
                {wsData && <FeedDetails/>}
              </Modal>}/>
        )}
      </DndProvider>
    </>
  );
}

export default App;