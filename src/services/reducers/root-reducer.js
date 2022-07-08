import { combineReducers } from "redux";
import {ingredientsReducer} from './ingredients-reducer';
import {ingredientDetailsReducer} from './ingredient-details-reducer';
import {constructorReducer} from './constructor-reducer';
import {orderReducer} from './order-reducer';
import {registrationReducer} from "./registration-reducer";
import {loginReducer} from "./login-reducer";
import { userReducer } from "./user-reducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  details: ingredientDetailsReducer,
  construct: constructorReducer,
  order: orderReducer,
  registration: registrationReducer,
  login: loginReducer,
  user: userReducer
})