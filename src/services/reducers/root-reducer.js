import { combineReducers } from "redux";
import {ingredientsReducer} from './ingredients-reducer';
import {ingredientDetailsReducer} from './ingredient-details-reducer';
import {constructorReducer} from './constructor-reducer';
import {orderReducer} from './order-reducer';
import { userReducer } from "./user-reducer";
import {wsReducer} from "./ws-reducer";
import { modalReducer } from "./modal-reducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  details: ingredientDetailsReducer,
  construct: constructorReducer,
  order: orderReducer,
  modal: modalReducer,
  user: userReducer,
  ws: wsReducer
})